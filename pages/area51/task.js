import React,{useState} from 'react';
import axios from 'axios';

function APP()
{
    const [data,setData] = useState([]);
    async function fetcUser()
    {
        try
        {
            const response = await axios.get('http://localhost:3001/consultants/find/Nepal');
            setData(response.data);
        }
        catch(error)
        {
            console.error('The Error is',error);
        }
    }
    fetcUser();
    return(
        <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul>{
            data.map(user => 
                <li key={user.id}>
                <h2 className="text-2xl font-semibold mb-4">Consultant name: {user.name}</h2>
                <p className="text-gray-600 mb-2">Phone Number: {user.phone} </p>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Country: {user.country}</p>
                 </li>
            )
          }
          </ul>
      </div>
    </div>
    );
}
export default APP;