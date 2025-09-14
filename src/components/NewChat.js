import React, { useState } from 'react';

const NewChat = ({ goBack }) => {
  const [name, setName] = useState("");
  const [icebreaker, setIcebreaker] = useState("");

  const handleGenerateIcebreaker = () => {
    setIcebreaker("Hi there! Looking forward to collaborating with you.");
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={goBack}>← Back</button>
      <h2>Start New Chat</h2>
      <input
        type="text"
        placeholder="Enter participant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 10, width: '100%', marginBottom: 10 }}
      />
      <button onClick={handleGenerateIcebreaker}>Generate Icebreaker</button>
      <div style={{ marginTop: 10 }}>{icebreaker}</div>
    </div>
  );
};

export default NewChat;
