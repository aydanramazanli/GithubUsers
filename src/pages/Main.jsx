import React from 'react'
import Repos from '../companents/Repos';
import User from '../companents/User';
import Navbar from '../companents/Navbar';
import Info from '../companents/Info'
import Search from '../companents/Search'
//import {AiOutlineLoading3Quarters} from 'AiOutlineLoading3Quarters'

export default function Main() {
  return (
    <>
      <Navbar/>
      <Search/>
      <Info/>
      <User/>
      <Repos/>
    </>
  )
}
