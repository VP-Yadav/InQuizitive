import React from 'react';

const QuizResult = ({ score, numQuestions, setQuizFinished, setQuizStarted }) => {
  const restartQuiz = () => {
    setQuizFinished(false);
    setQuizStarted(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-6 w-4/5 md:w-1/2 lg:w-2/3 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Quiz Completed!</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        You scored{' '}
        <span className="font-bold text-indigo-600 dark:text-indigo-400">
          {score}
        </span>{' '}
        out of{' '}
        <span className="font-bold text-indigo-600 dark:text-indigo-400">
          {numQuestions}
        </span>.
      </p>
      <button
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        onClick={restartQuiz}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default QuizResult;
