import React, { useEffect } from 'react';
import './leaderboard.css';
import {Link, useLocation, useNavigate} from 'react-router-dom';



interface leaderBoardBannerProps {
    displayAccountId:string;
    userRanking:number;
    tokenBalance:number;
    accountId:string;
    accountImage:string;
 }


 export const LeaderBoardBanner: React.FunctionComponent<leaderBoardBannerProps> =  (props) => {
    const {displayAccountId,userRanking,tokenBalance,accountId,accountImage} = props;
    const navigate = useNavigate();
    const location = useLocation();
    const toUserProfile=()=>{     
    // <Link
    //     to={{
    //       pathname: '/OtherUserProfile',
    //       state: { userId: accountId },
    //     }}
    //   ></Link>
        navigate('/OtherUserProfile',{state:{userId:accountId}});
          }

    return(
        <div className="rewards_card" onClick = {() => {toUserProfile()}}>
        <div className="number inter-semi-bold-white-18px">{userRanking}</div>
        {accountImage || accountImage == "undefined" || accountImage === undefined ? (
                <img className="nft_-avatar-1 nft_-avatar-3" 
                src={`https://ipfs.io/ipfs/${accountImage}`} 
                alt="NFT_Avatar" />  
        ): (
          <div className="leaderboard_body_nft_-avatar">
          <img className="home_body_icon_ic_add" src="img/profile/ic-add-2@1x.png" alt="ic_add"/>
        </div>
          )}
        <div className="x300 inter-medium-white-12px">{displayAccountId}</div>
        <div className="sigdao-score">
          <div className="sigdao_tokengradient">
            <div className="x441"></div>
 <div className="x442"></div>
              <img className="x880" src="img/leaderboard/file---880@1x.png" alt="880" />
          </div>
          <div className="x10-4 x10-7 inter-semi-bold-keppel-14px">{tokenBalance}</div>
        </div>
      </div>
    );
 }

 <div className="signdao_tokengradient">
 <div className="x441"></div>
 <div className="x442"></div>
 <img className="x880" src="img/missionChallenge/file---880-1x-png-10@1x.png" alt="880" />
</div>