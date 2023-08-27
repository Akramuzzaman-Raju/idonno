import axios from 'axios';

import React from 'react';
import { useState,useEffect } from 'react';
import Navbar2 from '../navbar/navbar2';
import Logout from './logout';

export default function UserProfile() {
const [data,setData]=useState([])
useEffect(() => {
    let x=localStorage.getItem('userId');
    axios.get('http://localhost:3001/auth/profile',{headers:{id:x}})
    .then(response =>{
      setData(response.data);
      console.log(response.data)
    })
    .catch(err=>{
      console.log(err);
    })

  }, [])


  return (
    <>
      <Navbar2/>
      <Logout />
      <div className="bg-white-100 w-full ">
    <div className="bg-white rounded-lg p-8 max-w-md mx-auto mt-16 shadow-lg mb-5 shadow-slate-500">
        <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
        
        <div className="mb-4">
            <label className="block font-semibold text-gray-800">Name</label>
            <p className="text-gray-700">{data.name}</p>
        </div>
        
        <div className="mb-4">
            <label className="block font-semibold text-gray-800">Phone Number</label>
            <p className="text-gray-700">{data.phone}</p>
        </div>
        
        <div className="mb-4">
            <label className="block font-semibold text-gray-800">Email</label>
            <p className="text-gray-700">{data.email}</p>
        </div>
        
        <a href="./edit" className=" btn text-blue-500 hover:underline">Edit Profile</a>
        
    </div>
</div>
    </>
  );
}