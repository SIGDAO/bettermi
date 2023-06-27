import * as React from 'react';
import { CenterLayout } from '../../components/layout';
import AnimaGenContent from './animaGenContent';
import './generateBMI.css';
import './bmi-bar.css'

export interface IGenerateBMIProps {
}

// todo: get the BMI value from redux, the BMI value is calculated from in the TakeSelfie page

function GenerateBMI (props: IGenerateBMIProps) {
  return (
    <CenterLayout
      // can call action/get redux value in order to pass the BMI value to the Anima Generate Content
      content={<AnimaGenContent BMI={25.5} selfie=''/>} // too massy for the Anima Generate Content, so I put it in a separate file XD
      bgImg={process.env.PUBLIC_URL + '/img/BG.png'}
    />
  );
}

export default GenerateBMI;