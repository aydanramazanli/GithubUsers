import React, { useContext } from "react";
import { GithubContext } from "../context/Context";



export default function Info() {
  const {githubUser} = useContext( GithubContext)
  const {followers, following,location,created_at,public_repos} = githubUser


   const items=[
    {
 
      icon: <i className="fa-solid fa-code"></i>,
      label: 'repos',
      value: public_repos,
      color: 'pink',
    },
    {
 
      icon:<i className="fa-solid fa-users"></i>,
      label: 'followers',
      value: followers,
      color: 'gray',
    },
    {

      icon: <i className="fa-solid fa-earth-asia"></i>,
      label: 'created',
      value: created_at,
      color: 'yellow',
    }
    , {
 
      icon: <i className="fa-solid fa-user"></i>,
      label: 'following',
      value: following,
      color: 'green',
    }
    , {
  
      icon:<i className="fa-solid fa-circle-plus"></i>,
      label: 'location',
      value: location,
      color: 'blue',
    }
  ]


  return (
    <section className='section'>
      <div className='section-center'>
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </div>
    </section>
  );
};

const Item = ({ icon, label, value, color }) => {
  return (
    <article className='item'>
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};



