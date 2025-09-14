import React, { useState } from 'react';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';

function App() {
  const [currentScreen, setCurrentScreen] = useState("list");
  const [selectedChat, setSelectedChat] = useState(null);

  const openChat = (chat) => {
    setSelectedChat(chat);
    setCurrentScreen("window");
  };

  const goBack = () => {
    setCurrentScreen("list");
  };

  const startNewChat = () => {
    setCurrentScreen("new");
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', border: '1px solid #ccc' }}>
      {currentScreen === "list" && (
        <div>
          <ChatList openChat={openChat} />
          <button onClick={startNewChat} style={{ width: '100%', padding: 10 }}>
            + New Chat
          </button>
        </div>
      )}
      {currentScreen === "window" && (
        <ChatWindow chat={selectedChat} goBack={goBack} />
      )}
      {currentScreen === "new" && <NewChat goBack={goBack} />}
    </div>
  );
}

export default App;
