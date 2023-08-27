import React, { useState } from 'react';

export default function Chat() {
  const [user1, setUser1] = useState('');
  const [user1Messages, setUser1Messages] = useState([]);

  const user1messages = (e) => {
    setUser1Messages([...user1Messages, user1]);
    setUser1('');
  };

  return (
    <div className="p-4">
      {user1Messages.map((message, index) => (
        <div key={index} className="chat chat-start mb-4 flex items-start">
          <div className="chat-header">
      Obi-Wan Kenobi
    </div>
          <div className="chat-bubble bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
            <p>{message}</p>
          </div>
        </div>
      ))}
      <div className="fixed bottom-0 w-full bg-white p-4 flex items-center">
        <input type="text" id="voice-search" value={user1} onChange={(e) => setUser1(e.target.value)} className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write a message..." required/>
        <button id="btn" onClick={user1messages} type="button" className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-2">Send</button>
      </div>
    </div>
  );
}

