import React, { useContext } from "react";
import { GithubContext } from "../context/Context";
import Charts from './charts/Charts'
import Pie from './charts/Pie'

export default function Repos() {
const {repos}= useContext(GithubContext)
console.log(repos)
  const chartData = [
    {
      label: "Html",
      value: "20"
    },
    {
      label: "Css",
      value: "40"
    },
   
    {
      label: "Javascript",
      value: "60"
    }
  ];
  return (
    <div className=" content   relative ">
      <div className="my-10 flex items-center justify-between">
      <Pie data ={chartData}/>
      <Charts  data ={chartData}/>
      </div>
      <div className="my-10 flex items-center justify-between">
      <Pie data ={chartData}/>
      <Charts  data ={chartData}/>
      </div>
    
    </div>
    
  
  )
}
