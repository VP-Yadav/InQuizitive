import React, { useState } from 'react';

const QuizCard = ({ questions, setQuizFinished, setQuizStarted, setScore, score, setUserAnswers }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [answers, setAnswers] = useState([]); // Track answers within QuizCard

  const handleNextQuestion = () => {
    if (!selectedOption) return alert('Please select an option!');

    // Save the user's answer
    const currentQuestion = questions[currentQuestionIndex];
    const newAnswer = {
      question: currentQuestion.question,
      userAnswer: selectedOption,
      correctAnswer: currentQuestion.answer,
    };

    setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);

    // Update score
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
    setSelectedOption('');

    // Move to the next question or finish the quiz
    if (currentQuestionIndex + 1 === questions.length) {
      setUserAnswers([...answers, newAnswer]); // Pass all answers to App
      setQuizFinished(true);
      setQuizStarted(false);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 mt-6 w-4/5 md:w-1/2 lg:w-1/3 animate-fadeIn">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>
      <p className="mb-4 text-gray-800 dark:text-gray-300">
        {questions[currentQuestionIndex].question}
      </p>
      <div className="mb-4">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <label
            key={index}
            className={`block p-3 border rounded-lg mb-2 cursor-pointer ${
              selectedOption === option
                ? 'bg-indigo-300 text-white dark:bg-indigo-500 dark:text-gray-100'
                : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <input
              type="radio"
              name="quiz-option"
              value={option}
              className="mr-2"
              onChange={() => setSelectedOption(option)}
            />
            <span className="text-gray-800 dark:text-gray-300">{option}</span>
          </label>
        ))}
      </div>
      <button
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        onClick={handleNextQuestion}
      >
        {currentQuestionIndex + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
      </button>
    </div>
  );
};

export default QuizCard;
