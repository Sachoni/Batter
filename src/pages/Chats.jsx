
import React, { useEffect } from "react";
import ChatItem from "../components/ChatItem";

export default function Chats() {
  const chats = [
    { id: 1, name: "Samantha", last: "Typing...", time: "16 min", unread: 4 },
    { id: 2, name: "Nicole", last: "Hey! What's up?", time: "18 min", unread: 0 },
  ];

  return (
    <div style={styles.container}>
      <input style={styles.search} placeholder="Search" />

      <div>
        {chats.map((c) => (
          <ChatItem key={c.id} chat={c} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    position:"fixed",
    minHeight: "100vh",
    padding: 16,
    background: "#847b64ff",
    color: "#fff",
  },
  search: {
    width: "100%",
    padding: 12,
    borderRadius: 20,
    border: "none",
    marginBottom: 16,
  },
};

