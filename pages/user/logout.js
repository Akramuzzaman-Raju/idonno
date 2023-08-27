import React from 'react'
import { useEffect } from 'react'

export default function Logout() {
    useEffect(() =>{
      let x= localStorage.getItem('userId')
        
        if(!x){
            console.log("logout");
            window.location.href = '/user/login';
        }

    })
  return (
    <div></div>
  )
}
