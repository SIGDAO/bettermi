import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './rewardDetail.css'
import { CenterLayout } from '../../components/layout';
import { ShortTitleBar } from '../../components/titleBar';

interface IRewardDetailProps {
}

interface rewardDetailListProps {
  id: number,
  title: string,
  reward?: string | number,
  description: string,
  bgImagePath?: string,
  requireTimes?: number,
}

const rewardDetailList: rewardDetailListProps[] = [
  {
    id: 1,
    title: 'Master Collector',
    reward: 20,
    description: `Unlocked by users who acquire 3 NFTs from our collection. As a reward, users are granted 
                  a significant boost of 500 energy and 50 gems, 
                  empowering them with valuable resources to enhance their overall experience.`,
    bgImagePath: 'photo-1@1x.png',
    requireTimes: 3,
  },{
    id: 2,
    title: 'Social Butterfly',
    description: `Awarded to users who build a thriving network of 75 friends. As a gesture of appreciation, 
                  users receive a complimentary healthy product, fostering meaningful connections 
                  and encouraging a supportive environment.`,
    bgImagePath: 'photo-2@1x.png',
    reward: 'Get a Free Health related Product',
    requireTimes: 75,
  },{
    id: 3,
    title: 'Selfie Champion',
    reward: 'Get a Random NFT.',
    description: `Earned by users who maintain a consistent practice of capturing their progress through selfies 
                  for 60 consecutive days. This remarkable commitment is acknowledged with the unlocking of a rare and coveted NFT, 
                  symbolizing their dedication and perseverance.`,
    bgImagePath: 'photo-3@1x.png',
    // sigdao: 20,
    requireTimes: 60,
  },
  {
    id: 4,
    title: 'Elite Challenger',
    reward: 'Get a Random NFT.',
    description: `Users who complete 50 challenges, whether accumulated over time or in one continuous effort, 
                  unlock this achievement. As a result, they gain access to an enhanced AI coach service, providing valuable guidance 
                  and support to overcome future obstacles.`,
    bgImagePath: 'photo-1-1x-png@1x.png',
    requireTimes: 50,
  }
]

const RewardDetail: React.FunctionComponent<IRewardDetailProps> = (props) => {
  const { id } = useParams();
  const displayRewardDetail = rewardDetailList.find((item) => item.id === Number(id));
  const pageExist = rewardDetailList.length >= Number(id);
  const isSigdaoReward = typeof displayRewardDetail?.reward === 'number';

  // todo: get user's implement times or other data from blockchain
  const implementTimes = 0;

  // todo: fin tune the style difference between the different reward detail page
  const content: JSX.Element = (
    <div className="screen">
      <div className="bettermidapp-rewards-redeem-master-collector-1">
        <ShortTitleBar title={displayRewardDetail?.title} />
        <img className="photo-P2i95W" src={`${process.env.PUBLIC_URL}/img/rewardDetail/${displayRewardDetail?.bgImagePath}`} alt="Photo" />
        <img className="layer-P2i95W" src={`${process.env.PUBLIC_URL}/img/rewardDetail/layer-2@1x.png`} alt="Layer" />
        <div className="button_-redeem-P2i95W">
          <div className="button1-r8fHLz"></div>
          <div className="continue-r8fHLz inter-semi-bold-white-15px">Redeem</div>
        </div>
        <div className="profile-content-P2i95W">
          <div className="master-collector-tOBH5R master-collector">{displayRewardDetail?.title}</div>
          <p className={isSigdaoReward? "unlocked-by-users-wh-tOBH5R inter-normal-white-14px" : "earned-by-users-who-B1MGte inter-normal-white-14px"}>
            {displayRewardDetail?.description}
          </p>
          <p className="better-mi-reserves-t-tOBH5R inter-normal-cadet-blue-12px">
            BetterMi reserves the right to the final decision <br />in case of any disputes.
          </p>
          {isSigdaoReward ? (
            <>
              <div className="score-bar_3-tOBH5R">
                <div className="sigdao-score-oG1yRx">
                  <div className="x10-ZdA7kA inter-semi-bold-keppel-15px">+{displayRewardDetail?.reward}</div>
                  <div className="signdao_tokengradient-ZdA7kA">
                    <div className="x441-hzgF5j"></div>
                    <div className="x442-hzgF5j"></div>
                    <img className="x880-hzgF5j" src={`${process.env.PUBLIC_URL}/img/rewardDetail/file---880@1x.png`} alt="880" />
                  </div>
                </div>
              </div>
              <div className="sigdao-tOBH5R inter-semi-bold-white-15px">SIGDAO:</div>
            </>        
          ) :
          (<p className="x250-FtIem3">{displayRewardDetail?.reward}</p>)}
        </div>
        <div className="goal-data-P2i95W">
          <div className="x893-LfPhsf"></div>
          <div className="goal-LfPhsf">
            <div className="x0-ucGgAD inter-semi-bold-keppel-14px">0</div>
            <div className="x3-ucGgAD inter-semi-bold-white-14px">/ 3</div>
          </div>
        </div>
      </div>
    </div>
  )


  return !pageExist? <Navigate to={`/reward`} /> : <CenterLayout content={content} bgImg={false}/>
};

export default RewardDetail;


  // if (!pageExist) {
  //   return (
  //     <CenterLayout 
  //       content={
  //         <div 
  //           style={
  //             {
  //               height: '100%',
  //               width: '100%',
  //               color: 'white', 
  //               display: 'flex', 
  //               justifyContent: 'center', 
  //               alignItems: 'center',
  //             }}>
  //           Page not found
  //         </div>} 
  //       bgImg={false}/>
  //   )
  // }
