import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/service1.jpg";

const quizzes = [
  { title: "Quiz 1", route: "/quizzes/quiz1" },
  { title: "Quiz 2", route: "/quizzes/quiz2" },
  { title: "Quiz 3", route: "/quizzes/quiz3" },
  { title: "Quiz 4", route: "/quizzes/quiz4" },
  { title: "Quiz 5", route: "/quizzes/quiz5" },
  { title: "Quiz 6", route: "/quizzes/quiz6" },
  { title: "Quiz 7", route: "/quizzes/quiz7" },
  { title: "Quiz 8", route: "/quizzes/quiz8" },
  { title: "Quiz 9", route: "/quizzes/quiz9" },
  { title: "Quiz 10", route: "/quizzes/quiz10" },
  { title: "Quiz 11", route: "/quizzes/quiz11" },
  { title: "Quiz 12", route: "/quizzes/quiz12" },
];

export default function QuizHome() {
  return (
         <div
              className="min-h-screen bg-cover bg-center bg-no-repeat relative text-white"
              style={{ backgroundImage: `url(${BGpic})` }}
            >
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-5xl font-bold font-mono text-emerald-400 text-center mb-10">Training Quizzes</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz, index) => (
            <Link
              key={index}
              to={quiz.route}
              className="bg-black/70 hover:bg-emerald-300 hover:text-black transition rounded-xl p-6 shadow-lg text-center border border-emerald-500"
            >
              <h2 className="text-2xl font-semibold">{quiz.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
