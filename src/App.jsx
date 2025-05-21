import React, { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import Leaderboard from "./components/Leaderboard";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import questions from "./data/questions";
import { shuffleArray } from "./utils/helpers";

function App() {
  const [screen, setScreen] = useState("start");
  const [user, setUser] = useState({ name: "", email: "" });
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [results, setResults] = useState([]);

  const startQuiz = () => {
    setQuizQuestions(shuffleArray([...questions]));
    setResults([]);
    setScreen("quiz");
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-4">
      <ThemeToggle />
      <div className="max-w-2xl bg-white text-black border-2 border-gray-300 p-8 mt-20 rounded-lg shadow-2xl mx-auto">
        {screen === "start" && (
          <StartScreen setUser={setUser} startQuiz={startQuiz} />
        )}
        {screen === "quiz" && (
          <QuizScreen
            questions={quizQuestions}
            setScreen={setScreen}
            results={results}
            setResults={setResults}
          />
        )}
        {screen === "result" && (
          <ResultScreen
            results={results}
            questions={quizQuestions}
            user={user}
            setScreen={setScreen}
          />
        )}
        {screen === "leaderboard" && <Leaderboard user={user} />}
      </div>
    </div>
  );
}

export default App;
