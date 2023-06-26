import * as React from 'react';
import { CenterLayout } from '../../components/layout';
import { BackButton } from '../../components/button';


interface GenerateFreeNFTProps {
}

const GenerateFreeNFT: React.FunctionComponent<GenerateFreeNFTProps> = (props) => {
  const content : JSX.Element = (
    <>
        <img className="photo" src="img/photo-1@1x.png" alt="Photo" />
        <BackButton />
        <img className="x0" src="img/0@1x.png" alt="0" />
        <h1 className="text-1">#00000001</h1>
        <div className="x0-signa">$0 SIGNA</div>
        <a href="bettermidapp-customize-your-profile-1.html">
          <div className="button_-import"><div className="continue inter-semi-bold-white-15px">Import</div></div>
        </a>
        <div className="x16206">
          <div className="lv-1">LV 1</div>
          <img className="x6" src="img/file---6@1x.png" alt="6" />
          <div className="reward-10">REWARD +10%</div>
        </div>
    </>
  )


  return (
    <CenterLayout
      bgImg={process.env.PUBLIC_URL + "/img/BG.png"}
      content={content}
    />
  );
};

export default GenerateFreeNFT;
