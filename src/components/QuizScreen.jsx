import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";

function QuizScreen({ questions, setScreen, results, setResults }) {
  const [current, setCurrent] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(30);

  const question = questions[current];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setDisabled(true);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    const correct = question.answer.toLowerCase();
    const answer = (userAnswer || "").toLowerCase();
    setResults([
      ...results,
      {
        question: question.question,
        correct: correct,
        user: userAnswer,
        isCorrect: correct.includes(answer),
      },
    ]);
    setUserAnswer(null);
    setDisabled(false);
    setTimer(30);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setScreen("result");
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-right text-sm">Time Left: {timer}s</div>
      <QuestionCard
        question={question}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        disabled={disabled}
      />
      <button
        onClick={handleNext}
        disabled={!disabled && userAnswer === null}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        {current + 1 === questions.length ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default QuizScreen;
