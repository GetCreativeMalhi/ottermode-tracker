import { useState } from "react";
import "./App.css";

export default function OttermodeTrackerApp() {
  const [progress, setProgress] = useState(
    Array.from({ length: 30 }, () => ({ completed: false }))
  );

  const workoutPlan = [
    { squats: 20, pushups: 20, flutterKicks: 40 },
    { squats: 30, pushups: 10, flutterKicks: 20 },
    { squats: 40, pushups: 20, flutterKicks: 40 },
    { squats: 50, pushups: 10, flutterKicks: 20 },
    { squats: 10, pushups: 10, flutterKicks: 10 },
    { squats: 60, pushups: 20, flutterKicks: 20 },
    { squats: 40, pushups: 40, flutterKicks: 40 },
    { squats: 60, pushups: 20, flutterKicks: 60 },
    { squats: 80, pushups: 40, flutterKicks: 40 },
    { squats: 15, pushups: 15, flutterKicks: 20 },
    { squats: 100, pushups: 20, flutterKicks: 40 },
    { squats: 40, pushups: 60, flutterKicks: 60 },
    { squats: 60, pushups: 20, flutterKicks: 20 },
    { squats: 100, pushups: 40, flutterKicks: 40 },
    { squats: 10, pushups: 10, flutterKicks: 10 },
    { squats: 60, pushups: 60, flutterKicks: 60 },
    { squats: 40, pushups: 40, flutterKicks: 100 },
    { squats: 20, pushups: 60, flutterKicks: 20 },
    { squats: 60, pushups: 20, flutterKicks: 40 },
    { squats: 15, pushups: 15, flutterKicks: 20 },
    { squats: 140, pushups: 40, flutterKicks: 40 },
    { squats: 40, pushups: 40, flutterKicks: 80 },
    { squats: 20, pushups: 20, flutterKicks: 40 },
    { squats: 100, pushups: 60, flutterKicks: 20 },
    { squats: 10, pushups: 10, flutterKicks: 10 },
    { squats: 160, pushups: 60, flutterKicks: 60 },
    { squats: 40, pushups: 40, flutterKicks: 20 },
    { squats: 180, pushups: 60, flutterKicks: 60 },
    { squats: 200, pushups: 20, flutterKicks: 60 },
    { squats: 20, pushups: 20, flutterKicks: 120 }
  ];

  const toggleDay = (index) => {
    const newProgress = [...progress];
    newProgress[index].completed = !newProgress[index].completed;
    setProgress(newProgress);
  };

  return (
    <div className="app">
      <h1 className="title">Ottermode 30-Day Challenge</h1>
      <ul className="tracker">
        {workoutPlan.map((day, index) => (
          <li
            key={index}
            className={`tracker-item ${progress[index].completed ? "completed" : ""}`}
            onClick={() => toggleDay(index)}
          >
            <div>
              <strong>Day {index + 1}:</strong> {day.squats} squats, {day.pushups} push-ups, {day.flutterKicks} flutter kicks
            </div>
            <input
              type="checkbox"
              checked={progress[index].completed}
              readOnly
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
