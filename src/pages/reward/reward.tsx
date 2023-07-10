import * as React from 'react';
import './reward.css'
import MenuBar from '../../components/menuBar';
import { CenterLayout } from '../../components/layout';

interface IRewardProps {
}

const Reward: React.FunctionComponent<IRewardProps> = (props) => {
  const content: JSX.Element = (
    <div className="reward-container bettermidapp-rewards-1">
      <div className="reward-progress-HVHxMD inter-semi-bold-royal-blue-15px">REWARD PROGRESS</div>
      <a href="bettermidapp-rewards-redeem-master-collector-1.html">
        <div className="rewards-cards-HVHxMD rewards-cards">
            <img className="card_bg" src="img/card-bg-1@1x.png" alt="Card_bg" />
            <div className="master-collector-zqdyAN inter-semi-bold-white-18px">Master Collector</div>
            <img className="nft_-avatar" src="img/nft-avatar-4@1x.png" alt="NFT_Avatar" />
            <p className="acquire-3-nf-ts-from-our-collection-zqdyAN inter-normal-cadet-blue-12px">
              Acquire 3 NFTs from our collection.
            </p>
            <div className="ic_next">
              <img className="ic_chevron_right_24px" src="img/ic-chevron-right-24px-1@1x.png" alt="ic_chevron_right_24px" />
            </div>
            <div className="goal-data">
              <div className="x893"></div>
              <div className="goal-3P5hhI goal">
                  <div className="x0 inter-semi-bold-keppel-14px">0</div>
                  <div className="x3-u0xYXl x3 inter-semi-bold-white-14px">/ 3</div>
              </div>
            </div>
        </div>
      </a>
      <div className="rewards-cards-8a6knR rewards-cards">
        <img className="card_bg" src="img/card-bg-1@1x.png" alt="Card_bg" />
        <div className="selfie-champion-gUg1fg inter-semi-bold-white-18px">Selfie Champion</div>
        <img className="nft_-avatar" src="img/nft-avatar-5@1x.png" alt="NFT_Avatar" />
        <p className="selfies-for-60-consecutive-days-gUg1fg inter-normal-cadet-blue-12px">
            Selfies for 60 consecutive days
        </p>
        <div className="ic_next">
            <img className="ic_chevron_right_24px" src="img/ic-chevron-right-24px-1@1x.png" alt="ic_chevron_right_24px" />
        </div>
        <div className="goal-data">
            <div className="x893"></div>
            <div className="goal-0jQlr7 goal">
              <div className="x0 inter-semi-bold-keppel-14px">0</div>
              <div className="x3-XO0mpH x3 inter-semi-bold-white-14px">/ 60</div>
            </div>
        </div>
      </div>
      <div className="rewards-cards-xJ56qX rewards-cards">
        <img className="card_bg" src="img/card-bg-1@1x.png" alt="Card_bg" />
        <div className="social-butterfly-aDzTvn inter-semi-bold-white-18px">Social Butterfly</div>
        <img className="nft_-avatar" src="img/nft-avatar-6@1x.png" alt="NFT_Avatar" />
        <p className="build-a-thriving-network-of-75-friends-aDzTvn inter-normal-cadet-blue-12px">
            Build a thriving network of 75 friends.
        </p>
        <div className="ic_next">
            <img className="ic_chevron_right_24px" src="img/ic-chevron-right-24px-1@1x.png" alt="ic_chevron_right_24px" />
        </div>
        <div className="goal-data">
            <div className="x893"></div>
            <div className="goal-jxHOCk goal">
              <div className="x0 inter-semi-bold-keppel-14px">0</div>
              <div className="x3-ZVz3DZ x3 inter-semi-bold-white-14px">/ 75</div>
            </div>
        </div>
      </div>
      <div className="rewards-cards-YX29bt rewards-cards">
        <img className="card_bg" src="img/card-bg-1@1x.png" alt="Card_bg" />
        <div className="elite-challenger-xXGdpy inter-semi-bold-white-18px">Elite Challenger</div>
        <img className="nft_-avatar" src="img/nft-avatar-7@1x.png" alt="NFT_Avatar" />
        <div className="complete-50-challenges-xXGdpy inter-normal-cadet-blue-12px">Complete 50 challenges</div>
        <div className="ic_next">
            <img className="ic_chevron_right_24px" src="img/ic-chevron-right-24px-1@1x.png" alt="ic_chevron_right_24px" />
        </div>
        <div className="goal-data">
            <div className="x893"></div>
            <div className="goal-DSShI6 goal">
              <div className="x0 inter-semi-bold-keppel-14px">0</div>
              <div className="x3-wJCLx6 x3 inter-semi-bold-white-14px">/ 50</div>
            </div>
        </div>
      </div>
      <div className="title-bar-HVHxMD">
        <img className="bg-uozlST bg" src="img/bg-15@1x.png" alt="BG" />
        <div className="icon-arrow-left-uozlST icon-arrow-left">
            <img
              className="icon-arrow-left-keF2zr icon-arrow-left"
              src="img/icon-arrow-left-12@1x.png"
              alt="icon-arrow-left"
              />
        </div>
        <div className="bettermi-rewards-uozlST inter-semi-bold-white-18px">Bettermi Rewards</div>
        <img className="seperat-line-uozlST seperat-line" src="img/seperat-line-11@1x.png" alt="Seperat line" />
        <div className="rewards-uozlST rewards">
            <div className="rewards-QtRMbm rewards inter-semi-bold-white-15px">Rewards</div>
            <img className="seperat-line-QtRMbm seperat-line" src="img/seperat-line-14@1x.png" alt="Seperat line" />
        </div>
        <div className="history-uozlST history">
            <div className="history-O0YEXQ history inter-semi-bold-white-15px">History</div>
        </div>
        <div className="expiration-uozlST expiration">
            <div className="expiration-hSRjm1 expiration inter-semi-bold-white-15px">Expiration</div>
        </div>
        <div className="ic_help_24px-uozlST ic_help_24px">
            <img className="ic_help_24px-udK4Dx ic_help_24px" src="img/ic-help-24px-1@1x.png" alt="ic_help_24px" />
        </div>
        <a href="javascript:history.back()">
            <div className="icon-arrow-left-UvRVvA icon-arrow-left">
              <img
                  className="icon-arrow-left-60xTVA icon-arrow-left"
                  src="img/icon-arrow-left-12@1x.png"
                  alt="icon-arrow-left"
                  />
            </div>
        </a>
        <div className="ic_settings_24px-uozlST ic_settings_24px">
            <img
              className="ic_settings_24px-ijD1lb ic_settings_24px"
              src="img/ic-settings-24px-1@1x.png"
              alt="ic_settings_24px"
              />
        </div>
      </div>

      <MenuBar/>
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
