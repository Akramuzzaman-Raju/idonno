import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function EditProfile() {
  const [userData, setUserData] = useState([]);
const [name,setName]=useState('')
const [phone,setPhone]=useState('')
const [email,setEmail]=useState('')

  const [x,setX]=useState();
  const [isEditMode, setIsEditMode] = useState(false);
  
  
  useEffect(() => {
    const fetchUserData = async () => {
      let y = localStorage.getItem('userId');
  setX(y);
      try {
        const response = await axios.get(`http://localhost:3001/auth/profile/`,{headers:{id:x}});
        // const user = response.data;
        setUserData(response.data);
        setName('');
        setPhone('');
        setEmail('');
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  });

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(x);
      const response = await axios.put(`http://localhost:3001/auth/${x}`, {name: name, phone: phone, email: email, id: x});
      console.log('Edit response:', response.data);
      setIsEditMode(false); // Switch back to read-only mode
    } catch (error) {
      console.error('Error editing user data:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };




    return (
       <div>
        <div>
            {/* <Navbar /> */}
        </div>
        <br />
        <div>
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center  lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="" onSubmit={handleFormSubmit}>
                        <div className="invisible ..."></div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={userData.name}
                            onChange={handleInputChange}
                            readOnly={!isEditMode}/>
                            
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile No</label>
                            <input type="number" name="phone" id="phone"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={userData.phone}
                            onChange={handleInputChange}
                            readOnly={!isEditMode} />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 
                            value={userData.email}
                            onChange={handleInputChange}
                            readOnly={!isEditMode} />
                        </div>

                        
                        {isEditMode ? (
                            <button type="submit" className="w-full text-black bg-indigo-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-indigo-700 dark:focus:ring-primary-800">Save Changes</button>
                            ) : (
                            <button type="button"  className="w-full text-black bg-indigo-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-indigo-700 dark:focus:ring-primary-800"
                            onClick={handleEditClick}>
                                Edit
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
      </section>
      </div>
      </div> 
    );
}