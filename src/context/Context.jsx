import React, { createContext, useEffect, useState } from "react";
import FollowersData from "./datas/FollowersData";
import UserData from "./datas/UserData";
import ReposData from "./datas/ReposData";
import SDK from './Sdk'



const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setgithubUser] = useState(UserData);
  const [githubfFollowers, setgithubfFollowers] = useState(FollowersData);
  const [repos, setRepos] = useState(ReposData);
  const sdk = new SDK()



  useEffect(() => {
    const data =async()=>{
      const user = await sdk.getUser()
      setgithubUser(user)
    }
  
  }, [])



useEffect(() => {
  const followers =async()=>{
    const follow = await sdk.getUser()
    setgithubfFollowers(follow)
    
  }

},[])


useEffect(() => {
  const Repositories =async()=>{
    const repo = await sdk.getUser()
    setRepos(repo)
    
  }

},[])



  return <GithubContext.Provider value={{githubUser,githubfFollowers,repos}}>{children}</GithubContext.Provider>;
};

export { GithubProvider, GithubContext };
