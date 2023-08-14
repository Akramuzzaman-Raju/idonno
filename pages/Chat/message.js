import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Chat() {
  const [user1, setUser1] = useState('');
  const [cont, setContent] = useState('');
  const [user1Messages, setUser1Messages] = useState([]);

  // Fetch initial messages from the server on component load
  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await axios.get('http://localhost:3001/auth/message');
        const messages = response.data.cont; // Adjust this based on your API response structure
        setUser1Messages(messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    }

    fetchMessages();
  }, []);

  const user1messages = async () => {
    // Update the local state
    setUser1Messages([...user1Messages, user1]);
    setUser1('');

    // Send the message to the server
    try {
      await axios.post('http://localhost:3001/auth/message', { message: user1 });
      console.log('Message sent to the database');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="p-4">
      {/* Display messages from the database */}
      {user1Messages.map((message, index) => (
        <div key={index} className="chat chat-start mb-4 flex items-start">
          <div className="chat-header">Obi-Wan Kenobi</div>
          <div className="chat-bubble bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
            <p>{message}</p>
          </div>
        </div>
      ))}
      {/* Input and send button */}
      <div className="fixed bottom-0 w-full bg-white p-4 flex items-center">
        <input
          type="text"
          id="voice-search"
          value={user1}
          onChange={(e) => setUser1(e.target.value)}
          // ... rest of the input attributes ...
        />
        <button
          id="btn"
          onClick={user1messages}
          // ... rest of the button attributes ...
        >
          Send
        </button>
      </div>
    </div>
  );
}
