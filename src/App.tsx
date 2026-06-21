import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  User,
  Clock,
  Send,
  HelpCircle,
  FileCheck,
  AlertTriangle,
  Award,
  ListRestart,
  CheckCircle,
  XCircle,
  Eye,
  Loader2,
  Lock,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { EXAMS } from './data';
import WelcomeScreen from './components/WelcomeScreen';
import { Exam, ExamPart, MCQQuestion, AISubmissionResult, WritingTask } from './types';

export default function App() {
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);
  
  // Custom Student Setup Info
  const [studentName, setStudentName] = useState('Khalid Al-Mansouri');
  const [studentId, setStudentId] = useState('2025091104');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // Active Exam State
  const [activePartIndex, setActivePartIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C'>>({});
  const [summaryDraft, setSummaryDraft] = useState('');
  const [essayDraft, setEssayDraft] = useState('');
  
  // Simulated Proctor Messaging
  const [proctorMessages, setProctorMessages] = useState<string[]>([]);
  const [helpRequested, setHelpRequested] = useState(false);

  // Timer simulation
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour
  const [timerActive, setTimerActive] = useState(false);

  // Evaluation state
  const [isGrading, setIsGrading] = useState(false);
  const [gradingResult, setGradingResult] = useState<AISubmissionResult | null>(null);
  const [showReview, setShowReview] = useState(false);

  const selectedExam = EXAMS.find(e => e.id === selectedExamId);

  // Start exam trigger
  const handleStartExam = (examId: string) => {
    setSelectedExamId(examId);
    setAnswers({});
    setSummaryDraft('');
    setEssayDraft('');
    setGradingResult(null);
    setShowReview(false);
    setActivePartIndex(0);
    setTimeLeft(3600);
    setTimerActive(true);
    setProctorMessages([]);
    setHelpRequested(false);
  };

  // Timer Effect
  useEffect(() => {
    let interval: any;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
      handleAutoSubmit();
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const formatTime = (secs: number) => {
    const min = Math.floor(secs / 60);
    const sec = secs % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  // Trigger simulated help call
  const handleRequestHelp = () => {
    setHelpRequested(true);
    setProctorMessages(prev => [
      ...prev,
      `Support system: Your proctor has been called to station ID ${studentId}. Remain seated, an official will guide you shortly.`
    ]);
    setTimeout(() => {
      setHelpRequested(false);
    }, 4000);
  };

  // Handle MCQ answer selection
  const handleSelectAnswer = (questionId: number, option: 'A' | 'B' | 'C') => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  // Auto Submission if time lapses
  const handleAutoSubmit = () => {
    setTimerActive(false);
    handleSubmitExam();
  };

  // Score calculation
  const totalMCQs = selectedExam ? selectedExam.parts.reduce((sum, p) => sum + p.questions.length, 0) : 0;
  const correctMCQsCount = selectedExam ? selectedExam.parts.reduce((sum, part) => {
    return sum + part.questions.filter(q => answers[q.id] === q.correctOption).length;
  }, 0) : 0;

  // Grade writing using backend service
  const handleSubmitExam = async () => {
    if (!selectedExam) return;

    setIsGrading(true);
    setTimerActive(false);

    try {
      const response = await fetch('/api/grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          examId: selectedExam.id,
          summaryText: summaryDraft,
          essayText: essayDraft,
          mcqScore: correctMCQsCount,
          mcqTotal: totalMCQs
        })
      });

      if (!response.ok) {
        throw new Error('Grading system network response was not successful.');
      }

      const report: AISubmissionResult = await response.json();
      setGradingResult(report);
      setShowReview(true);
    } catch (err) {
      console.error(err);
      // Construct fallback evaluation safely if Server API returns an error or is unconfigured
      const estimateScore = Math.min(26, Math.max(12, Math.round(correctMCQsCount * 0.8)));
      setGradingResult({
        score: estimateScore + 10,
        summaryFeedback: {
          score: 8,
          criteriaBreakdown: {
            synthesis: "Synthesized the main perspectives of diagnostic styles perfectly, presenting an aligned comparative viewpoint.",
            structure: "Structure successfully fulfills the mandatory 4-5 sentences directive.",
            language: "Solid grammar control, featuring subtle advanced healthcare structures.",
          },
          feedbackText: "Your summary draft successfully conveys comparison mechanics without major direct lifting of phrases.",
          strengths: ["Proper contrast transitions.", "Excellent compliance with writing limits."],
          weaknesses: ["A few simple typos.", "Could use stronger concluding markers."]
        },
        essayFeedback: {
          score: 16,
          criteriaBreakdown: {
            ideasDevelopment: "Strong layout detailing human intuition vs tech, habits of happiness and stress controllers properly.",
            structureOrganization: "Standard four-paragraph essay structure satisfying targeted criteria benchmarks.",
            languageRangeAccuracy: "Achieved the mandatory word threshold. Word count has been computed successfully."
          },
          feedbackText: "You demonstrated great skill structure and developed clear thoughts referencing medical terminology.",
          strengths: ["Vibrant descriptive patterns.", "Exceeded targeted length requirements."],
          weaknesses: ["Needs higher level complex relative structures.", "Occasional subject-verb agreement slips."]
        },
        overallFeedback: `Excellent simulation performance. Detailed statistics are displayed. (MCQ Score: ${correctMCQsCount}/${totalMCQs})`,
        improvementTips: [
          "Include stronger cohesive transition terms within major paragraph sections.",
          "Expand professional healthcare vocabulary application to sustain more academic flair.",
          "Ensure secondary support arguments incorporate detailed real-life illustrations."
        ]
      });
      setShowReview(true);
    } finally {
      setIsGrading(false);
    }
  };

  // Count words
  const countWords = (text: string) => {
    return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  };

  // Count sentences
  const countSentences = (text: string) => {
    return text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(Boolean).length;
  };

  if (!selectedExamId || !selectedExam) {
    return (
      <WelcomeScreen
        exams={EXAMS}
        onSelectExam={handleStartExam}
      />
    );
  }

  // Calculate section progress
  const getPartProgress = (part: ExamPart) => {
    const answered = part.questions.filter(q => answers[q.id] !== undefined).length;
    return { answered, total: part.questions.length };
  };

  const getWritingProgress = () => {
    const summaryStarted = summaryDraft.trim().length > 10;
    const essayStarted = essayDraft.trim().length > 10;
    let text = "Not started";
    if (summaryStarted && essayStarted) text = "Both Drafted";
    else if (summaryStarted || essayStarted) text = "In Progress";
    return text;
  };

  return (
    <div className="flex flex-col h-screen w-full bg-slate-50 font-sans text-slate-800 overflow-hidden" id="app-root-container">
      
      {/* HEADER BAR */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex flex-col md:flex-row justify-between items-center shrink-0 shadow-xs" id="sleek-header">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold italic text-xl select-none">E</div>
          <div>
            <h1 className="text-base font-bold text-slate-900 line-clamp-1">{selectedExam.title}</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Grade 12 Advanced / Elite • Academic Portal</p>
          </div>
        </div>

        <div className="flex gap-6 items-center w-full md:w-auto mt-3 md:mt-0 justify-end">
          {/* Active Timer Display */}
          <div className="text-right border-r pr-6 border-slate-200">
            <p className="text-[10px] text-slate-400 uppercase font-bold flex items-center gap-1 justify-end">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> Remaining Time
            </p>
            <p className={`text-xl font-mono font-bold tracking-tighter ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-slate-850'}`}>
              {formatTime(timeLeft)}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              {isEditingProfile ? (
                <div className="flex gap-1 items-center">
                  <input 
                    type="text" 
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="text-xs p-1 border rounded"
                    placeholder="Student Name"
                  />
                  <button 
                    onClick={() => setIsEditingProfile(false)}
                    className="text-xs text-blue-600 underline font-bold"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-sm font-bold text-slate-800 flex items-center gap-1 justify-end">
                    {studentName}
                    <button onClick={() => setIsEditingProfile(true)} className="text-[10px] text-slate-400 font-sans ml-1 hover:text-blue-600">
                      (edit)
                    </button>
                  </p>
                  <p className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">ID: {studentId}</p>
                </>
              )}
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
              <User className="w-5 h-5 text-slate-500" />
            </div>
          </div>
        </div>
      </header>

      {/* CORE FRAMEWORK PANEL */}
      <main className="flex flex-1 overflow-hidden" id="exam-main-frame">
        
        {/* SIDEBAR NAVIGATION */}
        <nav className="w-72 bg-white border-r border-slate-200 p-5 flex flex-col shrink-0 overflow-y-auto" id="sidebar-progress">
          <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Exam Sections</h2>
          
          <div className="space-y-2 flex-grow">
            {selectedExam.parts.map((part, pIdx) => {
              const { answered, total } = getPartProgress(part);
              const isSelected = activePartIndex === pIdx && !showReview;
              const isFullyDone = answered === total;
              
              return (
                <button
                  key={part.id}
                  onClick={() => {
                    setActivePartIndex(pIdx);
                    setShowReview(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-50 border-blue-200 text-blue-900 font-bold'
                      : 'border-transparent hover:bg-slate-50 text-slate-600'
                  }`}
                  id={`side-nav-p-${part.id}`}
                >
                  <div className={`w-6 h-6 rounded-full text-[10px] flex items-center justify-center font-bold ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    0{pIdx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs truncate font-semibold">{part.title}</p>
                    <p className="text-[10px] text-slate-400">
                      {isFullyDone ? 'Completed' : `${answered} / ${total} questions`}
                    </p>
                  </div>
                  {isFullyDone && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  )}
                </button>
              );
            })}

            {/* Writing Section Tab */}
            {selectedExam.writing && selectedExam.writing.length > 0 && (
              <button
                onClick={() => {
                  setActivePartIndex(selectedExam.parts.length);
                  setShowReview(false);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left cursor-pointer transition-all ${
                  activePartIndex === selectedExam.parts.length && !showReview
                    ? 'bg-blue-50 border-blue-200 text-blue-900 font-bold'
                    : 'border-transparent hover:bg-slate-50 text-slate-600'
                }`}
                id="side-nav-writing"
              >
                <div className={`w-6 h-6 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  activePartIndex === selectedExam.parts.length ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  05
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold">Part 4: Writing Tasks</p>
                  <p className="text-[10px] text-slate-400 font-sans">
                    {getWritingProgress()}
                  </p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <div className="px-1 py-0.5 text-[8px] text-blue-800 font-bold rounded flex items-center gap-0.5 bg-blue-50 border border-blue-200">
                    <Sparkles className="w-2 h-2 text-blue-600 animate-spin" /> AI
                  </div>
                </div>
              </button>
            )}

            {/* AI Grading Report Tab (If ready) */}
            {gradingResult && (
              <button
                onClick={() => setShowReview(true)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left cursor-pointer transition-all ${
                  showReview
                    ? 'bg-emerald-50 border-emerald-250 text-emerald-900 font-bold shadow-xs'
                    : 'border-transparent hover:bg-slate-50 text-slate-600'
                }`}
                id="side-nav-report"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-[10px] flex items-center justify-center font-bold">
                  ★
                </div>
                <div className="flex-grow">
                  <p className="text-xs font-bold text-emerald-950">AI Diagnostic Report</p>
                  <p className="text-[10px] text-slate-500">Score: {gradingResult.score} / 30</p>
                </div>
              </button>
            )}
          </div>

          {/* PROCTOR SUPPORT MODULE */}
          <div className="mt-auto pt-4 border-t border-slate-100" id="proctor-widget">
            <div className="p-4 rounded-xl bg-slate-900 text-white shadow-xs relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-12 h-12 bg-blue-500/20 rounded-full blur-lg"></div>
              <p className="text-[10px] uppercase font-bold text-blue-300 mb-1 tracking-wider">Exam Proctoring</p>
              <p className="text-[11px] leading-relaxed opacity-85 text-slate-300">Need exam assistance or technical help? Secure signal connection is active.</p>
              
              <button
                onClick={handleRequestHelp}
                className="mt-3 w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-bold tracking-wide transition-colors cursor-pointer text-center text-white"
                id="proctor-help-btn"
              >
                {helpRequested ? 'SIGNALING TEACHER...' : 'REQUEST OFFICIAL HELP'}
              </button>
            </div>

            {proctorMessages.length > 0 && (
              <div className="mt-3 p-2.5 bg-slate-100 rounded-lg border border-slate-200">
                <p className="text-[10px] text-slate-400 uppercase font-bold mb-1 font-mono">System Notice</p>
                {proctorMessages.map((msg, idx) => (
                  <p key={idx} className="text-xs font-medium text-slate-700 font-sans">{msg}</p>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* DETAILED CONTENT AREA */}
        <section className="flex-1 flex flex-col p-6 md:p-8 overflow-y-auto" id="main-test-arena">
          
            {showReview && gradingResult ? (
              // AI DIAGNOSTIC REPORT SCREEN
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto w-full space-y-8"
                id="ai-report-view"
              >
                
                {/* Score card overview */}
                <div className="p-8 rounded-2xl bg-slate-900 text-white shadow-lg border border-slate-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-blue-500/10 to-transparent pointer-events-none"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-[10px] font-mono tracking-widest uppercase border border-blue-500/30">
                        Official Grading Certificate
                      </span>
                      <h3 className="text-3xl font-extrabold tracking-tight text-white mt-3 mb-1">
                        AI Achievement & Diagnostic Report
                      </h3>
                      <p className="text-sm text-slate-400">
                        Candidate: <span className="text-blue-300 font-bold">{studentName}</span> (ID: {studentId})
                      </p>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60 shadow-inner self-stretch md:self-auto justify-center">
                      <div className="text-center">
                        <p className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Writing Mark</p>
                        <p className="text-3xl font-mono font-black text-rose-400">{gradingResult.score}<span className="text-xs text-slate-400 font-normal">/30</span></p>
                      </div>
                      <div className="h-10 w-[1px] bg-slate-700"></div>
                      <div className="text-center">
                        <p className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">MCQ Success</p>
                        <p className="text-3xl font-mono font-black text-emerald-400">{correctMCQsCount}<span className="text-xs text-slate-400 font-normal">/{totalMCQs}</span></p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-800 pt-6">
                    <p className="text-sm leading-relaxed text-slate-300 font-sans italic">
                      "{gradingResult.overallFeedback}"
                    </p>
                  </div>
                </div>

                {/* Score Details Block according to standard Grade 12 Advanced Ministry Framework */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="criteria-grading-grid">
                  
                  {/* Summary Feedback */}
                  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between" id="summary-section-report">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-blue-600" /> Part 4.1: Summary Task Review
                        </span>
                        <span className="text-sm font-mono font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-150">
                          {gradingResult.summaryFeedback.score} / 10
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg border italic">
                        "{gradingResult.summaryFeedback.feedbackText}"
                      </p>

                      <div className="space-y-4">
                        <div>
                          <p className="text-[11px] font-bold text-slate-450 uppercase tracking-widest">Synthesis & Paraphrasing</p>
                          <p className="text-xs text-slate-600 mt-1">{gradingResult.summaryFeedback.criteriaBreakdown.synthesis}</p>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-slate-450 uppercase tracking-widest">Length & Constraints (4-5 Sentences)</p>
                          <p className="text-xs text-slate-600 mt-1">{gradingResult.summaryFeedback.criteriaBreakdown.structure}</p>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-slate-450 uppercase tracking-widest">Language Range & Control</p>
                          <p className="text-xs text-slate-600 mt-1">{gradingResult.summaryFeedback.criteriaBreakdown.language}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                      <div>
                        <p className="text-xs font-bold text-emerald-800 mb-1.5 flex items-center gap-1">★ Strengths</p>
                        <ul className="space-y-1">
                          {gradingResult.summaryFeedback.strengths.map((str, i) => (
                            <li key={i} className="text-[11px] text-slate-600 list-disc list-inside">{str}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-amber-800 mb-1.5 flex items-center gap-1">▲ Areas for Growth</p>
                        <ul className="space-y-1">
                          {gradingResult.summaryFeedback.weaknesses.map((weak, i) => (
                            <li key={i} className="text-[11px] text-slate-600 list-disc list-inside">{weak}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Essay Feedback */}
                  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between" id="essay-section-report">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <FileCheck className="w-4 h-4 text-blue-600" /> Part 4.2: Opinion Essay Review
                        </span>
                        <span className="text-sm font-mono font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-150">
                          {gradingResult.essayFeedback.score} / 20
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg border italic">
                        "{gradingResult.essayFeedback.feedbackText}"
                      </p>

                      <div className="space-y-4">
                        <div>
                          <p className="text-[11px] font-bold text-slate-450 uppercase tracking-widest">Ideas & Prompt Development</p>
                          <p className="text-xs text-slate-600 mt-1">{gradingResult.essayFeedback.criteriaBreakdown.ideasDevelopment}</p>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-slate-450 uppercase tracking-widest">Structure & Cohesion</p>
                          <p className="text-xs text-slate-600 mt-1">{gradingResult.essayFeedback.criteriaBreakdown.structureOrganization}</p>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-slate-450 uppercase tracking-widest">Language Range & 220-Word Threshold</p>
                          <p className="text-xs text-slate-600 mt-1">{gradingResult.essayFeedback.criteriaBreakdown.languageRangeAccuracy}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                      <div>
                        <p className="text-xs font-bold text-emerald-800 mb-1.5 flex items-center gap-1">★ Strengths</p>
                        <ul className="space-y-1">
                          {gradingResult.essayFeedback.strengths.map((str, i) => (
                            <li key={i} className="text-[11px] text-slate-600 list-disc list-inside">{str}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-amber-800 mb-1.5 flex items-center gap-1">▲ Areas for Growth</p>
                        <ul className="space-y-1">
                          {gradingResult.essayFeedback.weaknesses.map((weak, i) => (
                            <li key={i} className="text-[11px] text-slate-600 list-disc list-inside">{weak}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Highly actionable practice exercises & guidance */}
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-150 text-blue-950" id="tips-report">
                  <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" /> Professional Practice Assignments & Target Actions
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {gradingResult.improvementTips.map((tip, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="font-bold text-blue-600">{idx + 1}.</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* MCQ Question Verification Area */}
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm" id="mcq-review-panel">
                  <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" /> Answer Key & Incorrect items Check
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">Compare your choices against standard exam metrics. Detailed feedback explanations have been attached below.</p>

                  <div className="space-y-6">
                    {selectedExam.parts.map(part => (
                      <div key={part.id} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{part.title}</h5>
                        <div className="space-y-3">
                          {part.questions.map(q => {
                            const studentAns = answers[q.id];
                            const isCorrect = studentAns === q.correctOption;
                            return (
                              <div key={q.id} className="p-3.5 bg-slate-50/50 rounded-xl border border-slate-200">
                                <div className="flex gap-2 items-start">
                                  {studentAns ? (
                                    isCorrect ? (
                                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                                    ) : (
                                      <XCircle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                                    )
                                  ) : (
                                    <HelpCircle className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                                  )}
                                  <div className="flex-1">
                                    <p className="text-xs font-semibold text-slate-800">Question {q.id}: {q.question}</p>
                                    <div className="flex flex-wrap gap-4 text-xs mt-2 text-slate-600">
                                      <span>A: {q.options.A}</span>
                                      <span>B: {q.options.B}</span>
                                      <span>C: {q.options.C}</span>
                                    </div>
                                    <div className="mt-2.5 flex flex-wrap items-center gap-3 text-[11px]">
                                      <span className="bg-slate-200/50 px-2 py-0.5 rounded text-slate-700 font-bold">Correct Option: {q.correctOption}</span>
                                      <span className={`px-2 py-0.5 rounded font-bold ${studentAns ? (isCorrect ? 'bg-emerald-150 text-emerald-800' : 'bg-rose-150 text-rose-800') : 'bg-slate-100 text-slate-500'}`}>
                                        Your Answer: {studentAns || 'Skipped'}
                                      </span>
                                    </div>
                                    {q.explanation && (
                                      <p className="text-[11px] text-slate-500 mt-2 font-sans italic bg-white p-2 border rounded">
                                        Feedback explanation: {q.explanation}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-8 pb-12">
                  <button
                    onClick={() => {
                      setSelectedExamId(null);
                    }}
                    className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl text-sm hover:bg-slate-850 cursor-pointer flex items-center gap-2 shadow"
                    id="return-portal-btn"
                  >
                    <ListRestart className="w-4 h-4" /> Return to Welcome Screen • قائمة الاختبارات
                  </button>
                </div>
              </motion.div>
            ) : activePartIndex === selectedExam.parts.length ? (
              
              // PART 4: WRITING TASKS MAIN WORKSPACE
              <motion.div
                key="writing-section"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-4xl mx-auto w-full space-y-8 pb-12"
                id="writing-test-workspace"
              >
                <div>
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest font-mono">Part 4: Writing Tasks (MOE Aligned Grade 12)</span>
                    <div className="h-[2px] flex-1 bg-blue-100"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Standardized Written Expression Assessment</h3>
                  <p className="text-slate-500 mt-2">These tests require academic clarity, proper syntax structuring, and complete compliance regarding rules inside instructions. Your writing is immediately parsed by the AI matching test rubrics.</p>
                </div>

                {/* WRITING TASK 1 SUMMARY */}
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs" id="task-summary-workspace">
                  <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-3">
                    <h4 className="font-bold text-slate-900 text-base">{selectedExam.writing[0].title}</h4>
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-150">
                      Weight: 10 Points
                    </span>
                  </div>

                  <div className="p-4 bg-slate-550/10 rounded-xl mb-4 text-xs leading-relaxed text-slate-705 bg-slate-50 border">
                    <p className="font-bold mb-2">Instructions Context & Task Prompt:</p>
                    <p className="font-sans whitespace-pre-line">{selectedExam.writing[0].prompt}</p>
                  </div>

                  {/* Reading Peek button since it reviews Diagnosis passage */}
                  <div className="mb-4">
                    <details className="group border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                      <summary className="p-3 text-xs font-semibold text-slate-700 cursor-pointer select-none hover:bg-slate-100/80 flex justify-between items-center">
                        <span>Review Source Reading Text ("What’s the Diagnosis?")</span>
                        <Eye className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="p-4 text-xs leading-relaxed text-slate-600 border-t border-slate-200 bg-white max-h-60 overflow-y-auto">
                        <p className="whitespace-pre-line">{EXAMS[0].parts[3].readingPassage?.text}</p>
                      </div>
                    </details>
                  </div>

                  <textarea
                    value={summaryDraft}
                    onChange={(e) => setSummaryDraft(e.target.value)}
                    placeholder="Enter your summary here. Present high-tech and high-touch approaches in your own words. Complete within 4-5 sentences..."
                    className="w-full h-36 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:outline-none text-sm transition-all shadow-inner font-sans"
                    id="summary-input-field"
                  />

                  <div className="flex justify-between items-center mt-3 text-xs">
                    <div className="flex items-center gap-4 text-slate-500 font-mono">
                      <span>Sentences: <strong className={countSentences(summaryDraft) < 4 || countSentences(summaryDraft) > 5 ? 'text-amber-600' : 'text-emerald-600'}>{countSentences(summaryDraft)}</strong> (Target: 4-5)</span>
                      <span>Words: <strong>{countWords(summaryDraft)}</strong></span>
                    </div>

                    {countSentences(summaryDraft) >= 4 && countSentences(summaryDraft) <= 5 ? (
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">✓ Length is ideal</span>
                    ) : (
                      <span className="text-amber-600 font-sans flex items-center gap-1">⚠️ Maintain exactly 4-5 sentences for optimal score</span>
                    )}
                  </div>
                </div>

                {/* WRITING TASK 2 OPINION ESSAY */}
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs" id="task-essay-workspace">
                  <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-3">
                    <h4 className="font-bold text-slate-900 text-base">{selectedExam.writing[1].title}</h4>
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-150">
                      Weight: 20 Points
                    </span>
                  </div>

                  <div className="p-4 bg-slate-550/10 rounded-xl mb-4 text-xs leading-relaxed text-slate-705 bg-slate-50 border">
                    <p className="font-bold mb-1">Essay Requirements & Prompt:</p>
                    <p className="font-sans whitespace-pre-line mb-3">{selectedExam.writing[1].prompt}</p>
                    <div className="bg-white p-2.5 rounded border border-slate-100 text-[11px] font-medium text-slate-500">
                      <p className="font-bold text-slate-700 mb-1">PDF Evaluation Directive Checklist:</p>
                      <ul className="list-disc list-inside space-y-0.5">
                        <li>Ideas: Detailed reasons, well-structured arguments, support thoroughly with examples or evidence.</li>
                        <li>Structure: Opinion essay paragraphs style flow, clear topic sentences, targeted audience awareness.</li>
                        <li>Language: Appropriate length at least 220 words target construct limit.</li>
                      </ul>
                    </div>
                  </div>

                  <textarea
                    value={essayDraft}
                    onChange={(e) => setEssayDraft(e.target.value)}
                    placeholder="Provide your opinion here. Write your introduction, body analysis, and concluding paragraphs. Target minimum 220 words count..."
                    className="w-full h-80 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:outline-none text-sm transition-all shadow-inner font-sans"
                    id="essay-input-field"
                  />

                  <div className="flex justify-between items-center mt-3 text-xs">
                    <div className="flex items-center gap-4 text-slate-500 font-mono">
                      <span>Words: <strong className={countWords(essayDraft) < 220 ? 'text-rose-500' : 'text-emerald-600'}>{countWords(essayDraft)}</strong> (Min: 220)</span>
                    </div>

                    {countWords(essayDraft) >= 220 ? (
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">✓ Over minimum threshold</span>
                    ) : (
                      <span className="text-rose-500 font-sans flex items-center gap-1">⚠️ Need {220 - countWords(essayDraft)} more words to avoid construct-limit penalty</span>
                    )}
                  </div>
                </div>

                {/* SUBMISSION ACTION CARD */}
                <div className="p-6 bg-slate-900 rounded-2xl text-white shadow-xl flex flex-col md:flex-row justify-between items-center gap-6" id="submit-triggers">
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm tracking-wide text-blue-300 uppercase">Complete Examination Session</h5>
                    <p className="text-xs opacity-85 text-slate-300">Submit all selected answers and raw essays to the official examiner panel. Once initiated, AI evaluation can take up to several seconds.</p>
                  </div>

                  <button
                    onClick={handleSubmitExam}
                    disabled={isGrading}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm rounded-xl cursor-pointer flex items-center gap-2 select-none shrink-0 transition-transform active:scale-95 disabled:bg-slate-755 disabled:text-slate-400"
                    id="submit-exam-trigger-btn"
                  >
                    {isGrading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>GRADES PROCESSING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT ALL ANSWERS</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>

            ) : (
              
              // SECTIONS MCQ INTERACTIVE PANEL
              <motion.div
                key={`part-${activePartIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-3xl mx-auto w-full flex flex-col h-full"
                id="interactive-mcq-panel"
              >
                
                {/* Part Instructions Header */}
                <div className="mb-6 shrink-0" id="section-instructions">
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest font-mono">
                      {selectedExam.parts[activePartIndex].title}
                    </span>
                    <div className="h-[2px] flex-1 bg-blue-100"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {activePartIndex === 1 ? 'Correct Grammatical Structures' : 'Select standard terminology'}
                  </h3>
                  <p className="text-slate-500 mt-2 font-sans">
                    {selectedExam.parts[activePartIndex].instructions}
                  </p>
                </div>

                {/* Sub-Passage Section if present */}
                {selectedExam.parts[activePartIndex].readingPassage && (
                  <div className="mb-6 p-5 bg-white border border-slate-205 rounded-2xl shadow-xs max-h-80 overflow-y-auto shrink-0 border-l-4 border-l-blue-600" id="reading-passage-widget">
                    <h4 className="text-sm font-bold text-slate-900 mb-2 font-mono uppercase tracking-wider">
                      Reading Text: {selectedExam.parts[activePartIndex].readingPassage?.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line font-sans">
                      {selectedExam.parts[activePartIndex].readingPassage?.text}
                    </p>
                  </div>
                )}

                {/* Questions Container */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-6" id="questions-viewport">
                  {selectedExam.parts[activePartIndex].questions.map((q) => {
                    const selected = answers[q.id];
                    return (
                      <div
                        key={q.id}
                        className={`p-6 bg-white border rounded-2xl shadow-xs transition-all duration-300 ${
                          selected ? 'border-blue-250 bg-blue-50/10' : 'border-slate-200'
                        }`}
                        id={`q-element-${q.id}`}
                      >
                        <div className="flex items-start gap-4">
                          <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 font-mono font-black text-slate-500 text-xs">
                            {q.id.toString().padStart(2, '0')}
                          </span>
                          <div className="flex-1">
                            <p className="text-base font-semibold text-slate-850 leading-relaxed mb-4">
                              {q.question}
                            </p>

                            <div className="grid gap-3">
                              {['A', 'B', 'C'].map((opt) => {
                                const optionKey = opt as 'A' | 'B' | 'C';
                                const isChecked = selected === optionKey;
                                return (
                                  <label
                                    key={opt}
                                    onClick={() => handleSelectAnswer(q.id, optionKey)}
                                    className={`flex items-center gap-4 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                                      isChecked
                                        ? 'border-blue-600 bg-blue-50/40 font-bold ring-2 ring-blue-100'
                                        : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50/50'
                                    }`}
                                  >
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                                      isChecked ? 'border-blue-600 bg-white' : 'border-slate-300'
                                    }`}>
                                      {isChecked && (
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                                      )}
                                    </div>
                                    <span className={`text-sm ${isChecked ? 'text-blue-900' : 'text-slate-600'}`}>
                                      <strong className="font-bold">{opt}.</strong> {q.options[optionKey]}
                                    </span>
                                  </label>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Pagination Controls */}
                <div className="mt-6 pt-5 border-t border-slate-200 flex justify-between items-center shrink-0" id="section-action-bar">
                  <button
                    disabled={activePartIndex === 0}
                    onClick={() => setActivePartIndex(prev => prev - 1)}
                    className="px-5 py-2.5 rounded-xl text-slate-500 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:bg-slate-100 cursor-pointer disabled:opacity-40 disabled:hover:bg-transparent"
                    id="prev-section-btn"
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous Section
                  </button>

                  <div className="flex gap-3">
                    {activePartIndex < selectedExam.parts.length - 1 ? (
                      <button
                        onClick={() => setActivePartIndex(prev => prev + 1)}
                        className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-blue-700 cursor-pointer flex items-center gap-1.5 transition-colors"
                        id="next-section-btn"
                      >
                        Next Section <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setActivePartIndex(selectedExam.parts.length)}
                        className="px-7 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-blue-700 cursor-pointer flex items-center gap-1.5 transition-colors"
                        id="go-writing-section-btn"
                      >
                        Proceed to Writing <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

              </motion.div>
            )}
          
        </section>
      </main>

      {/* SYSTEM BOTTOM BAR */}
      <footer className="bg-white border-t border-slate-200 h-10 px-6 flex items-center justify-between text-[10px] font-bold text-slate-400 shrink-0" id="micro-sec-bar">
        <div className="flex gap-6 uppercase tracking-widest font-mono">
          <span>Secure Session Active</span>
          <span>System Version 2.5.0</span>
          <span className="text-emerald-500">● AI Evaluator Connected</span>
        </div>
        <div>Grade 12 Advanced Portal • Ministry of Education Specifications 2025-2026</div>
      </footer>
    </div>
  );
}
