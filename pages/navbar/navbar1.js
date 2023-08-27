import React from 'react'

export default function Navbar1() {
  function handleButtonClick() {
    window.location.href = '../user/login';
 }
  return (
    <div>
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="" className="flex items-center">
          <img src="../Home.png" className="h-8 mr-3" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Study Abroad</span>
      </a>
      </div>
    </nav>
    </div>
  )
}
