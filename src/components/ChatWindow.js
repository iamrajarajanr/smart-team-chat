import React, { useState } from 'react';
import { messages } from '../data';

const ChatWindow = ({ chat, goBack }) => {
  const [summary, setSummary] = useState("");
  const [reply, setReply] = useState("");

  const handleSummarize = () => {
    setSummary("This conversation is about project progress and collaboration.");
  };

  const handleSmartReply = () => {
    setReply("Thanks for the update! Let's sync later.");
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={goBack}>← Back</button>
      <h2>{chat.name}</h2>
      <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: 20 }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ marginBottom: 10 }}>
            <b>{msg.sender}: </b>
            {msg.content}
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 10 }}>
        <button onClick={handleSummarize}>Summarize Thread</button>
        <div style={{ marginTop: 5 }}>{summary}</div>
      </div>
      <div>
        <button onClick={handleSmartReply}>Smart Reply Suggestion</button>
        <div style={{ marginTop: 5 }}>{reply}</div>
      </div>
    </div>
  );
};

export default ChatWindow;
