import Logout from '../user/logout';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar2 from '../navbar/navbar2';

function Deleteschedule() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/schedules/find');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  function handleButtonClick() {
    window.location.href = './createschedule';
}
  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:3001/schedules/${id}`);
      setData((prevData) => prevData.filter((meeting) => meeting.id !== id));
      // console.log("working");
    } catch (error) {
      console.error('Error deleting meeting:', error);
    }
  }

  return (
    <>
    <Navbar2/>
    <Logout/>
    <div className="p-4">
      <button className='flex flex-row bg-green-400 shadow-lg mb-5 shadow-slate-500 ml-4 p-4 rounded-3xl font-bold text-white hover:bg-green-500' onClick={handleButtonClick}>
      <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      Create meeting
      </button>
      <div className="bg-white rounded-lg shadow-md p-6">
        
        <ul>
          {data.map((user) => (
            <li key={user.id} className='bg-slate-100 mb-8 rounded-md pl-10 shadow-xl shadow-slate-400'>
              <h2 className="text-2xl font-semibold mb-4">Scheduled Meeting</h2>
              <h2 className="text-gray-600">Meeting Id: {user.meetingId}</h2>
              <p className="text-gray-600 ">Date: {user.meetingDate}</p>
              <p className="text-gray-600">Time: {user.meetingTime}</p>
              <p className="text-gray-600 mb-4" >Agenda: {user.meetingAgenda}</p>
              <button className="myButton mb-4" onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Deleteschedule;

