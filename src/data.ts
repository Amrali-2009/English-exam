import { Exam } from './types';

export const EXAMS: Exam[] = [
  {
    id: 'exam-1',
    title: 'English Grade 12 Advanced / Elite End-of-Term 3 Exam',
    grade: 'Grade 12 Advanced / Elite',
    term: 'Term 3',
    year: '2025-2026',
    status: 'active',
    parts: [
      {
        id: 'vocabulary',
        title: 'Part 1: Vocabulary',
        instructions: 'Choose the correct option (A, B, or C) to complete each sentence.',
        questions: [
          {
            id: 1,
            question: 'After months of campaigning for the new health policy, the senator had a sudden __________ and decided to vote against it, citing unforeseen economic concerns.',
            options: {
              A: 'change of heart',
              B: 'heart-to-heart talk',
              C: 'set of heart'
            },
            correctOption: 'A',
            explanation: '"change of heart" means a change in one\'s opinion, attitude, or feeling.'
          },
          {
            id: 2,
            question: 'The patient was referred to a(n) __________ because she had been experiencing persistent numbness in her lower limbs that suggested a nerve-related issue.',
            options: {
              A: 'osteopath',
              B: 'neurologist',
              C: 'geriatrician'
            },
            correctOption: 'B',
            explanation: 'A neurologist is a specialist in the anatomy, functions, and organic disorders of nerves and the nervous system.'
          },
          {
            id: 3,
            question: 'When the virus began to __________, health officials realized it was far more __________ than the previous year’s flu, spreading through simple surface contact.',
            options: {
              A: 'transmit / susceptible',
              B: 'mutate / unprecedented',
              C: 'circulate / contagious'
            },
            correctOption: 'C',
            explanation: '"circulate" means to spread or move around, and "contagious" refers to a disease spread by contact.'
          },
          {
            id: 4,
            question: 'The cardiologist explained that the left __________ of the heart must __________ powerfully to ensure oxygenated blood reaches the extremities.',
            options: {
              A: 'chamber / contract',
              B: 'muscle / vary',
              C: 'strip / pump'
            },
            correctOption: 'A',
            explanation: 'The heart is divided into chambers; the left chamber (ventricle) must contract to pump blood.'
          },
          {
            id: 5,
            question: 'Many patients choose __________ medicine, such as herbal teas, because they believe these __________ have fewer side effects than synthetic drugs.',
            options: {
              A: 'alternative / remedies',
              B: 'natural / vaccinations',
              C: 'soothing / treatments'
            },
            correctOption: 'A',
            explanation: '"alternative medicine" includes non-traditional therapies, and herbal teas are "remedies".'
          },
          {
            id: 6,
            question: 'The recent __________ of the hybrid virus was __________, as it combined genetic material from two different species for the first time in recorded history.',
            options: {
              A: 'strain / adventure-prone',
              B: 'outbreak / unprecedented',
              C: 'mutation / hollow'
            },
            correctOption: 'B',
            explanation: 'An "outbreak" refers to a sudden occurrence of a disease, and "unprecedented" means never done or known before.'
          },
          {
            id: 7,
            question: 'If you are __________ to respiratory infections, you should seek a(n) __________ to help manage your long-term lung health.',
            options: {
              A: 'susceptible / therapist',
              B: 'allergic / pediatrician',
              C: 'prone / pharmacist'
            },
            correctOption: 'A',
            explanation: '"susceptible" means likely to be influenced or harmed by a particular thing, and a respiratory "therapist" manages lung health.'
          }
        ]
      },
      {
        id: 'grammar',
        title: 'Part 2: Grammar',
        instructions: 'Read the text "Fun? It’ll Cost Ya" and choose the correct option (A, B, or C) for each gap.',
        questions: [
          {
            id: 8,
            question: 'In the modern world, the pursuit of happiness is (8) __________ it used to be.',
            options: {
              A: 'much more expensive than',
              B: 'as expensive than',
              C: 'the most expensive'
            },
            correctOption: 'A',
            explanation: 'Comparatives use "more [adjective] than" structure.'
          },
          {
            id: 9,
            question: 'Recent studies suggest that people (9) __________ spend a significant portion of their income on leisure activities report higher stress levels.',
            options: {
              A: 'which',
              B: 'who',
              C: 'whom'
            },
            correctOption: 'B',
            explanation: '"who" is the correct relative pronoun to refer to people as the subject.'
          },
          {
            id: 10,
            question: 'Experts (10) __________ that the pressure to have "the perfect experience" often ruins the actual event.',
            options: {
              A: 'reported that prices rose',
              B: 'reported that prices are rising',
              C: 'reported that prices had risen'
            },
            correctOption: 'C',
            explanation: 'In reported speech, we backshift to the Past Perfect ("had risen") when reporting historically relevant prior changes.'
          },
          {
            id: 11,
            question: 'By the end of this decade, we (11) __________ more on subscription services and digital entertainment than on physical healthcare.',
            options: {
              A: 'will have been spending',
              B: 'will be spending',
              C: 'have spent'
            },
            correctOption: 'A',
            explanation: 'Future Perfect Continuous ("will have been spending") is used to project ourselves forward in time and look back at the duration of an activity.'
          },
          {
            id: 12,
            question: 'However, solutions (12) __________ if we are to avoid a mental health crisis.',
            options: {
              A: 'might be found',
              B: 'might find',
              C: 'might be find'
            },
            correctOption: 'A',
            explanation: '"might be found" is the correct modal passive construction (modal + be + past participle).'
          },
          {
            id: 13,
            question: 'Some psychologists suggest that the costs (13) __________ by the government to allow for more public spaces.',
            options: {
              A: 'should be subsidized',
              B: 'should subsidize',
              C: 'must subsidize'
            },
            correctOption: 'A',
            explanation: '"should be subsidized" is the correct modal passive construction for recommendation.'
          },
          {
            id: 14,
            question: 'If we don\'t change our habits, it (14) __________ impossible to find affordable ways to relax in the future.',
            options: {
              A: 'may be',
              B: 'would be',
              C: 'is being'
            },
            correctOption: 'A',
            explanation: '"may be" is the appropriate modal of future possibility in a first conditional setup.'
          }
        ]
      },
      {
        id: 'reading-3a',
        title: 'Part 3A: Reading (At Grade Level Goal)',
        instructions: 'Read the text and choose the correct answer (A, B, or C).',
        readingPassage: {
          title: 'Delicious Food, Deadly Stoves',
          text: `For nearly three billion people across the globe, the simple act of preparing a meal is a life-threatening endeavor. Traditional cookstoves, which rely on "dirty" fuels like wood, charcoal, and animal waste, release a constant stream of toxic smoke into small, poorly ventilated homes. This indoor air pollution is responsible for millions of premature deaths annually, primarily affecting women and children who spend the most time near the hearth.

While the flavors produced by open-fire cooking are often central to cultural identity, the cost to public health is staggering. The soot particles, known as black carbon, are small enough to penetrate deep into the lungs and enter the bloodstream, leading to chronic cardiac conditions and severe respiratory infections. Furthermore, the environmental impact is twofold: the demand for wood fuel contributes to local deforestation, and the resulting smoke is a potent driver of regional climate change.

Transitioning to "clean" cooking solutions—such as ethanol, liquid petroleum gas (LPG), or high-efficiency electric stoves—is not merely a matter of technology; it is a matter of social justice. Many families remain trapped in a cycle of "energy poverty," unable to afford the initial investment for a modern stove despite the long-term savings in health and fuel costs. International initiatives have attempted to distribute cleaner stoves, but success has been mixed. In many cases, the new stoves did not accommodate the large pots required for traditional recipes, or the fuel supply was unreliable.

To truly solve the deadly stove crisis, global leaders must view clean cooking as a fundamental human right. It requires a nuanced approach that respects culinary traditions while providing the infrastructure necessary for a smoke-free future. Only then can the world’s most vulnerable populations enjoy the comfort of a home-cooked meal without the shadow of a hidden killer.`
        },
        questions: [
          {
            id: 15,
            question: '(Specific Information) What is the primary cause of indoor air pollution mentioned in the text?',
            options: {
              A: 'Poor ventilation in modern housing.',
              B: 'The use of wood, charcoal, and animal waste for cooking.',
              C: 'The large size of traditional cooking pots.'
            },
            correctOption: 'B'
          },
          {
            id: 16,
            question: '(Specific Information) According to the text, who is most affected by the health risks of traditional stoves?',
            options: {
              A: 'International health workers.',
              B: 'Global leaders in developing nations.',
              C: 'Women and children.'
            },
            correctOption: 'C'
          },
          {
            id: 17,
            question: '(Details) Why are soot particles particularly dangerous to the human body?',
            options: {
              A: 'They cause immediate allergic reactions on the skin.',
              B: 'They are small enough to enter the bloodstream and lungs.',
              C: 'They destroy the flavor and nutritional value of food.'
            },
            correctOption: 'B'
          },
          {
            id: 18,
            question: '(Details) What is one environmental consequence of using traditional cookstoves?',
            options: {
              A: 'An increase in ethanol production.',
              B: 'Local deforestation due to fuel demands.',
              C: 'Overpopulation in rural areas.'
            },
            correctOption: 'B'
          },
          {
            id: 19,
            question: '(Inference) Why have some international initiatives to distribute clean stoves failed?',
            options: {
              A: 'The stoves were too heavy for women to use.',
              B: 'The stoves were incompatible with traditional cooking methods or fuel needs.',
              C: 'Families preferred the smell of toxic smoke over clean air.'
            },
            correctOption: 'B'
          },
          {
            id: 20,
            question: '(Inference) The term "energy poverty" implies that:',
            options: {
              A: 'Families lack the financial means to access safer energy technology.',
              B: 'There is a global shortage of electricity and liquid gas.',
              C: 'People are unwilling to learn how to use modern appliances.'
            },
            correctOption: 'A'
          },
          {
            id: 21,
            question: '(Mood and Tone) Which word best describes the author\'s tone in the final paragraph?',
            options: {
              A: 'Indifferent',
              B: 'Urgent',
              C: 'Skeptical'
            },
            correctOption: 'B'
          },
          {
            id: 22,
            question: '(Overall Meaning) What is the main message of the article?',
            options: {
              A: 'Traditional recipes must be abandoned to save the environment.',
              B: 'Modern stoves are too expensive for the average person to ever afford.',
              C: 'Replacing deadly cookstoves requires a combination of technology, funding, and cultural respect.'
            },
            correctOption: 'C'
          }
        ]
      },
      {
        id: 'reading-3b',
        title: 'Part 3B: Reading (Beyond Grade Level Goal)',
        instructions: 'Read the text and choose the correct answer (A, B, or C).',
        readingPassage: {
          title: 'What’s the Diagnosis?',
          text: `In the realm of modern medicine, the path from symptom to solution is rarely a straight line. For patients with "orphan diseases"—conditions so rare they affect fewer than 200,000 people—the diagnostic journey can span years, often involving a frustrating carousel of specialists, misdiagnoses, and ineffective treatments. The psychological toll on these individuals is as profound as the physical one, as they struggle to find validation in a system designed for the majority.

The advent of genomic sequencing has revolutionized this process, allowing neurologists and geneticists to peer into a patient’s DNA to find the "glitch" responsible for their ailments. Yet, technology alone is not a panacea. A diagnosis is only as good as the clinician’s ability to interpret it. This is where the "diagnostic odyssey" often stalls. A pharmacist might recognize a rare drug interaction, or a pediatrician might notice a subtle developmental delay, but without a centralized system to connect these observations, the big picture remains obscured.

Medical schools are increasingly emphasizing "the art of the interview." While an anesthesiologist or a dermatologist relies heavily on visual and physiological data, a primary care physician must master the heart-to-heart talk. Listening to a patient’s narrative can reveal symptoms that a blood test might miss—such as the subtle fatigue that precedes a cardiac event or the environmental triggers of an autoimmune flare-up.

The future of diagnosis lies in the integration of Artificial Intelligence (AI) with human intuition. AI can analyze millions of medical journals in seconds to suggest a rare mutation, but it lacks the empathy to help a patient navigate the side effects of a radical new treatment. As we move forward, the challenge will be ensuring that the "high-tech" approach does not replace the "high-touch" care that remains the heartbeat of effective medicine.`
        },
        questions: [
          {
            id: 23,
            question: '(Specific Information) How many people must a disease affect to be classified as an "orphan disease"?',
            options: {
              A: 'More than 200,000.',
              B: 'Fewer than 200,000.',
              C: 'Exactly 200,000.'
            },
            correctOption: 'B'
          },
          {
            id: 24,
            question: '(Details) What is a major limitation of genomic sequencing mentioned in the text?',
            options: {
              A: 'It is only useful for dermatologists.',
              B: 'It cannot be performed on older patients.',
              C: 'Its results require expert interpretation to be useful.'
            },
            correctOption: 'C'
          },
          {
            id: 25,
            question: '(Details) According to the text, what can a "heart-to-heart talk" reveal that tests might miss?',
            options: {
              A: 'Rare genetic glitches in the DNA.',
              B: 'Subtle symptoms and environmental triggers.',
              C: 'The exact cost of medical insurance.'
            },
            correctOption: 'B'
          },
          {
            id: 26,
            question: '(Inference) What does the author mean by the "diagnostic odyssey"?',
            options: {
              A: 'A short trip to a local pharmacy for medication.',
              B: 'The long and difficult process of identifying a rare medical condition.',
              C: 'A specialized training program for medical students.'
            },
            correctOption: 'B'
          },
          {
            id: 27,
            question: '(Inference) What is the primary role of AI in the future of medicine according to the author?',
            options: {
              A: 'To replace the need for primary care physicians entirely.',
              B: 'To provide emotional support and empathy to suffering patients.',
              C: 'To quickly synthesize vast amounts of data to identify possibilities.'
            },
            correctOption: 'C'
          },
          {
            id: 28,
            question: '(Connections) Based on the text, how does the lack of a "centralized system" impact patient care?',
            options: {
              A: 'It prevents different specialists from seeing the "big picture" of a patient\'s health.',
              B: 'It makes it easier for patients to get second opinions from orthodontists.',
              C: 'It reduces the overall cost of genomic sequencing for the public.'
            },
            correctOption: 'A'
          },
          {
            id: 29,
            question: '(Mood and Tone) What is the author’s attitude toward the use of technology in medicine?',
            options: {
              A: 'Completely dismissive; technology does more harm than good.',
              B: 'Cautiously optimistic; technology is powerful but needs a human element.',
              C: 'Overwhelmingly enthusiastic; technology has solved all diagnostic problems.'
            },
            correctOption: 'B'
          },
          {
            id: 30,
            question: '(Overall Meaning) Which title best summarizes the main idea of the text?',
            options: {
              A: 'The Rise of Genomic Sequencing.',
              B: 'Balancing Technology and Empathy in Medical Diagnosis.',
              C: 'Why AI is the Best Doctor.'
            },
            correctOption: 'B'
          }
        ]
      }
    ],
    writing: [
      {
        id: 'writing-4-1',
        title: 'Part 4.1: Summary Task',
        instructions: 'Read the text "What’s the Diagnosis?" again and summarize the two distinct approaches to medical diagnosis.',
        prompt: `The text discusses two distinct approaches to medical diagnosis: the "high-tech" approach (genomics, AI, data) and the "high-touch" approach (patient interviews, empathy, clinical intuition).

Task: Summarize these two different points of view in your own words. Write at least 4-5 sentences.`,
        expectedSentences: '4-5 sentences'
      },
      {
        id: 'writing-4-2',
        title: 'Part 4.2: Opinion Essay',
        instructions: 'Write an opinion essay of at least 220 words based on the provided prompt.',
        prompt: `Prompt: "In a world increasingly dominated by digital health apps and AI-driven symptom checkers, some argue that the personal relationship between a doctor and a patient is no longer necessary for effective treatment."

Your essay must contain:
1. Your clear opinion on whether technology can fully replace human doctors.
2. The role of "Habits of Happiness" or stress management in maintaining health.
3. Examples of how "Alternative Therapy" or "Home Remedies" might fit into a modern lifestyle.`,
        minimumWords: 220
      }
    ]
  },
  {
    id: 'exam-2',
    title: 'Grade 12 Advanced & Elite English Exam (Set B)',
    grade: 'Grade 12 Advanced / Elite',
    term: 'Term 3',
    year: '2025-2026',
    status: 'active',
    parts: [
      {
        id: 'vocabulary',
        title: 'Part 1: Vocabulary',
        instructions: 'Choose the correct word(s) to complete the sentences. Choose A, B, or C.',
        questions: [
          {
            id: 101,
            question: 'After weeks of subtle chest tightness, the athlete underwent a medical scan which revealed that his __________ were functioning perfectly, though he needed to lower his overall body fat percentage.',
            options: {
              A: 'cardiac muscles',
              B: 'hybrid viruses',
              C: 'osteopaths'
            },
            correctOption: 'A',
            explanation: '"cardiac muscles" refers to heart muscles which relate to chest tightness and fat percentage.'
          },
          {
            id: 102,
            question: 'Following the sudden __________ of the highly contagious avian flu strain, health officials quickly moved to isolate the primary affected zone to prevent nationwide transmission.',
            options: {
              A: 'remedy',
              B: 'outbreak',
              C: 'vaccination'
            },
            correctOption: 'B',
            explanation: 'An "outbreak" is a sudden occurrence of a disease.'
          },
          {
            id: 103,
            question: 'Sarah was hesitant to undergo alternative therapy at first, but the soothing herbal __________ she was given significantly relieved her chronic skin irritation without any adverse side effects.',
            options: {
              A: 'chamber',
              B: 'orthodontist',
              C: 'mixture'
            },
            correctOption: 'C',
            explanation: 'A herbal "mixture" is a preparation for treating skin irritation.'
          },
          {
            id: 104,
            question: 'Professor Higgins warned that if the avian flu undergoes a dangerous __________ with a human influenza strain, it could create an unprecedented global health crisis.',
            options: {
              A: 'mutation',
              B: 'effectiveness',
              C: 'psychiatrist'
            },
            correctOption: 'A',
            explanation: 'A "mutation" is a genetic change or shift.'
          },
          {
            id: 105,
            question: 'When Jack’s business failed, his mentor did not just offer superficial advice; instead, they had a deep, emotional __________ about resilience and long-term career planning.',
            options: {
              A: 'heart-to-heart talk',
              B: 'allergic reaction',
              C: 'change of heart'
            },
            correctOption: 'A',
            explanation: 'A "heart-to-heart talk" is a candid, deeply sincere conversation.'
          },
          {
            id: 106,
            question: 'Infants, elderly individuals, and those with weakened immune systems are highly __________ to respiratory infections during the winter months.',
            options: {
              A: 'adventure-prone',
              B: 'susceptible',
              C: 'unprecedented'
            },
            correctOption: 'B',
            explanation: '"susceptible" means particularly vulnerable to infection.'
          },
          {
            id: 107,
            question: 'The clinical trial concluded that while the new dermatological ointment effectively reduces redness, its long-term __________ remains identical to traditional, cheaper home remedies.',
            options: {
              A: 'symptoms',
              B: 'effectiveness',
              C: 'bruises'
            },
            correctOption: 'B',
            explanation: '"effectiveness" refers to how well a treatment operates.'
          }
        ]
      },
      {
        id: 'grammar',
        title: 'Part 2: Grammar',
        instructions: 'Read the text "The Evolution of Entertainment Economics" and choose the correct word(s) to complete the sentences. Choose A, B, or C.',
        questions: [
          {
            id: 108,
            question: 'By next December, industry analysts estimated that major streaming platforms (8) __________ digital content to global audiences for over a decade.',
            options: {
              A: 'will have been distributing',
              B: 'will be distributing',
              C: 'have been distributing'
            },
            correctOption: 'A',
            explanation: 'Future Perfect Continuous: "By next December... for over a decade" projects duration into the future.'
          },
          {
            id: 109,
            question: 'Industry executives recently stated that they (9) __________ subscription fees to combat production inflation, but many users feel exploited.',
            options: {
              A: 'would have to increase',
              B: 'will have to increase',
              C: 'must have increased'
            },
            correctOption: 'A',
            explanation: 'Reported speech backshifts "will have to" to "would have to" since the reporting verb "stated" is in the past.'
          },
          {
            id: 110,
            question: 'Experts suggest that alternative models, such as ad-supported tiers (10) __________ rely heavily on targeted marketing, are the only viable path forward.',
            options: {
              A: ', which',
              B: 'whose',
              C: 'that'
            },
            correctOption: 'C',
            explanation: '"that" is used for defining relative clauses without commas to specify the exact type of tiers.'
          },
          {
            id: 111,
            question: 'New copyright protocols (11) __________ by all active distributors by the end of the fiscal quarter, or severe fines will be implemented.',
            options: {
              A: 'must be adopted',
              B: 'should adopt',
              C: 'could have adopted'
            },
            correctOption: 'A',
            explanation: 'Passive Modal "must be adopted" indicates a strict obligation for protocols.'
          },
          {
            id: 112,
            question: 'While some optimists believe that market saturation (12) __________ lead to lower prices for consumers in the near future, current trajectories show the opposite.',
            options: {
              A: 'definitively',
              B: 'might',
              C: 'is bound to'
            },
            correctOption: 'B',
            explanation: '"might" is a modal of possibility expressing a tentative future outcome.'
          },
          {
            id: 113,
            question: 'In fact, streaming costs are becoming significantly (13) __________ than traditional cable packages ever were.',
            options: {
              A: 'expensive',
              B: 'more expensive',
              C: 'most expensive'
            },
            correctOption: 'B',
            explanation: 'Comparative adjective "more expensive than" is required.'
          },
          {
            id: 114,
            question: 'Ultimately, this economic model is proving to be far (14) __________ than early digital pioneers had predicted.',
            options: {
              A: 'more complex',
              B: 'as complex',
              C: 'complex'
            },
            correctOption: 'A',
            explanation: 'Comparative adjective "more complex than" is required.'
          }
        ]
      },
      {
        id: 'reading-3a',
        title: 'Part 3A: Reading (At Grade Level Goal)',
        instructions: 'Read the text and choose the correct answer (A, B, or C).',
        readingPassage: {
          title: 'Delicious Food, Deadly Stoves',
          text: `For generations, the traditional biomass cookstove has been the beating heart of rural kitchens across developing nations. Fueled by wood, crop residues, or dried dung, these stoves produce the rich, smoky flavors deeply embedded in local culinary heritages. To many, food prepared any other way tastes hollow and lacks authenticity. Yet, beneath the comforting aromas of traditional recipes lies a profound global health crisis. According to environmental health data, the indoor air pollution generated by these traditional stoves is a silent killer, contributing to millions of premature deaths annually—disproportionately affecting women and young children who spend hours near the hearth.

In response, international development organizations have aggressively promoted "clean cookstoves"—modern, efficient appliances that utilize liquid petroleum gas (LPG), electricity, or processed biomass pellets. These devices drastically reduce household air pollution and lower carbon emissions. Proponents argue that transitioning to clean energy is an urgent moral and environmental imperative.

However, the adoption rate of these modern alternatives remains frustratingly low. The obstacle is not merely economic, though the cost of fuel refills is a major barrier; it is deeply cultural. Many families find that clean cookstoves alter the texture and taste of traditional breads and stews. Furthermore, modern stoves often fail to accommodate large, traditional cooking pots or the specific heat distribution required for authentic local cuisine.

Critics of rapid modernization argue that forcing a shift to industrial appliances disregards local customs and forces communities to rely on external, expensive fuel supply chains. They suggest upgrading traditional stove designs rather than replacing them entirely. Conversely, public health advocates insist that prioritizing culinary tradition over human life is an unsustainable stance. The clash between preserving cultural identity and safeguarding respiratory health highlights the complex nuances of global development.`
        },
        questions: [
          {
            id: 115,
            question: 'According to the first paragraph, which group of people experiences the highest health risks from traditional biomass stoves?',
            options: {
              A: 'Global environmental researchers who study rural communities.',
              B: 'Women and young children who reside in close proximity to the kitchen hearth.',
              C: 'Local agricultural workers who gather wood and crop residues.'
            },
            correctOption: 'B'
          },
          {
            id: 116,
            question: 'What is a primary technical or economic reason mentioned in the text for the low adoption rates of modern clean cookstoves?',
            options: {
              A: 'The lack of electricity grids in most urban metropolitan areas.',
              B: 'The financial burden of purchasing fuel refills and the mismatch with large cooking vessels.',
              C: 'The complete unavailability of liquid petroleum gas in developing countries.'
            },
            correctOption: 'B'
          },
          {
            id: 117,
            question: 'The text notes that proponents of clean cookstoves view the transition to modern appliances as:',
            options: {
              A: 'A secondary objective that should only be pursued after economic wealth is achieved.',
              B: 'A critical moral and environmental necessity to reduce pollution and emissions.',
              C: 'A temporary strategy until traditional biomass fuels become cheaper.'
            },
            correctOption: 'B'
          },
          {
            id: 118,
            question: 'What cultural objection do rural families have against modern clean cookstoves?',
            options: {
              A: 'They believe modern stoves are spiritually unlucky for their households.',
              B: 'They claim that modern cooking methods negatively alter the taste and texture of heritage dishes.',
              C: 'They prefer the visual aesthetic of open outdoor flames over indoor cooking.'
            },
            correctOption: 'B'
          },
          {
            id: 119,
            question: 'Based on the third and fourth paragraphs, what can be inferred about why upgrading traditional stoves might be preferred over introducing completely modern ones?',
            options: {
              A: 'Upgraded traditional stoves would likely maintain cultural culinary practices while reducing some health hazards.',
              B: 'Upgraded traditional stoves completely eliminate carbon emissions without needing any ventilation.',
              C: 'Traditional stoves are easier to export to Western countries for commercial profit.'
            },
            correctOption: 'A'
          },
          {
            id: 120,
            question: 'What does the text imply about the relationship between global development and local cultures?',
            options: {
              A: 'Technological development always matches perfectly with cultural expectations.',
              B: 'Development initiatives often fail when they treat technical problems without considering cultural values.',
              C: 'Cultural identity completely disappears as soon as clean energy alternatives are introduced.'
            },
            correctOption: 'B'
          },
          {
            id: 121,
            question: 'Which option best describes the author\'s tone in discussing the conflict between cultural preservation and public health?',
            options: {
              A: 'Dismissive and impatient toward rural communities\' stubbornness.',
              B: 'Highly emotional and protective of ancient culinary traditions.',
              C: 'Analytical and balanced, acknowledging the validity of both health and cultural perspectives.'
            },
            correctOption: 'C'
          },
          {
            id: 122,
            question: 'What is the primary, overarching message of the text?',
            options: {
              A: 'Modern cooking technologies are far superior to traditional ones in every cultural context.',
              B: 'Replacing traditional biomass stoves requires balancing critical public health interventions with deep-rooted cultural habits.',
              C: 'Developing nations must ban all wood-burning practices immediately to protect global climate patterns.'
            },
            correctOption: 'B'
          }
        ]
      },
      {
        id: 'reading-3b',
        title: 'Part 3B: Reading (Beyond Grade Level Goal)',
        instructions: 'Read the text and choose the correct answer (A, B, or C).',
        readingPassage: {
          title: "What's the Diagnosis?",
          text: `The rapid integration of Artificial Intelligence (AI) into diagnostic medicine has sparked a profound paradigm shift in healthcare. Machine learning algorithms, trained on millions of clinical images, can now detect malignant tumors, retinal diseases, and neurological anomalies with a speed and statistical accuracy that often surpasses senior radiologists and dermatologists. In clinical trials, these deep-learning models processed vast amounts of complex data within seconds, offering a promising solution to overwhelmed healthcare systems facing severe specialist shortages.

However, beneath the surface of this technological triumph lies a complex web of epistemological and ethical dilemmas. The most prominent of these is the "black box" phenomenon. While an AI algorithm can output a highly accurate diagnosis, it cannot explain how it reached that conclusion. Unlike a human physician who can articulate a diagnostic rationale based on medical theory and clinical history, an algorithm operates through incomprehensible layers of mathematical weights. This lack of transparency raises significant concerns among practitioners: if a medical professional cannot understand the underlying mechanism of an AI's diagnosis, can they responsibly act upon its recommendations?

This challenge is further complicated by the problem of algorithmic bias. AI systems are only as objective as the data used to train them. If the historical medical databases primarily feature clinical profiles from affluent populations, the AI’s diagnostic precision drops sharply when applied to marginalized or genetically diverse groups. Consequently, over-reliance on these tools risks exacerbating existing systemic health disparities.

Medical ethicists stress that AI should not be viewed as an autonomous replacement for human practitioners, but rather as an advanced collaborative tool. The intricate nuances of patient care—such as interpreting subjective symptoms, navigating emotional distress, and delivering terminal diagnoses—require a level of empathy and holistic understanding that code cannot replicate. Therefore, the future of medicine depends on establishing a symbiotic framework where AI enhances diagnostic speed, while human physicians retain ultimate clinical accountability and oversight.`
        },
        questions: [
          {
            id: 123,
            question: 'According to the first paragraph, what primary advantage does AI demonstrate over human specialists in clinical trials?',
            options: {
              A: 'The ability to perform complex surgical procedures autonomously.',
              B: 'The capacity to analyze vast quantities of medical data with superior speed and diagnostic accuracy.',
              C: 'The ability to discover new pharmaceutical formulations without human testing.'
            },
            correctOption: 'B'
          },
          {
            id: 124,
            question: 'What does the term "black box" phenomenon refer to in the context of medical AI?',
            options: {
              A: 'A physical security vault where hospital servers are securely locked.',
              B: 'The technological inability of an AI algorithm to explain its diagnostic reasoning path.',
              C: 'The high financial costs associated with installing machine learning software in clinics.'
            },
            correctOption: 'B'
          },
          {
            id: 125,
            question: 'According to the third paragraph, how does algorithmic bias occur in diagnostic AI models?',
            options: {
              A: 'When software developers purposefully program malicious code into hospital networks.',
              B: 'When the training data lacks representation from diverse or marginalized patient populations.',
              C: 'When human doctors intentionally alter the AI\'s diagnostic summaries.'
            },
            correctOption: 'B'
          },
          {
            id: 126,
            question: 'What can be inferred about a physician who relies solely on an AI\'s diagnostic output without verification?',
            options: {
              A: 'They might face ethical and professional risks due to the lack of transparency and potential bias in the tool.',
              B: 'They will always receive promotions because AI is universally trusted by hospital boards.',
              C: 'They will eliminate all medical errors entirely from their daily clinical practice.'
            },
            correctOption: 'A'
          },
          {
            id: 127,
            question: 'The author implies that human empathy in medicine is:',
            options: {
              A: 'An outdated concept that should be replaced by objective machine calculations.',
              B: 'A critical, irreplaceable element of patient care that AI cannot replicate.',
              C: 'Useful only when dealing with wealthy or affluent patient populations.'
            },
            correctOption: 'B'
          },
          {
            id: 128,
            question: 'How does the issue of data bias in medical AI connect to broader systemic issues in the wider world?',
            options: {
              A: 'It demonstrates that technological advancements naturally resolve social inequality over time.',
              B: 'It shows how historical societal inequalities can be unintentionally automated and worsened by modern technology.',
              C: 'It proves that medical systems are entirely separate from global economic and social trends.'
            },
            correctOption: 'B'
          },
          {
            id: 129,
            question: 'What is the overall tone of the author regarding the complete replacement of human doctors by AI?',
            options: {
              A: 'Optimistic and enthusiastic about an automated future.',
              B: 'Cautious and critical, advocating for collaboration rather than total automation.',
              C: 'Hostile and aggressive towards any form of technological innovation.'
            },
            correctOption: 'B'
          },
          {
            id: 130,
            question: 'Which statement best encapsulates the main thesis of the text?',
            options: {
              A: 'Artificial Intelligence is a flawless diagnostic solution that will soon eliminate the need for human medical schools.',
              B: 'While AI offers unprecedented diagnostic capabilities, its ethical limitations necessitate a cooperative model where human oversight remains vital.',
              C: 'Algorithmic bias and the "black box" problem render AI completely useless and dangerous for modern healthcare systems.'
            },
            correctOption: 'B'
          }
        ]
      }
    ],
    writing: [
      {
        id: 'writing-4-1',
        title: 'Part 4.1: Summary Task',
        instructions: 'Read the text "The Modern Happiness Paradox" carefully. Summarise the two different points of view in your own words. Do not copy directly from the text. Write at least 4–5 sentences.',
        prompt: `Source Text: "The Modern Happiness Paradox"

In contemporary society, wellness trends have turned the pursuit of happiness into a multi-billion-dollar commercial industry. On one hand, advocates of the "Optimisation Movement" argue that happiness is a structured skill that can be achieved through rigorous daily habits: mindfulness apps, structured sleep schedules, dietary clean-eating, and continuous self-tracking. They claim that tracking wellness data empowers individuals to systematically eliminate stress and take control of their emotional well-being.

On the other hand, critics argue that this obsession with achieving happiness actually causes heightened anxiety and emotional exhaustion. They contend that by treating happiness as a goal to be checked off a list, people become hypersensitive to minor negative emotions, viewing normal sadness or stress as a personal failure. This perspective suggests that genuine happiness is not a consequence of calculated habits, but an organic byproduct of living a meaningful, connected, and sometimes messy life.

Task: What are the two different points of view presented in the text regarding how happiness is achieved? Summarise these points of view in your own words. Do not copy directly from the text. Write at least 4–5 sentences.`,
        expectedSentences: '4-5 sentences'
      },
      {
        id: 'writing-4-2',
        title: 'Part 4.2: Opinion Essay',
        instructions: 'Write an opinion essay of at least 220 words based on the provided prompt.',
        prompt: `Prompt: Write an opinion essay in response to the text "The Modern Happiness Paradox" provided above. Discuss your personal perspective on whether happiness is a result of structured wellness habits and personal optimization, or if it is an organic byproduct of meaningful connections and life experiences.

In your essay, make sure to address the following prompts:
1. Express your clear opinion on which approach is more effective for reducing stress levels and promoting long-term wellness.
2. Describe the causes and consequences of society's current obsession with tracking and optimizing daily mental habits.
3. Support your arguments with specific reasons, examples from your own background knowledge, or observations of the wider world.`,
        minimumWords: 220
      }
    ]
  },
  {
    id: 'exam-3',
    title: 'English End-of-Term 3 Examination',
    grade: 'Grade 12 Advanced / Elite',
    term: 'Term 3',
    year: '2025-2026',
    status: 'active',
    parts: [
      {
        id: 'vocabulary',
        title: 'Part 1: Vocabulary',
        instructions: 'Choose the correct word(s) to complete the sentences. Choose A, B, or C.',
        questions: [
          {
            id: 201,
            question: 'After months of excruciating chest pain, Jonathan finally decided to ________ and consult a specialist, realization hitting him that his demanding lifestyle was taking a toll.',
            options: {
              A: 'follow his heart',
              B: 'have a change of heart',
              C: 'take something to heart'
            },
            correctOption: 'B',
            explanation: '"have a change of heart" means to change one\'s mind/attitude; context shows he finally relented and saw a doctor.'
          },
          {
            id: 202,
            question: 'The epidemiologist warned that the new ________ of the respiratory illness exhibited an unprecedented rate of mutation, making traditional vaccines less effective.',
            options: {
              A: 'strain',
              B: 'virus',
              C: 'outbreak'
            },
            correctOption: 'A',
            explanation: 'A genetic "strain" is a subtype of a virus or living organism.'
          },
          {
            id: 203,
            question: 'Despite her fear of cosmetic procedures, she visited a renowned ________ to treat the severe skin irritation caused by an allergic reaction to a natural remedy.',
            options: {
              A: 'osteopath',
              B: 'dermatologist',
              C: 'ophthalmologist'
            },
            correctOption: 'B',
            explanation: 'A "dermatologist" treats skin irritation and skin conditions.'
          },
          {
            id: 204,
            question: 'The elderly patient was highly ________ to seasonal infections, which is why the geriatrician insisted on an immediate preventative treatment.',
            options: {
              A: 'contagious',
              B: 'unprecedented',
              C: 'susceptible'
            },
            correctOption: 'C',
            explanation: '"susceptible" means vulnerable or liable to catch a virus or disease.'
          },
          {
            id: 205,
            question: 'During their ________ talk, Sarah confessed to her doctor that she had her heart set on completing the marathon despite her diagnosed cardiac muscle weakness.',
            options: {
              A: 'heart-to-heart',
              B: 'follow-one\'s-heart',
              C: 'change-of-heart'
            },
            correctOption: 'A',
            explanation: 'A personal conversation is a "heart-to-heart" talk.'
          },
          {
            id: 206,
            question: 'Regular exercise causes the chambers of the heart to ________ more efficiently, ensuring that oxygenated blood is continuously pumped throughout the body.',
            options: {
              A: 'vary',
              B: 'contract',
              C: 'peel'
            },
            correctOption: 'B',
            explanation: 'Chambers of the heart "contract" (squeeze) to pump blood.'
          },
          {
            id: 207,
            question: 'Many people turn to herbal mixtures as a soothing ________ to relieve symptoms, though clinical trials are often required to prove their true effectiveness.',
            options: {
              A: 'remedy',
              B: 'vaccination',
              C: 'transmission'
            },
            correctOption: 'A',
            explanation: 'A "remedy" is a therapy or medicine that relieves symptoms.'
          }
        ]
      },
      {
        id: 'grammar',
        title: 'Part 2: Grammar',
        instructions: `Read the text below and choose the correct word(s) to complete the sentences. Choose A, B, or C.

Text: Fun? It'll Cost Ya
The commercialization of leisure spaces has grown rapidly over the last decade. By next December, developers (8) ________ the new mega-amusement park for over five years, entirely transforming the city's suburban landscape. Local residents, (9) ________ properties border the construction site, argue that the area's natural tranquility is being compromised. Yesterday, a community spokesperson stated, "It (10) ________ by the council that this project would bring affordable entertainment, but the reality is quite the opposite."
When asked about the high entrance fees, the mayor remarked that costs (11) ________ due to inflation, though he admitted that some subsidies might be considered later. Critics claim that if alternative public parks (12) ________ earlier, families wouldn't be facing such limited choices now. Furthermore, experts suggest that environmental regulations (13) ________ ignored during the initial planning phases. For now, citizens are left wondering whether this new venue (14) ________ more expensive than similar traditional attractions in neighbouring districts.`,
        questions: [
          {
            id: 208,
            question: 'By next December, developers (8) ________ the new mega-amusement park for over five years...',
            options: {
              A: 'will have been building',
              B: 'will be building',
              C: 'will have built'
            },
            correctOption: 'A',
            explanation: 'Future Perfect Continuous: "By next December... for over five years" describes passive/active continuous actions looking back from a future point.'
          },
          {
            id: 209,
            question: 'Local residents, (9) ________ properties border the construction site, argue...',
            options: {
              A: 'which',
              B: 'whose',
              C: 'who'
            },
            correctOption: 'B',
            explanation: 'Relative possessive pronoun "whose" is correct for "properties" belonging to the residents.'
          },
          {
            id: 210,
            question: 'Yesterday, a community spokesperson stated, "It (10) ________ by the council that this project..."',
            options: {
              A: 'reported',
              B: 'was reported',
              C: 'had reported'
            },
            correctOption: 'B',
            explanation: 'The passive construction "It was reported" is correct here.'
          },
          {
            id: 211,
            question: 'When asked about the high entrance fees, the mayor remarked that costs (11) ________ due to inflation...',
            options: {
              A: 'had to be increased',
              B: 'must increase',
              C: 'would be increased'
            },
            correctOption: 'A',
            explanation: 'Passive necessity in past reported mode: "costs had to be increased".'
          },
          {
            id: 212,
            question: 'Critics claim that if alternative public parks (12) ________ earlier...',
            options: {
              A: 'were developed',
              B: 'have been developed',
              C: 'had been developed'
            },
            correctOption: 'C',
            explanation: 'Third conditional structure: "if public parks had been developed... family wouldn\'t be facing".'
          },
          {
            id: 213,
            question: 'Furthermore, experts suggest that environmental regulations (13) ________ ignored during...',
            options: {
              A: 'might have been',
              B: 'should be',
              C: 'can be'
            },
            correctOption: 'A',
            explanation: 'Past modal of possibility "might have been" indicates it was possibly done in the past.'
          },
          {
            id: 214,
            question: 'citizens are left wondering whether this new venue (14) ________ more expensive than...',
            options: {
              A: 'is much',
              B: 'is significantly',
              C: 'is as'
            },
            correctOption: 'B',
            explanation: '"is significantly" is correct before the comparative adverb/adjective modifier.'
          }
        ]
      },
      {
        id: 'reading-3a',
        title: 'Part 3A: Reading (At Grade Level Goal)',
        instructions: 'Read the text and choose the correct answer (A, B, or C).',
        readingPassage: {
          title: 'Delicious Food, Deadly Stoves',
          text: `The aroma of sizzling spices and roasting meats is a staple of traditional culinary practices across many developing regions. Cooking over open fires or inefficient biomass stoves is a deeply rooted cultural norm. However, behind the creation of these delicious traditional dishes lies a silent, deadly reality: household air pollution. According to global health organizations, the incomplete combustion of solid fuels like wood, charcoal, and crop residue releases a toxic cocktail of particulate matter and carbon monoxide directly into domestic spaces. This daily exposure is the hidden culprit behind millions of premature deaths annually, primarily affecting women and young children who spend the most time near the hearth.

Advocates for clean cooking technologies face a monumental task. Introducing modern gas cylinders or electric induction cooktops seems like a straightforward technological fix, but it frequently clashes with socioeconomic realities. In many rural communities, firewood is a free resource gathered from nearby forests, whereas liquid petroleum gas requires a steady monetary income that many households simply do not possess. Furthermore, there is a pervasive belief that modern stoves alter the authentic flavor of traditional meals, which relies on the slow, smoky infusion provided by burning wood.

Consequently, international intervention programs are shifting their focus. Instead of demanding an abrupt transition to fully modern appliances, engineers are designing improved biomass cooktops. These intermediate devices utilize better airflow mechanisms to maximize fuel efficiency and significantly reduce smoke emissions while allowing families to continue using traditional fuels. While these hybrid solutions are not entirely risk-free, they represent a pragmatic bridge toward healthier living conditions, demonstrating that public health strategies must respect cultural identity and financial limitations to achieve lasting success.`
        },
        questions: [
          {
            id: 215,
            question: '[Specific Information] According to the first paragraph, what is the primary cause of household air pollution in developing regions?',
            options: {
              A: 'The preparation of highly spiced traditional meats.',
              B: 'The burning of solid fuels like wood and charcoal with low efficiency.',
              C: 'The lack of ventilation systems in modern urban apartments.'
            },
            correctOption: 'B',
            explanation: 'The text directly attributes indoor pollution to the "incomplete combustion of solid fuels like wood, charcoal..."'
          },
          {
            id: 216,
            question: '[Specific Information] Which demographic group suffers the highest health burden from traditional cooking methods?',
            options: {
              A: 'International clean cooking advocates who travel to rural fields.',
              B: 'Engineers who test the airflow mechanisms of intermediate devices.',
              C: 'Women and young children who remain close to the domestic hearth.'
            },
            correctOption: 'C',
            explanation: 'The text explicitly highlights "...primarily affecting women and young children who spend the most time near the hearth."'
          },
          {
            id: 217,
            question: '[Details] What is one economic barrier preventing rural families from adopting modern gas or electric stoves?',
            options: {
              A: 'Traditional biomass fuels are completely unavailable in local markets.',
              B: 'Firewood can be gathered without financial cost, unlike modern fuels.',
              C: 'Modern gas cylinders are heavily taxed by local governments.'
            },
            correctOption: 'B',
            explanation: 'Paragraph 2 highlights that firewood is gathered for free, while modern alternatives require a steady monetary income.'
          },
          {
            id: 218,
            question: '[Details] Why do some communities actively resist modern induction cooktops from a cultural perspective?',
            options: {
              A: 'They believe modern appliances fail to deliver the essential smoky flavor of traditional dishes.',
              B: 'They feel that electric appliances are unsafe for young children to operate.',
              C: 'They prefer the physical appearance and aesthetic of older clay structures.'
            },
            correctOption: 'A',
            explanation: 'Paragraph 2 states that there is a belief that modern stoves alter the authentic flavor which relies on a smoky infusion.'
          },
          {
            id: 2151,
            question: '[Inference] What can be inferred about the transition from traditional wood stoves to fully modern cooking appliances?',
            options: {
              A: 'It is easily achieved once families are educated about toxic carbon monoxide emissions.',
              B: 'It requires a complex balance between financial capability and cultural acceptance.',
              C: 'It has been entirely abandoned by international health organizations due to failure.'
            },
            correctOption: 'B',
            explanation: 'The text implies it is complex because it "clashes with socioeconomic realities" and cultural norms.'
          },
          {
            id: 2161,
            question: '[Inference] Why are "improved biomass cooktops" considered a "pragmatic bridge" by the author?',
            options: {
              A: 'They eliminate 100% of household air pollution immediately.',
              B: 'They allow the use of free, familiar fuels while decreasing hazardous emissions.',
              C: 'They cost less to manufacture than traditional open fireplaces.'
            },
            correctOption: 'B',
            explanation: 'They are intermediate because they allow families to continue using traditional fuels while increasing airflow to lower harmful emissions.'
          },
          {
            id: 2171,
            question: '[Mood and Tone] What is the author\'s tone toward the implementation of intermediate hybrid cooktops?',
            options: {
              A: 'Highly skeptical and dismissive of their long-term effectiveness.',
              B: 'Enthusiastic and uncritical of their environmental flaws.',
              C: 'Objective and realistic about their role as a practical compromise.'
            },
            correctOption: 'C',
            explanation: 'The author describes them neutrally as a "pragmatic bridge" that is "not entirely risk-free" but represents a realistic step.'
          },
          {
            id: 2181,
            question: '[Overall Meaning] What is the main message of the text?',
            options: {
              A: 'Traditional culinary methods must be preserved globally regardless of health consequences.',
              B: 'Successful public health interventions must reconcile technological upgrades with socioeconomic and cultural realities.',
              C: 'Modern electrical infrastructure is the only viable method to eradicate global indoor pollution.'
            },
            correctOption: 'B',
            explanation: 'The entire text explores the conflict between introducing health technology and respecting socioeconomic/cultural factors, concluding that interventions must balance both.'
          }
        ]
      },
      {
        id: 'reading-3b',
        title: 'Part 3B: Reading (Beyond Grade Level Goal)',
        instructions: 'Read the text and choose the correct answer (A, B, or C).',
        readingPassage: {
          title: "What's the Diagnosis?",
          text: `The interface between diagnostic medicine and clinical intuition has entered a transformative era. Historically, physicians relied heavily on a combination of physiological observation, patient narrative, and empirical testing to formulate a diagnosis. This methodology, while deeply human, was inherently susceptible to cognitive biases and heuristics—such as anchoring bias, where a clinician over-relies on the first piece of information encountered. Today, the integration of sophisticated algorithmic diagnostic tools is rewriting this paradigm, introducing an unprecedented level of analytical precision to clinical settings.

These advanced computational systems possess the capability to synthesize vast arrays of patient data, from genomic sequencing to longitudinal electronic health records, far exceeding the real-time cognitive processing capacity of any human practitioner. In radiology, for instance, deep-learning models can identify subtle anomalies in complex imaging data that might escape the notice of a fatigued clinician. However, this technological leap has ignited a fierce debate within the medical community regarding the potential erosion of clinical intuition and the "black box" dilemma—the phenomenon where an AI arrives at a correct diagnostic conclusion through pathways that remain opaque to its human operators.

Opponents of over-reliance on automated diagnostics argue that medicine is as much an art form as it is a rigorous science. A machine may excel at pattern recognition, but it lacks the capacity for contextual empathy, semantic interpretation of non-verbal patient cues, and the holistic understanding of a patient's socio-cultural background. A pediatric patient presenting with atypical symptoms might require a breakthrough achieved only through a physician's subjective experience and intuitive leaps, qualities that cannot be codified into binary structures.

Ultimately, the consensus among forward-thinking medical educators is not the replacement of the human mind, but the cultivation of a symbiotic relationship. Clinicians must be trained to act as critical evaluators of algorithmic outputs rather than passive recipients of automated conclusions. By marrying the computational velocity of artificial intelligence with the nuanced, empathetic judgment of human practitioners, the medical field can mitigate diagnostic errors and optimize patient outcomes without sacrificing the essential human core of the healing arts.`
        },
        questions: [
          {
            id: 219,
            question: '[Specific Information] According to the first paragraph, what is a primary limitation of historical diagnostic methods?',
            options: {
              A: 'The total absence of empirical testing in clinical environments.',
              B: 'A vulnerability to cognitive biases such as anchoring bias.',
              C: 'The inability of physicians to listen to patient narratives.'
            },
            correctOption: 'B',
            explanation: 'The text explicitly points out that historical diagnostic methods were "inherently susceptible to cognitive biases and heuristics."'
          },
          {
            id: 220,
            question: '[Details] What specific advantage do algorithmic diagnostic tools have over human practitioners according to the text?',
            options: {
              A: 'The capacity to experience contextual empathy during consultations.',
              B: 'The ability to process and synthesize vast quantities of patient data simultaneously.',
              C: 'Their immunity to any form of systemic error or technical malfunctioning.'
            },
            correctOption: 'B',
            explanation: 'Paragraph 2 specifies that systems can "synthesize vast arrays of patient data... far exceeding the real-time cognitive processing capacity of any human."'
          },
          {
            id: 221,
            question: '[Details] What does the term "black box" dilemma refer to in the context of automated diagnostics?',
            options: {
              A: 'The physical storage constraints of electronic health record servers.',
              B: 'The lack of financial transparency in purchasing medical software.',
              C: 'The hidden, uninterpretable analytical pathways an AI uses to reach a diagnosis.'
            },
            correctOption: 'C',
            explanation: 'The "black box" is explicitly defined as the phenomenon where an AI reaches correct conclusions through pathways that remain opaque to humans.'
          },
          {
            id: 222,
            question: '[Inference] What can be inferred about a fatigued radiologist compared to a deep-learning model?',
            options: {
              A: 'The radiologist is more likely to miss minor anomalies in complex images.',
              B: 'The radiologist will completely reject any computational assistance.',
              C: 'The radiologist\'s intuitive judgment always overrides machine accuracy.'
            },
            correctOption: 'A',
            explanation: 'Paragraph 2 notes that models can find subtle anomalies that "might escape the notice of a fatigued clinician."'
          },
          {
            id: 2231,
            question: '[Inference] Why does the author mention a pediatric patient with atypical symptoms?',
            options: {
              A: 'To prove that children are more susceptible to technological diagnostic errors.',
              B: 'To highlight situations where human clinical experience and subjective intuition are vital.',
              C: 'To demonstrate that algorithmic tools are primarily designed for adult patients.'
            },
            correctOption: 'B',
            explanation: 'The pediatric example is used to illustrate complex cases that require "a physician\'s subjective experience and intuitive leaps" which cannot be codified.'
          },
          {
            id: 2241,
            question: '[Connections] How does the discussion of automated diagnostics connect to the wider socio-cultural aspects of healthcare?',
            options: {
              A: 'It proves that healthcare costs will drop significantly worldwide within a year.',
              B: 'It emphasizes that healing requires holistic human understanding that technology cannot codify.',
              C: 'It suggests that human interaction is entirely obsolete in modern societal frameworks.'
            },
            correctOption: 'B',
            explanation: 'The text links the discussion to the wider world by showing that healthcare includes non-verbal cues, emotional empathy, and socio-cultural backgrounds.'
          },
          {
            id: 2251,
            question: '[Mood and Tone] Which option best describes the author\'s perspective on the future of medical diagnostics?',
            options: {
              A: 'Alarmed and deeply pessimistic about the complete dehumanization of clinics.',
              B: 'Uncritically enthusiastic about replacing human doctors with automated systems.',
              C: 'Balanced and progressive, advocating for human-machine collaboration.'
            },
            correctOption: 'C',
            explanation: 'The author advocates for a "symbiotic relationship" that marries computational power with human empathy, showing a balanced view.'
          },
          {
            id: 2261,
            question: '[Overall Meaning] What is the central thesis of the text?',
            options: {
              A: 'AI diagnostics should be limited exclusively to automated radiology departments.',
              B: 'The future of medicine lies in a symbiotic relationship combining AI precision with human empathy.',
              C: 'Clinical intuition is an outdated concept that must be fully replaced by empirical data.'
            },
            correctOption: 'B',
            explanation: 'The concluding paragraphs reiterate that the ideal path is the fusion of machine accuracy and human-centered clinical judgment.'
          }
        ]
      }
    ],
    writing: [
      {
        id: 'writing-4-1',
        title: 'Part 4.1: Summary Task',
        instructions: 'Read the text carefully. What are the two different points of view presented in the text? Summarise them in your own words. Write at least 4–5 sentences.',
        prompt: `Text Resource: The Cost of Contentment

In contemporary society, the pursuit of happiness has increasingly been linked to wellness metrics and financial investments. Many wellness advocates argue that achieving true happiness requires deliberate, structured investments of time and money into health regimes—ranging from gym memberships and organic diets to mindfulness apps and therapeutic retreats. Proponents of this view claim that high stress levels are a direct consequence of modern lifestyle trends, and that actively purchasing wellness solutions is a necessary, proactive strategy to safeguard one’s mental and physical health. From this perspective, happiness is a state of well-being that must be actively cultivated and funded.

Conversely, critics of the commercialized wellness industry contend that this approach creates an artificial, exclusionary barrier to happiness. They argue that tying stress-relief and wellness to financial expenditure exacerbates existing societal anxieties, suggesting that those who cannot afford premium treatments are doomed to unhappiness. This opposing viewpoint posits that genuine contentment is rooted in intrinsic, non-material factors—such as strong community connections, meaningful relationships, and daily habits of gratitude or mindfulness that cost absolutely nothing. They maintain that the commodification of wellness transforms a fundamental human right into a luxury item, ultimately increasing overall societal stress.`,
        expectedSentences: '4-5 sentences'
      },
      {
        id: 'writing-4-2',
        title: 'Part 4.2: Opinion Essay',
        instructions: 'Write an opinion essay of at least 220 words based on the provided prompt.',
        prompt: `Write an opinion essay in response to the text stating whether you believe true wellness and happiness depend on financial investment in professional remedies and lifestyle trends, or if they are best achieved through non-material, intrinsic habits.

In your essay, ensure you:
1. State a clear opinion with a strong thesis statement.
2. Provide reasons, examples, or evidence to support your viewpoint, referencing the causes and consequences of stress.
3. Use appropriate vocabulary related to stress, wellness, and habits of happiness.
4. Organize your writing into clear paragraphs with topic sentences and supporting details.
5. Write at least 220 words.`,
        minimumWords: 220
      }
    ]
  },
  {
    id: 'exam-4',
    title: 'English End-of-Term 3 Examination (Ex4)',
    grade: 'Grade 12 Advanced / Elite',
    term: 'Term 3',
    year: '2025-2026',
    status: 'active',
    parts: [
      {
        id: 'vocabulary',
        title: 'PART 1: VOCABULARY',
        instructions: 'Choose the correct word(s) to complete the sentences. Choose A, B, or C.',
        questions: [
          {
            id: 301,
            question: 'After months of being certain about his career path in surgery, Salem had a ________ and decided to specialize in holistic psychiatry instead.',
            options: {
              A: 'change of heart',
              B: 'heart-to-heart talk',
              C: 'heart set on'
            },
            correctOption: 'A',
            explanation: '"change of heart" means a shift in opinion or attitude.'
          },
          {
            id: 302,
            question: 'The elderly patient was particularly ________ to the new strain of the virus due to her weakened immune system.',
            options: {
              A: 'susceptible',
              B: 'contagious',
              C: 'unprecedented'
            },
            correctOption: 'A',
            explanation: '"susceptible" means vulnerable to catching an illness.'
          },
          {
            id: 303,
            question: 'Unlike skeletal muscles that we control voluntarily, ________ muscles function automatically to maintain blood circulation.',
            options: {
              A: 'lean',
              B: 'hollow',
              C: 'cardiac'
            },
            correctOption: 'C',
            explanation: '"cardiac" refers to heart muscles which involuntary pump blood automatically.'
          },
          {
            id: 304,
            question: 'Many people turn to ________ like honey and ginger for minor coughs before seeking professional medical advice.',
            options: {
              A: 'vaccinations',
              B: 'home remedies',
              C: 'alternative therapies'
            },
            correctOption: 'B',
            explanation: 'Honey and ginger are typical simple "home remedies".'
          },
          {
            id: 305,
            question: 'The recent ________ of the avian flu was described by the WHO as having an unprecedented rate of transmission across borders.',
            options: {
              A: 'mutation',
              B: 'outbreak',
              C: 'treatment'
            },
            correctOption: 'B',
            explanation: 'An "outbreak" refers to a sudden occurrence of a disease.'
          },
          {
            id: 306,
            question: 'To ensure the ________ of the new vaccine, researchers conducted double-blind studies over a three-year period.',
            options: {
              A: 'effectiveness',
              B: 'side effects',
              C: 'allergic reaction'
            },
            correctOption: 'A',
            explanation: 'Clinical studies test the security and "effectiveness" of a vaccine.'
          },
          {
            id: 307,
            question: 'If you are experiencing persistent anxiety or emotional distress, a ________ is the medical professional best trained to prescribe necessary medication.',
            options: {
              A: 'therapist',
              B: 'pediatrician',
              C: 'psychiatrist'
            },
            correctOption: 'C',
            explanation: 'A "psychiatrist" is a medical doctor who can prescribe medications for mental health conditions.'
          }
        ]
      },
      {
        id: 'grammar',
        title: 'PART 2: GRAMMAR',
        instructions: `Read the text and choose the correct word(s) to complete the sentences. Choose A, B, or C.

Text: Fun? It’ll Cost Ya!
The entertainment industry has seen a massive shift in how services are priced. By the end of this decade, it is estimated that consumers (8) ________ for digital subscriptions for over fifteen years. Critics argue that these costs (9) ________ by the companies to maximize profit at the expense of the middle class. A famous economist once (10) ________ that high prices would eventually lead to a "leisure crisis." Furthermore, people (11) ________ live in remote areas find it even harder to access affordable entertainment. While some believe that prices (12) ________ decrease next year, others are skeptical. In fact, modern concerts are now (13) ________ expensive than they were just five years ago. It is vital that new regulations (14) ________ to protect consumer rights in this growing market.`,
        questions: [
          {
            id: 308,
            question: 'By the end of this decade, it is estimated that consumers (8) ________ for digital subscriptions for over fifteen years.',
            options: {
              A: 'will have been paying',
              B: 'will be paying',
              C: 'have been paying'
            },
            correctOption: 'A',
            explanation: 'Future Perfect Continuous is used to describe an continuous action up to a point in the future.'
          },
          {
            id: 309,
            question: 'Critics argue that these costs (9) ________ by the companies to maximize profit...',
            options: {
              A: 'are being increased',
              B: 'have increased',
              C: 'are increased'
            },
            correctOption: 'A',
            explanation: 'Present Continuous Passive: "are being increased by the companies".'
          },
          {
            id: 310,
            question: 'A famous economist once (10) ________ that high prices...',
            options: {
              A: 'told',
              B: 'said',
              C: 'says'
            },
            correctOption: 'B',
            explanation: 'Reported speech uses past tense "said" without direct object.'
          },
          {
            id: 311,
            question: 'Furthermore, people (11) ________ live in remote areas...',
            options: {
              A: 'which',
              B: 'whom',
              C: 'who'
            },
            correctOption: 'C',
            explanation: 'Defining relative pronoun "who" represents human subjects.'
          },
          {
            id: 312,
            question: 'While some believe that prices (12) ________ decrease next year...',
            options: {
              A: 'might',
              B: 'must',
              C: 'should'
            },
            correctOption: 'A',
            explanation: 'Modal "might" represents future possibility with skepticism.'
          },
          {
            id: 313,
            question: 'In fact, modern concerts are now (13) ________ expensive than they were...',
            options: {
              A: 'much more',
              B: 'the most',
              C: 'more than'
            },
            correctOption: 'A',
            explanation: '"much more" is an intense adverbial modifier before comparative adjectives.'
          },
          {
            id: 314,
            question: 'It is vital that new regulations (14) ________ to protect consumer rights...',
            options: {
              A: 'are implemented',
              B: 'be implemented',
              C: 'will implement'
            },
            correctOption: 'B',
            explanation: 'Subjunctive passive: "It is vital that new regulations be implemented".'
          }
        ]
      },
      {
        id: 'reading-4a',
        title: 'PART 3A: READING AT GRADE LEVEL',
        instructions: 'Read the text and choose the correct answer (A, B, or C).',
        readingPassage: {
          title: 'Delicious Food, Deadly Stoves',
          text: `In many developing nations, the heart of the home is the kitchen, where traditional meals are prepared over open fires or rudimentary biomass stoves. While the flavors produced by these methods are celebrated as cultural heritage, the "deadly stoves" used to cook them are responsible for a silent global health crisis. These stoves, fueled by wood, charcoal, or animal waste, release high levels of carbon monoxide and fine particulate matter. For those standing over the heat, typically women and young children, the daily exposure is equivalent to smoking several packs of cigarettes a day.

The argument for transitioning to "clean" cookstoves—those using liquid petroleum gas (LPG), ethanol, or electricity—is primarily focused on health and environmental preservation. Respiratory infections, chronic obstructive pulmonary disease (COPD), and lung cancer rates are significantly higher in households using traditional biomass. Furthermore, the reliance on wood fuel contributes to massive deforestation, destabilizing local ecosystems.

However, the transition is not as simple as distributing new technology. Many communities resist clean stoves because they alter the taste of traditional dishes, which often require the specific "smoky" profile that only an open flame provides. Moreover, the economic burden of purchasing fuel like LPG is prohibitive for families who can currently gather wood for free. Critics of rapid transition programs argue that imposing Western technological solutions without considering cultural nuances and economic realities is destined for failure. They suggest a more balanced approach that improves the efficiency of traditional methods while gradually introducing cleaner alternatives.

Despite these challenges, the urgency of the situation cannot be overstated. Health organizations claim that indoor air pollution kills more people annually than malaria and tuberculosis combined. The goal is not to erase the "delicious food" that defines these cultures, but to ensure that the process of creating it does not lead to a premature grave.`
        },
        questions: [
          {
            id: 315,
            question: 'What is the primary cause of the health crisis mentioned in the text?',
            options: {
              A: 'The lack of cultural heritage in developing nations.',
              B: 'The inhalation of toxic substances from biomass fuel.',
              C: 'The consumption of food that has a smoky flavor.'
            },
            correctOption: 'B',
            explanation: 'The burning of biomass fuel releases carbon monoxide and fine particulate matter, which are inhaled.'
          },
          {
            id: 316,
            question: 'According to the text, who is most at risk from traditional cooking methods?',
            options: {
              A: 'International health workers.',
              B: 'The individuals preparing the meals and their children.',
              C: 'Local farmers who provide the biomass fuel.'
            },
            correctOption: 'B',
            explanation: 'Typically women (preparing the meals) and young children are most at risk due to proximity.'
          },
          {
            id: 317,
            question: 'Why do some communities resist switching to clean cookstoves?',
            options: {
              A: 'They believe clean stoves are more dangerous than open fires.',
              B: 'The new stoves do not produce the desired culinary results.',
              C: 'Clean stoves are less efficient at heating large homes.'
            },
            correctOption: 'B',
            explanation: 'They resist clean stoves because they alter the taste of traditional dishes, failing to produce the desired smoky profile.'
          },
          {
            id: 318,
            question: 'What environmental impact is linked to the use of wood-burning stoves?',
            options: {
              A: 'Increase in atmospheric ethanol levels.',
              B: 'Destruction of forests and local habitats.',
              C: 'Overproduction of animal waste.'
            },
            correctOption: 'B',
            explanation: 'Reliance on wood fuel contributes to massive deforestation and destabilizing local ecosystems.'
          },
          {
            id: 319,
            question: 'What can be inferred about the "Western technological solutions" mentioned in the text?',
            options: {
              A: 'They are universally accepted as the best way forward.',
              B: 'They may lack the necessary cultural adaptation for success.',
              C: 'They are intentionally designed to be too expensive for poor families.'
            },
            correctOption: 'B',
            explanation: 'Imposing them without considering cultural nuances or economic realities leads to resistance or failure.'
          },
          {
            id: 320,
            question: 'Which of the following best describes the tone of the passage?',
            options: {
              A: 'Strictly scientific and emotionless.',
              B: 'Urgently concerned yet culturally sensitive.',
              C: 'Dismissive of traditional cooking methods.'
            },
            correctOption: 'B',
            explanation: 'It emphasizes the massive health urgency ("silent global health crisis") while thoroughly explaining cultural nuances.'
          },
          {
            id: 321,
            question: 'The comparison of indoor smoke to "smoking several packs of cigarettes" is used to:',
            options: {
              A: 'Discourage people from smoking tobacco.',
              B: 'Illustrate the severity of the health hazard.',
              C: 'Suggest that biomass stoves are better than cigarettes.'
            },
            correctOption: 'B',
            explanation: 'It portrays the severity and danger of daily exposure to household air pollution.'
          },
          {
            id: 322,
            question: 'What is the overall meaning of the final paragraph?',
            options: {
              A: 'Traditional food should be replaced by modern diets.',
              B: 'Immediate action is needed to balance health and tradition.',
              C: 'Malaria is a more significant threat than indoor pollution.'
            },
            correctOption: 'B',
            explanation: 'Urges balanced intervention to avoid premature deaths without wiping out cultural culinary heritages.'
          }
        ]
      },
      {
        id: 'reading-4b',
        title: 'PART 3B: READING BEYOND GRADE LEVEL',
        instructions: 'Read the text and choose the correct answer (A, B, or C).',
        readingPassage: {
          title: "What's the Diagnosis?",
          text: `The landscape of modern medicine is shifting from an era of generalized treatment to one of precision diagnostics. For decades, the process of diagnosis was a diagnostic "detective game" played by physicians, relying on physical symptoms, patient history, and a touch of clinical intuition. However, as diseases become more complex and our understanding of genetics deeper, the margin for error in traditional diagnosis has narrowed. Today, the question "What’s the diagnosis?" is increasingly answered not just by doctors, but by algorithms and genomic sequencing.

One of the most significant breakthroughs is the integration of Artificial Intelligence (AI) in medical imaging. Radiologists, once the sole interpreters of X-rays and MRIs, now work alongside software capable of detecting anomalies that are invisible to the human eye. These tools can analyze thousands of images in seconds, identifying patterns that correlate with early-stage malignancies. While this increases accuracy, it also raises ethical questions regarding the "de-skilling" of medical professionals. If a machine provides the diagnosis, what happens to the doctor’s ability to think critically when the power goes out?

Furthermore, rare diseases—often referred to as "medical orphans"—benefit the most from these advancements. Patients with rare conditions previously spent an average of seven years in a "diagnostic odyssey," moving from specialist to specialist without an answer. Genomic testing can now pinpoint the exact genetic mutation responsible for a condition in a single step. This connection between technology and patient welfare is life-changing, yet it remains inaccessible to the vast majority of the global population due to high costs.

However, a diagnosis is only half the battle. The psychological impact of receiving a definitive, perhaps incurable, diagnosis can be devastating. Modern healthcare systems are struggling to keep pace with the counseling requirements that follow high-tech testing. As we move forward, the challenge lies in ensuring that the precision of our technology is matched by the compassion of our care.`
        },
        questions: [
          {
            id: 323,
            question: 'How has the process of diagnosis changed over the years according to the text?',
            options: {
              A: 'It has moved from relying on technology to relying on intuition.',
              B: 'It has evolved from clinical intuition to a data-driven approach.',
              C: 'It has become simpler due to the decrease in new diseases.'
            },
            correctOption: 'B',
            explanation: 'It shifted from relying on physician narratives/clinical intuition to digital algorithms, AI, and genomic data.'
          },
          {
            id: 324,
            question: 'What is a potential negative consequence of using AI in radiology?',
            options: {
              A: 'It takes longer to analyze images than a human radiologist.',
              B: 'It might lead to a decline in the specialized skills of doctors.',
              C: 'It is unable to detect early-stage malignancies.'
            },
            correctOption: 'B',
            explanation: 'The text discusses the "de-skilling" and potential erosion of critical thinking skills due to over-reliance.'
          },
          {
            id: 325,
            question: 'The term "diagnostic odyssey" refers to:',
            options: {
              A: 'A successful and quick medical treatment.',
              B: 'The long and difficult journey to identify a rare disease.',
              C: 'A type of genetic testing used in modern hospitals.'
            },
            correctOption: 'B',
            explanation: 'Defined as the typical 7-year extensive timeline rare disease patients spend trying to identify their diagnosis.'
          },
          {
            id: 326,
            question: 'Why is genomic testing not widely used globally?',
            options: {
              A: 'It is considered unethical in most countries.',
              B: 'The financial cost is too high for most people.',
              C: 'It is less accurate than traditional blood tests.'
            },
            correctOption: 'B',
            explanation: 'High cost is explicitly cited as making it inaccessible to the majority of the global population.'
          },
          {
            id: 327,
            question: 'What is the relationship between technology and rare diseases in the text?',
            options: {
              A: 'Technology has made rare diseases more common.',
              B: 'Technology provides a faster way to identify genetic mutations.',
              C: 'Rare diseases are preventing technology from advancing.'
            },
            correctOption: 'B',
            explanation: 'Genomic testing allows doctors to identify exact mutations in a single step, bypassing years of manual diagnostics.'
          },
          {
            id: 328,
            question: 'Which word best captures the author’s attitude toward the future of medicine?',
            options: {
              A: 'Cynical',
              B: 'Balanced',
              C: 'Indifferent'
            },
            correctOption: 'B',
            explanation: 'The author highlights both amazing breakthroughs (AI accuracy, genomic speed) and crucial warnings (ethical challenges, counseling deficits).'
          },
          {
            id: 329,
            question: 'What does the author suggest about the current state of healthcare systems?',
            options: {
              A: 'They are fully prepared for the future of AI.',
              B: 'They are failing to provide enough emotional support for patients.',
              C: 'They should stop using genomic testing until costs go down.'
            },
            correctOption: 'B',
            explanation: 'Systems struggle with "counseling requirements that follow high-tech testing," highlighting a lack of compassion focus.'
          },
          {
            id: 330,
            question: 'What is the main message of the text?',
            options: {
              A: 'Technology is the only important factor in modern medicine.',
              B: 'Rare diseases are no longer a problem for doctors.',
              C: 'Advancing diagnostics must be balanced with human-centered care.'
            },
            correctOption: 'C',
            explanation: 'The ultimate challenge lies in ensuring that technological physical precision is paired with empathetic and compassionate care.'
          }
        ]
      }
    ],
    writing: [
      {
        id: 'writing-4-1',
        title: '4.1: Summary Task',
        instructions: 'Read the perspectives carefully and summarize them in your own words. Write at least 4-5 sentences.',
        prompt: `Perspective A: "Stress is an inevitable part of modern life. Instead of trying to eliminate it, we should focus on wellness habits like meditation and exercise to build resilience. These habits act as a buffer, allowing us to maintain productivity despite high pressure."

Perspective B: "The current focus on wellness habits is a distraction. The real issue is the systemic overwork and societal pressure that cause stress. Simply doing yoga won't help if the underlying cause—an unhealthy lifestyle and workload—isn't changed."`,
        expectedSentences: '4-5 sentences'
      },
      {
        id: 'writing-4-2',
        title: '4.2: Opinion Essay',
        instructions: 'Write an opinion essay of at least 220 words based on the provided prompt.',
        prompt: `"Many people believe that happiness is a result of luck or external circumstances, while others argue that happiness is a habit that can be developed through specific wellness practices and mental discipline."

Write an essay of at least 220 words expressing your opinion on this topic. In your essay, you must address the following prompts:
1. To what extent can individuals control their own levels of happiness?
2. How do daily wellness habits (like sleep, diet, or social connections) impact long-term stress levels?
3. What role should society or employers play in promoting the wellness of individuals?`,
        minimumWords: 220
      }
    ]
  }
];
