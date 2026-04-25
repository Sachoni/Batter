import React from "react";

export default function ChatItem({ chat }) {
  return (
    <div style={styles.row}>
      <div style={styles.avatar}></div>

      <div style={{ flex: 1 }}>
        <div>{chat.name}</div>
        <small>{chat.last}</small>
      </div>

      <div>
        <small>{chat.time}</small>
        {chat.unread > 0 && <div style={styles.badge}>{chat.unread}</div>}
      </div>
    </div>
  );
}

const styles = {
  row: {
    display: "flex",
    alignItems: "center",
    marginBottom: 14,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "#fff",
    marginRight: 12,
  },
  badge: {
    background: "pink",
    borderRadius: "50%",
    width: 20,
    height: 20,
    textAlign: "center",
    fontSize: 12,
  },
};
