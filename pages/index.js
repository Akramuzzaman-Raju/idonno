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
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleButtonClick}>Register</button>

    </div>
  </div>
</div>
<Footer />
    </>
  )
}
