import React, { createContext, useEffect, useState } from "react";
import FollowersData from "./datas/FollowersData";
import UserData from "./datas/UserData";
import ReposData from "./datas/ReposData";
import SDK from './Sdk'
import axios from 'axios'
import { data } from "autoprefixer";



const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const sdk = new SDK()
  const [githubUser, setgithubUser] = useState(UserData);
  const [githubfFollowers, setgithubfFollowers] = useState(FollowersData);
  const [repos, setRepos] = useState(ReposData);
  const [request, setRequest] = useState();
  const [loading, setLoading] = useState();
  const [err,setErr]=useState({show:false, msg:""})
  


const req=()=>{
  axios('https://api.github.com/rate_limit').then(({data})=>
  {let {rate:{remaining},} =data
  // remaining=0
  setRequest(remaining)
  if(remaining===0){
    toggleErr(true, "sorry you exceeded your rate limit !")
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

function toggleErr(show =false,msg =''){
  setErr({show,msg})
}


  return <GithubContext.Provider value={{githubUser,githubfFollowers,repos, request, err}}>{children}</GithubContext.Provider>;
};

export { GithubProvider, GithubContext };
