import React,{useState,useEffect} from 'react'
import './App.css';
import Data from "./data.json";
import * as d3 from "d3";
import {scaleLinear} from "d3-scale";
import {barchart} from barchart;
import {Linechart}from Linechart;

function App() {
  const getMode=()=>{
    return JSON.parse(localStorage.getItem("Mode")|| false)
  }
  const[dark,setMode]=useState(getMode())
  useEffect(()=>
  {
    localStorage.setItem("mode",JSON.stringify(dark))
  },[dark])
 
  return (
    <div className={dark?"App dark-mode":"App"}>
    <div className="nav">
    <label className="switch">
    <input type="checkbox"
      onChange={()=>setMode(!dark)}
    />
    <span className="slider round"></span>
</label>
    </div>
    <div className="content">
    <div className="posts">
    {
      Data.map(post =>{
        return(
          <>
          <h4>{post.Name}</h4>
          <p>{post.Picture}
          {post.Quality}
          {post.handicap}
          {post.Sgtotal}</p>
          </>
        )
        
      })
    }
    </div>
    <>{barchart}
    {Linechart}</>
    </div>
    </div>
  );
}

export default App;
