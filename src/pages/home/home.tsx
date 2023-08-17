import React, { useRef }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css'
import { CenterLayout } from '../../components/layout';
import MenuBar from '../../components/menuBar';
import { useSelector } from 'react-redux';
import { selectCurrentUsername } from '../../redux/profile';
import { accountToken } from '../../redux/account';
import { store } from '../../redux/reducer';
import { useState } from 'react';
import { useAppSelector } from '../../redux/useLedger';
import { LedgerClientFactory } from '@signumjs/core';
import { selectWalletNodeHost } from '../../redux/useLedger';
import { useEffect } from 'react';
import { accountSlice } from '../../redux/account';
import { isTodayHaveSelfieRecord } from '../../components/bmiCalculate';
import { useLedger } from '../../redux/useLedger';
import { accountId } from '../../redux/account';


interface IHomeProps {
}

function handleScrollHorizontally(event: any) {
  const container = event.target;
  const delta = Math.max(-1, Math.min(1, (event.deltaY || -event.detail)));
  container.scrollLeft -= (delta * 40); // Adjust scrolling speed here
  event.preventDefault();

}

const HorizontalScrollContainer = (props: any) => {
  const containerRef = useRef(null);

  return (
    <div
      className='missions-scroll-RoXPLo x-'
      ref={containerRef}
      style={{ overflowX: 'auto' }}
      onWheel={handleScrollHorizontally}
    >
      {props.children}
    </div>
  );
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  // info
  const name = useSelector(selectCurrentUsername);
  const Token:string = useSelector(accountToken);
  const userAccountId = useSelector(accountId);
  const [loading, setLoading] = useState<boolean>(true);
  const [imgAddress, setImgAddress] = useState<string>("");
  const nodeHost = useAppSelector(selectWalletNodeHost);
  const ledger2 = LedgerClientFactory.createClient({nodeHost});
  const userId = useAppSelector(accountId);
  const navigate = useNavigate();
  const tempAccountId = useSelector(accountId);
  const Ledger2 = useLedger();

  console.log(Token);
  console.log(store.getState());
  console.log("Token is  ",Token);

  useEffect(() => {
    // Function to fetch data from the APIc
    ledger2.account.getAccount({accountId:userId})
      .then((account)=>{
        const description = JSON.parse(account.description);
        console.log(description);
        console.log(Object.keys(description.av));
        console.log(typeof(Object.keys(description.av)[0]));
        setImgAddress(Object.keys(description.av)[0]);
        setLoading(false);  
        console.log(imgAddress);
        console.log(typeof(imgAddress));
      })
      .catch((error)=>{ 
        console.log("need to equip nft");
        console.log(imgAddress);
        console.log(typeof(imgAddress));
        setLoading(false);
      });

  }, []);
  // todo: map
  // const userSIGDAO = 

  // todo: export a button as take a selfie component
  async function handleTakeASelfie() {
    // if (await isTodayHaveSelfieRecord(tempAccountId, Ledger2)) {
    //   alert('already taken a selfie, since we are in demo mode, click comfirm for another selfie')
    //   navigate('/takeSelfie')
    // }
    navigate('/takeSelfie')
  }
  
  

  const content: JSX.Element = (
    <div className="screen">
      <div className="bettermidapp-home-1">
        <Link to="/allMission">
          <div className="view-all-RoXPLo inter-medium-royal-blue-14px">View all</div>
        </Link>
        <div className="feature-missions-RoXPLo inter-semi-bold-white-21px">Feature Missions</div>
        <div className="reservation_button-RoXPLo">
          <img className="button_bg-nXPAX5" src={`${process.env.PUBLIC_URL}/img/home/button-bg-1@1x.png`} alt="Button_bg" />
          <div className="ic_reservation-nXPAX5 ic_reservation">
            <img className="ic_reservation-p9BhAR ic_reservation" src={`${process.env.PUBLIC_URL}/img/home/ic-reservation@1x.png`} alt="ic_reservation" />
          </div>
          <div className="ic_locked-nXPAX5 ic_locked">
            <img className="ic_locked-OiAYIf ic_locked" src={`${process.env.PUBLIC_URL}/img/ic-locked-1@1x.png`} alt="ic_locked" />
          </div>
        </div>
        <div className="leaderboard_button-RoXPLo">
          <div className="button_bg-IgToMG"></div>
          <div className="ic_leaderboard-IgToMG ic_leaderboard">
            <img className="ic_leaderboard-6DxnCN ic_leaderboard" src={`${process.env.PUBLIC_URL}/img/ic-leaderboard@1x.png`} alt="ic_leaderboard" />
          </div>
          <div className="ic_locked-IgToMG ic_locked">
            <img className="ic_locked-Itp9oo ic_locked" src={`${process.env.PUBLIC_URL}/img/ic-locked-1@1x.png`} alt="ic_locked" />
          </div>
        </div>
        <div className="special-card-RoXPLo">
          <div className="special-scroll-hH9Cww">
            <div className="x25-hK4LUV">
              <div className="x01-78JfKY"><img className="x1" src={`${process.env.PUBLIC_URL}/img/home/1@1x.png`} alt="1" /></div>
              <div className="x11-78JfKY"><img className="x1" src={`${process.env.PUBLIC_URL}/img/home/1@1x.png`} alt="1" /></div>
              <div className="x21-78JfKY"><img className="x1" src={`${process.env.PUBLIC_URL}/img/home/1@1x.png`} alt="1" /></div>
            </div>
          </div>
          <div className="slide-dots-hH9Cww">
            <div className="x444-3SAlGE"></div>
            <div className="x445-3SAlGE"></div>
            <div className="x446-3SAlGE"></div>
          </div>
          <div className="special_button-hH9Cww">
            <div className="button_bg-9uK1Tx"></div>
            <div className="ic_notifications-9uK1Tx ic_notifications">
              <img
                className="ic_notifications-6bhCAa ic_notifications"
                src={`${process.env.PUBLIC_URL}/img/home/ic-notifications@1x.png`}
                alt="ic_notifications"
                />
            </div>
          </div>
        </div>
        <Link to="https://discord.gg/8tpu5SrX">
          <div className="discord-RoXPLo inter-medium-royal-blue-14px">Discord</div>
        </Link>
        <div className="our-community-RoXPLo inter-semi-bold-white-21px">Our Community</div>
        {/* <Link to="/selfieToEarn"> */}
        <div className="button_-selfie-to-earn-RoXPLo" onClick={() => handleTakeASelfie()}>
          <p className="take-a-selfie-to-earn-TRrnim inter-semi-bold-white-15px">Take a Selfie to Earn!</p>
          <img className="ic_selfie-TRrnim" src={`${process.env.PUBLIC_URL}/img/ic-selfie-1@1x.png`} alt="ic_selfie" />
          <img className="ic_arrow_forward-TRrnim" src={`${process.env.PUBLIC_URL}/img/ic-arrow-forward-1@1x.png`} alt="ic_arrow_forward" />
        </div>
        {/* </Link> */}
        <div className="quick-actions-RoXPLo inter-semi-bold-white-21px">Quick Actions</div>
        <div className="greetings-RoXPLo">
          <h1 className="title-2ZgxSS">Hi ! </h1>
          <div className="lv_-reward-2ZgxSS">
            <div className="lv-1-b5x63m inter-semi-bold-keppel-15px">LV 1</div>
            <div className="nft-reward-10-b5x63m inter-semi-bold-white-15px">NFT REWARD +10%</div>
            <img className="seperate-line-b5x63m" src={`${process.env.PUBLIC_URL}/img/seperate-line-1@1x.png`} alt="seperate line" />
          </div>
          {imgAddress === ""?
          <img className="nft_-avatar-2ZgxSS" src={`${process.env.PUBLIC_URL}/img/home/nft-avatar-13@1x.png`} alt="NFT_Avatar" />
          :(
            <img className = "nft_-avatar-2ZgxSS" src = {`https://ipfs.io/ipfs/${imgAddress}`}></img>
          )
          }
          <Link to="/profile">
            <div className="ic_next-2ZgxSS">
              <img
                className="ic_chevron_right_24px-LRB8nH"
                src={`${process.env.PUBLIC_URL}/img/ic-chevron-right-24px-1@1x.png`}
                alt="ic_chevron_right_24px"
                />
            </div>
          </Link>
          <div className="score-bar_3-2ZgxSS">
            <div className="sigdao-score-iPTNDG sigdao-score">
              <div className="x10-kxjIEt x10 inter-semi-bold-keppel-15px">{loading?<div>loading...</div>:Token}</div>
              <div className="signdao_tokengradient-kxjIEt signdao_tokengradient">
                <div className="x441-e5x8kp x441"></div>
                <div className="x442-e5x8kp x442"></div>
                <img className="x880-e5x8kp x880" src={`${process.env.PUBLIC_URL}/img/file---880-1x-png-10@1x.png`} alt="880" />
              </div>
            </div>
          </div>
          <div className="sigdao-2ZgxSS inter-semi-bold-white-15px">SIGDAO:</div>
        </div>
        <HorizontalScrollContainer>
          <Link to="/missionChallenge">
            <div className="challenges-x9-hacks-GEWAL1">
              <div className="small-image">
                <img className="challenge-x9_banner-UqALvc" src={`${process.env.PUBLIC_URL}/img/home/challengex9-banner@1x.png`} alt="ChallengeX9_banner" />
              </div>
              <div className="challengesx-9-hacks-ewZMRw inter-medium-white-15px">Challenges<br />x 9 hacks</div>
              <div className="x1-3mins-each-ewZMRw inter-normal-cadet-blue-12px">1-3mins/ each</div>
              <div className="sigdao-score-ewZMRw sigdao-score">
                <div className="x10-HEHiSw x10 inter-semi-bold-keppel-14px">+5.25 - 15.75</div>
                <div className="signdao_tokengradient-HEHiSw signdao_tokengradient">
                  <div className="x441-giFx9O x441"></div>
                  <div className="x442-giFx9O x442"></div>
                  <img className="x880-giFx9O x880" src={`${process.env.PUBLIC_URL}/img/file---880-1x-png-10@1x.png`} alt="880" />
                </div>
              </div>
            </div>
          </Link>
          <div className="meditations-GEWAL1">
            <div className="small-image">
              <img className="meditation_banner-dLbFgX" src={`${process.env.PUBLIC_URL}/img/home/meditation-banner@1x.png`} alt="Meditation_banner" />
            </div>
            <div className="weekly-meditation-3kbxqV inter-medium-white-15px">Weekly Meditation</div>
            <div className="saturday-only-3kbxqV inter-normal-cadet-blue-12px">Saturday only</div>
            <div className="sigdao-score-3kbxqV sigdao-score">
              <div className="x10-UyxTRp x10 inter-semi-bold-keppel-14px">+20</div>
              <div className="signdao_tokengradient-UyxTRp signdao_tokengradient">
                <div className="x441-ozHgg7 x441"></div>
                <div className="x442-ozHgg7 x442"></div>
                <img className="x880-ozHgg7 x880" src={`${process.env.PUBLIC_URL}/img/file---880-1x-png-10@1x.png`} alt="880" />
              </div>
            </div>
          </div>
          <div className="step-counts-GEWAL1">
            <div className="small-image">
              <img className="step_count_banner-45Wblr" src={`${process.env.PUBLIC_URL}/img/home/step-count-banner@1x.png`} alt="Step_count_banner" />
            </div>
            <div className="walking-mission-7hGHU0 inter-medium-white-15px">Walking mission</div>
            <div className="step-count-7hGHU0 inter-normal-cadet-blue-12px">Step Count</div>
            <div className="sigdao-score-7hGHU0 sigdao-score">
              <div className="x10-SMcg87 x10 inter-semi-bold-keppel-14px">+20</div>
              <div className="signdao_tokengradient-SMcg87 signdao_tokengradient">
                <div className="x441-JHyhgs x441"></div>
                <div className="x442-JHyhgs x442"></div>
                <img className="x880-JHyhgs x880" src={`${process.env.PUBLIC_URL}/img/file---880-1x-png-10@1x.png`} alt="880" />
              </div>
            </div>
          </div>
        </HorizontalScrollContainer>
        {/* <div className="missions-scroll-RoXPLo">
        </div> */}
        <MenuBar/>
      </div>
    </div>
  )

  return (
    <CenterLayout
      content={content}
      bgImg={false}
    />
  );
};

export default Home;
