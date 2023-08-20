
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar1 from '../navbar/navbar1';
function Deletescholarship() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/scholarships/find');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  function handleButtonClick() {
    window.location.href = './scholarship';
}
  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:3001/scholarships/${id}`);
      setData((prevData) => prevData.filter((scholarship) => scholarship.id !== id));
      // console.log("working");
    } catch (error) {
      console.error('Error deleting:', error);
    }
  }

  return (
    <div className="py-20">
    <Navbar1/>
    <div className="p-4" >
      <button className='flex flex-row bg-green-400 shadow-lg mb-5 shadow-slate-500 ml-4 p-4 rounded-3xl font-bold text-white hover:bg-green-500' onClick={handleButtonClick}>
      <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      Create Scholarship
      </button>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul>
          {data.map((user) => (
            <li key={user.id} className='bg-slate-100 mb-8 rounded-md pl-10 shadow-xl shadow-slate-400'>
              <h2 className="text-2xl font-semibold mb-4">Scholarships</h2>
              <h2 className="text-gray-600">Scholarship Id: {user.scholarshipId}</h2>
              <p className="text-gray-600 ">University Name: {user.universityName}</p>
              <p className="text-gray-600">Eligible Course: {user.eligibleCourse}</p>
              <p className="text-gray-600 mb-4" >Possible Scholarship: {user.possibleScholarship}</p>
              <button className="myButton mb-4" onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Deletescholarship;

