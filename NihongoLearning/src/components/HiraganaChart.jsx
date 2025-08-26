import React from "react";
import "./HiraganaChart.css";

const HiraganaChart = () => {
  // All hiragana characters in order (5 columns per row)
  const allHiragana = [
    // A-line
    { character: "あ", romaji: "a" },
    { character: "い", romaji: "i" },
    { character: "う", romaji: "u" },
    { character: "え", romaji: "e" },
    { character: "お", romaji: "o" },

    // Ka-line
    { character: "か", romaji: "ka" },
    { character: "き", romaji: "ki" },
    { character: "く", romaji: "ku" },
    { character: "け", romaji: "ke" },
    { character: "こ", romaji: "ko" },

    // Sa-line
    { character: "さ", romaji: "sa" },
    { character: "し", romaji: "shi" },
    { character: "す", romaji: "su" },
    { character: "せ", romaji: "se" },
    { character: "そ", romaji: "so" },

    // Ta-line
    { character: "た", romaji: "ta" },
    { character: "ち", romaji: "chi" },
    { character: "つ", romaji: "tsu" },
    { character: "て", romaji: "te" },
    { character: "と", romaji: "to" },

    // Na-line
    { character: "な", romaji: "na" },
    { character: "に", romaji: "ni" },
    { character: "ぬ", romaji: "nu" },
    { character: "ね", romaji: "ne" },
    { character: "の", romaji: "no" },

    // Ha-line
    { character: "は", romaji: "ha" },
    { character: "ひ", romaji: "hi" },
    { character: "ふ", romaji: "fu" },
    { character: "へ", romaji: "he" },
    { character: "ほ", romaji: "ho" },

    // Ma-line
    { character: "ま", romaji: "ma" },
    { character: "み", romaji: "mi" },
    { character: "む", romaji: "mu" },
    { character: "め", romaji: "me" },
    { character: "も", romaji: "mo" },

    // Ya-line
    { character: "や", romaji: "ya" },
    { character: "○", },
    { character: "ゆ", romaji: "yu" },
    { character: "○", },
    { character: "よ", romaji: "yo" },

    // Ra-line
    { character: "ら", romaji: "ra" },
    { character: "り", romaji: "ri" },
    { character: "る", romaji: "ru" },
    { character: "れ", romaji: "re" },
    { character: "ろ", romaji: "ro" },

    // Wa-line
    { character: "わ", romaji: "wa" },
    { character: "○"},
    { character: "○"},
    { character: "○"},
    { character: "を", romaji: "wo" },

    // N
    { character: "ん", romaji: "n" },
  ];

  return (
    <div className="hiragana-chart-page">
      <div className="chart-container">
        <h1>Complete Hiragana Chart</h1>
        <p className="chart-description">
          All hiragana characters displayed in the traditional 5-column format.
        </p>

        <div className="hiragana-grid">
          {allHiragana.map((char, index) => (
            <div key={index} className="hiragana-card">
              <div className="hiragana-char">{char.character}</div>
              <div className="romaji">{char.romaji}</div>
            </div>
          ))}
        </div>

        <div className="chart-info">
          <h3>Total Characters: {allHiragana.length}</h3>
          <p>
            Hiragana is the basic Japanese phonetic script that represents all
            sounds in the language. It consists of 46 basic characters, but
            we've included 46 here in the traditional order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiraganaChart;
