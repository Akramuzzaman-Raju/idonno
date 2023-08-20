import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Chat() {
  const [data, setData] = useState('');
  const [user1, setUser1] = useState('');
  const [content, setContent] = useState('');
  const [user1Messages, setUser1Messages] = useState([]);

  async function createMsg(){
    const newMsg={
        name: user1,
        cont:content,
    };
    try{
        const response = await axios.post('http://localhost:3001/auth/message',newMsg);
        console.log(" created", response,data);
        setUser1('');
        setContent('');
    }
    catch(error){
        console.error("error", error);
    }
  }
  const user1messages = async () => {
    setUser1Messages([...user1Messages, content]);
    setUser1('');

  };
                                            //name is not done yet using session data
  return (
    <div className="p-4">
      {user1Messages.map((message, index) => (
        <div key={index} className="chat chat-start mb-4 flex items-start">
          <div className="chat-header">Obi</div>
          <div className="chat-bubble bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
            <p>{message}</p>
          </div>
        </div>
      ))}
      <div className="fixed bottom-0 w-full bg-white p-4 flex items-center">
        <input
          type="text"
          id="message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write a message..."
          required
        />
        <button id="btn" onClick={() => {user1messages(); createMsg();}}>Send</button>
      </div>
    </div>
  );
}
