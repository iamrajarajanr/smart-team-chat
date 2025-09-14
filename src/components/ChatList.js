import React from 'react';
import { chats } from '../data';

const ChatList = ({ openChat }) => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Chats</h2>
      {chats.map(chat => (
        <div
          key={chat.id}
          onClick={() => openChat(chat)}
          style={{
            borderBottom: '1px solid #ddd',
            padding: 10,
            cursor: 'pointer'
          }}
        >
          <h4>{chat.name}</h4>
          <p>{chat.lastMessage}</p>
          <small>{chat.time}</small>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
