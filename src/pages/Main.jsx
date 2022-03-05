import React, {useContext} from 'react'
import {GithubContext} from '../context/Context'
import Repos from '../companents/Repos';
import User from '../companents/User';
import Navbar from '../companents/Navbar';
import Info from '../companents/Info'
import Search from '../companents/Search'
import loadinggif from '../images/loadingg.gif'
//import {AiOutlineLoading3Quarters} from 'AiOutlineLoading3Quarters'

export default function Main() {
  const {isloading} =useContext(GithubContext)
if(isloading){
  return (
    <main>
      <Navbar/> 
      <Search/>
     <img src={loadinggif} alt="loading..." className="m-auto  bg-transparent" />
    </main>
  )
} 
  else{
    return (
      <main>
        <Navbar/>
        <Search/>
        <Info/>
        <User/>
        <Repos/>
      </main>
    )
  }
  
}
