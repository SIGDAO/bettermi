import * as React from 'react';
import './home.css'
import { CenterLayout } from '../../components/layout';
import MenuBar from '../../components/menuBar';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const content: JSX.Element = (
    // <div className="home-container">
    //           <div className="missions-scroll-RoXPLo">
    //       <div className="challenges-x9-hacks-GEWAL1">
    //         <div className="small-image">
    //           <img className="challenge-x9_banner-UqALvc" src="img/challengex9-banner@1x.png" alt="ChallengeX9_banner" />
    //         </div>
    //         <div className="challengesx-9-hacks-ewZMRw inter-medium-white-15px">Challenges<br />x 9 hacks</div>
    //         <div className="x1-3mins-each-ewZMRw inter-normal-cadet-blue-12px">1-3mins/ each</div>
    //         <div className="sigdao-score-ewZMRw sigdao-score">
    //           <div className="x10-HEHiSw x10 inter-semi-bold-keppel-14px">+5.25 - 15.75</div>
    //           <div className="signdao_tokengradient-HEHiSw signdao_tokengradient">
    //             <div className="x441-giFx9O x441"></div>
    //             <div className="x442-giFx9O x442"></div>
    //             <img className="x880-giFx9O x880" src="img/file---880-1x-png-10@1x.png" alt="880" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="meditations-GEWAL1">
    //         <div className="small-image">
    //           <img className="meditation_banner-dLbFgX" src="img/meditation-banner@1x.png" alt="Meditation_banner" />
    //         </div>
    //         <div className="weekly-meditation-3kbxqV inter-medium-white-15px">Weekly Meditation</div>
    //         <div className="saturday-only-3kbxqV inter-normal-cadet-blue-12px">Saturday only</div>
    //         <div className="sigdao-score-3kbxqV sigdao-score">
    //           <div className="x10-UyxTRp x10 inter-semi-bold-keppel-14px">+20</div>
    //           <div className="signdao_tokengradient-UyxTRp signdao_tokengradient">
    //             <div className="x441-ozHgg7 x441"></div>
    //             <div className="x442-ozHgg7 x442"></div>
    //             <img className="x880-ozHgg7 x880" src="img/file---880-1x-png-10@1x.png" alt="880" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="step-counts-GEWAL1">
    //         <div className="small-image">
    //           <img className="step_count_banner-45Wblr" src="img/step-count-banner@1x.png" alt="Step_count_banner" />
    //         </div>
    //         <div className="walking-mission-7hGHU0 inter-medium-white-15px">Walking mission</div>
    //         <div className="step-count-7hGHU0 inter-normal-cadet-blue-12px">Step Count</div>
    //         <div className="sigdao-score-7hGHU0 sigdao-score">
    //           <div className="x10-SMcg87 x10 inter-semi-bold-keppel-14px">+20</div>
    //           <div className="signdao_tokengradient-SMcg87 signdao_tokengradient">
    //             <div className="x441-JHyhgs x441"></div>
    //             <div className="x442-JHyhgs x442"></div>
    //             <img className="x880-JHyhgs x880" src="img/file---880-1x-png-10@1x.png" alt="880" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="view-all-RoXPLo inter-medium-royal-blue-14px">View all</div>
    //     <div className="feature-missions-RoXPLo inter-semi-bold-white-21px">Feature Missions</div>
    //     <div className="reservation_button-RoXPLo">
    //       <img className="button_bg-nXPAX5" src="img/button-bg-1@1x.png" alt="Button_bg" />
    //       <div className="ic_reservation-nXPAX5 ic_reservation">
    //         <img className="ic_reservation-p9BhAR ic_reservation" src="img/ic-reservation@1x.png" alt="ic_reservation" />
    //       </div>
    //       <div className="ic_locked-nXPAX5 ic_locked">
    //         <img className="ic_locked-OiAYIf ic_locked" src="img/ic-locked-1@1x.png" alt="ic_locked" />
    //       </div>
    //     </div>
    //     <div className="leaderboard_button-RoXPLo">
    //       <div className="button_bg-IgToMG"></div>
    //       <div className="ic_leaderboard-IgToMG ic_leaderboard">
    //         <img className="ic_leaderboard-6DxnCN ic_leaderboard" src="img/ic-leaderboard@1x.png" alt="ic_leaderboard" />
    //       </div>
    //       <div className="ic_locked-IgToMG ic_locked">
    //         <img className="ic_locked-Itp9oo ic_locked" src="img/ic-locked-1@1x.png" alt="ic_locked" />
    //       </div>
    //     </div>
    //     <div className="special-card-RoXPLo">
    //       <div className="special-scroll-hH9Cww">
    //         <div className="x25-hK4LUV">
    //           <div className="x01-78JfKY"><img className="x1" src="img/1@1x.png" alt="1" /></div>
    //           <div className="x11-78JfKY"><img className="x1" src="img/1@1x.png" alt="1" /></div>
    //           <div className="x21-78JfKY"><img className="x1" src="img/1@1x.png" alt="1" /></div>
    //         </div>
    //       </div>
    //       <div className="slide-dots-hH9Cww">
    //         <div className="x444-3SAlGE"></div>
    //         <div className="x445-3SAlGE"></div>
    //         <div className="x446-3SAlGE"></div>
    //       </div>
    //       <div className="special_button-hH9Cww">
    //         <div className="button_bg-9uK1Tx"></div>
    //         <div className="ic_notifications-9uK1Tx ic_notifications">
    //           <img
    //             className="ic_notifications-6bhCAa ic_notifications"
    //             src="img/ic-notifications@1x.png"
    //             alt="ic_notifications"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="discord-RoXPLo inter-medium-royal-blue-14px">Discord</div>
    //     <div className="our-community-RoXPLo inter-semi-bold-white-21px">Our Community</div>
    //     <div className="button_-selfie-to-earn-RoXPLo">
    //       <img className="button_bg-TRrnim" src="img/button-bg-2@1x.png" alt="button_bg" />
    //       <p className="take-a-selfie-to-earn-TRrnim inter-semi-bold-white-15px">Take a Selfie to Earn!</p>
    //       <img className="ic_selfie-TRrnim" src="img/ic-selfie-1@1x.png" alt="ic_selfie" />
    //       <img className="ic_arrow_forward-TRrnim" src="img/ic-arrow-forward-1@1x.png" alt="ic_arrow_forward" />
    //     </div>
    //     <div className="quick-actions-RoXPLo inter-semi-bold-white-21px">Quick Actions</div>
    //     <div className="greetings-RoXPLo">
    //       <h1 className="title-2ZgxSS">Hello Zoe!</h1>
    //       <div className="lv_-reward-2ZgxSS">
    //         <div className="lv-1-b5x63m inter-semi-bold-keppel-15px">LV 1</div>
    //         <div className="nft-reward-10-b5x63m inter-semi-bold-white-15px">NFT REWARD +10%</div>
    //         <img className="seperate-line-b5x63m" src="img/seperate-line-1@1x.png" alt="seperate line" />
    //       </div>
    //       <img className="nft_-avatar-2ZgxSS" src="img/nft-avatar-13@1x.png" alt="NFT_Avatar" />
    //       <a href="bettermidapp-profile-1.html">
    //         <div className="ic_next-2ZgxSS">
    //           <img
    //             className="ic_chevron_right_24px-LRB8nH"
    //             src="img/ic-chevron-right-24px-1@1x.png"
    //             alt="ic_chevron_right_24px"
    //           /></div>
    //       </a>
    //       <div className="score-bar_3-2ZgxSS">
    //         <div className="sigdao-score-iPTNDG sigdao-score">
    //           <div className="x10-kxjIEt x10 inter-semi-bold-keppel-15px">2.625</div>
    //           <div className="signdao_tokengradient-kxjIEt signdao_tokengradient">
    //             <div className="x441-e5x8kp x441"></div>
    //             <div className="x442-e5x8kp x442"></div>
    //             <img className="x880-e5x8kp x880" src="img/file---880@1x.png" alt="880" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="sigdao-2ZgxSS inter-semi-bold-white-15px">SIGDAO:</div>
    //     </div>
    //     <div className="bars-status-bar-i-phone-light-RoXPLo">
    //       <div className="frame-Kudt5Q"></div>
    //       <div className="status-bar-Kudt5Q">
    //         <div className="battery-DCToX1">
    //           <div className="border-X3kIl8"></div>
    //           <img className="cap-X3kIl8" src="img/cap-10@1x.png" alt="Cap" />
    //           <div className="capacity-X3kIl8"></div>
    //         </div>
    //         <img className="wifi-DCToX1" src="img/wifi-10@1x.png" alt="Wifi" />
    //         <img className="cellular-connection-DCToX1" src="img/cellular-connection-10@1x.png" alt="Cellular Connection" />
    //         <div className="time-style-DCToX1"><div className="time-lnUbG0 sfprotext-semi-bold-white-15px">9:41</div></div>
    //       </div>
    //     </div>
        <MenuBar/>
        /* <div className="menu-bar-RoXPLo"> */
          /* <img className="menu_bar_bg-j7gIYx" src="img/menu-bar-bg-1@1x.png" alt="menu_bar_bg" />
          <div className="ic_home-j7gIYx ic_home">
            <img className="ic_home-LCrugA ic_home" src="img/ic-home-1@1x.png" alt="ic_home" />
          </div>
          <a href="bettermidapp-profile-1.html">
            <div className="ic_profile-j7gIYx ic_profile">
              <img className="ic_profile-8GI7Ws ic_profile" src="img/ic-profile-1@1x.png" alt="ic_profile" /></div></a>
              <a href="bettermidapp-rewards-1.html">
            <div className="ic_rewards-j7gIYx">
              <div className="ic_rewards-JMXzIu">
                <img className="x11659-caFcm9" src="img/file---11659@1x.png" alt="11659" />
                <img className="x11660-caFcm9" src="img/file---11660@1x.png" alt="11660" />
                <img className="x11661-caFcm9" src="img/file---11661@1x.png" alt="11661" />
              </div></div></a>
            <a href="bettermidapp-selfie-to-earn-1.html">
            <div className="ic_-missions-j7gIYx ic_-missions">
              <img className="ic_-missions-hYxH4K ic_-missions" src="img/ic-missions-1@1x.png" alt="ic_Missions" /></div></a
          ><a href="bettermidapp-selfie-to-earn-1.html">
            <div className="ic_-selfie-j7gIYx ic_-selfie">
              <img className="ic_-selfie-g4xsGx ic_-selfie" src="img/ic-selfie-2@1x.png" alt="ic_Selfie" /></div></a
          ><img className="seperat-line-j7gIYx" src="img/seperat-line-11@1x.png" alt="Seperat line" /> */
    // </div>
  )

  return (
    <CenterLayout
      content={content}
      bgImg={false}
    />
  );
};

export default Home;
