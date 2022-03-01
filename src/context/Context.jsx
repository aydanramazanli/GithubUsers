import React, { createContext } from "react";

//const url = 'https://github.com/'

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  return <GithubContext.Provider value={"hello"}>{children}</GithubContext.Provider>;
};

export { GithubProvider, GithubContext };
