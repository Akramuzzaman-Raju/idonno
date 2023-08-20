import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function Createschedule() {
    const[data, setData]= useState('');
    const[meetingId, setmeetingId]= useState('');
    const[meetingDate,setmeetingDate]= useState('');
    const[meetingTime,setmeetingTime]= useState('');
    const[meetingAgenda,setmeetingAgenda]= useState('');
    async function createMeeting(){
        const newMeeting={
            meetingId: meetingId,
            meetingDate: meetingDate,
            meetingTime: meetingTime,
            meetingAgenda: meetingAgenda,

        };
        try{
            const response = await axios.post('http://localhost:3001/schedules/meeting',newMeeting);
            console.log("Meeting created", response,data);
            setmeetingId('');
            setmeetingDate('');
            setmeetingTime('');
            setmeetingAgenda('');
        }
        catch(error){
            console.error("Error creating meeting", error);
        }
    }
  return (

    <div>
      
    <section className="bg-gray-50 dark:bg-gray-900">
    {/* <div className="page2"> */}
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* <div className="flex flex-col justify-center">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white" src="/studyabroad-banner.jpg" alt="logo"/> </a>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Study Abroad Consultation Center</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">"Unlocking Global Opportunities: Your Journey to Study Abroad Begins Here".</p>
            </div> */}
            <div>
                <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                       Schedule a meeting
                    </h2>
                    <form className="mt-8 space-y-6" action="#">
                        <div>
                            <label htmlFor="meetingid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meeting Id </label>
                            <input type="meetingid" name="meetingid" id="meetingid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={meetingId} onChange={(e) => setmeetingId(e.target.value)} placeholder=''  required />
                        </div>
                        <div>
                            <label htmlFor="meetingtdate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meeting Date</label>
                            <input type="meetingtdate" name="meetingtdate" id="meetingtdate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={meetingDate} onChange={(e) => setmeetingDate(e.target.value)} placeholder=''  required />
                        </div>
                        <div>
                            <label htmlFor="meetingtime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meeting Time</label>
                            <input type="meetingtime" name="meetingtime" id="meetingtime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={meetingTime} onChange={(e) => setmeetingTime(e.target.value)} placeholder=''  required />
                        </div>
                        <div>
                            <label htmlFor="meetingagenda" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meeting Agenda</label>
                            {/* <input type="meetingagenda" name="meetingagenda" id="meetingagenda" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required /> */}
                            <textarea id="meetingagenda" name="meetingagenda" rows="4" cols="50" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={meetingAgenda} onChange={(e) => setmeetingAgenda(e.target.value)} required ></textarea>
                        </div>
                        <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={createMeeting}>Create New Meeting</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
        </div>
  )
  
}
