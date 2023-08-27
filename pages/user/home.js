import React from 'react'
import Footer from '../components/footer'
import Navbar2 from '../navbar/navbar2'
import Logout from './logout'

export default function Homepage() {
  return (
    <>
      <Navbar2/>
<Logout/>
      <div className="my-7">
  <div className="hero-content flex-col lg:flex-row">
    <img src="../con.avif" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Study Abroad Consulatation Center</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
  </div>
  <Footer/>
  </>
  )
}
