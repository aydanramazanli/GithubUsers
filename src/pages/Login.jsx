import React from 'react'
import LoginImage from '../images/login.jpg'
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from "framer-motion"


export default function Login() {
  const { loginWithRedirect } = useAuth0()
  const variants = {
    hidden: { opacity: 0, x:-100},
    visible: { opacity: 1, x:0 },
  }

  return (
    <div className="height-full flex flex-col items-center justify-center bg-teal-50">
      <motion.img src={LoginImage} alt="github user"  className="my-4" variants={variants}
      initial='hidden'
      animate='visible'
      transition={{type:'spring', delay:0.5}}/>
      <button onClick={loginWithRedirect}  className="bg-cyan-700 hover:bg-cyan-600 duration-200 text-white  font-semibold py-1.5 px-3 rounded"
       
      >Login up/ Sign up</button>

    </div>
  )
}   