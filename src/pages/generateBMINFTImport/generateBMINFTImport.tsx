import * as React from 'react';
import '../../components/calendar.css';
import generateBMINFTImportcss from './generateBMINFTImport.css';

import { CenterLayout } from '../../components/layout';
import { BackButton } from '../../components/button';
import { BirthSelect, GenderSelect } from '../../components/select';
import { selectCurrentGender, selectCurrentImg } from '../../redux/profile';
import { useSelector } from 'react-redux';


interface IGenerateBMINFTImportProps {
}

const GenerateBMINFTImport: React.FunctionComponent<IGenerateBMINFTImportProps> = (props) => {
  const gender = useSelector(selectCurrentGender)
  const selfie = useSelector(selectCurrentImg)

  const content: JSX.Element = (
    <div
      className="generateBMINFTImportcss.bettermidapp-generate-bmidata-import"
      // onclick="window.open('bettermidapp-generate-bmi-daily.html', '_self');"
    >
      <BackButton/>
      <a 
        href="bettermidapp-generate-free-nft-minting.html" 
        // onclick="window.event.stopPropagation()"
      >
        <div className="generateBMINFTImportcss.bottom-controls-pqhvJT">
          <div className="generateBMINFTImportcss.button_-mint-RUzxTX">
            <div className="generateBMINFTImportcss.button1-T8l3Om"></div>
            <div className="generateBMINFTImportcss.mint-T8l3Om inter-semi-bold-white-15px">Mint your NFT</div>
          </div>
        </div>
      </a>
      <p className="generateBMINFTImportcss.import-biological-sex-birth-pqhvJT inter-bold-royal-blue-15px">IMPORT BIOLOGICAL SEX &amp; BIRTH:</p>
      <p className="generateBMINFTImportcss.your-selection-cannot-be-changed-later-pqhvJT">Your selection cannot be changed later.</p>
      <GenderSelect options={[{"label": "Female", "value": "1"}, {"label": "Male", "value": "2"}]} title='False' newPage={true} onSelect={(e) => console.log(e)}/>
      <BirthSelect />
      <div className="generateBMINFTImportcss.bmi-pqhvJT">
        <div className="generateBMINFTImportcss.bmi-result-bg-bL0gm3">
          <img className="generateBMINFTImportcss.seperate-line-IJAMVx seperate-line" src="img/generateBMINFTImport/seperat-line-1@1x.png" alt="seperate line" />
          <img className="generateBMINFTImportcss.seperate-line-X2g18V seperate-line" src="img/generateBMINFTImport/seperat-line-1@1x.png" alt="seperate line" />
        </div>
        <div className="generateBMINFTImportcss.bmi-result-bL0gm3">
          <div className="generateBMINFTImportcss.bg-Gw4eM2"></div>
          <div className="generateBMINFTImportcss.x255-Gw4eM2">25.5</div>
          <div className="generateBMINFTImportcss.kgm2-Gw4eM2">
            <span className="generateBMINFTImportcss.span0-IFVIgU inter-normal-royal-blue-14px">kg/m</span><span className="generateBMINFTImportcss.span1-IFVIgU inter-normal-royal-blue-14px">2</span>
          </div>
        </div>
        <h1 className="generateBMINFTImportcss.title-bL0gm3 inter-semi-bold-white-28px">Your BMI Result :</h1>
      </div>
      <img className="generateBMINFTImportcss.photo-pqhvJT" src={selfie? selfie : "img/generateBMINFTImport/photo-1@1x.png"} alt="Photo" />
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
