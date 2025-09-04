import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [schedule, setSchedule] = useState<
    { subject: string; time: string; day: string }[]
  >([]);

  const addClass = () => {
    if (subject && time && day) {
      setSchedule([...schedule, { subject, time, day }]);
      setSubject("");
      setTime("");
      setDay("");
    }
  };

  const removeClass = (index: number) => {
    setSchedule(schedule.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Class Schedule Tracker</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <button onClick={addClass}>Add Class</button>
      </div>

      <table border={1} style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Time</th>
            <th>Day</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((cls, index) => (
            <tr key={index}>
              <td>{cls.subject}</td>
              <td>{cls.time}</td>
              <td>{cls.day}</td>
              <td>
                <button onClick={() => removeClass(index)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
