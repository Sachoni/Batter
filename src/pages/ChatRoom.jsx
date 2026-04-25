import React, { useEffect, useRef, useState } from "react";
import { socket } from "../services/socket";
import { useParams } from "react-router-dom";

export default function ChatRoom() {
  const { id: roomId } = useParams(); // dynamic room
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [typingUser, setTypingUser] = useState(false);

  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // 📡 Connect + Join Room
  useEffect(() => {
    if (!socket.connected) socket.connect();

    socket.emit("join_room", roomId);

    socket.on("receive_message", handleReceiveMessage);
    socket.on("typing", handleTyping);

    return () => {
      socket.emit("leave_room", roomId);
      socket.off("receive_message", handleReceiveMessage);
      socket.off("typing", handleTyping);
    };
  }, [roomId]);

  // 📩 Receive message
  const handleReceiveMessage = (msg) => {
    setMessages((prev) => [...prev, msg]);
    setTypingUser(false);
  };

  // ⌨️ Typing indicator
  const handleTyping = () => {
    setTypingUser(true);

    clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      setTypingUser(false);
    }, 1500);
  };

  // 📤 Send message
  const sendMessage = () => {
    if (!text.trim()) return;

    const message = {
      roomId,
      sender: "me",
      text,
      time: new Date().toLocaleTimeString(),
    };

    socket.emit("send_message", message);
    setMessages((prev) => [...prev, message]);
    setText("");
  };

  // ⌨️ Handle typing event (debounced)
  const handleTypingInput = () => {
    socket.emit("typing", roomId);
  };

  // ⏎ Enter to send
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    } else {
      handleTypingInput();
    }
  };

  // 🔽 Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={styles.container}>
      <div style={styles.messages}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.bubble,
              alignSelf: m.sender === "me" ? "flex-end" : "flex-start",
              background: m.sender === "me" ? "#ff5a7a" : "#ffffff",
              color: m.sender === "me" ? "#fff" : "#000",
            }}
          >
            <div>{m.text}</div>
            <small style={styles.time}>{m.time}</small>
          </div>
        ))}

        {typingUser && <small style={styles.typing}>Someone is typing...</small>}

        <div ref={messagesEndRef} />
      </div>

      <div style={styles.inputBar}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.send}>
          ➤
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(180deg,#7b4397,#dc2430)",
  },
  messages: {
    flex: 1,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    overflowY: "auto",
  },
  bubble: {
    padding: 10,
    borderRadius: 16,
    maxWidth: "70%",
    display: "flex",
    flexDirection: "column",
  },
  time: {
    fontSize: 10,
    marginTop: 4,
    opacity: 0.7,
  },
  typing: {
    color: "#fff",
    fontStyle: "italic",
  },
  inputBar: {
    display: "flex",
    padding: 10,
    background: "#fff",
  },
  input: {
    flex: 1,
    borderRadius: 20,
    padding: 10,
    border: "1px solid #ddd",
    outline: "none",
  },
  send: {
    marginLeft: 10,
    borderRadius: "50%",
    border: "none",
    background: "#ff5a7a",
    color: "#fff",
    width: 40,
    height: 40,
    cursor: "pointer",
  },
};