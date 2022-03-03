import React, { useContext } from "react";
import { GithubContext } from "../context/Context";
import shortid from "shortid";
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';



export default function Info() {
  const {githubUser} = useContext( GithubContext)
  const {followers, following,public_gists,public_repos} = githubUser


   const items=[
    {
 
      icon: <GoRepo/>,
      label: 'repos',
      value: public_repos,
      color: 'text-emerald-400 bg-emerald-100 ',
    },
    {
 
      icon:<FiUsers/>,
      label: 'followers',
      value: followers,
      color: 'text-fuchsia-500 bg-fuchsia-100 ',
    }
    , {
  
      icon:<GoGist/>,
      label: 'public_gists',
      value:public_gists,
      color: 'text-yellow-600 bg-yellow-100 ',
    },
   {
 
      icon: <FiUserPlus/>,
      label: 'following',
      value: following,
      color: 'text-cyan-500 bg-cyan-100 ',

    }
   
  ]


  return (
    <section className='container   m-auto px-20'>
      <div className='flex justify-between w-full items-center '>
        {items.map((item) => {
          return <Item key={shortid()} {...item}></Item>;
        })}
      </div>
    </section>
  );
};

const Item = ({ icon, label, value, color }) => {
  return (
    <article className='item bg-white rounded p-4 flex items-center justify-around text-center w-1/4 mx-4' >
      <span className={`rounded-3xl text-2xl p-3 ${color}`}>{icon}</span>
      <div>
        <h3 className=
        "font-semibold text-2xl text-stone-600">{value}</h3>
        <p className="text-stone-500 font-light capitalize text-lg">{label}</p>
      </div>
    </article>
  );
};



