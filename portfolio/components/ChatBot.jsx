import { useState } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Subham's AI 🤖", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const getResponse = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("name")) return "Subham Dey";
    if (msg.includes("skills")) return "React, Firebase, JS";
    if (msg.includes("college")) return "MIT Vishwaprayag University";

    return "Ask about skills, name, or college.";
  };

  const send = () => {
    if (!input) return;

    setMessages([
      ...messages,
      { text: input, sender: "user" },
      { text: getResponse(input), sender: "bot" }
    ]);

    setInput("");
  };

  return (
    <div className="chatbot">
      <h3>AI Chatbot</h3>

      <div className="chatbox">
        {messages.map((m, i) => (
          <div key={i} className={m.sender}>{m.text}</div>
        ))}
      </div>

      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}
