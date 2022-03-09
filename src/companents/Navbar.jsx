import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const {user, isAuthenticated, isLoading, loginWithRedirect, logout}= useAuth0()
  const isUser = isAuthenticated && user 
  return (
    <div className="content bg-white px-2 py-4">
      <div className="flex justify-evenly items-center ">
      {isUser && user.picture && <img src={user.picture} alt ={user.name} className="w-12 h-12 rounded-3xl"/>}
    {isUser && user.name && <h4>Welcome, <strong>{user.name.toUpperCase()}</strong></h4>}

    {isUser?
     <button className="p-3 text-slate-500 font-medium" onClick={()=>{logout({returnTo:window.location.origin})}}>Logout</button> 
     : <button className=" p-3 text-slate-500 font-medium" onClick={loginWithRedirect}>Login</button>
    }
   
   
    
      </div>
   
    </div>
  )
}
