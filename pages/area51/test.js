import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3001/consultants/find');
        setUsers(response.data);
      } catch (error) {
        console.error('This is the error:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white w-full md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold mb-4 text-center">Consultant List</h1>
        <ul>
          {users.map(user => (
            <li key={user.id} className="mb-4">
              <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">{user.name}</h2>
                <p className="text-gray-700">{user.phone}</p>
                {/* <p className="text-gray-700">{user.email}</p> */}
                <p className="text-gray-500 mt-2">{user.country}</p>
                <div className="mt-4 flex justify-end">
                  <a
                    href={`mailto:${user.email}`}
                    className="text-blue-500 hover:underline">Send Mail</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserList;