import * as React from 'react';
import './allMission.css'
import CSS from 'csstype';
import { BackButton } from '../../components/button';
import { useNavigate } from 'react-router-dom';
import MenuBar from '../../components/menuBar';

interface IChallengeCompletedProps {
}

const ChallengeCompleted: React.FunctionComponent<IChallengeCompletedProps> = (props) => {
  const mobile = process.env.REACT_APP_MOBILE === 'true';
  const navigate = useNavigate();
  let height : string | number
  let width : string | number;
  if (mobile) { 
    height = "844px";
    width = "390px";
  // display in ipad air size
  } else {
    height = "100vh";
    width = "820px";
  }
  const bgStyle : CSS.Properties = mobile ? 
  {
    'background': `transparent`,
  }
  :
  {
    'position': 'fixed',
    'background': `linear-gradient(112deg, #221D4B 0%, #171717 100%)`,
    'boxShadow': '0px 3px 30px var(--royal-blue)',
    'width': '100vw',
    'minHeight': '100vh',
    'height': '100%',
    'overflowY': 'auto',
    'zIndex': '1',
    'overflowX': 'hidden',
    'display':'flex!important',
  }
  const centerLayoutStyle : CSS.Properties = {
    // 'backgroundPosition': 'center',
    'minHeight': `${height}`, // ipad size
    'width': `min(100vw,${width})`, // ipad size
    'height': '100%',
    'margin': 'auto',
     'display': 'flex',
     //'justifyContent': 'center',
     //'alignItems': 'center',
    //'backgroundColor': 'green',
    'flexDirection' : 'column',
  }
  const customStyle: CSS.Properties = {
    'alignItems': 'flex-start',
    'cursor': 'pointer',
    'display': 'flex',
    'height': '44px',
    'left': '16px',
    'minWidth': '44px',
    'paddingLeft': '14px',
    'position': 'relative',
    'top': '44px',
  }

  return (
    <div style={bgStyle}>
      <div style={centerLayoutStyle}>
      <div className = "navbarChallengeComplete">
        <div className = "container1">
          
        </div>
        <div className = "container2">
        {/* <a href="javascript:history.back()">
          <div className="icon-arrow-left" style={customStyle} >
            <img className="icon-arrow-left-1" src={`${process.env.PUBLIC_URL}/img/connectSuccess/icon-arrow-left-8@1x.png`} alt="icon-arrow-left" />
          </div>
        </a> */}
        <div></div>
          <div className = "banner">
          {/* <a href="javascript:history.back()">
          <div className="iconChallengeCompleted" >
            <img className="icon-arrow-left-1" src={`${process.env.PUBLIC_URL}/img/connectSuccess/icon-arrow-left-8@1x.png`} alt="icon-arrow-left" />
          </div>
        </a> */}
              <div className = "title">
              <a style = {{marginRight:"31px"}} href="javascript:history.back()">
                    <div className="iconChallengeCompleted" >
                      <img className="icon-arrow-left-1" src={`${process.env.PUBLIC_URL}/img/connectSuccess/icon-arrow-left-8@1x.png`} alt="icon-arrow-left" />
                    </div>
                  </a>
                <div>Feature Missions</div>
              </div>
              <div className = "iconBar">
                <img style = {{height:"20px", alignSelf:"center"}} src = {`${process.env.PUBLIC_URL}/img/allMission/ic-help-24px-1@1x.png`}></img>
              </div>
          </div>
          <div className = "titleBar">
            <button className = "button1">All</button>
            <button className = "button2">Ongoing</button>
            <button className = "button3">History</button>
          </div>
        </div>
        <div className = "container3" >

        </div>
      </div>
{/* The body part, which are the buttons */}
    <div className  = "body">
        <div className = "body1">
        </div>
        <div className = "body2">
          <div className = "rewardTitle inter-semi-bold-royal-blue-15px">EARNING REWARDS</div>
          <button className = "challengeCompletedLink" onClick = {() => navigate("/missionChallenge")}>
            <img className = "buttonIconChallengeCompleted" src={`${process.env.PUBLIC_URL}/img/allMission/nft-avatar-1@1x.png`} alt="Card_bg"></img>
            <div className = "descriptionChallengeCompleted">
              <div className = "descriptionTitleChallengeCompleted">
                Challenge X9 Hacks
                </div>
                <div className = "descriptionBodyChallengeCompleted">
                  1-3 Mins Each
                </div>
                <div className = "descriptionBottomBodyChallengeCompleted">
                  <div className = "sigdaoIconChallengeCompleted">
                    <img src = {`${process.env.PUBLIC_URL}/img/allMission/file---880-1x-png-10@1x.png`}></img>
                    </div>
                    <div className = "sigdaoChallengeCompleted">
                    +5.25 ~ 15.75
                  </div>
                  <img className = "arrowChallengeCompleted" src={`${process.env.PUBLIC_URL}/img/allMission/ic-chevron-right-24px-1@1x.png`}></img>
                </div>
            </div>
          </button>
          <button className = "challengeCompletedLink">
            <img className = "buttonIconChallengeCompleted" src={`${process.env.PUBLIC_URL}/img/allMission/nft-avatar-2@1x.png`} alt="Card_bg"></img>
            <div className = "descriptionChallengeCompleted">
              <div className = "descriptionTitleChallengeCompleted">
                Weekly Meditation Session
                </div>
                <div className = "descriptionBodyChallengeCompleted">
                  Saturday Only
                </div>
                <div className = "descriptionBottomBodyChallengeCompleted">
                  <div className = "sigdaoIconChallengeCompleted">
                    <img src = {`${process.env.PUBLIC_URL}/img/allMission/file---880-1x-png-10@1x.png`}></img>
                    </div>
                    <div className = "sigdaoChallengeCompleted">
                    +5.25 ~ 5.00
                  </div>
                  <img className = "arrowChallengeCompleted" src={`${process.env.PUBLIC_URL}/img/allMission/ic-chevron-right-24px-1@1x.png`}></img>
                </div>
            </div>
          </button>
          <button disabled = {true} style = {{  opacity: "0.4"}} className = "challengeCompletedLinkDisabled">
            <img className = "buttonIconChallengeCompleted" src={`${process.env.PUBLIC_URL}/img/allMission/nft-avatar-3@1x.png`} alt="Card_bg"></img>
            <div className = "descriptionChallengeCompleted">
              <div style = {{display:"flex", flexDirection:"row"}} className = "descriptionTitleChallengeCompleted">
                <div>Daily Walking Mission</div>
                <img  style = {{width:"15px", height:"20px",paddingLeft:"10px"}} src={`${process.env.PUBLIC_URL}/img/allMission/ic-locked-1@1x.png`}></img>
                </div>
                <div className = "descriptionBodyChallengeCompleted">
                  Step Count
                </div>
                <div className = "descriptionBottomBodyChallengeCompleted">
                  <div className = "sigdaoIconChallengeCompleted">
                    <img src = {`${process.env.PUBLIC_URL}/img/allMission/file---880-1x-png-10@1x.png`}></img>
                    </div>
                    <div className = "sigdaoChallengeCompleted">
                    +5.25 ~ 15.75
                  </div>
                  <img className = "arrowChallengeCompleted" src={`${process.env.PUBLIC_URL}/img/allMission/ic-chevron-right-24px-1@1x.png`}></img>
                </div>
            </div>
          </button>
          {/* <button className = "challengeCompletedLink">
            <img className = "buttonIconChallengeCompleted" src={`${process.env.PUBLIC_URL}/img/allMission/nft-avatar-1@1x.png`} alt="Card_bg"></img>
            <div className = "descriptionChallengeCompleted">
              <div className = "descriptionTitleChallengeCompleted">
                Challenge X9 Hacks
                </div>
                <div className = "descriptionBodyChallengeCompleted">
                  1-3 Mins Each
                </div>
                <div className = "descriptionBottomBodyChallengeCompleted">
                  <div className = "sigdaoIconChallengeCompleted">
                    <img src = {`${process.env.PUBLIC_URL}/img/allMission/file---880-1x-png-10@1x.png`}></img>
                    </div>
                    <div className = "sigdaoChallengeCompleted">
                    +5.25 ~ 15.75
                  </div>
                  <img className = "arrowChallengeCompleted" src={`${process.env.PUBLIC_URL}/img/allMission/ic-chevron-right-24px-1@1x.png`}></img>
                </div>
            </div>
          </button>
          <button className = "challengeCompletedLink">
            <img className = "buttonIconChallengeCompleted" src={`${process.env.PUBLIC_URL}/img/allMission/nft-avatar-1@1x.png`} alt="Card_bg"></img>
            <div className = "descriptionChallengeCompleted">
              <div className = "descriptionTitleChallengeCompleted">
                Challenge X9 Hacks
                </div>
                <div className = "descriptionBodyChallengeCompleted">
                  1-3 Mins Each
                </div>
                <div className = "descriptionBottomBodyChallengeCompleted">
                  <div className = "sigdaoIconChallengeCompleted">
                    <img src = {`${process.env.PUBLIC_URL}/img/allMission/file---880-1x-png-10@1x.png`}></img>
                    </div>
                    <div className = "sigdaoChallengeCompleted">
                    +5.25 ~ 15.75
                  </div>
                  <img className = "arrowChallengeCompleted" src={`${process.env.PUBLIC_URL}/img/allMission/ic-chevron-right-24px-1@1x.png`}></img>
                </div>
            </div>
          </button> */}
        </div>
        <div className = "body3">
        </div>
        <MenuBar/>
      </div>

      </div>
    </div>
  );
}

export default ChallengeCompleted;
