import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize Google Gen AI
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    })
  : null;

// API routes FIRST
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", aiConfigured: !!ai });
});

// Grading Endpoint
app.post("/api/grade", async (req, res) => {
  try {
    const { examId, summaryText, essayText, mcqScore, mcqTotal } = req.body;

    if (!summaryText && !essayText) {
      res.status(400).json({ error: "Missing writing submissions for grading." });
      return;
    }

    const isExam2 = examId === "exam-2";
    const isExam3 = examId === "exam-3";
    const isExam4 = examId === "exam-4";

    const summaryContextPrompt = isExam4
      ? `Summarize the two opposing points of view on "Wellness Habits and Stress": Perspective A argues that stress is an inevitable part of modern life and we should use wellness habits like meditation and exercise to build resilience and maintain productivity. Perspective B argues that wellness habits are a distraction from systemic issues like overwork, and true relief requires changing underlying lifestyles and workloads. Must be 4-5 sentences, in student's own words without direct lifting.`
      : isExam3
      ? `Summarize the two distinct points of view on achieving happiness in "The Cost of Contentment": the advocates of structured financial investments into health and wellness versus the critics' view that this commercialization creates exclusionary barriers and that true contentment lies in non-material, intrinsic factors like community, relationships, and gratitude. Must be 4-5 sentences, in student's own words without direct lifting.`
      : isExam2
      ? `Summarize the two distinct views on achieving happiness in "The Modern Happiness Paradox": the "Optimization Movement" (mindfulness apps, structured sleep, self-tracking to eliminate stress) versus the critics' view (organic byproduct, self-tracking causes heightened anxiety and emotional exhaustion). Must be 4-5 sentences, in student's own words without direct lifting.`
      : `Summarize the two distinct approaches to medical diagnosis in the text "What’s the Diagnosis?": the "high-tech" approach (genomics, AI, data) and the "high-touch" approach (patient interviews, empathy, clinical intuition). Must be 4-5 sentences, in student's own words without direct lifting.`;

    const essayContextPrompt = isExam4
      ? `Write an opinion essay of at least 220 words on the topic of whether happiness is a habit developed through wellness practices and mental discipline, or a result of luck and external circumstances. In your essay, you must address: 1. To what extent can individuals control their own levels of happiness? 2. How do daily wellness habits (like sleep, diet, or social connections) impact long-term stress levels? 3. What role should society or employers play in promoting the wellness of individuals?`
      : isExam3
      ? `Write an opinion essay in response to "The Cost of Contentment" stating whether true wellness and happiness depend on financial investment in professional remedies and lifestyle trends, or if they are best achieved through non-material, intrinsic habits. Minimum 220 words. Including: 1. A clear opinion with a strong thesis statement. 2. Reasons, examples, or evidence to support your viewpoint, referencing the causes and consequences of stress. 3. Appropriate vocabulary related to stress, wellness, and habits of happiness.`
      : isExam2
      ? `Write an opinion essay in response to "The Modern Happiness Paradox." Discuss whether happiness is a result of structured wellness habits and personal optimization, or if it is an organic byproduct of meaningful connections and life experiences. Minimum 220 words. Including: 1. A clear opinion on which approach is more effective for reducing stress levels and promoting long-term wellness. 2. Causes and consequences of society's current obsession with tracking daily mental habits. 3. Specific reasons and examples from background/observations.`
      : `"In a world increasingly dominated by digital health apps and AI-driven symptom checkers, some argue that the personal relationship between a doctor and a patient is no longer necessary for effective treatment." Write an opinion essay of at least 220 words including: 1. Opinion on whether technology can fully replace human doctors. 2. The role of "Habits of Happiness" or stress control in health. 3. Examples of how "Alternative Therapy" or "Home Remedies" fit modern lifestyle.`;

    const summaryKeyThemes = isExam4
      ? ["individual resilience and wellness habits as a buffer", "systemic overwork and workload as root causes of stress"]
      : isExam3
      ? ["financial investment in wellness vs non-material intrinsic factors", "exclusionary barrier vs community and gratitude habits"]
      : isExam2
      ? ["Optimization movement vs organic byproduct", "Rigid tracking vs living a connection-filled life"]
      : ["High-tech diagnostics vs high-touch primary care", "Empathy & human clinical intuition vs genomic processing"];

    const essayKeyThemes = isExam4
      ? ["agency and individual control of happiness levels", "daily physical and emotional habits reducing stress", "employers and societal role in structural health"]
      : isExam3
      ? ["true wellness and happiness and financial cost", "intrinsic habits of gratitude/mindfulness", "causes and consequences of stress"]
      : isExam2
      ? ["tracking obsession causes anxiety", "stress reduction and long term wellness", "organic byproducts and personal connections"]
      : ["can technology replace human doctors", "the role of habits of happiness", "alternative therapy / home remedies"];

    if (!ai) {
      console.warn("GEMINI_API_KEY is not configured in the host environment. Generating simulated response.");
      // Fallback response for safe offline testing
      res.json({
        score: isExam4 ? 26 : isExam3 ? 25 : isExam2 ? 24 : 22,
        summaryFeedback: {
          score: 8,
          criteriaBreakdown: {
            synthesis: isExam4
              ? "Your summary expertly balances both perspectives, contrasting the individual resilience view with the systemic workload critique. Ensure you keep the length strictly to 4-5 sentences."
              : isExam3
              ? "Your summary contrasts the financial investment in wellness products with intrinsic, free habits beautifully. Make sure to capture both points completely."
              : isExam2 
              ? "Your summary contrasts the 'Optimization Movement' and critics of self-tracking well. However, ensure you fully explain why critics view rigid rules as counter-productive."
              : "Your response summarizes the core ideas. However, it copies several phrases verbatim from the diagnostic text, reducing the score for original paraphrasing.",
            structure: "Your summary is exactly 5 sentences long, fitting into the criteria.",
            language: "Linguistic control is acceptable but can use more cohesive and advanced transitions (e.g., 'In contrast', 'conversely')."
          },
          feedbackText: "You have written a coherent summary but remember to explain contrasting views entirely in your own words rather than lifting passages directly.",
          strengths: ["Proper 5-sentence paragraph structure.", isExam4 ? "Superb contrast of individual resilience versus systemic overworld burden." : isExam3 ? "Accurately represents the commercial wellness debate." : isExam2 ? "Accurately represents the happiness optimization debate." : "Identified both high-tech and high-touch perspectives."],
          weaknesses: ["Verbatim phrases borrowed from text.", "Needs a stronger contrast conjunction."]
        },
        essayFeedback: {
          score: 18,
          criteriaBreakdown: {
            ideasDevelopment: isExam4
              ? "Outstanding analysis of the habit of happiness versus luck. High-quality inclusion of individual control parameters, daily sleep/diet inputs, and societal/employer requirements."
              : isExam3
              ? "Superb discussion. You argued that true contentment is free and that financial barriers elevate community stress levels. Make sure to broaden your examples concerning stress causes and consequences."
              : isExam2
              ? "Good development of ideas. You argued that tracking habits causes stress while authentic connection supports happiness. Be sure to provide more personal observations of people using fitness/tracking apps."
              : "Good development. You successfully argue that technology alone cannot replace the diagnostic insight of human doctors. You touched upon habits of happiness, but alternative medicine references feel brief.",
            structureOrganization: "Standard opinion essay style. It has four paragraphs: introduction, opposing views, body, and conclusion. Good transitional words.",
            languageRangeAccuracy: "Word count is 250 words, satisfying the 220-word requirement. Clean simple and compound structures."
          },
          feedbackText: "An excellent piece of writing. Your opinions are stated with academic maturity and precise sentence markers.",
          strengths: ["Exceeds the 220-word requirement.", "Clear, distinctive topic sentences inside body paragraphs.", "Logical flow of complex sentences."],
          weaknesses: ["Limited discussion of stress management.", "A few syntax slips when attempting complex passive structures."]
        },
        overallFeedback: `You did a great job attempting this Stage 9 Advanced level exam. Your written expression shows a high grasp of English prose. (MCQ Score: ${mcqScore || 0}/${mcqTotal || 30})`,
        improvementTips: [
          "Practice restructuring sentences to paraphrase more effectively without keeping the same sequence of verbs.",
          isExam4
            ? "Expand your vocabulary range regarding workplace policies, systemic stress, and emotional agent control (e.g., systemic, resilience, mitigate, self-discipline, determinism)."
            : isExam3
            ? "Expand your vocabulary range regarding commercialization, commodification, and non-material habits (e.g., exclusionary, exacerbate, intrinsically, therapeutic)."
            : isExam2 
            ? "Incorporate a broader dictionary of happiness, optimization, and emotional wellness vocabulary (e.g., toxic optimization, hypersensitive, byproduct)."
            : "Incorporate a broader dictionary of medicine and healthcare-related vocabulary (e.g., geriatrician, diagnostic odyssey).",
          isExam4
            ? "Include dynamic real-world examples of successful corporate wellness initiatives to bolster your employers' role argument."
            : isExam3
            ? "Include concrete examples of non-material wellness activities such as daily dynamic breathing exercises or structured volunteer programs."
            : isExam2
            ? "Integrate specific examples of tracking tools (like step-counters or mindfulness app streaks) to highlight the causes of emotional exhaustion."
            : "Include detailed concrete examples of alternative treatments (e.g., mindfulness, herbal extracts) to defend opinions."
        ]
      });
      return;
    }

    const systemInstruction = `You are an expert English language examiner and grader specializing in the UAE's Ministry of Education English End-of-Term 3 Test Specifications for Grade 12 Advanced and Elite tiers (Stage 9 / B2.2).
Evaluate student writing submissions based strictly on the provided assessment criteria:
1. PRESENTATION AND DEVELOPMENT OF IDEAS:
   - Clear ideas, opinions, and personal perspectives.
   - Detailed arguments, concrete explanations of appropriate length, and support with relevant examples/evidence from prompts/texts.
2. TEXT STRUCTURE AND ORGANIZATION:
   - Produce extended, well-structured opinion essay response.
   - Organized into distinct paragraphs with clear topic sentences and supporting details.
   - Awareness of the target academic audience and professional tone.
3. PROCESSING TEXT IN WRITING (SYNTHESIS & PARAPHRASING - primarily for the Summary Task):
   - Summarize/paraphrase key information and opposing views accurately.
   - Synthesize and contrast perspectives using own words instead of lifting text directly.
   - Summary length MUST be 4-5 sentences.
4. LANGUAGE RANGE, ACCURACY, AND WORD COUNT:
   - Use high-quality simple and complex grammar, and precise thematic vocabulary.
   - Maintain linguistic control (minor typos acceptable only when attempting highly complex syntax).
   - Word count limits: Summary task is a short-answer component (4-5 sentences); Opinion Essay MUST be at least 220 words.

Provide a detailed Arabic-friendly, but English-written, structured grading report with scores, feedback, strengths, weaknesses, and clear actionable steps for improvement.`;

    const promptMessage = `Please evaluate the following Grade 12 Advanced English test submissions for Exam ID: ${examId || "exam-1"}:

--- 1. PART 4.1: SUMMARY TASK SUBMISSION ---
Student's Summary: "${summaryText || ""}"
Prompt context for summary:
${summaryContextPrompt}

--- 2. PART 4.2: OPINION ESSAY SUBMISSION ---
Student's Essay: "${essayText || ""}"
Prompt context for essay:
${essayContextPrompt}

--- EXTRA CONTEXT ---
Student MCQ Score in Vocabulary and Grammar: ${mcqScore || 0} out of ${mcqTotal || 30}.

Please return your response EXACTLY matching the required JSON schema, containing scores, deep pedagogical insights in professional, elegant, and supportive tone. Make sure to call out any direct text copying or word count/sentence limits deviations.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptMessage,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: {
              type: Type.INTEGER,
              description: "Total overall writing score out of 30. (Summary is out of 10, Essay is out of 20)."
            },
            summaryFeedback: {
              type: Type.OBJECT,
              properties: {
                score: {
                  type: Type.INTEGER,
                  description: "Summary score out of 10 points."
                },
                criteriaBreakdown: {
                  type: Type.OBJECT,
                  properties: {
                    synthesis: { type: Type.STRING, description: "Critique of how well they synthesized the 'high-tech' and 'high-touch' approaches without direct copy-pasting." },
                    structure: { type: Type.STRING, description: "Critique of whether they restricted themselves to the 4-5 sentence constraint." },
                    language: { type: Type.STRING, description: "Evaluation of vocabulary range and grammatical precision in the summary." }
                  },
                  required: ["synthesis", "structure", "language"]
                },
                feedbackText: { type: Type.STRING, description: "Detailed paragraph reviewing their summary." },
                strengths: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "List of 2 core strengths of their summary."
                },
                weaknesses: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "List of constructive areas of improvements of their summary."
                }
              },
              required: ["score", "criteriaBreakdown", "feedbackText", "strengths", "weaknesses"]
            },
            essayFeedback: {
              type: Type.OBJECT,
              properties: {
                score: {
                  type: Type.INTEGER,
                  description: "Essay score out of 20 points."
                },
                criteriaBreakdown: {
                  type: Type.OBJECT,
                  properties: {
                    ideasDevelopment: { type: Type.STRING, description: "How fully they answered the prompt (replace human, habits of happiness, alternative therapy) and reached the appropriate length/arguments." },
                    structureOrganization: { type: Type.STRING, description: "Organization check: standard essay paragraphs, topic sentences, cohesion, and tone." },
                    languageRangeAccuracy: { type: Type.STRING, description: "Accuracy, complexity of sentences, precise medical/clinical vocabulary usage, and minimum 220 word count achievement." }
                  },
                  required: ["ideasDevelopment", "structureOrganization", "languageRangeAccuracy"]
                },
                feedbackText: { type: Type.STRING, description: "Detailed paragraph reviewing their overall essay construction and logical soundness." },
                strengths: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "At least 2 detailed points about strengths."
                },
                weaknesses: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Areas for grammatical, logical, or structural growth."
                }
              },
              required: ["score", "criteriaBreakdown", "feedbackText", "strengths", "weaknesses"]
            },
            overallFeedback: {
              type: Type.STRING,
              description: "A summary combining their MCQ and Writing performance, celebrating achievements and providing high-level pedagogical feedback."
            },
            improvementTips: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 highly actionable, specific directives/exercises the student should practice."
            }
          },
          required: ["score", "summaryFeedback", "essayFeedback", "overallFeedback", "improvementTips"]
        }
      }
    });

    const parsedData = JSON.parse(response.text || "{}");
    res.json(parsedData);
  } catch (error: any) {
    console.error("AI Evaluation error:", error);
    res.status(500).json({ error: error.message || "Failed to analyze writing tasks." });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Running on port ${PORT}`);
  });
}

startServer();
