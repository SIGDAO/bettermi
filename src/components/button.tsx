import { Button } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import CSS from 'csstype';
import exp from 'constants';
import './button.css'
import { isTodayHaveSelfieRecord } from './bmiCalculate';
import { accountId } from '../redux/account';
import { useSelector } from 'react-redux';
import { useLedger } from '../redux/useLedger';
import { selectCurrentBMI } from '../redux/profile';
import { selectBMI } from '../redux/userBMI';



interface IButtonProps {
  text: string;
  height: string;
  width: string;
  fontSize?: string;
  fontWeight?: string;
  action?: () => void;
  navigation?: string;
}

// DefaultButton css style
// const defaultButtonStyle = makeStyles<Theme

interface IBackButtonProps {
  top?: string;
}


export const ButtonWithNavigation: React.FunctionComponent<IButtonProps> = (props) => {
  const {text, height, width, navigation} = props;
  const customStyle: CSS.Properties = {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'height': height,
    'width': width,
    'color': 'white',
    'background': 'linear-gradient(-90deg, #8743ff 0%, #4136f1 100%)',
    'borderRadius': '10px',
    'boxShadow': '0px 15px 30px #1466cc29',
  }

  return (
    <Link to={navigation || '/'} style={customStyle}>
      {text}
    </Link>
  )
};


export const ButtonWithAction: React.FunctionComponent<IButtonProps> = (props) => {
  const {text, height, width, action} = props;

  const CustomButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${height};
    width: ${width};
    font-family: var(--font-family-inter);
    font-size: ${props.fontSize ||"var(--font-size-m)"};
    font-weight: ${props.fontWeight || "600" };
    background: linear-gradient(-90deg, #8743ff 0%, #4136f1 100%);
    border-radius: 10px;
    color: white;
    box-shadow: 0px 15px 30px #1466cc29;
    padding: 14.5px 21px;
  `

  return (
    <CustomButton onClick={action}>
      {text}
    </CustomButton>
  )
}

export const DisabledButton: React.FunctionComponent<IButtonProps> = (props) => {
  const {text, height, width} = props;

  const CustomButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #221d4b;
    border: 1px solid;
    border-color: var(--royal-blue);
    border-radius: 10px;
    box-shadow: 0px 15px 30px #1466cc29;
    cursor: pointer;
    height: ${height};
    width: ${width};
    font-family: var(--font-family-inter);
    font-size: ${props.fontSize ||"var(--font-size-m)"};
    font-weight: ${props.fontWeight || "600" };
    color: #4136f1;
    padding: 14.5px 21px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 14px;
    min-height: 21px;
    min-width: 108px;
    text-align: center;
    white-space: nowrap;
  `

  // .continue {
  //   color: var(--royal-blue);
  //   font-family: var(--font-family-inter);
  //   font-size: var(--font-size-m);
  //   font-weight: 600;
  //   letter-spacing: 0;
  //   line-height: 14px;
  //   min-height: 21px;
  //   min-width: 108px;
  //   text-align: center;
  //   white-space: nowrap;
  // }
  return (
    <CustomButton>
      {text}
    </CustomButton>
  )
}

export const BackButton: React.FunctionComponent<IBackButtonProps> = (props) => {
  const {top} = props;

  const customStyle: CSS.Properties = {
    'alignItems': 'flex-start',
    'cursor': 'pointer',
    'display': 'flex',
    'height': '44px',
    'left': '16px',
    'minWidth': '44px',
    'paddingLeft': '14px',
    'position': 'relative',
    'top': top || '44px',
  }


  return (
    <a href="javascript:history.back()">
      <div className="icon-arrow-left" style={customStyle} >
        <img className="icon-arrow-left-1" src={`${process.env.PUBLIC_URL}/img/connectSuccess/icon-arrow-left-8@1x.png`} alt="icon-arrow-left" />
      </div>
    </a>
  )
}

export const NavigateToTakeSelfieButton: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const tempAccountId = useSelector(accountId);
  // const bmi_fetchedData = useSelector(selectBMI);
  const Ledger2 = useLedger();
  const [isActive, setIsActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    isTodayHaveSelfieRecord(tempAccountId, Ledger2)
      .then((result) => {
        console.log('result', result)
        setIsActive(result);
      })
      .catch((err) => {
        console.log(err);
      })
    console.log(isActive)
  }, [])

  async function handleTakeASelfie() {
    if (!isActive) navigate('/takeSelfie');
  }


  if (!isActive) {
    return (
      <div className="button_-selfie-to-earn-MUU5YC" onClick={() => handleTakeASelfie()}>
        <img className="ic_selfie-u8P1YH" src="img/selfieToEarn/ic-selfie-1@1x.png" alt="ic_selfie" />
        <p className="take-a-selfie-to-earn-u8P1YH inter-semi-bold-white-15px">Take a Selfie to Earn!</p>
        <img className="ic_arrow_forward-u8P1YH" src="img/selfieToEarn/ic-arrow-forward-1@1x.png" alt="ic_arrow_forward" />
      </div>
    )
  } else {
    return (
      <div className="lock-button-cover">
        <div className="lock-button">
          <p className="selfie-time-countdown inter-semi-bold-white-15px">
            12:00:00
          </p>
          <img className='lock-icon-NavigateToTakeSelfieButton' src="/img/ic-locked-1@1x.png" alt="" />
        </div>
        <div className="button_-selfie-to-earn-MUU5YC" onClick={() => handleTakeASelfie()}>
          <img className="ic_selfie-u8P1YH" src="img/selfieToEarn/ic-selfie-1@1x.png" alt="ic_selfie" />
          <p className="take-a-selfie-to-earn-u8P1YH inter-semi-bold-white-15px">Take a Selfie to Earn!</p>
          <img className="ic_arrow_forward-u8P1YH" src="img/selfieToEarn/ic-arrow-forward-1@1x.png" alt="ic_arrow_forward" />
        </div>
      </div>
    )
  }
}