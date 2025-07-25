import React, { useState } from "react";
import BGpic from "../../assets/BGimages/service1.jpg";

const quizSetSeven = [
  {
    question: "What pasta noodles do we not sell?",
    options: ["Tagliatelle", "Penne", "Tagliolini", "Rigationi"],
    answer: "Penne",
  },
  {
    question: "Which is a bottle of Chardonnay we do not sell?",
    options: ["Far Niente", "Patz and Hall", "La Crema", "Fowles Farm to Table"],
    answer: "Fowles Farm to Table",
  },
  {
    question: "How often do sanitizer buckets need to be changed?",
    options: ["Every 2 hours", "Every 4 hours", "Every 6 hours", "Every 8 hours"],
    answer: "Every 4 hours",
  },
  {
    question: "Who should you, as a server/bartender, ask for extra sauces or other items from the line?",
    options: ["The Chef", "The Line Cook", "No One", "The Manager"],
    answer: "The Chef",
  },
  {
    question: "What cut of meat is used in the braised pork? What is the pork filled with?",
    options: [
      "Pork Belly, Pancetta",
      "Pork Shoulder, Lemon Zest, Soffritto and Pancetta",
      "Pork Loin, Soffritto and Pancetta",
      "Pork Shoulder, Pancetta and Soffritto",
    ],
    answer: "Pork Shoulder, Lemon Zest, Soffritto and Pancetta",
  },
  {
    question: "A guest wants a bourbon cocktail that is not an Old Fashioned and not sweet, which option would be the best to suggest?",
    options: ["Bourbon Sour", "Manhattan", "Boulevardier", "Whiskey Smash"],
    answer: "Boulevardier",
  },
  {
    question: "What is the difference between a Negroni and a Boulevardier?",
    options: [
      "Negroni uses gin, Boulevardier uses bourbon",
      "Negroni is served up, Boulevardier is on the rocks",
      "Negroni is sweeter",
      "There is no difference",
    ],
    answer: "Negroni uses gin, Boulevardier uses bourbon",
  },
  {
    question: "A guest asks for a margarita. What follow-up questions should you ask them?",
    options: [
      "What tequila do you want?",
      "What kind of margarita do you want?",
      "Do you want a rim?",
      "What size margarita do you want?",
    ],
    answer: ["What tequila do you want?", "Do you want a rim?"],
  },
  {
    question: "What is the portion difference between the salmon for salads versus the salmon for the main entree?",
    options: ["Salad is 6oz, Main is 8oz", "Salad is 4oz, Main is 8oz", "Salad is 6oz, Main is 4oz", "Salad is 8oz, Main is 6oz"],
    answer: "Salad is 4oz, Main is 8oz",
  },
  {
    question: "What ingredient is not in the Antipasto Salad?",
    options: ["Salami", "Provolone", "Sweet Cherry Peppers", "Romaine"],
    answer: "Romaine",
  },
  {
    question: "What cocktails can someone with a nut allergy not have?",
    options: ["Fern Gully", "Aviation", "Peanut Butter Sour", "My Friend Kat"],
    answer: ["Peanut Butter Sour", "Fern Gully"],
  },
  {
    question: "What is not part of the ground meat mixture for burgers?",
    options: ["Chuck", "Pork", "Brisket", "Short Rib"],
    answer: "Pork",
  },
  {
    question: "You have 2 guests who ordered the Shrimp Fra Diavolo and the other the 1/2 Roasted Chicken. What should the table be marked with before the food arrives?",
    options: ["One spoon", "Nothing", "One spoon and one Steak Knife", "One spoon and one butter knife"],
    answer: "One spoon and one Steak Knife",
  },
  {
    question: "What is the portion size of the Skirt Steak?",
    options: ["6oz", "8oz", "10oz", "12oz"],
    answer: "10oz",
  },
  {
    question: "A guest at your table has an allergy and orders a dish that doesn’t contain the allergen.",
    options: [
      "You can send the order as is",
      "Write an allergy card for the kitchen and write on ticket",
      "You should not send the order",
      "Type on the ticket that the guest has an allergy",
    ],
    answer: "Write an allergy card for the kitchen and write on ticket",
  },
  {
    question: "How many tables are in the dining room?",
    options: ["22", "27", "30", "29"],
    answer: "29",
  },
  {
    question: "What is the difference between a cappuccino and a latte?",
    options: ["Cappuccino has more foam", "Latte has more foam", "Cappuccino uses more espresso", "Latte uses more espresso"],
    answer: "Cappuccino has more foam",
  },
  {
    question: "What IPA beer do we sell?",
    options: ["Lagunitas IPA", "Elysian Space Dust", "Golden Road Mango Cart", "Peroni"],
    answer: "Elysian Space Dust"
  },
  {
    question: "What dish can someone who is allergic to onions not have?",
    options: ["Aglio e Olio", "Spaghetti Pomodoro", "Caesar Salad", "1/2 Roasted Chicken"],
    answer: "Spaghetti Pomodoro",
  },
  {
    question: "What are the major differences between a Pinot Noir and a Cabernet Sauvignon?",
    options: [
      "Pinot Noir is lighter, Cabernet is heavier",
      "Pinot Noir is sweeter, Cabernet is drier",
      "Pinot Noir has more tannins, Cabernet has less",
      "Pinot Noir is more acidic, Cabernet is less acidic",
    ],
    answer: "Pinot Noir is lighter, Cabernet is heavier",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const current = quizSetSeven[currentQuestion];

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const checkAnswer = () => {
    const correct = Array.isArray(current.answer)
      ? current.answer.sort().join(",") === selectedOptions.sort().join(",")
      : selectedOptions.length === 1 && selectedOptions[0] === current.answer;

    if (correct) setScore(score + 1);
  };

  const handleNext = () => {
    checkAnswer();
    setSelectedOptions([]);
    if (currentQuestion + 1 < quizSetSeven.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOptions([]);
  };

  const percentage = Math.round((score / quizSetSeven.length) * 100);

  return (
         <div
              className="min-h-screen bg-cover bg-center bg-no-repeat relative text-white"
              style={{ backgroundImage: `url(${BGpic})` }}
            >
      <div className="max-w-3xl mx-auto rounded-2xl p-8 shadow-lg space-y-6">
        <h1 className="text-4xl font-bold text-center text-emerald-400">Training Quiz</h1>

        {isFinished ? (
          <div className="text-center space-y-4">
            <p className="text-xl font-semibold">Final Score: {score} / {quizSetSeven.length}</p>
            <p className="text-lg">Percentage: {percentage}%</p>
            <button
              onClick={restartQuiz}
              className="bg-emerald-500 text-black px-6 py-2 rounded-lg hover:bg-emerald-400 transition"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div>
              <h2 className="text-xl font-semibold mb-4">{current.question}</h2>
              <div className="space-y-3">
                {current.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => toggleOption(option)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      selectedOptions.includes(option)
                        ? "bg-emerald-400 text-black"
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
                disabled={selectedOptions.length === 0}
                className="mt-4 bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-2 rounded-lg transition disabled:opacity-50"
              >
                {currentQuestion + 1 < quizSetSeven.length ? "Next" : "Finish"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

