import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [countryName, setCountryName] = useState('');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/consultants/find/${countryName}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event) => {
    setCountryName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={countryName} onChange={handleInputChange} placeholder="Enter country name" />
      <button onClick={fetchData}>Fetch Data</button>

      {data && (
        <div>
          <h2>Data for {countryName}:</h2>
          <div>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
}
