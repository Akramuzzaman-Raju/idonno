import axios from 'axios';

import React from 'react';
import { useState,useEffect } from 'react';

export default function UserProfile() {
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
      setName(response.data.name)
    })
    .catch(err=>{
      console.log(err);
    })

  },[])

  const handleEdit=()=>{
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
      
      <div className="mb-6">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div className="mb-6">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
    <input type="text" id="name" value={phone} onChange={(e)=>setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div className="mb-6">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="text" id="name" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<button onClick={handleEdit}>update</button>
    </>
  );
}