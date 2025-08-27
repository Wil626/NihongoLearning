import React, { useState, useEffect } from "react";
import "./FlashcardAlarm.css";
const FlashcardAlarm = () => {
  const [time, setTime] = useState(new Date());
  const [triggeredAlarms, setTriggeredAlarms] = useState([]);
  const [newUrl, setNewUrl] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [finishedAlarms, setFinishedAlarms] = useState([]);

  const [alarms, setAlarms] = useState([
    { time: "09:05", url: "https://example.com/flashcard1" },
    { time: "09:15", url: "https://example.com/flashcard1" },
    { time: "10:00", url: "https://example.com/flashcard1" },
    { time: "12:00", url: "https://example.com/flashcard2" },
    { time: "17:00", url: "https://example.com/flashcard3" },
  ]);

  useEffect(() => {
    const current = time.toTimeString().slice(0, 5);

    alarms.forEach((alarm) => {
      if (
        alarm.time <= current &&
        !triggeredAlarms.includes(alarm.time) &&
        !finishedAlarms.includes(alarm.time)
      ) {
        setTriggeredAlarms((prev) => [...prev, alarm.time]);
      }
    });
  }, [time, alarms, triggeredAlarms, finishedAlarms]);
  // function to change link
  const changeAllLinks = () => {
    if (newUrl.trim()) {
      setAlarms((prev) =>
        prev.map((alarm) => ({
          ...alarm,
          url: newUrl,
        }))
      );
    }
    setNewUrl("");
    setShowInput(false);
  };

  // Clock updater
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Check alarms
  useEffect(() => {
    const current = time.toTimeString().slice(0, 5); // HH:MM format
    alarms.forEach((alarm) => {
      if (alarm.time === current && !triggeredAlarms.includes(alarm.time)) {
        setTriggeredAlarms((prev) => [...prev, alarm.time]);
      }
    });
  }, [time, alarms, triggeredAlarms]);

  return (
    <div className="flashcard-alarm">
      <h1>⏰ Flashcard Alarm Clock</h1>
      <h2>Current Time: {time.toLocaleTimeString()}</h2>

      <h3>Alarms</h3>
      <ul className="alarms-list">
        {alarms.map((alarm) => (
          <li key={alarm.time} className="alarm-item">
            <span className="alarm-time">{alarm.time}</span>
            {triggeredAlarms.includes(alarm.time) &&
              !finishedAlarms.includes(alarm.time) && (
                <div className="button-group">
                  <button
                    className="btn btn-primary"
                    onClick={() => window.open(alarm.url, "_blank")}
                  >
                    📚 Open Flashcard
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      setFinishedAlarms((prev) => [...prev, alarm.time])
                    }
                  >
                    Done
                  </button>
                </div>
              )}
          </li>
        ))}
      </ul>

      {/* Link Input Section */}
      <div className="link-section">
        {!showInput && (
          <button
            className="btn btn-secondary"
            onClick={() => setShowInput(true)}
          >
            🔗 Input a new link
          </button>
        )}

        {showInput && (
          <div className="link-input">
            <input
              type="text"
              className="input-field"
              value={newUrl || ""}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="Enter new flashcard link"
            />
            <button className="btn btn-primary" onClick={changeAllLinks}>
              Change All Links
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashcardAlarm;
