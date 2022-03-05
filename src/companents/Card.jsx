import React, { useContext } from "react";
import { GithubContext } from "../context/Context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

export default function Card() {
  const { githubUser } = useContext(GithubContext);
  const {
    avatar_url,
    bio,
    html_url,
    name,
    company,
    blog,
    location,
    twitter_username,
  } = githubUser;



  return (
    <div className="bg-white  p-6 rounded  relative" style={{width:"49%"}}>
      <div className="user absolute bg-white user left-0 py-2 px-4 rounded"  >
        <h3 className="text-slate-500 font-light">User</h3></div>
      <header className="flex justify-between  items-center">
        <div className="flex items-center">
          <img src={avatar_url} alt={name} className="w-20 h-20 rounded-3xl" />
          <div className="mx-5">
            <h4 className="font-semibold">{name}</h4>
            <h4 className="text-slate-500">@{twitter_username || "twitter username"}</h4>
          </div>
        </div>
        <div className="follow rounded-2xl border-cyan-400 text-cyan-400 hover:text-white border-2  px-3 py-1 bg-transparent hover:bg-cyan-400 duration-300">
          <a href={html_url} >Follow</a>
        </div>
      </header>
      <h3 className="my-4 text-slate-500">{bio}</h3>
      <main>
        <p className="flex">
          <MdBusiness className="text-xl mr-1 text-cyan-800" /> {company}
        </p>
        <p className="flex my-3">
       <MdLocationOn className="text-xl mr-1 text-cyan-800"/> {location}
        </p>
        <a href={`https://${blog}`} className="flex text-cyan-600">
          <MdLink className="text-xl mr-1 text-cyan-800"/>
          {blog}
        </a>
      </main>
    </div>
  )}