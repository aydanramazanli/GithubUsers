import React from 'react'
import LoginImage from '../images/login.jpg'
import { useAuth0 } from '@auth0/auth0-react';


export default function Login() {
  const { loginWithRedirect } = useAuth0()
  return (
    <div className="height-full flex flex-col items-center justify-center bg-teal-50">
      <img src={LoginImage} alt="github user"  className="my-4"/>
      <button onClick={loginWithRedirect}  className="rounded py-2 px-3 bg-slate-500 text-red-50 outline-none border-gray-600">Login up/ Sign up</button>

    </div>
  )
}
