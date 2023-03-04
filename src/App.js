import './App.css';
import React from 'react';
import YourTalks from './sites/YourTalks';
import OurMission from './sites/OurMission';
import PrivacyPolicy from './sites/PrivacyPolicy';
import FAQ from './sites/FAQ';
import ContactUs from './sites/ContactUs';
import Feedback from './sites/Feedback';
import Terms from './sites/Terms';
import SocialMedia from './sites/SocialMedia';
import AddPoints from './sites/AddPoints';
import Purchases from './sites/Purchases';
import CreateTalk from './sites/CreateTalk';
import MyAccount from './sites/MyAccount';
import Live from './sites/account/Live';
import Account from './sites/account/Account';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app__content'>
          
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<><Sidebar/><Content id="0" category="Live Talks"/></>}/>
            <Route path="/Scheduled" element={<><Sidebar/><Content id="1" category="Scheduled"/></>}/>
            <Route path="/category/Musicians" element={<><Sidebar/><Content id="2" category="Musicians"/></>}/>
            <Route path="/category/Influencers" element={<><Sidebar/><Content id="3" category="Influencers"/></>}/>
            <Route path="/category/ITCreators" element={<><Sidebar/><Content id="4" category="IT Creators"/></>}/>
            <Route path="/category/Scientists" element={<><Sidebar/><Content id="5" category="Scientists"/></>}/>
            <Route path="/category/Entrepreneurs" element={<><Sidebar/><Content id="6" category="Entrepreneurs"/></>}/>
            <Route path="/category/Actors" element={<><Sidebar/><Content id="7" category="Actors"/></>}/>
            <Route path="/category/Athletes" element={<><Sidebar/><Content id="8" category="Athletes"/></>}/>
            <Route path="/category/Comedians" element={<><Sidebar/><Content id="9" category="Comedians"/></>}/>
            <Route path="/category/Gamers" element={<><Sidebar/><Content id="10" category="Gamers"/></>}/>
            <Route path="/category/Models" element={<><Sidebar/><Content id="11" category="Models"/></>}/>
            <Route path="/category/Artists" element={<><Sidebar/><Content id="12" category="Artists"/></>}/>
            <Route path="/category/Authors" element={<><Sidebar/><Content id="13" category="Authors"/></>}/>
            <Route path="/category/Activists" element={<><Sidebar/><Content id="14" category="Activists"/></>}/>
            <Route path="/category/LGBTQ+" element={<><Sidebar/><Content id="15" category="LGBTQ+"/></>}/>
            <Route path="/category/Bloggers" element={<><Sidebar/><Content id="16" category="Bloggers"/></>}/>
            <Route path="/category/Filmers" element={<><Sidebar/><Content id="17" category="Filmers"/></>}/>
            <Route path="/category/Engineers" element={<><Sidebar/><Content id="18" category="Engineers"/></>}/>
            <Route path="/category/Priests" element={<><Sidebar/><Content id="19" category="Priests"/></>}/>
            <Route path="/category/Historians" element={<><Sidebar/><Content id="20" category="Historians"/></>}/>
            <Route path="/category/Politicians" element={<><Sidebar/><Content id="21" category="Politicians"/></>}/>
            <Route path="/category/Farmers" element={<><Sidebar/><Content id="22" category="Farmers"/></>}/>
            <Route path="/category/Youtubers" element={<><Sidebar/><Content id="23" category="YouTubers"/></>}/>
            <Route path="/category/Tiktokers" element={<><Sidebar/><Content id="24" category="TikTokers"/></>}/>
            <Route path="/YourTalks" element={<><Sidebar/><YourTalks/></>}/>
            <Route path="/OurMission" element={<><Sidebar/><OurMission/></>}/>
            <Route path="/PrivacyPolicy" element={<><Sidebar/><PrivacyPolicy/></>}/>
            <Route path="/FAQ" element={<><Sidebar/><FAQ/></>}/>
            <Route path="/ContactUs" element={<><Sidebar/><ContactUs/></>}/>
            <Route path="/Feedback" element={<><Sidebar/><Feedback/></>}/>
            <Route path="/Terms" element={<><Sidebar/><Terms/></>}/>
            <Route path="/SocialMedia" element={<><Sidebar/><SocialMedia/></>}/>
            <Route path="/AddPoints" element={<AddPoints/>}/>
            <Route path="/Purchases" element={<Purchases/>}/>
            <Route path="/CreateTalk" element={<CreateTalk/>}/>
            <Route path="/account" element={<MyAccount/>}/>
            <Route path="/@user123/account" element={<Account/>}/>
            <Route path="*" element={<Account/>}/>
            <Route path="/@user123/live" element={<Live/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
