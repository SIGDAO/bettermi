import * as React from 'react';
import { CenterLayout } from '../../components/layout';
import { useRef, useState, useCallback, useEffect } from "react";

import Webcam from "react-webcam";
import './TakeSelfie.css';
import { BackButton } from '../../components/button';
import CSS from 'csstype';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { profileSlice } from '../../redux/profile';
import { store } from '../../redux/reducer';
import { userBMISlice } from '../../redux/userBMI';
import { useGetBMIMutation } from '../../redux/userBMIApi';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { isSelfieRecord, isTodayHaveSelfieRecord } from '../../components/bmiCalculate';
import { accountId } from '../../redux/account';
import { useLedger } from '../../redux/useLedger';

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
  // 'top': 'calc(529px - 50px)',
  'top': '529px',
}

const convertBase64toJpg = (base64String: string): File => {
  const byteCharacters = atob(base64String.split(',')[1]);

  // Convert the byte string to a Uint8Array
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  // Create a Blob object from the Uint8Array
  const blob = new Blob([byteArray], { type: 'image/jpeg' });

  // Create a File object from the Blob and set the name to be "image.jpg"
  return new File([blob], 'image.jpg', { type: 'image/jpeg' });

}



const TakeSelfie: React.FunctionComponent<ITakeSelfieProps> = (props) => {
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [bmidata, setbmidata] = useState<any>();
  var navigatePath: string = '/generateBMIDaily'
  const tempAccountId = useSelector(accountId);
  const Ledger2 = useLedger();


  const [ getBMI, {isLoading, data} ] = useGetBMIMutation()

  useEffect(() => {
    if (data) {
      const { bmi } = data
      console.log(bmi, 'difsjodifjiosdijfio')
      dispatch(profileSlice.actions.setBMI(bmi.toFixed(2).toString()))
    }
  }
  , [data])

  useEffect(() => {
    // real data
    isSelfieRecord(tempAccountId, Ledger2)
      .then((result) => {
        if (!result) {
          navigatePath = '/generateBMINFTImport'
        }
      })
  }, []);



  // todo: 
  // 1. post the selfie image to the hugging face, and analyze the BMI result
  //    BMI result should be stored in the redux store
  // 2. trigger smart contract to send message to store the BMI result in the blockchain
  const action: Function = async (imageSrc: string) => {
    const formData = new FormData();
    formData.append('file', convertBase64toJpg(imageSrc))
    await getBMI(formData)    
  }

  // for mobile
  const webcamContainerStyle : CSS.Properties = {
    'zIndex': '1',
    'display': 'inline-block',
    'position': 'absolute',
    'top': 'calc(190px - 50px)',   
  }

  const mobile = process.env.REACT_APP_MOBILE === 'true'
  // const width = process.env.REACT_APP_MOBILE === 'true' ? '390' : '819'
  const width = 819

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
        store.dispatch(profileSlice.actions.setSelfieImage(imageSrc))
        action(imageSrc)
      }
      navigate(navigatePath)
    },
    [webcamRef]
  );


  const content : JSX.Element = (
    <div className='selfie-content-container'>
      <BackButton/>
      <div className="disclaimer inter-normal-white-15px">
      We super care your privacy, your selfie will not be stored
      </div>
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




