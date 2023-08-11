import React from 'react';

export default function UserProfile() {
  const userProfile = {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    email: 'johndoe@example.com',
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">{userProfile.name}</h2>
        <p className="text-gray-600 mb-2">
          Phone Number: {userProfile.phoneNumber}
        </p>
        <p className="text-gray-600">Email: {userProfile.email}</p>
      </div>
    </div>
  );
}