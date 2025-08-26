import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  
  const japaneseWords = [
    { romaji: "Konnichiwa", japanese: "こんにちは", english: "Hello" },
    { romaji: "Arigatou", japanese: "ありがとう", english: "Thank you" },
    { romaji: "Hajimemashite", japanese: "はじめまして", english: "Nice to meet you" },
    { romaji: "Ogenki desu ka", japanese: "お元気ですか", english: "How are you?" }
  ];

  // Function to open Hiragana chart in new tab
  const openHiraganaChart = () => {
    window.open('/hiragana', '_blank');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % japaneseWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Learn <span className="japanese-text">日本語</span>
            <br />
            <span className="highlight">The Beautiful Way</span>
          </h1>
          
          <p className="hero-subtitle">
            Discover the elegance of Japanese language and culture. 
            Start your journey to fluency with interactive lessons, 
            native speakers, and cultural immersion.
          </p>
          
          <div className="language-display">
            <div className="japanese-word">
              <div className="kanji">{japaneseWords[currentWord].japanese}</div>
              <div className="romaji">{japaneseWords[currentWord].romaji}</div>
              <div className="english">{japaneseWords[currentWord].english}</div>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              <span className="btn-icon">🎌</span>
              Start Learning Free
            </button>
            <button className="btn btn-secondary">
              <span className="btn-icon">🎯</span>
              Take Placement Test
            </button>
            {/* New Hiragana Chart Button */}
            <button className="btn btn-hiragana" onClick={openHiraganaChart}>
              <span className="btn-icon">あ</span>
              Hiragana Chart
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="japanese-theme">
            <div className="sakura-blossom">🌸</div>
            <div className="japanese-card">
              <div className="kanji-large">語</div>
              <div className="card-label">Language</div>
            </div>
            <div className="sakura-blossom">🌸</div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <span className="stat-number">10,000+</span>
          <span className="stat-label">Active Learners</span>
        </div>
        <div className="stat">
          <span className="stat-number">JLPT</span>
          <span className="stat-label">N5 to N1 Prep</span>
        </div>
        <div className="stat">
          <span className="stat-number">100%</span>
          <span className="stat-label">Native Teachers</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;