import * as React from 'react';
import './errorGenerateNFT.css';
import { CenterLayout } from '../../components/layout';


interface IErrorGenerateNFTProps {
}

const ErrorGenerateNFT: React.FunctionComponent<IErrorGenerateNFTProps> = (props) => {
  const content: JSX.Element = (
    <div className="screen">
      <div className="bettermidapp-generate-free-nft-error">
        <div className="bg_2-FumncE">
          <img className="bg-lme0fw" src="img/errorGenerateNFT/bg-10@1x.png" alt="BG" />
          <div className="x16220-lme0fw">
            <p className="this-nft-has-been-sn-RYas9d">
              This NFT has been snatched up by someone else. Go ahead and mint another Free NFT now !
            </p>
            <h1 className="title-RYas9d inter-semi-bold-white-28px">Oops!</h1>
            <div className="ic_sentiment_very_dissatisfied_24px-RYas9d ic_sentiment_very_dissatisfied_24px">
              <img
                className="ic_sentiment_very_dissatisfied_24px-TVetTD ic_sentiment_very_dissatisfied_24px"
                src="img/errorGenerateNFT/ic-sentiment-very-dissatisfied-24px@1x.png"
                alt="ic_sentiment_very_dissatisfied_24px"
                />
            </div>
          </div>
          <a href="bettermidapp-settings-1.html">
            <div className="ic_settings_24px-lme0fw ic_settings_24px">
              <img
                className="ic_settings_24px-1cMOi3 ic_settings_24px"
                src="img/errorGenerateNFT/ic-settings-24px-1@1x.png"
                alt="ic_settings_24px"
                />
            </div>
          </a>
          <a href="bettermidapp-ai-coach.html">
            <div className="ic_sentiment_very_satisfied_24px-lme0fw ic_sentiment_very_satisfied_24px">
              <img
                className="ic_sentiment_very_satisfied_24px-xCJHHT ic_sentiment_very_satisfied_24px"
                src="img/errorGenerateNFT/ic-sentiment-very-satisfied-24px-1@1x.png"
                alt="ic_sentiment_very_satisfied_24px"
                />
            </div>
          </a>
        </div>
        <a href="javascript:history.back()">
          <div className="icon-arrow-left-FumncE icon-arrow-left">
            <img
              className="icon-arrow-left-xF1oog icon-arrow-left"
              src="img/errorGenerateNFT/icon-arrow-left-10@1x.png"
              alt="icon-arrow-left"
              />
          </div>
        </a>
        {/* <div className="bars-status-bar-i-phone-light-FumncE">
          <div className="frame-QaAc67"></div>
          <div className="status-bar-QaAc67">
            <div className="battery-MTLyAM">
              <div className="border-MYGhml"></div>
              <img className="cap-MYGhml" src="img/errorGenerateNFT/cap-1@1x.png" alt="Cap" />
              <div className="capacity-MYGhml"></div>
            </div>
            <img className="wifi-MTLyAM" src="img/errorGenerateNFT/wifi-1@1x.png" alt="Wifi" />
            <img className="cellular-connection-MTLyAM" src="img/errorGenerateNFT/cellular-connection-1@1x.png" alt="Cellular Connection" />
            <div className="time-style-MTLyAM">
              <div className="time-eJQK27 sfprotext-semi-bold-white-15px">9:41</div>
            </div>
          </div>
        </div> */}
        <div className="bottom-controls-FumncE">
          <a href="bettermidapp-generate-free-nft-minting.html">
            <div className="button_-mintagain-QHnb0b">
              <div className="button1-7FeCxk"></div>
              <div className="mintagain-7FeCxk inter-semi-bold-white-15px">Mint again</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
  

  return (
    <CenterLayout
      content={content}
      bgImg={false}
    />
  )
};

export default ErrorGenerateNFT;
