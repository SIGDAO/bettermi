import * as React from 'react';
import './menuBar.css';
import { Link } from 'react-router-dom';

export interface IMenuBarProps {
}

const MenuBar: React.FC<IMenuBarProps> = (props) => {
  
  return (
    <div className="menu-bar-RoXPLo">
      {/* <img className="menu_bar_bg-j7gIYx" src={`${process.env.PUBLIC_URL}/img/menuBar/menu-bar-bg-1@1x.png`} alt="menu_bar_bg" /> */}
      <Link to={'/allMission'} >
        <div className="ic_-missions-j7gIYx ic_-missions">
          <img className="ic_-missions-hYxH4K ic_-missions" src={`${process.env.PUBLIC_URL}/img/menuBar/ic-missions-1@1x.png`} alt="ic_Missions" />
        </div>
      </Link>
      <Link to={'/selfieToEarn'}>
        <div className="ic_-selfie-j7gIYx ic_-selfie">
          <img className="ic_-selfie-g4xsGx ic_-selfie" src={`${process.env.PUBLIC_URL}/img/menuBar/ic-selfie-2@1x.png`} alt="ic_Selfie" />
        </div>
      </Link>
      <Link to={'/home'}>
        <div className="ic_home-j7gIYx ic_home">
          <img className="ic_home-LCrugA ic_home" src={`${process.env.PUBLIC_URL}/img/menuBar/ic-home-1@1x.png`} alt="ic_home" />
        </div>
      </Link>
      <Link to='/reward'>
        {/* the reward icon */}
        <div className="ic_rewards-j7gIYx">
          <img className="x11659-caFcm9" src={`${process.env.PUBLIC_URL}/img/menuBar/file---11659@1x.png`} alt="11659" />
          <img className="x11660-caFcm9" src={`${process.env.PUBLIC_URL}/img/menuBar/file---11660@1x.png`} alt="11660" />
          <img className="x11661-caFcm9" src={`${process.env.PUBLIC_URL}/img/menuBar/file---11661@1x.png`} alt="11661" />
        </div>
      </Link>
      <Link to={'/profile'}>
        <div className="ic_profile-j7gIYx ic_profile">
          <img className="ic_profile-8GI7Ws ic_profile" src={`${process.env.PUBLIC_URL}/img/menuBar/ic-profile-1@1x.png`} alt="ic_profile" />
        </div>
      </Link>
      {/* <img className="seperat-line-j7gIYx" src={`${process.env.PUBLIC_URL}/img/menuBar/seperat-line-11@1x.png`} alt="Seperat line" /> */}
    </div>
  );
}

export default MenuBar;