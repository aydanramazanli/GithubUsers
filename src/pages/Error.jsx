import React from 'react'
import {Link} from 'react-router-dom'

export default function Error() {
  return (
    <>
      <div className="height-full flex flex-col items-center justify-center bg-cyan-200">
        <h1 className="font-semibold text-3xl text-slate-500 ">404</h1>
        <h3 className="font-semibold txt-2xl my-4 text-slate-500">Sorry, The Page You Tried Cannot Be Found</h3>
      <Link to ='/'>
      <button className="rounded py-2 px-3 bg-slate-500 text-red-50 outline-none border-gray-600">Back to home</button>
      </Link>
      </div>
    </>
  )
}
