import React, { useState, useEffect } from 'react';
import axios from 'axios';

function APP() {
  const [data, setData] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserCountry, setNewUserCountry] = useState('');



  async function createUser() {
    const newUser = {
      name: newUserName,
      country: newUserCountry,
    };

    try {
      const response = await axios.post('http://localhost:3001/consultants/create', newUser);
      console.log('New user created:', response.data);
      // You can also update the state to include the new user if needed
      // setData([...data, response.data]);
      // Clear input fields after creating the user
      setNewUserName('');
      setNewUserCountry('');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            className="px-2 py-1 border rounded"
          />
          <input
            type="text"
            placeholder="Enter country"
            value={newUserCountry}
            onChange={(e) => setNewUserCountry(e.target.value)}
            className="px-2 py-1 border rounded ml-2"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2" onClick={createUser}>
            Create User
          </button>
        </div>
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <h2 className="text-2xl font-semibold mb-4">Consultant name: {user.name}</h2>
              <p className="text-gray-600 mb-2">Country: {user.country}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default APP;


{/* <div className="carousel w-full h-1/2">
  <div id="item1" className="carousel-item w-full">
    <img src="image1.jpeg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="image2.jpeg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="image3.jpeg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="image4.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div> */}