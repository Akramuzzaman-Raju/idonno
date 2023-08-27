import React, { useState }from 'react'
import axios from 'axios'
import Logout from '../user/logout';
import Navbar2 from '../navbar/navbar2';

export default function Scholarship() {

  const[data, setData]= useState('');
    const[scholarshipId, setSholarshipid]= useState('');
    const[universityName,setUniversityname]= useState('');
    const[eligibleCourse,setEligiblecourse]= useState('');
    const[possibleScholarship,setPossiblescholarship]= useState('');
    async function createScholarship(){
        const newScholarship={
          scholarshipId: scholarshipId,
          universityName: universityName,
          eligibleCourse: eligibleCourse,
          possibleScholarship: possibleScholarship,
 
        };
        try{
            const response = await axios.post('http://localhost:3001/scholarships/scholarship',newScholarship);
            console.log("Scholarship created", response,data);
            setSholarshipid('');
            setUniversityname('');
            setEligiblecourse('');
            setPossiblescholarship('');

            if (response.status === 201) {
              window.location.href = '../user/profile';
            } else {
              console.log('Error Occured');
            }
        }
        catch(error){
            console.error("Error Occured", error);
        }
      }
  return (
    <>
    <Navbar2/>
    <Logout/>
    <div className="mx-32 pt-24">
    <form>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="scholarshipId" id="scholarshipId" value={scholarshipId} onChange={(e) => setSholarshipid(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="scholarshipId" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Scholarship Id</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="universityName" id="universityName" value={universityName} onChange={(e) => setUniversityname(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="universityName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">University Name</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="eligibleCourse" id="eligibleCourse" value={eligibleCourse} onChange={(e) => setEligiblecourse(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="eligibleCourse" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Course Name</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="possibleScholarship" id="possibleScholarship" value={possibleScholarship} onChange={(e) => setPossiblescholarship(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="possibleScholarship" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Possible Scholarship</label>
      </div>
      <div className="flex justify-end">
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={createScholarship}>Add</button>
       </div>
    </form>
    </div>
    </>
  )
}
