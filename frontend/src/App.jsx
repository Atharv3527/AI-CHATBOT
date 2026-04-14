import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import "./App.css";

function App () {
  const [socket, setsocket] = useState(null)
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  useEffect(() => {
     let socketInstance = io("http://localhost:3000");
      setsocket(socketInstance)
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Chat Interface</h1>
      </div>

      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-state">
            <p>No messages yet. Start a conversation!</p>
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">{message.timestamp}</span>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="input-container">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here..."
          className="message-input"
        />
        <button
          onClick={handleSendMessage}
          className="send-button"
          disabled={input.trim() === ""}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
