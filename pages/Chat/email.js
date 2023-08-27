
import { useState } from 'react';
import Navbar2 from '../navbar/navbar2';
import Logout from '../user/logout';

export default function Sendmail() {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    content: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSendEmail = async () => {
    try {
      const response = await fetch('http://localhost:3001/auth/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();
      console.log(data.message); // Email sent successfully
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  return (
    <>
    <Navbar2/>
    <Logout/>
    <div className="mx-96 pt-24">
    <form>
      <div className="relative z-0 w-full mb-6 group">
          <input type="email" name="to" id="to" value={emailData.to} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="To" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">To</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="subject" id="subject"  value={emailData.subject} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="Subject" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <textarea type="text" name="content" id="content" value={emailData.content} onChange={handleInputChange} className="block py-2.5 px-0 w-full h-32  text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2" placeholder="Body" required />
          {/* <label htmlFor="Body" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-x-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" ></label> */}
      </div>
      <div className="flex justify-end">
      <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSendEmail}>Send mail</button>
      </div>
    </form>
    </div>
    </>
  )
}
