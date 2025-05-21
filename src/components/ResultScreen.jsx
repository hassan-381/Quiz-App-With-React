import React, { useEffect } from "react";

function ResultScreen({ results, questions, user, setScreen }) {
  useEffect(() => {
    const score = results.filter((r) => r.isCorrect).length;
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    leaderboard.push({ name: user.name, score });
    leaderboard.sort((a, b) => b.score - a.score);
    const top5 = leaderboard.slice(0, 5);
    localStorage.setItem("leaderboard", JSON.stringify(top5));
  }, []);

  const score = results.filter((r) => r.isCorrect).length;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Score: {score}</h2>
      <ul className="space-y-2">
        {results.map((res, idx) => (
          <li
            key={idx}
            className={res.isCorrect ? "text-green-600" : "text-red-600"}
          >
            Q: {res.question} <br />
            Your Answer: {res.user} | Correct: {res.correct}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setScreen("leaderboard")}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        View Leaderboard
      </button>
    </div>
  );
}

export default ResultScreen;
