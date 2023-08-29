import * as React from 'react';
import { CenterLayout } from '../../components/layout';
import { BackButton } from '../../components/button';
import './generateFreeNFT.css'
import { useNavigate } from 'react-router-dom';


interface GenerateFreeNFTProps {
}

const GenerateFreeNFT: React.FunctionComponent<GenerateFreeNFTProps> = (props) => {
  const navigate = useNavigate()

  const content : JSX.Element = (
    <>
      <img className="photo" src={`${process.env.PUBLIC_URL}/img/generateFreeNFT/photo-1@1x.png`} alt="Photo" />
      <BackButton />
      <img className="x0" src={`${process.env.PUBLIC_URL}/img/full_mimi.png`} alt="0" />
      <h1 className="text-1">#00000001</h1>
      <div className="x16206">
        <div className="lv-1">LV 1</div>
        <img className="x6" src={`${process.env.PUBLIC_URL}/img/generateFreeNFT/file---6@1x.png`} alt="6" />
        <div className="reward-10">REWARD +10%</div>
      </div>
      <div className="x0-signa">$0 SIGNA</div>
      <div className="button_-import" onClick={() => navigate('/customizeYourProfile')}><div className="continue inter-semi-bold-white-15px">Import</div></div>
    </>
  )


  return (
    <CenterLayout
      bgImg={false}
      content={content}
    />
  );
};

export default GenerateFreeNFT;
