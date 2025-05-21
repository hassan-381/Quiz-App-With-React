import React from "react";

function QuestionCard({ question, userAnswer, setUserAnswer, disabled }) {
  const handleChange = (value) => {
    if (!disabled) setUserAnswer(value);
  };

  if (question.type === "mcq") {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">{question.question}</h2>
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleChange(opt)}
            className={`block w-full text-left p-2 mb-2 border rounded ${
              userAnswer === opt ? "bg-blue-200" : ""
            }`}
            disabled={disabled}
          >
            {opt}
          </button>
        ))}
      </div>
    );
  }

  if (question.type === "boolean") {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">{question.question}</h2>
        {["True", "False"].map((opt) => (
          <button
            key={opt}
            onClick={() => handleChange(opt)}
            className={`block w-full text-left p-2 mb-2 border rounded ${
              userAnswer === opt ? "bg-blue-200" : ""
            }`}
            disabled={disabled}
          >
            {opt}
          </button>
        ))}
      </div>
    );
  }

  if (question.type === "fill") {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">{question.question}</h2>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={userAnswer || ""}
          onChange={(e) => handleChange(e.target.value)}
          disabled={disabled}
        />
      </div>
    );
  }

  return null;
}

export default QuestionCard;
