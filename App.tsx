
import React, { useState, useEffect } from 'react';
import { RAW_LEVELS } from './constants';
import { DocumentViewer } from './components/DocumentViewer';
import { JournalTable } from './components/JournalTable';
import { PlanComptableModal, DeclarationTvaModal, CodesPopsyModal } from './components/ReferenceTools';
import { JournalRow, LevelData } from './types';
import { BookOpen, ChevronRight, ChevronLeft, LogIn, AlertCircle, Printer, RotateCcw, Trophy, FileText, List, Grid } from 'lucide-react';

const LoginScreen: React.FC<{ onLogin: (email: string) => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@') || email.length < 5) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }
    onLogin(email);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col md:flex-row">
        <div className="bg-yellow-500 md:w-1/3 p-8 flex flex-col justify-between text-slate-900">
          <div><BookOpen size={48} className="mb-4" /><h1 className="text-2xl font-bold leading-tight">Exercices de comptabilité POPSY</h1></div>
          <div className="mt-8 text-sm font-semibold opacity-80">Institut Saint-Luc Frameries</div>
        </div>
        <div className="p-8 md:w-2/3">
          <h2 className="text-xl font-bold mb-4 text-slate-800">Bienvenue</h2>
          <p className="text-slate-600 mb-6 text-sm leading-relaxed">Mode Évaluation. Complétez les 31 exercices. Vos réponses seront compilées dans un dossier final.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Nom et Prénom (Email)</label>
              <input id="email" type="email" required placeholder="prénom.nom@istlm.org" value={email} onChange={(e) => { setEmail(e.target.value); setError(''); }} className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${error ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-yellow-200'}`} />
              {error && <div className="flex items-center gap-2 text-red-600 text-xs mt-2"><AlertCircle size={14} /><span>{error}</span></div>}
            </div>
            <button type="submit" className="w-full bg-slate-800 text-white font-bold py-3 rounded-lg hover:bg-slate-900 transition-colors flex items-center justify-center gap-2"><span>Commencer</span><LogIn size={18} /></button>
          </form>
        </div>
      </div>
    </div>
  );
};

interface FinalReportProps {
    userEmail: string;
    levels: LevelData[];
    allAnswers: Record<number, Record<number, JournalRow[]>>;
    onPrint: () => void;
    onRestart: () => void;
}

