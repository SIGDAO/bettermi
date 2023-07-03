import * as React from 'react';
import { CenterLayout } from '../../components/layout';
import { useRef, useState, useCallback } from "react";

import Webcam from "react-webcam";
import './TakeSelfie.css';
import { BackButton } from '../../components/button';
import CSS from 'csstype';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selfieSlice } from '../../redux/profile';
import { store } from '../../redux/reducer';


// const WebcamComponent = () => <Webcam />;
// import Camera from 'react-html5-camera-photo';
// import 'react-html5-camera-photo/build/css/index.css';



interface ITakeSelfieProps {
}

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const takeSelfieButton : CSS.Properties = {
  'background': `url(${process.env.PUBLIC_URL}/img/takeSelfie/icon--take-photo-1@1x.png)`,
  'backgroundSize': 'cover',
  'width': '100px',
  'height': '100px',
  'position': 'absolute',
  'left': 'calc((100% - 100px) / 2)',
  'border': 'none',
  'outline': 'none',
  'cursor': 'pointer',
  'top': '500px',
}



const TakeSelfie: React.FunctionComponent<ITakeSelfieProps> = (props) => {
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();

  // todo: 
  // 1. post the selfie image to the hugging face, and analyze the BMI result
  //    BMI result should be stored in the redux store
  // 2. trigger smart contract to send message to store the BMI result in the blockchain
  const action: Function = (imageSrc: string) => {

  }

  const mobile = process.env.REACT_APP_MOBILE === 'true'
  // const width = process.env.REACT_APP_MOBILE === 'true' ? '390' : '819'
  const width = 819

  // for mobile
  const webcamContainerStyle : CSS.Properties = {
    'zIndex': '1',
    'display': 'inline-block',
    'position': 'absolute',
    'top': '230px',   }

  if (mobile) {
    webcamContainerStyle.position = 'absolute'
    webcamContainerStyle.width = '390px'
    webcamContainerStyle.left = 'calc((100% - 390px) / 2)'
    webcamContainerStyle.height = 'calc(844px - 230px)'
    webcamContainerStyle.overflow = 'hidden'
  } else {
    webcamContainerStyle.position = 'absolute'
    webcamContainerStyle.width = '819px'
    webcamContainerStyle.left = 'calc((100% - 819px) / 2)'
  }
  

  // capture the selfie image, and store it in the redux store
  const capture = React.useCallback(
    () => {
      console.log(webcamRef)
      const imageSrc = webcamRef.current?.getScreenshot();
      if (imageSrc) {
        store.dispatch(selfieSlice.actions.setSelfieImage(imageSrc))
        action(imageSrc)
      }
      navigate('/generateBMI')
    },
    [webcamRef]
  );


  const content : JSX.Element = (
    <div className='selfie-content-container'>
      <BackButton/>
      <div className="webcam-container" style={webcamContainerStyle}>
        <Webcam 
            audio={false}
            // height={720}
            screenshotFormat="image/jpeg"
            // width={1280}
            width={width}
            ref={webcamRef}
            videoConstraints={videoConstraints}        
        />
        <div className="selfie-shadow"></div>
        <button 
          style={takeSelfieButton}
          onClick={capture}
        />
      </div>
    </div>
  )

  return (
    <CenterLayout
      content={content}
      bgImg={false}
    />
  );
};

export default TakeSelfie;

