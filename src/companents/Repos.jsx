import React, { useContext } from "react";
import { GithubContext } from "../context/Context";
import Charts from './charts/Charts'
import Pie from './charts/Pie'
import Dougnut from './charts/Dougnut'
import Spline from './charts/Spline'

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


const mostUsed = Object.values(languages)
.sort((a, b) => {
  return b.value - a.value;
})
.slice(0, 5);

const mostPopular = Object.values(languages)
.sort((a, b) => {
  return b.stars - a.stars;
})
.map((item) => {
  return { ...item, value: item.stars };
})
.slice(0, 5)

 console.log(repos)

let { stars, forks } = repos.reduce(
  (total, item) => {
    const { stargazers_count, name, forks } = item;
    total.stars[stargazers_count] = { label: name, value: stargazers_count };
    total.forks[forks] = { label: name, value: forks };
    return total;
  },
  {
    stars: {},
    forks: {},
  }
);

stars = Object.values(stars).slice(-5).reverse();
forks = Object.values(forks).slice(-5).reverse();

  return (
    <div className=" content   relative ">
      <div className="my-10 flex items-center justify-between">
      <Pie data ={mostUsed}/>
      <Charts  data ={stars}/>
      </div>
      <div className="my-10 flex items-center justify-between">
      <Spline  data ={mostPopular}/>
      <Dougnut data ={forks}/>
     
      </div>
    
    </div>
    
  
  )
}
