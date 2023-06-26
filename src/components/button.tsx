import { Button } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import CSS from 'csstype';
import exp from 'constants';
import './button.css'


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
  `

  return (
    <CustomButton>
      {text}
    </CustomButton>
  )
}

export const BackButton: React.FunctionComponent<IBackButtonProps> = (props) => {
  return (
    <a href="javascript:history.back()">
      <div className="icon-arrow-left">
        <img className="icon-arrow-left-1" src={`${process.env.PUBLIC_URL}/img/connectSuccess/icon-arrow-left-8@1x.png`} alt="icon-arrow-left" />
      </div>
    </a>
  )
}