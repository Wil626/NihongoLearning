import React,{useState} from "react";
import "./HiraganaChart.css";
import { allHiragana, allKatakana } from "./NihonWords";


const HiraganaChart = () => {
  // All hiragana characters in order (5 columns per row)

  const [currentSet, setCurrentSet] = useState("hiragana");

  const data = currentSet === "hiragana" ? allHiragana : allKatakana;
  console.log("Current data:", data);
  console.log("CurrentSetCurrent:", setCurrentSet);
 console.log("CurrentSet:", currentSet);
  return (
    <div className="hiragana-chart-page">
      <div className="chart-container">
        <h1>
          Complete {currentSet === "hiragana" ? "Hiragana" : "Katakana"} Chart
        </h1>
        <p className="chart-description">
          All hiragana characters displayed in the traditional 5-column format .
        </p>

        <div className="hiragana-grid">
          {data.map((char, index) => (
            <div key={index} className="hiragana-card">
              <div className="hiragana-char">{char.character}</div>
              <div className="romaji">{char.romaji}</div>
            </div>
          ))}
        </div>

        <div className="chart-info">
          <button className=" btn1 btn-primary" onClick={() => setCurrentSet("katakana")}>Katakana</button>
          <button className="btn1 btn-primary" onClick={() => setCurrentSet("hiragana")}>Hiragana</button>
          <h3>Total Characters: {data.length - 5}</h3>
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
