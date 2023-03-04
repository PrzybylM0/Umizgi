import React from 'react'
import "../styles/SideBarRow.css"
import 'typeface-roboto'
import { NavLink } from "react-router-dom"
import Balu from "./DataInfo.json"
import { useState, useEffect } from 'react';

function SideBarRow(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    console.log()
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);


  if(windowWidth>500){
    return (
    <div>
      {props.enable ? 
      <NavLink to={props.url} alt={props.listName} className={({ isActive }) => "sidebarRow" + (isActive ? " sidebarRow_enable" : "")} >
        <span className="material-symbols-outlined">{props.icon}</span> 
        <h3 className='listName'>{props.listName}</h3>
        {props.count ? 
        <div>
          {Balu[props.id+2][props.listName][0]["numberOfTalks"]==="0" ?
            <div style={{color:"#C4C4C4"}} className='numberOfTalks'>{Balu[props.id+2][props.listName][0]["numberOfTalks"]}</div>
            :
            <div className='numberOfTalks'>{Balu[props.id+2][props.listName][0]["numberOfTalks"]}</div>
          }
        </div>
        : 
        <></>}
      </NavLink> 
      : 
      <div className='sidebarRow_disable' title="Work in progress, Soon!">
        <span className="material-symbols-outlined">{props.icon}</span> 
        <h3 className='listName'>{props.listName}</h3>
        <div>
          <div className="material-symbols-outlined">timer</div> 
        </div>
      </div>
      }
    </div>
  )}
  else{
    return (
      <div>
        {props.enable ? 
        <NavLink to={props.url} alt={props.listName} className={({ isActive }) => "sidebarRow" + (isActive ? " sidebarRow_enable" : "")} >
          <span className="material-symbols-outlined">{props.icon}</span> 
        </NavLink> 
        : 
        <div className='sidebarRow_disable' title="Work in progress, Soon!">
          <span className="material-symbols-outlined">{props.icon}</span> 
        </div>
        }
      </div>
      )
    }
}

export default SideBarRow





