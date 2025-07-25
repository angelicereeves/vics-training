import React, { useState } from "react";

const quizData = [
  // Example format. Replace with your own data.
  {
    question: "Which wine pairs best with our Roasted Duck?",
    options: ["Pinot Noir", "Chardonnay", "Prosecco", "Malbec"],
    answer: "Pinot Noir",
  },
  {
    question: "What is the base spirit in an Old Fashioned?",
    options: ["Vodka", "Tequila", "Whiskey", "Rum"],
    answer: "Whiskey",
  },
  // Add more questions here
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOption("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white py-12 px-4">
      <div className="max-w-3xl mx-auto bg-black/70 rounded-2xl p-8 shadow-lg space-y-6">
        <h1 className="text-4xl font-bold text-center text-yellow-400">Training Quiz</h1>

        {isFinished ? (
          <div className="text-center space-y-4">
            <p className="text-xl font-semibold">Your Score: {score} / {quizData.length}</p>
            <button
              onClick={restartQuiz}
              className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div>
              <h2 className="text-xl font-semibold mb-4">
                {quizData[currentQuestion].question}
              </h2>
              <div className="space-y-3">
                {quizData[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition 
                      ${
                        selectedOption === option
                          ? "bg-yellow-500 text-black"
                          : "bg-gray-800 hover:bg-gray-700"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-right">
              <button
                onClick={handleNext}
                disabled={!selectedOption}
                className="mt-4 bg-red-500 hover:bg-red-400 text-white px-6 py-2 rounded-lg transition disabled:opacity-50"
              >
                {currentQuestion + 1 < quizData.length ? "Next" : "Finish"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
