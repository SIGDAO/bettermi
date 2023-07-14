import * as React from 'react';
import './allMission.css';
import { CenterLayout } from '../../components/layout';
import { Link } from 'react-router-dom';
import { BackButton } from '../../components/button';
import { TransferToken } from '../../components/transferToken';
import { useLedger } from '../../redux/useLedger';
import { AppContext } from '../../redux/useContext';
import { useContext } from 'react';
import { accountId } from '../../redux/account';
import { useSelector } from 'react-redux';
import { walletNodeHost } from '../../redux/wallet';
interface IAllMissionProps {
}

const AllMission: React.FunctionComponent<IAllMissionProps> = (props) => {
const ledger = useLedger();
const {appName,Wallet,Ledger} = useContext(AppContext);
const userAccountId = useSelector(accountId);
const nodeHost = useSelector(walletNodeHost);

  const content : JSX.Element = (

<>
<BackButton/>
  <body style={{ marginTop: 0, top:-10 }}>
    <div className="connectWallet-layout">
      <div id='connectWallet-container'>
      
    <input type="hidden" id="anPageName" name="page" value="bettermidapp-all-missions-1" />
    <div className="container-center-horizontal">
      <div className="bettermidapp-all-missions-1 screen">
        <img className="bg-zeeUeL bg" src={`${process.env.PUBLIC_URL}/img/allMission/bg-10@1x.png`} alt="BG" />
        <div className="title-bar-zeeUeL">
          <img className="bg-hE0gWG bg" src={`${process.env.PUBLIC_URL}/img/allMission/bg-15@1x.png"`} alt="BG" />
          <div className="bars-status-bar-i-phone-light-hE0gWG">
            <div className="frame-Q1ECYx"></div>
            <div className="status-bar-Q1ECYx">
              <div className="battery-wcUMjJ">
                <div className="border-xbcVxx"></div>
                <img className="cap-xbcVxx" src={`${process.env.PUBLIC_URL}/img/allMission/cap-10@1x.png`} alt="Cap" />
                <div className="capacity-xbcVxx"></div>
              </div>
              <img className="wifi-wcUMjJ" src={`${process.env.PUBLIC_URL}/img/allMission/wifi-10@1x.png`} alt="Wifi" />
              <img
                className="cellular-connection-wcUMjJ"
                src={`${process.env.PUBLIC_URL}/img/allMission/cellular-connection-10@1x.png`}
                alt="Cellular Connection"
              />
              <div className="time-style-wcUMjJ"><div className="time-JkFqIF">9:41</div></div>
            </div>
          </div>
          <div className="feature-missions-hE0gWG inter-semi-bold-white-18px">Feature Missions</div>
          <img className="seperat-line-hE0gWG seperat-line" src={`${process.env.PUBLIC_URL}/img/allMission/seperat-line-11@1x.png`} alt="Seperat line" />
          <div className="al-hE0gWG">
            <div className="all-NazKCe inter-semi-bold-white-15px">All</div>
            <img className="seperat-line-NazKCe seperat-line" src={`${process.env.PUBLIC_URL}/img/allMission/seperat-line-14@1x.png`} alt="Seperat line" />
          </div>
          <div className="ongoing-hE0gWG ongoing">
            <div className="ongoing-J9Iiuh ongoing inter-semi-bold-white-15px">Ongoing</div>
          </div>
          <div className="history-hE0gWG history">
            <div className="history-5DHFLO history inter-semi-bold-white-15px">History</div>
          </div>
          <div className="ic_help_24px-hE0gWG ic_help_24px">
            <img className="ic_help_24px-WqWzGy ic_help_24px" src={`${process.env.PUBLIC_URL}/img/allMission/ic-help-24px-1@1x.png`} alt="ic_help_24px" />
          </div>
          <Link to="javascript:history.back()">
            <div className="icon-arrow-left-hE0gWG icon-arrow-left"> 
            
              {/* <img
                className="icon-arrow-left-e8egrl icon-arrow-left"
                src={`${process.env.PUBLIC_URL}/img/allMission/icon-arrow-left-10@1x.png`}
                alt="icon-arrow-left"
  /> */}
              </div>
              </Link>
        </div>
        <div className="earning-rewards-zeeUeL">EARNING REWARDS</div>
        
        <Link to="bettermidapp-challenges-1.html">
          <div className="rewards-cards-zeeUeL rewards-cards">
            <img className="card_bg" src={`${process.env.PUBLIC_URL}/img/allMission/card-bg-1@1x.png`} alt="Card_bg" />
            <div className="challenges-x-9-hacks-XlExkZ inter-semi-bold-white-18px">Challenges X 9 Hacks</div>
            <img className="nft_-avatar" src={`${process.env.PUBLIC_URL}/img/allMission/nft-avatar-1@1x.png`} alt="NFT_Avatar" />
            <div className="x1-3mins-each-XlExkZ inter-normal-cadet-blue-12px">1-3mins/ Each</div>
            <div className="ic_next">
              <img className="ic_chevron_right_24px" src={`${process.env.PUBLIC_URL}/img/allMission/ic-chevron-right-24px-1@1x.png`} alt="ic_chevron_right_24px" />
            </div>
            <div className="sigdao-score-XlExkZ sigdao-score">
              <div className="x10-cQkx9w x10 inter-semi-bold-keppel-14px">+5.25 - 15.75</div>
              <div className="signdao_tokengradient">
                <div className="x441"></div>
                <div className="x442"></div>
                <img className="x880" src={`${process.env.PUBLIC_URL}/img/allMission/file---880-1x-png-10@1x.png`} alt="880" />
              </div>
            </div></div></Link>
        <div className="rewards-cards-w5iKeM rewards-cards">
          <img className="card_bg" src={`${process.env.PUBLIC_URL}/img/allMission/card-bg-1@1x.png`} alt="Card_bg" />
          <div className="weekly-meditation-section-7tRurY inter-semi-bold-white-18px">Weekly Meditation Section</div>
          <img className="nft_-avatar" src="img/allMission/nft-avatar-2@1x.png" alt="NFT_Avatar" />
          <div className="saturday-only-7tRurY inter-normal-cadet-blue-12px">Saturday Only</div>
          <div className="ic_next">
            <img className="ic_chevron_right_24px" src={`${process.env.PUBLIC_URL}/img/allMission/ic-chevron-right-24px-1@1x.png`} alt="ic_chevron_right_24px" />
          </div>
          <div className="sigdao-score-7tRurY sigdao-score">
            <div className="x10-IZA9fL x10 inter-semi-bold-keppel-14px">+5.25 - 5.00</div>
            <div className="signdao_tokengradient">
              <div className="x441"></div>
              <div className="x442"></div>
              <img className="x880" src={`${process.env.PUBLIC_URL}/img/allMission/file---880-1x-png-10@1x.png`} alt="880" />
            </div>
          </div>
        </div>
        <div  onClick={() => TransferToken(nodeHost,userAccountId)} className="rewards-cards-CSqdLT rewards-cards">
          <img className="card_bg" src={`${process.env.PUBLIC_URL}/img/allMission/card-bg-1@1x.png`} alt="Card_bg" />
          <div className="daily-walking-mission-0SP1ID inter-semi-bold-white-18px">Daily Walking Mission</div>
          <img className="nft_-avatar" src={`${process.env.PUBLIC_URL}/img/allMission/nft-avatar-3@1x.png`} alt="NFT_Avatar" />
          <div className="step-count-0SP1ID inter-normal-cadet-blue-12px">Step Count</div>
          <div className="ic_next">
            <img className="ic_chevron_right_24px" src={`${process.env.PUBLIC_URL}/img/allMission/ic-chevron-right-24px-1@1x.png`} alt="ic_chevron_right_24px" />
          </div>
          <div className="sigdao-score-0SP1ID sigdao-score">
            <div className="x10-FlWcuP x10 inter-semi-bold-keppel-14px">+5.25 - 15.75</div>
            <div className="signdao_tokengradient">
              <div className="x441"></div>
              <div className="x442"></div>
              <img className="x880" src={`${process.env.PUBLIC_URL}/img/allMission/file---880-1x-png-10@1x.png`} alt="880" />
            </div>
          </div>
          <div className="coming-soon-0SP1ID">
            <img className="layer-EvrnxJ" src={`${process.env.PUBLIC_URL}/img/allMission/layer-3@1x.png`} alt="Layer" />
            <div className="ic_locked-EvrnxJ ic_locked">
              <img className="ic_locked-YzvI48 ic_locked" src={`${process.env.PUBLIC_URL}/img/allMission/ic-locked-1@1x.png`} alt="ic_locked" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div><button  onClick={() => TransferToken(nodeHost,userAccountId)}>ghhihihihisdfisd</button>
  </body>
  </>


  );
  return (
<></>
  );
};

export default AllMission;
