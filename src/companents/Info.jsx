import React, { useContext } from "react";
import { GithubContext } from "../context/Context";
import shortid from "shortid";
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { motion } from "framer-motion"



export default function Info() {
  const {githubUser} = useContext( GithubContext)
  const {followers, following,public_gists,public_repos} = githubUser


   const items=[
    {
 
      icon: <GoRepo/>,
      label: 'repos',
      value: public_repos,
      color: 'text-emerald-400 bg-emerald-100 ',
      transition: 1
      
    },
    {
 
      icon:<FiUsers/>,
      label: 'followers',
      value: followers,
      color: 'text-fuchsia-500 bg-fuchsia-100 ',
      transition: 2
      
    }
    , {
  
      icon:<GoGist/>,
      label: 'public_gists',
      value:public_gists,
      color: 'text-yellow-600 bg-yellow-100 ',
      transition: 3
      
    },
   {
 
      icon: <FiUserPlus/>,
      label: 'following',
      value: following,
      color: 'text-cyan-500 bg-cyan-100 ',
      transition: 4

    }
   
  ]

  console.log(items)

  return (
    <section className='content'>
      <div className='flex justify-between w-full items-center mb-10'>
        {items.map((item) => {
          return <Item key={shortid()} {...item}></Item>;
        })}
      </div>
    </section>
  );
};

const Item = ({ icon, label, value, color}) => {
  
  return (
    <motion.article className='item bg-white rounded p-4 flex items-center justify-around text-center w-1/4 mr-4' 
    initial={{ scale: 1.2}}
    animate={{ scale: 1 }}
    transition={{ delay:0.5 }}
    drag="x"
    dragConstraints={{ top: 0, bottom: 0, left:200, right:0 }}
    >
      <span className={`rounded-3xl text-2xl p-3 ${color}`}>{icon}</span>
      <div>
        <h3 className=
        "font-semibold text-2xl text-stone-600">{value}</h3>
        <p className="text-stone-500 font-light capitalize text-lg">{label}</p>
      </div>
    </motion.article>
  );
};



