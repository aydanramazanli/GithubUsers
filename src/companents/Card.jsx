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

  console.log(blog);

  return (
    <div className="w-1/2 bg-white my-14 p-10 rounded mx-5">
      <header className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={avatar_url} alt={name} className="w-24 h-24 rounded-3xl" />
          <div className="mx-5">
            <h4 className="font-semibold">{name}</h4>
            <h4 className="text-slate-500">@{twitter_username || "twitter username"}</h4>
          </div>
        </div>
        <div className="follow rounded-2xl border-cyan-400 text-cyan-400 hover:text-white border-2 hover:border-white px-3 py-1 bg-transparent hover:bg-cyan-400 duration-300">
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
  );
}
