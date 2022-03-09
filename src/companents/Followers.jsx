import React, {useContext} from 'react'
import {GithubContext} from '../context/Context'
import { motion } from "framer-motion"

export default function Followers() {
  const {githubfFollowers} = useContext(GithubContext)
  return (
    <motion.div className=" mb-6" style={{width:"49%"}} initial={{x:200}} animate={{x:0}} transition={{delay:0.8}}>
        <div className="follow bg-white  py-2 px-4 rounded w-28"  >
        <h3 className="text-slate-500 font-light">Followers</h3></div>
        <div className="bg-white followers  p-6 rounded ">
      
      {githubfFollowers.map((follower, index)=>{
        const {avatar_url:img, html_url,login} = follower
        return(
          <article key={index} className="flex items-center ">
            <img src={img} alt={login} className="w-12 h-12 rounded-3xl"/>
            <div className="ml-3">
              <h3 className="font-semibold text-base text-slate-800">{login}</h3>
              <a href={html_url} className="text-slate-500 text-sm">{html_url}</a>
            </div>
            
            </article>
        )

      })}
    </div>
    </motion.div>
   
  )
}
