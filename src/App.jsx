import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuizSetup from './components/QuizSetup';
import QuizCard from './components/QuizCard';
import QuizResult from './components/QuizResult';
import ReviewQuestions from './components/ReviewQuestions';
import questionsData from './data/questions.json';
import 'tailwindcss/tailwind.css';

function App() {
  const [subject, setSubject] = useState('');
  const [numQuestions, setNumQuestions] = useState(5);
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const startQuiz = () => {
    if (!subject || !numQuestions) return alert('Please select subject and number of questions!');
    const filteredQuestions = questionsData[subject].slice(0, numQuestions);
    setQuestions(filteredQuestions);
    setQuizStarted(true);
    setQuizFinished(false);
    setScore(0);
    setUserAnswers([]);
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="container mx-auto px-4">
        {!quizStarted && !quizFinished && (
          <QuizSetup
            subject={subject}
            setSubject={setSubject}
            numQuestions={numQuestions}
            setNumQuestions={setNumQuestions}
            startQuiz={startQuiz}
          />
        )}
        {quizStarted && (
          <QuizCard
            questions={questions}
            setQuizFinished={setQuizFinished}
            setQuizStarted={setQuizStarted}
            setScore={setScore}
            score={score}
            setUserAnswers={setUserAnswers}
          />
        )}
        {quizFinished && (
          <>
            <QuizResult
              score={score}
              numQuestions={numQuestions}
              setQuizFinished={setQuizFinished}
              setQuizStarted={setQuizStarted}
            />
            <ReviewQuestions userAnswers={userAnswers} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
