import * as React from 'react';
import { CenterLayout } from '../../components/layout';
import './connectSuccess.css'
import { BackButton } from '../../components/button';

interface IConnectSuccessProps {
}

const openCam : () => void = () => {
  console.log("openCam")
}


const ConnectSuccess: React.FunctionComponent<IConnectSuccessProps> = (props) => {
  const takeSelfie = () => {
    console.log("takeSelfie")

  }
  const content : JSX.Element = (
    <div>
      <BackButton />
      <div className="success-box">
        <div className="finished">
          <img className="icon-awesome-check" src={`${process.env.PUBLIC_URL}/img/connectSuccess/icon-awesome-check@1x.png`} alt="Icon awesome-check" />
        </div>
        <h1 className="title inter-semi-bold-white-28px">Successful!</h1>
        <p className="your-crypto-wallet-is-connected">Your crypto wallet is connected.</p>
      </div>
      <div className="button_-selfie" onClick={openCam}>
        <img className="ic_selfie" src={`${process.env.PUBLIC_URL}/img/connectSuccess/ic-selfie@1x.png`} alt="ic_selfie" />
        <p className="continue inter-semi-bold-white-15px">Take a Selfie and Start!</p>
      </div>
    </div>
  )


  return (
    <CenterLayout
      content={content}
      bgImg={process.env.PUBLIC_URL + "/img/BG.png"}
    />
  );
};

export default ConnectSuccess;
