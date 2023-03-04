import React from 'react'
import FooterElement from './FooterElement'
import "../styles/Sidebar.css"
import SideBarRow from './SideBarRow'
import SideBarRowCategories from './SideBarRowCategories'
import { useState, useEffect } from 'react';

function Sidebar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    console.log(windowWidth)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="sidebar">
      <hr/>
      
      <SideBarRow id="23" url="/" enable="1" icon="home" listName="Live Talks" count=""/>
      <SideBarRow id="24" url="/Scheduled" enable="1" icon="date_range" listName="Scheduled" count=""/>
      <SideBarRow id="25" url="/Explore" enable="" icon="explore" listName="Explore" count=""/>
      <SideBarRow id="26" url="/ShortAnswers" enable="" icon="motion_mode" listName="Short Answers" count=""/>
      <SideBarRow id="27" url="/Followings" enable="" icon="subscriptions" listName="Followings" count=""/>
      <hr/>
      <SideBarRowCategories/>
      <hr/>
      <SideBarRow id="28" url="/Library" enable="" icon="library_books" listName="Library" count=""/>
      <SideBarRow id="29" url="/YourTalks" enable="1" icon="smart_display" listName="Your Talks" count=""/>
      <hr/>
      <SideBarRow id="30" url="/OurMission" enable="1" icon="grade" listName="Our Mission" count=""/>
      <hr/>
      {windowWidth<501 ? <></> :
       <div className='footer'>
       <div className='footer_list'>
         <FooterElement name="Privacy Policy" url="/PrivacyPolicy"/>
         <FooterElement name="FAQ" url="/FAQ"/>
         <FooterElement name="Contact Us" url="/ContactUs"/>
         <FooterElement name="Feedback" url="/Feedback"/>
         <FooterElement name="Terms" url="/Terms"/>
         <FooterElement name="Social Media" url="/SocialMedia"/>
       </div>
       <div id="footer_date">© {(new Date().getFullYear())} Umizgi</div>
     </div>
      }
      
    </div> 
  )

  

}

export default Sidebar