import * as React from 'react';
import '../../components/calendar.css';
import './generateBMINFTImport.css';

import { CenterLayout } from '../../components/layout';
import { BackButton } from '../../components/button';
import { BirthSelect, GenderSelect } from '../../components/select';
import { selectCurrentGender } from '../../redux/profile';
import { useSelector } from 'react-redux';

interface IGenerateBMINFTImportProps {
}

const GenerateBMINFTImport: React.FunctionComponent<IGenerateBMINFTImportProps> = (props) => {
  const gender = useSelector(selectCurrentGender)

  const content: JSX.Element = (
    <div
      className="bettermidapp-generate-bmidata-import"
      // onclick="window.open('bettermidapp-generate-bmi-daily.html', '_self');"
    >
      {/* <div className="bg_2-pqhvJT"><img className="bg-1BxzIu" src="img/generateBMINFTImport/bg-11@1x.png" alt="BG" /></div> */}
      {/* <a href="javascript:history.back()" onclick="window.event.stopPropagation()">
        <div className="icon-arrow-left-pqhvJT icon-arrow-left">
          <img
            className="icon-arrow-left-x0RVVs icon-arrow-left"
            src="img/generateBMINFTImport/icon-arrow-left-10@1x.png"
            alt="icon-arrow-left"
            />
        </div>
      </a> */}
      <BackButton/>
      {/* <div className="bars-status-bar-i-phone-light-pqhvJT">
        <div className="frame-xAxCpN"></div>
        <div className="status-bar-xAxCpN">
          <div className="battery-fvCpv5">
            <div className="border-2fTQ0M"></div>
            <img className="cap-2fTQ0M" src="img/generateBMINFTImport/cap-1@1x.png" alt="Cap" />
            <div className="capacity-2fTQ0M"></div>
          </div>
          <img className="wifi-fvCpv5" src="img/generateBMINFTImport/wifi-1@1x.png" alt="Wifi" />
          <img className="cellular-connection-fvCpv5" src="img/generateBMINFTImport/cellular-connection-1@1x.png" alt="Cellular Connection" />
          <div className="time-style-fvCpv5">
            <div className="time-B7jQaS sfprotext-semi-bold-white-15px">9:41</div>
          </div>
        </div>
      </div> */}
      <a 
        href="bettermidapp-generate-free-nft-minting.html" 
        // onclick="window.event.stopPropagation()"
      >
        <div className="bottom-controls-pqhvJT">
          <div className="button_-mint-RUzxTX">
            <div className="button1-T8l3Om"></div>
            <div className="mint-T8l3Om inter-semi-bold-white-15px">Mint your NFT</div>
          </div>
        </div>
      </a>
      <p className="import-biological-sex-birth-pqhvJT inter-bold-royal-blue-15px">IMPORT BIOLOGICAL SEX &amp; BIRTH:</p>
      <p className="your-selection-cannot-be-changed-later-pqhvJT">Your selection cannot be changed later.</p>
      {/* <div className="birth-pqhvJT">
        <div className="talking-container">
          <div className="x425-hrEXXf x425"></div>
          <img className="arrow-down-hrEXXf arrow-down" src="img/generateBMINFTImport/arrow-down-1@1x.png" alt="arrow-down" />
        </div>
        <div className="ddmmyyyy-Guzcj1 inter-normal-white-15px">DD/MM/YYYY</div>
      </div> */}
      {/* <div className="sex-pqhvJT">
        <div className="talking-container">
          <div className="x425-oCWL6w x425"></div>
        </div>
        <div className="female-cMsATY inter-normal-white-15px">Female</div>
        <img className="arrow-down-cMsATY arrow-down" src="img/generateBMINFTImport/arrow-down-1@1x.png" alt="arrow-down" />
      </div> */}
      <GenderSelect options={[{"label": "Female", "value": "1"}, {"label": "Male", "value": "2"}]} title='False' newPage={true} onSelect={(e) => console.log(e)}/>
      <BirthSelect />
      <div className="bmi-pqhvJT">
        <div className="bmi-result-bg-bL0gm3">
          <img className="seperate-line-IJAMVx seperate-line" src="img/generateBMINFTImport/seperat-line-1@1x.png" alt="seperate line" />
          <img className="seperate-line-X2g18V seperate-line" src="img/generateBMINFTImport/seperat-line-1@1x.png" alt="seperate line" />
        </div>
        <div className="bmi-result-bL0gm3">
          <div className="bg-Gw4eM2"></div>
          <div className="x255-Gw4eM2">25.5</div>
          <div className="kgm2-Gw4eM2">
            <span className="span0-IFVIgU inter-normal-royal-blue-14px">kg/m</span><span className="span1-IFVIgU inter-normal-royal-blue-14px">2</span>
          </div>
        </div>
        <h1 className="title-bL0gm3 inter-semi-bold-white-28px">Your BMI Result :</h1>
      </div>
      <img className="photo-pqhvJT" src="img/generateBMINFTImport/photo-1@1x.png" alt="Photo" />
    </div>
  )
  

  return (
    <CenterLayout
      content={content}
      bgImg={false}
    />
  )
};

export default GenerateBMINFTImport;
