import React, { useState } from "react";
import '../styles/Header.css';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom"


function Header() {
  const [inputSearch] = useState("");

  return (
    <div className='header'>
        <Link to={'/'}>
            <img
                src='./logo.svg'
                className='header__logo'
                alt='header__logo'
            />
        </Link>
        <div className='header__input' title="Work in progress, Soon!">
            <input readOnly value={inputSearch} placeholder="Search talks and accounts" type="text" />
            <span className="material-symbols-outlined" id="header__inputButton">search</span>  
        </div>
        <div className='header__icons'>
            <Link to={'/AddCoins'} style={{textDecoration: 'none'}} title="Add Points" className='amount_of_points'>450<div>coins</div></Link>
            <Link to={'/AddCoins'} style={{textDecoration: 'none'}} title="Add Points" className="material-symbols-outlined">add_circle</Link> 
            <Link to={'/CreateTalk'} style={{textDecoration: 'none'}} title="Create Talk" className="material-symbols-outlined">video_call</Link> 
            <span className="material-symbols-outlined" id='header__icon_disable' title="Work in progress, Soon!">notifications</span> 
            <Avatar 
                className='header__avatar'
                src="https://yt3.ggpht.com/yti/AJo0G0kkGKIyFrUUEhQtzu-FSTHEOE1P9buBn-aROOywJQ=s88-c-k-c0x00ffffff-no-rj-mo"
                alt="Avatar"
            />
        </div>
    </div>
  )
}

export default Header