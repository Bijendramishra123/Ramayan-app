import { useState } from "react";
import "./ChatBot.css";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { senders: "bot", text: "Namaste! Main Ramayan-Gita AI Chatbot hoon. Aap kya puchna chahenge?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // API call status

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);

    // Show temporary processing message
    const processingMessage = { sender: "bot", text: "Processing..." };
    setMessages(prev => [...prev, userMessage, processingMessage]);

    setInput("");
    setLoading(true);

    try {
      // API call to Flask backend
      const response = await fetch(`http://localhost:5000/get-answer?question=${encodeURIComponent(input)}`);
      const data = await response.json();

      // Update bot message with API response
      setMessages(prev => [
        ...prev.slice(0, -1), // remove "Processing..."
        { sender: "bot", text: data.answer || "Sorry, koi answer nahi mila." }
      ]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [
        ...prev.slice(0, -1),
        { sender: "bot", text: "API call me error aaya. Try again!" }
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button className="chatbot-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            Ramayan–Gita AI Chatbot
            <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="chatbot-box">
            {messages.map((msg, i) => (
              <div key={i} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              value={input}
              placeholder="Ask about any sloka..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={loading} // disable input during API call
            />
            <button onClick={sendMessage} disabled={loading}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
