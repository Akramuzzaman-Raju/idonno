import React from 'react';

function MyPage({ data }) {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">{data.name}</h2>
        <p className="text-gray-600 mb-2">
          Phone Number: {data.phone}
        </p>
        <p className="text-gray-600">Email: {data.email}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3001/auth/profile');
    const data = await response.json();

    return {
      props: {
        data, // Pass the fetched data as a prop
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: {}, // Return empty data in case of an error
      },
    };
  }
}

export default MyPage;

