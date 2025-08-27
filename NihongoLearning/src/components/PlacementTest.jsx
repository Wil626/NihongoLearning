import React, { useState } from "react";
import "./PlacementTest.css";

const PlacementTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResult] = useState(false);

  const testQuestions = [
    // Character Recognition
    {
      type: "character",
      question: "What sound does this character make?",
      character: "あ",
      options: ["a", "i", "u", "e"],
      correct: 0,
      level: "N5",
    },
    {
      type: "character",
      question: "What sound does this character make?",
      character: "カ",
      options: ["ka", "ki", "ku", "ke"],
      correct: 0,
      level: "N5",
    },
    {
      type: "character",
      question: "Identify this character: 'ki'",
      options: ["き", "さ", "ち", "に"],
      correct: 0,
      level: "N5",
    },
    {
      type: "character",
      question: "What is the katakana for 'su'?",
      options: ["ス", "セ", "ソ", "シ"],
      correct: 0,
      level: "N5",
    },
    {
      type: "character",
      question: "Which is NOT a hiragana character?",
      options: ["あ", "ア", "い", "う"],
      correct: 1,
      level: "N5",
    },

    // Vocabulary
    {
      type: "vocabulary",
      question: "What does 'こんにちは' mean?",
      options: ["Good morning", "Hello", "Good evening", "Thank you"],
      correct: 1,
      level: "N5",
    },
    {
      type: "vocabulary",
      question: "What is 'water' in Japanese?",
      options: ["みず", "たべもの", "くうき", "ひかり"],
      correct: 0,
      level: "N5",
    },
    {
      type: "vocabulary",
      question: "What does 'がっこう' mean?",
      options: ["School", "Home", "Office", "Park"],
      correct: 0,
      level: "N5",
    },
    {
      type: "vocabulary",
      question: "Which word means 'book'?",
      options: ["ほん", "てがみ", "ざっし", "しんぶん"],
      correct: 0,
      level: "N5",
    },
    {
      type: "vocabulary",
      question: "What is 'friend' in Japanese?",
      options: ["ともだち", "かぞく", "せんせい", "がくせい"],
      correct: 0,
      level: "N5",
    },

    // Grammar
    {
      type: "grammar",
      question: "Choose the correct particle: わたし___にほんじんです",
      options: ["は", "が", "を", "に"],
      correct: 0,
      level: "N5",
    },
    {
      type: "grammar",
      question: "Which is the correct negative form?",
      options: ["たべない", "たべるない", "たべありません", "たべじゃない"],
      correct: 0,
      level: "N5",
    },
    {
      type: "grammar",
      question: "Choose the correct particle: がっこう___いきます",
      options: ["に", "を", "で", "が"],
      correct: 0,
      level: "N5",
    },
    {
      type: "grammar",
      question: "Which means 'I eat rice'?",
      options: [
        "ごはんをたべます",
        "ごはんがたべます",
        "ごはんをのみます",
        "ごはんがのみます",
      ],
      correct: 0,
      level: "N5",
    },
    {
      type: "grammar",
      question: "Choose the correct question: 'Is this a book?'",
      options: [
        "これはほんですか",
        "これはほんあります",
        "これはほんです",
        "これはほんがですか",
      ],
      correct: 0,
      level: "N5",
    },
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === testQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };
  const determineLevel = (score) => {
    if (score >= 12) return { level: "N4", description: "Elementary" };
    if (score >= 8) return { level: "N5", description: "Beginner" };
    return { level: "Complete Beginner", description: "Start from Day 1" };
  };

  if (showResults) {
    const { level, description } = determineLevel(score);
    return (
      <div className="placement-results">
        <h1>🎯 Test Results</h1>
        <div className="score">
          Score: {score}/{testQuestions.length}
        </div>
        <div className="level">
          <h2>Your Level: {level}</h2>
          <p>{description}</p>
        </div>
        <div className="recommendation">
          <h3>Recommended Starting Point:</h3>
          <p>
            {level === "N4"
              ? "Day 11 - Intermediate Grammar"
              : level === "N5"
              ? "Day 6 - Basic Sentences"
              : "Day 1 - Hiragana Basics"}
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => (window.location.href = "/")}
        >
          Start Learning
        </button>
      </div>
    );
  }

  const currentQ = testQuestions[currentQuestion];

  return (
    <div className="placement-test">
      <div className="test-header">
        <h1>📝 Placement Test</h1>
        <div className="progress">
          Question {currentQuestion + 1} of {testQuestions.length}
        </div>
      </div>

      <div className="question-container">
        <h2 className="question">{currentQ.question}</h2>
        {currentQ.type === "character" && (
          <div className="character-display">
            <span className="japanese-char">{currentQ.character}</span>
          </div>
        )}

        <div className="options">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              className="option-btn"
              onClick={() => handleAnswer(index)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementTest;
