import React, { createContext, useEffect, useState } from "react";
import FollowersData from "./datas/FollowersData";
import UserData from "./datas/UserData";
import ReposData from "./datas/ReposData";
import SDK from './Sdk'
import axios from 'axios'
import { data } from "autoprefixer";



const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setgithubUser] = useState(UserData);
  const [githubfFollowers, setgithubfFollowers] = useState(FollowersData);
  const [repos, setRepos] = useState(ReposData);
  const [request, setRequest] = useState();
  const [loading, setLoading] = useState();
  const sdk = new SDK()


const req=()=>{
  axios('https://api.github.com/rate_limit').then(({data})=>
  {let {rate:{remaining},} =data
  setRequest(remaining)
  if(remaining===0){
    ///
  }
}
  )
  .catch((err)=>console.log(err))
}

useEffect(req,[])


  useEffect(() => {
    const data =async()=>{
      const user = await sdk.getUser('aydansamedova')
      console.log(user)
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




  return <GithubContext.Provider value={{githubUser,githubfFollowers,repos, request}}>{children}</GithubContext.Provider>;
};

export { GithubProvider, GithubContext };