const FinalReport: React.FC<FinalReportProps> = ({ userEmail, levels, allAnswers, onPrint, onRestart }) => {
    return (
        <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center animate-in fade-in duration-500 print:bg-white print:p-0">
            {/* En-tête visible uniquement à l'impression (fixe sur chaque page via CSS) */}
            <div id="print-header" className="print-block hidden border-b border-gray-300 pb-2 mb-4 w-full flex justify-between items-center text-xs">
                <span className="font-bold uppercase">Dossier d'évaluation comptable</span>
                <span>Élève : <span className="font-bold">{userEmail}</span></span>
                <span>{new Date().toLocaleDateString()}</span>
            </div>

            {/* Vue Ecran Fin (Non imprimée) */}
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl w-full text-center print-hidden mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full text-green-600 mb-6"><Trophy size={48} /></div>
                <h1 className="text-3xl font-bold mb-4">Évaluation Terminée</h1>
                <p className="mb-8 text-gray-600">Vous avez complété les 31 exercices.<br/>Cliquez ci-dessous pour générer et imprimer votre dossier complet.</p>
                <div className="flex justify-center gap-4">
                    <button onClick={onPrint} className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg font-bold"><Printer size={20}/> Imprimer le dossier</button>
                    <button onClick={onRestart} className="bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-slate-50 transition-colors font-bold"><RotateCcw size={20}/> Recommencer</button>
                </div>
            </div>

            {/* Contenu Imprimable (Dossier Complet) */}
            <div className="w-full max-w-4xl print-content">
                {levels.map((level, i) => (
                    <div key={level.id} className="mb-8 print-block no-break page-break border-b-2 border-dashed border-gray-300 pb-8">
                        
                        {/* Titre Exercice */}
                        <div className="mb-6 border-l-4 border-slate-800 pl-4 py-2 bg-gray-100 break-inside-avoid">
                            <h2 className="text-xl font-bold">Exercice {i+1} : {level.title}</h2>
                            <p className="text-sm text-gray-600 italic">{level.description}</p>
                        </div>
                        
                        {/* 1. DOCUMENT (ENONCE) */}
                        <div className="mb-6 break-inside-avoid">
                            {level.documents.map((d, docIdx) => <DocumentViewer key={docIdx} document={d} />)}
                        </div>
                        
                        {/* 2. REPONSE ELEVE */}
                        <div className="break-inside-avoid">
                            <h3 className="font-bold text-sm uppercase text-slate-500 mb-2 border-b">Vos écritures :</h3>
                            {level.requiredJournals.map((j, jIdx) => (
                                <JournalTable 
                                    key={jIdx} 
                                    type={j.type} 
                                    defaultDate={j.defaultDate} 
                                    rows={allAnswers[level.id]?.[jIdx] || []} 
                                    setRows={()=>{}} 
                                    readOnly={true} 
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Utils
const shuffleArray = (array: LevelData[]) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};

type ActiveModal = 'NONE' | 'PLAN' | 'TVA' | 'CODES';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  
  const [shuffledLevels, setShuffledLevels] = useState<LevelData[]>([]);
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const [activeModal, setActiveModal] = useState<ActiveModal>('NONE');
  const [allUserAnswers, setAllUserAnswers] = useState<Record<number, Record<number, JournalRow[]>>>({});

  useEffect(() => {
      const levelOne = RAW_LEVELS.find(l => l.id === 1);
      const otherLevels = RAW_LEVELS.filter(l => l.id !== 1);
      const shuffledOthers = shuffleArray(otherLevels);
      
      if (levelOne) {
          setShuffledLevels([levelOne, ...shuffledOthers]);
      } else {
          setShuffledLevels(shuffleArray(RAW_LEVELS));
      }
  }, []);

  const currentLevel = shuffledLevels[currentLevelIdx];

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsAuthenticated(true);
  };

  const handlePrint = () => window.print();

  const handleRestart = () => {
      setIsCompleted(false);
      setCurrentLevelIdx(0);
      setAllUserAnswers({});
      
      const levelOne = RAW_LEVELS.find(l => l.id === 1);
      const otherLevels = RAW_LEVELS.filter(l => l.id !== 1);
      const shuffledOthers = shuffleArray(otherLevels);
      if (levelOne) {
          setShuffledLevels([levelOne, ...shuffledOthers]);
      }
      
      window.scrollTo(0, 0);
  };

  const handleNext = () => {
    if (currentLevelIdx < shuffledLevels.length - 1) {
      setCurrentLevelIdx(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsCompleted(true);
    }
  };

  const updateJournalRows = (levelId: number, journalIndex: number, rows: JournalRow[]) => {
    setAllUserAnswers(prev => ({
      ...prev,
      [levelId]: { ...(prev[levelId] || {}), [journalIndex]: rows }
    }));
  };

  if (!isAuthenticated) return <LoginScreen onLogin={handleLogin} />;
  if (!currentLevel) return <div>Chargement...</div>;
  if (isCompleted) return <FinalReport userEmail={userEmail} levels={shuffledLevels} allAnswers={allUserAnswers} onPrint={handlePrint} onRestart={handleRestart} />;

  const getCurrentJournalRows = (journalIndex: number) => allUserAnswers[currentLevel.id]?.[journalIndex] || [];

  return (
    <>
      <div className="min-h-screen flex flex-col font-sans print:hidden bg-slate-50">
        <header className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-500 p-2 rounded text-slate-900"><BookOpen size={24} /></div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">Compta POPSY - Evaluation</h1>
                <div className="flex items-center gap-2 text-xs text-slate-400"><span>{userEmail}</span></div>
              </div>
            </div>
            <div className="text-center"><span className="block text-xs text-slate-400 uppercase tracking-widest">Question</span><span className="font-bold text-lg">{currentLevelIdx + 1} / {shuffledLevels.length}</span></div>
          </div>
        </header>

        <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8 pb-32">
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">{currentLevel.title}</h2>
              <p className="text-slate-600 mb-4">{currentLevel.description}</p>
              <div className="h-1 w-20 bg-yellow-500 rounded"></div>
            </div>
            <div className="space-y-6">
              {currentLevel.documents.map((doc, idx) => (
                <DocumentViewer key={idx} document={doc} />
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="space-y-8">
              {currentLevel.requiredJournals.map((journalTemplate, idx) => (
                <JournalTable
                  key={`${currentLevel.id}-${idx}`}
                  type={journalTemplate.type}
                  defaultDate={journalTemplate.defaultDate}
                  rows={getCurrentJournalRows(idx)}
                  setRows={(rows) => updateJournalRows(currentLevel.id, idx, rows)}
                />
              ))}
            </div>
          </div>
        </main>

        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 shadow-2xl z-40">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
               <button onClick={() => setActiveModal('PLAN')} className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-sm font-semibold transition-colors whitespace-nowrap"><List size={16} /> Plan Comptable</button>
               <button onClick={() => setActiveModal('TVA')} className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-sm font-semibold transition-colors whitespace-nowrap"><FileText size={16} /> Déclaration TVA</button>
               <button onClick={() => setActiveModal('CODES')} className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-sm font-semibold transition-colors whitespace-nowrap"><Grid size={16} /> Codes Popsy</button>
            </div>
            <div className="flex gap-4">
              <button onClick={handleNext} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg flex items-center gap-2 transition-transform transform active:scale-95">
                  {currentLevelIdx < shuffledLevels.length - 1 ? 'Exercice Suivant' : 'Terminer'} <ChevronRight size={20}/>
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeModal === 'PLAN' && <PlanComptableModal onClose={() => setActiveModal('NONE')} />}
      {activeModal === 'TVA' && <DeclarationTvaModal onClose={() => setActiveModal('NONE')} />}
      {activeModal === 'CODES' && <CodesPopsyModal onClose={() => setActiveModal('NONE')} />}
    </>
  );
};

export default App;
