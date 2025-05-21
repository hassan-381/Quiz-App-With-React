import React, { useState } from "react";

function StartScreen({ setUser, startQuiz }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleStart = () => {
    if (name && email) {
      setUser({ name, email });
      startQuiz();
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Quiz App</h1>
      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleStart}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
