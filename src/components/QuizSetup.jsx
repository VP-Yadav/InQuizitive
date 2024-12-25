import React from 'react';

const QuizSetup = ({ subject, setSubject, numQuestions, setNumQuestions, startQuiz }) => {
  const subjects = ['Operating System', 'OOPS', 'Data Structures'];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-1 w-4/5 md:w-1/2 lg:w-1/3">
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
          Select Subject:
        </label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="block w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg"
        >
          <option value="">--Choose--</option>
          {subjects.map((subj) => (
            <option key={subj} value={subj}>
              {subj}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
          Number of Questions:
        </label>
        <select
          value={numQuestions}
          onChange={(e) => setNumQuestions(Number(e.target.value))}
          className="block w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>
      <button
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        onClick={startQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizSetup;
