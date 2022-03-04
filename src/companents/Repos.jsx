import React, { useContext } from "react";
import { GithubContext } from "../context/Context";
import Charts from './charts/Charts'
import Pie from './charts/Pie'

export default function Repos() {
const {repos}= useContext(GithubContext)

let languages =repos.reduce((total, item)=>{
  const {language} = item
 if(!language) return total
 if(!total[language]){
    total[language] ={label:language, value:1}
  }
  else{
    total[language]={...total[language],value:total[language].value+1}
  }
  return total
},{})

languages = Object.values(languages).sort((a,b)=>{
  return b.value-a.value
}).slice(0,5)



console.log(languages)




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
      <Pie data ={languages}/>
      <Charts  data ={chartData}/>
      </div>
      <div className="my-10 flex items-center justify-between">
      <Pie data ={chartData}/>
      <Charts  data ={chartData}/>
      </div>
    
    </div>
    
  
  )
}
