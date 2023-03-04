import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/FooterElement.css'

function FooterElement({name, url}) {
  return (
    <NavLink to={url} alt={name} className={({ isActive }) => "footerElement" + (isActive ? " footerElement_active" : "")} >
        {name}
    </NavLink> 
  )
}

export default FooterElement