import React from "react";

function Leaderboard({ user }) {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
  const rank = leaderboard.findIndex((entry) => entry.name === user.name) + 1;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Leaderboard</h2>
      <ul className="space-y-2">
        {leaderboard.map((entry, idx) => (
          <li key={idx} className="border p-2 rounded">
            {idx + 1}. {entry.name} - {entry.score} points
          </li>
        ))}
      </ul>
      <p className="mt-4 font-semibold">Your Rank: {rank}</p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default Leaderboard;
