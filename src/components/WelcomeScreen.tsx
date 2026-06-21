import { motion } from 'motion/react';
import { BookOpen, Calendar, HelpCircle, GraduationCap, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { Exam } from '../types';

interface WelcomeScreenProps {
  exams: Exam[];
  onSelectExam: (examId: string) => void;
}

export default function WelcomeScreen({ exams, onSelectExam }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between selection:bg-blue-100 font-sans" id="welcome-container">
      {/* Official Top Banner */}
      <header className="border-b border-slate-200 bg-white" id="main-header">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-650 text-white rounded-xl shadow-sm bg-blue-600">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Grade 12 English Language Assessment Portal
              </h1>
              <p className="text-xs text-slate-500 font-mono">
                Academic Year 2025-2026 • Stage 9 (B2.2)
              </p>
            </div>
          </div>
          <div className="text-right sm:text-right text-slate-600 select-none">
            <div className="text-sm font-semibold text-blue-800 font-sans">بوابة تقييم اللغة الإنجليزية للصف الثاني عشر</div>
            <div className="text-xs text-slate-400">التعليم المتقدم والنخبة • المنهج الدراسي الدولي</div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 py-12 flex-grow w-full">
        {/* Welcome Text block */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
          id="hero-text"
        >
          <span className="px-3 py-1 bg-blue-50 text-blue-750 border border-blue-100 rounded-full text-xs font-semibold uppercase tracking-wider">
            Official Preparation Portal
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mt-4 mb-3 sm:text-5xl">
            Empowering Grade 12 Advanced & Elite Students
          </h2>
          <p className="text-lg text-slate-600">
            Welcome to the standardized Term 3 examination simulation. Test your capabilities in Vocabulary, complex Grammar, reading comprehension, and detailed essay writing with real-time AI-powered diagnostic grading.
          </p>
        </motion.div>

        {/* Exams Grid Section */}
        <div className="mb-10" id="exams-section-container">
          <div className="flex justify-between items-center mb-6 border-b border-slate-200 pb-2">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" /> Available Simulations • نماذج الامتحانات المتاحة
            </h3>
            <span className="text-xs text-slate-500 font-mono">Select an option to begin</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam, index) => {
              const isActive = exam.status === 'active';
              return (
                <motion.div
                  key={exam.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-xs border overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                    isActive 
                      ? 'border-slate-200 hover:shadow-md hover:border-blue-500 hover:-translate-y-1' 
                      : 'border-slate-100 bg-slate-50/50 opacity-75'
                  }`}
                  id={`exam-card-${exam.id}`}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      {isActive ? (
                        <span className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-semibold border border-blue-200">
                          Active • اختبار نشط
                        </span>
                      ) : (
                        <span className="bg-slate-200 text-slate-500 text-xs px-2.5 py-1 rounded-full font-semibold flex items-center gap-1">
                          <Lock className="w-3 h-3" /> Lock • قريباً
                        </span>
                      )}
                      <span className="text-xs text-slate-400 font-mono">{exam.year}</span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-950 mb-2 line-clamp-2">
                      {exam.title}
                    </h4>
                    
                    <div className="space-y-2 mt-4 text-xs text-slate-500 font-sans">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-slate-400" />
                        <span>{exam.grade}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>{exam.term} • Academic Assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-slate-400" />
                        <span>4 Sections (Vocab, Grammar, Reading, Writing)</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    {isActive ? (
                      <button
                        onClick={() => onSelectExam(exam.id)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer group"
                        id={`btn-start-${exam.id}`}
                      >
                        <span>Start Examination</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <div className="w-full text-slate-400 text-sm font-medium flex items-center justify-center gap-2 py-2">
                        <Lock className="w-4 h-4" />
                        <span>Awaiting Content • ستحصل عليه لاحقاً</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Informational Guidance Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8" id="info-grid">
          <div className="p-6 bg-blue-50/30 rounded-2xl border border-blue-100/70 shadow-2xs" id="guidance-students">
            <h4 className="text-blue-950 font-bold mb-3 flex items-center gap-2 text-base">
              <ShieldCheck className="w-5 h-5 text-blue-600" /> Student Directives • إرشادات هامة للطلاب
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Read all instructions on reading comprehension pieces before matching.</li>
              <li>Avoid scrolling back and forth aggressively during typing trials.</li>
              <li>Maintain the exact sentence count of 4-5 sentences in the Summary Task.</li>
              <li>Write at least 220 words for the Opinion Essay.</li>
              <li>Write entirely in your own words. Plagiarism drops evaluation scores dramatically.</li>
            </ul>
          </div>
          <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-150 shadow-sm" id="guidance-grading">
            <h4 className="text-blue-900 font-bold mb-3 flex items-center gap-2 text-base">
              <BookOpen className="w-5 h-5 text-blue-600" /> AI Diagnostic Grading Core • معايير التقويم الذكي
            </h4>
            <p className="text-sm text-slate-600 mb-2">
              Our AI engine enforces identical standards matching official Ministry test templates:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 font-semibold font-sans">
              <span className="bg-white p-2 border rounded shadow-2xs">Ideas Development (10 pts)</span>
              <span className="bg-white p-2 border rounded shadow-2xs">Cohesive Structure (10 pts)</span>
              <span className="bg-white p-2 border rounded shadow-2xs">Synthesis Mastery (5 pts)</span>
              <span className="bg-white p-2 border rounded shadow-2xs">Grammatical Accuracy (5 pts)</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800" id="welcome-footer">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div>
            <p>© 2025-2026 Grade 12 Advanced Mock System. Designed for ultimate preparation.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-550 border-r border-slate-700 pr-4">MOE Aligned Stage 9 B2.2</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
