import axios from 'axios';

import React from 'react';
import { useState,useEffect } from 'react';
import Navbar2 from '../navbar/navbar2';
import Logout from './logout';

export default function UpdateProfile() {
const [data,setData]=useState([])

const [name,setName]=useState('')
const [phone,setPhone]=useState('')
const [email,setEmail]=useState('')
const [x,setX]=useState('')
useEffect(() => {
    let x=localStorage.getItem('userId');
    setX(x)
    axios.get('http://localhost:3001/auth/profile',{headers:{id:x}})
    .then(response =>{
      setData(response.data);
      setName('')
      setPhone('')
      setEmail('')
    })
    .catch(err=>{
      console.log(err);
    })

  },[])

  const handleEdit=async ()=>{
    axios.put('http://localhost:3001/auth/update', { name: name, phone: phone, email: email, id: x })
    .then(response =>{
      console.log(response.data);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <>
    <Navbar2/>
      <Logout />
      <div className="bg-white-100 w-full ">
    <div className="bg-white rounded-lg p-8 max-w-md mx-auto mt-16 shadow-lg mb-5 shadow-slate-500">
      <div className="mb-6">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div className="mb-6">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
    <input type="number" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<a href="./updateprofile" className=" btn text-blue-500 hover:underline" onClick={handleEdit}>update</a>
</div>
</div>
    </>
  );
}
