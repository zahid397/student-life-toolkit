import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // ---------- Budget Tracker ----------
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [amount, setAmount] = useState("");

  // ---------- Class Schedule ----------
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

  // ---------- Exam Q&A Generator ----------
  const [questions] = useState([
    { type: "MCQ", question: "React কে তৈরি করেছে?", answer: "Facebook" },
    {
      type: "True/False",
      question: "JSX হলো JavaScript এর extension।",
      answer: "True",
    },
    {
      type: "Short",
      question: "useState hook এর কাজ কী?",
      answer: "State manage করা",
    },
    {
      type: "MCQ",
      question: "Node.js কোন ভাষার উপর চলে?",
      answer: "JavaScript",
    },
    {
      type: "True/False",
      question: "React একেবারে backend framework।",
      answer: "False",
    },
  ]);
  const [currentQ, setCurrentQ] = useState<any>(null);

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQ(questions[randomIndex]);
  };

  // ---------- Study Planner ----------
  const [topic, setTopic] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");
  const [tasks, setTasks] = useState<
    { topic: string; priority: string; deadline: string }[]
  >([]);

  const addTask = () => {
    if (topic && deadline) {
      setTasks([...tasks, { topic, priority, deadline }]);
      setTopic("");
      setPriority("Medium");
      setDeadline("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>🎓 Student Life Toolkit</h1>
      <p>All-in-one toolkit to make student life easier 🚀</p>

      {/* ---------- Budget Tracker ---------- */}
      <section>
        <h2>💰 Budget Tracker</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <button onClick={() => setIncome(income + parseFloat(amount || "0"))}>
          ➕ Add Income
        </button>
        <button onClick={() => setExpense(expense + parseFloat(amount || "0"))}>
          ➖ Add Expense
        </button>

        <h3>Total Income: {income} ৳</h3>
        <h3>Total Expense: {expense} ৳</h3>
        <h3>Balance: {income - expense} ৳</h3>
      </section>

      {/* ---------- Class Schedule Tracker ---------- */}
      <section>
        <h2>📅 Class Schedule Tracker</h2>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Time (e.g., 10:00 AM)"
        />
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Day (e.g., Monday)"
        />
        <button onClick={addClass}>➕ Add Class</button>

        <table border="1" style={{ marginTop: "10px", width: "100%" }}>
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
      </section>

      {/* ---------- Exam Q&A Generator ---------- */}
      <section>
        <h2>📝 Exam Q&A Generator</h2>
        <button onClick={generateQuestion}>🎲 Generate Question</button>

        {currentQ && (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid gray",
            }}
          >
            <p>
              <b>Type:</b> {currentQ.type}
            </p>
            <p>
              <b>Question:</b> {currentQ.question}
            </p>
            <p>
              <b>Answer:</b> {currentQ.answer}
            </p>
          </div>
        )}
      </section>

      {/* ---------- Study Planner ---------- */}
      <section>
        <h2>📚 Study Planner</h2>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Topic/Subject"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button onClick={addTask}>➕ Add Task</button>

        <table border="1" style={{ marginTop: "10px", width: "100%" }}>
          <thead>
            <tr>
              <th>Topic</th>
              <th>Priority</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.topic}</td>
                <td>{task.priority}</td>
                <td>{task.deadline}</td>
                <td>
                  <button onClick={() => removeTask(index)}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
