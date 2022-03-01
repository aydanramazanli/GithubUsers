import React from 'react'
import LoginImage from '../images/login.jpg'
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from 'react-router-dom'


export default function Login() {
  return (
    <div className="height-full flex flex-col items-center justify-center bg-teal-50">
      <img src={LoginImage} alt="github user"  className="my-4"/>
      <Link to ='/'>
      <button className="rounded py-2 px-3 bg-slate-500 text-red-50 outline-none border-gray-600">Login up/ Sign up</button>
      </Link>
    </div>
  )
}
