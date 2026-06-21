export interface MCQQuestion {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
  };
  correctOption: 'A' | 'B' | 'C';
  explanation?: string;
}

export interface ExamPart {
  id: string;
  title: string;
  instructions: string;
  readingPassage?: {
    title: string;
    text: string;
  };
  questions: MCQQuestion[];
}

export interface WritingTask {
  id: string;
  title: string;
  prompt: string;
  instructions: string;
  minimumWords?: number;
  expectedSentences?: string; // e.g. "4-5 sentences"
}

export interface Exam {
  id: string;
  title: string;
  grade: string;
  term: string;
  year: string;
  status: 'active' | 'upcoming';
  parts: ExamPart[];
  writing: WritingTask[];
}

export interface EvaluationCriteria {
  score: number; // out of 10 or 5 or overall
  feedback: string;
  strengths: string[];
  weaknesses: string[];
}

export interface AISubmissionResult {
  score: number; // Total grade out of 30
  summaryFeedback: {
    score: number; // out of 10
    criteriaBreakdown: {
      synthesis: string; // Summary of content processing
      structure: string; // 4-5 sentences, structure
      language: string;  // accuracy & range
    };
    feedbackText: string;
    strengths: string[];
    weaknesses: string[];
  };
  essayFeedback: {
    score: number; // out of 20
    criteriaBreakdown: {
      ideasDevelopment: string; // Clear opinions, supported, length
      structureOrganization: string; // Extended, opinion essay format, paragraphs
      languageRangeAccuracy: string; // Advanced vocabulary, linguistic control, 220 words target
    };
    feedbackText: string;
    strengths: string[];
    weaknesses: string[];
  };
  overallFeedback: string;
  improvementTips: string[];
}
