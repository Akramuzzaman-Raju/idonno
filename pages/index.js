import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from './components/footer'
import Navbar1 from './navbar/navbar1'
//import Sidebar from './navbar/sidebar'
//import Sidebar1 from './navbar/sidebar1'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function handleButtonClick() {
    window.location.href = '../user/registration';
 }
  return (
    <>
    <Navbar1/>
    {/* <Sidebar/> */}
    {/* <Sidebar1/> */}
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="./con.avif" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Study Abroad Consulatation Center</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      {/* <button className="btn btn-primary">Register</button> */}
    <div className="py-1">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleButtonClick}>Login</button>
    </div>
    <p className="pl-7">or</p>
    <div className="py-1">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleButtonClick}>Register</button>
     </div>
    </div>
  </div>
</div>

{/* <div className="carousel w-full h-1/2">
  <div id="item1" className="carousel-item w-full">
    <img src="image1.jpeg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="image2.jpeg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="image3.jpeg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="image4.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div> */}
<Footer />
    </>
  )
}
