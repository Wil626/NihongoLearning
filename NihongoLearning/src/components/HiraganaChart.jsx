import React, { useEffect, useState } from "react";
import "./HiraganaChart.css";
import { allHiragana, allKatakana } from "./NihonWords";

const HiraganaChart = () => {
  // All hiragana characters in order (5 columns per row)

  const [currentSet, setCurrentSet] = useState("hiragana");
  const [selectedChars, setSelectedChars] = useState([]);
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showRomaji, setShowRomaji] = useState(false);

  //load save selection from local storage
  useEffect(() => {
    const savedSelection = localStorage.getItem("KanaSelection");
    if (savedSelection) {
      setSelectedChars(JSON.parse(savedSelection));
    }
  }, []);

  //save selection to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("KanaSelection", JSON.stringify(selectedChars));
  }, [selectedChars]);

  const data = currentSet === "hiragana" ? allHiragana : allKatakana;

  const handleCharClick = (char) => {
    const isSelected = selectedChars.some(
      (selected) =>
        selected.character === char.character && selected.set === currentSet
    );
    if (isSelected) {
      setSelectedChars(
        selectedChars.filter(
          (selected) =>
            !(
              selected.character === char.character &&
              selected.set === currentSet
            )
        )
      );
    } else {
      setSelectedChars([...selectedChars, { ...char, set: currentSet }]);
    }
  };
  const clearSelections = () => {
    setSelectedChars([]);
  }
    const startFlashcards = () => {
      if(selectedChars.length > 0) {
        setCurrentCardIndex(0);
        setShowFlashcards(true);
        setShowRomaji(false);
      }
    };

    const nextCard = () => {
      setCurrentCardIndex((prevIndex) => 
      (prevIndex + 1) % selectedChars.length);
      setShowRomaji(false);
    }

    const prevCard =() =>{
      setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? selectedChars.length - 1 : prevIndex - 1);
      setShowRomaji(false);
    }
    const toggleRomaji = () => {
      setShowRomaji((prev) => !prev);
    }
    const exitFlashcards = () => {
      setShowFlashcards(false);
    }

    return (
    <div className="hiragana-chart-page">
      {showFlashcards ? (
        <div className="flashcard-mode">
          <div className="flashcard-header">
            <h2>Flashcard Practice</h2>
            <button className="btn-exit" onClick={exitFlashcards}>
              Exit Flashcards
            </button>
          </div>
          
          <div className="flashcard-container">
            <div className="flashcard" onClick={toggleRomaji}>
              <div className="flashcard-char">
                {selectedChars[currentCardIndex]?.character}
              </div>
              {showRomaji && (
                <div className="flashcard-romaji">
                  {selectedChars[currentCardIndex]?.romaji}
                </div>
              )}
              {!showRomaji && (
                <div className="flashcard-hint">Click to reveal reading</div>
              )}
            </div>
            
            <div className="flashcard-controls">
              <button className="btn-nav" onClick={prevCard}>
                Previous
              </button>
              <span className="card-counter">
                {currentCardIndex + 1} / {selectedChars.length}
              </span>
              <button className="btn-nav" onClick={nextCard}>
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="chart-container">
          <h1>
            Complete {currentSet === "hiragana" ? "Hiragana" : "Katakana"} Chart
          </h1>
          <p className="chart-description">
            Click on characters to select them. Your selections will be saved automatically.
          </p>

          <div className="selection-info">
            <h3>Selected Characters: {selectedChars.length}</h3>
            <div>
              <button 
                onClick={startFlashcards} 
                className="btn-flashcards"
                disabled={selectedChars.length === 0}
              >
                Study Selected ({selectedChars.length})
              </button>
              <button onClick={clearSelections} className="btn-clear">
                Clear Selections
              </button>
            </div>
          </div>

          <div className="hiragana-grid">
            {data.map((char, index) => {
              const isSelected = selectedChars.some(
                selected => selected.character === char.character && selected.set === currentSet
              );
              
              return (
                <div 
                  key={index} 
                  className={`hiragana-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleCharClick(char)}
                >
                  <div className="hiragana-char">{char.character}</div>
                  <div className="romaji">{char.romaji}</div>
                </div>
              );
            })}
          </div>

          <div className="chart-info">
            <button className="btn1 btn-primary" onClick={() => setCurrentSet("katakana")}>
              Katakana
            </button>
            <button className="btn1 btn-primary" onClick={() => setCurrentSet("hiragana")}>
              Hiragana
            </button>
            <h3>Total Characters: {data.length}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default HiraganaChart;