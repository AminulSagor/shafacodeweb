// src/components/ChatWidget.jsx
import { useState } from "react";
import "./ChatWidget.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Card */}
      {open && (
        <div className="chat-card">
          <div className="chat-header">
            <span>💬 Live Chat</span>
            <button onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="chat-body">
            <p>Hi there! How can we help you?</p>
            <textarea
              placeholder="Type your message..."
              rows={3}
            ></textarea>
            <button className="chat-send-btn">Send</button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button className="chat-float-btn" onClick={() => setOpen(!open)}>
        💬
      </button>
    </>
  );
}
