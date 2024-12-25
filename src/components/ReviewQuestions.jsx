import React from 'react';

const ReviewQuestions = ({ userAnswers }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-6 w-4/5 md:w-1/2 lg:w-2/3">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
        Quiz Review
      </h2>
      <div>
        {userAnswers.map((answer, index) => (
          <div key={index} className="mb-6 border-b pb-4 border-gray-300 dark:border-gray-600">
            <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              <span className="text-indigo-600 dark:text-indigo-400">Q{index + 1}:</span> {answer.question}
            </p>
            <p>
              <span className="text-gray-700 dark:text-gray-300">Your Answer:</span>{' '}
              <span
                className={`font-bold ${
                  answer.userAnswer === answer.correctAnswer
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {answer.userAnswer}
              </span>
            </p>
            <p>
              <span className="text-gray-700 dark:text-gray-300">Correct Answer:</span>{' '}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">{answer.correctAnswer}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewQuestions;
