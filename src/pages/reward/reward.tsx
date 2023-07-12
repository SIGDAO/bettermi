import * as React from 'react';
import './reward.css'
import { Link } from 'react-router-dom';
import MenuBar from '../../components/menuBar';
import { CenterLayout } from '../../components/layout';
import { ShortTitleBar } from '../../components/titleBar';

interface IRewardProps {
}

const Reward: React.FunctionComponent<IRewardProps> = (props) => {
  const content: JSX.Element = (
    <div className="bettermidapp-rewards-2 screen">
      <ShortTitleBar title="Redeem Rewards" />
      {/* <img className="bg-kQlY8S bg" src={`${process.env.PUBLIC_URL}/img/reward/bg-14-1x-png@1x.png`} alt="BG" /> */}
      <Link to="/rewardDetail/1">
        {/* todo: change this approach to mapping */}
        <div className="rewards-cards-kQlY8S rewards-cards">
          <img className="card_bg" src={`${process.env.PUBLIC_URL}/img/reward/card-bg-1@1x.png`} alt="Card_bg" />
          <div className="master-collector-5RWzHs inter-semi-bold-white-18px">Master Collector</div>
          <img className="nft_-avatar" src={`${process.env.PUBLIC_URL}/img/reward/nft-avatar-4@1x.png`} alt="NFT_Avatar" />
          <p className="acquire-3-nf-ts-from-our-collection-5RWzHs inter-normal-cadet-blue-12px">
            Acquire 3 NFTs from our collection.
          </p>
          <div className="ic_next">
            <img className="ic_chevron_right_24px" src={`${process.env.PUBLIC_URL}/img/reward/ic-chevron-right-24px-1@1x.png`} alt="ic_chevron_right_24px" />
          </div>
          <div className="goal-data">
            <div className="x893"></div>
            <div className="goal-YBUPcf goal">
              <div className="x0 inter-semi-bold-keppel-14px">0</div>
              <div className="x3-XEqJB9 x3 inter-semi-bold-white-14px">/ 3</div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/rewardDetail/2">
        <div className="rewards-cards-TttECi rewards-cards">
          <img className="card_bg" src={`${process.env.PUBLIC_URL}/img/reward/card-bg-1@1x.png`} alt="Card_bg" />
          <div className="selfie-champion-O07kH5 inter-semi-bold-white-18px">Selfie Champion</div>
          <img className="nft_-avatar" src={`${process.env.PUBLIC_URL}/img/reward/nft-avatar-5@1x.png`} alt="NFT_Avatar" />
          <p className="selfies-for-60-consecutive-days-O07kH5 inter-normal-cadet-blue-12px">
            Selfies for 60 consecutive days
          </p>
          <div className="ic_next">
            <img className="ic_chevron_right_24px" src={`${process.env.PUBLIC_URL}/img/reward/ic-chevron-right-24px-1@1x.png`} alt="ic_chevron_right_24px" />
          </div>
          <div className="goal-data">
            <div className="x893"></div>
            <div className="goal-hfcLyr goal">
              <div className="x0 inter-semi-bold-keppel-14px">0</div>
              <div className="x3-eZrkM2 x3 inter-semi-bold-white-14px">/ 60</div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/rewardDetail/3">
        <div className="rewards-cards-xzgu34 rewards-cards">
          <img className="card_bg" src={`${process.env.PUBLIC_URL}/img/reward/card-bg-1@1x.png`} alt="Card_bg" />
          <div className="social-butterfly-nGgOF5 inter-semi-bold-white-18px">Social Butterfly</div>
          <img className="nft_-avatar" src={`${process.env.PUBLIC_URL}/img/reward/nft-avatar-6@1x.png`} alt="NFT_Avatar" />
          <p className="build-a-thriving-network-of-75-friends-nGgOF5 inter-normal-cadet-blue-12px">
            Build a thriving network of 75 friends.
          </p>
          <div className="ic_next">
            <img className="ic_chevron_right_24px" src={`${process.env.PUBLIC_URL}/img/reward/ic-chevron-right-24px-1@1x.png`} alt="ic_chevron_right_24px" />
          </div>
          <div className="ic_next">
            <img className="ic_chevron_right_24px" src={`${process.env.PUBLIC_URL}/img/reward/ic-chevron-right-24px-1@1x.png`} alt="ic_chevron_right_24px" />
          </div>
          <div className="goal-data">
            <div className="x893"></div>
            <div className="goal-1TY7aZ goal">
              <div className="x0 inter-semi-bold-keppel-14px">0</div>
              <div className="x3-E0cPgC x3 inter-semi-bold-white-14px">/ 75</div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/rewardDetail/4">
        <div className="rewards-cards-C55ruw rewards-cards">
          <img className="card_bg" src={`${process.env.PUBLIC_URL}/img/reward/card-bg-1@1x.png`} alt="Card_bg" />
          <div className="elite-challenger-yvS2xN inter-semi-bold-white-18px">Elite Challenger</div>
          <img className="nft_-avatar" src={`${process.env.PUBLIC_URL}/img/reward/nft-avatar-7@1x.png`} alt="NFT_Avatar" />
          <div className="complete-50-challenges-yvS2xN inter-normal-cadet-blue-12px">Complete 50 challenges</div>
          <div className="ic_next">
            <img className="ic_chevron_right_24px" src={`${process.env.PUBLIC_URL}/img/reward/ic-chevron-right-24px-1@1x.png`} alt="ic_chevron_right_24px" />
          </div>
          <div className="goal-data">
            <div className="x893"></div>
            <div className="goal-hu1xkO goal">
              <div className="x0 inter-semi-bold-keppel-14px">0</div>
              <div className="x3-SJHvta x3 inter-semi-bold-white-14px">/ 50</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
  return (
    <CenterLayout
      content={content}
      bgImg={false}
    />
  );
};

export default Reward;
