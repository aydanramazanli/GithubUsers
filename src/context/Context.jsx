import React, { createContext, useEffect, useState } from "react";
import SDK from "./Sdk";
import axios from "axios";
//companents
import FollowersData from "./datas/FollowersData";
import UserData from "./datas/UserData";
import ReposData from "./datas/ReposData";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const sdk = new SDK();
  const [githubUser, setgithubUser] = useState(UserData);
  const [githubfFollowers, setgithubfFollowers] = useState(FollowersData);
  const [repos, setRepos] = useState(ReposData);
  const [request, setRequest] = useState();
  const [isloading, setIsLoading] = useState(false);
  const [err, setErr] = useState({ show: false, msg: "" });

  //check limit
  const req = () => {
    axios("https://api.github.com/rate_limit")
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        //remaining=0
        setRequest(remaining);
        if (remaining === 0) {
          toggleErr(true, "sorry you exceeded your rate limit !");
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(req, []);

  //Toggle error
  function toggleErr(show = false, msg = "") {
    setErr({ show, msg });
  }

  //Dynamic user
  const myUser = async (name) => {
    toggleErr();
    setIsLoading(true);
    const res = await axios(`https://api.github.com/users/${name}`).catch(
      (err) => {
        console.log(err);
      }
    );
    if (res) {
      setgithubUser(res.data);
      //repos
      const { login, followers_url } = res.data;
  
      
     await Promise.allSettled([axios(`https://api.github.com/users/${login}/repos?per_page=100`),axios(`${followers_url}?per_page=100`)])
     .then((results)=>{
      const [repos, followers] =results
      const status='fulfilled'
      if(repos.status===status){
        setRepos(repos.value.data)
      }
      if(followers.status===status){
        setgithubfFollowers(followers.value.data)
      }
    })


    } else {
      toggleErr(true, "Sorry, there is no user with this username !");
    }
    req();
    setIsLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        githubfFollowers,
        repos,
        request,
        err,
        myUser,
        isloading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
