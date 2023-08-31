import React, { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CenterLayout } from '../../components/layout';
import { BackButton } from '../../components/button';
import './customizeYourProfile.css'
import generateName from '../../components/generateName';
import { profileSlice } from '../../redux/profile';
import {store} from '../../redux/reducer';
import { RandomGenNameInput } from '../../components/input';

interface ICustomizeYourProfileProps {
}

const CustomizeYourProfile: React.FunctionComponent<ICustomizeYourProfileProps> = (props) => {
  // todo: help it to change to nft image IFPS link
  // maybe store the path in redux as well
  const nftImage = '';
  const defaultName = 'zoe_li'
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // when user press "Save", putting the generated name into local storage
  const [name, setName] = useState<string>('');

  const handleSave = () => {
    if (!name) {
      localStorage.setItem('name', defaultName);
      store.dispatch(profileSlice.actions.setUsername(defaultName))
    } else {
      localStorage.setItem('name', name);
      store.dispatch(profileSlice.actions.setUsername(name))
    }

    navigate('/profile', { state: { previousPath: pathname}});
  }

  const content: JSX.Element = (
    <div>
      <BackButton/>
      <div className='title-Gzrq3v-container'><h1 className="title-Gzrq3v">Customize your profile</h1></div>
      <div className="pick-a-username-Gzrq3v">PICK A USERNAME</div>
      <p className="reserve-your-name-before-its-taken-Gzrq3v">Reserve your @name before it's taken.</p>
      <img className="photo-Gzrq3v" src={nftImage || `${process.env.PUBLIC_URL}/img/mimi.png`} alt="Photo" />
      <div className="search-bar-container-customizeYourProfile">
        <RandomGenNameInput name={name} setName={setName} />
      </div>
      <div className="button_-save-Gzrq3v" onClick={handleSave}>
        <div className="button1-S5Obts"></div>
        <div className="continue-S5Obts">Save</div>
      </div>
    </div>
  ) 

  return (
    <CenterLayout
      bgImg={false}
      content={content}
    />
  );
};

export default CustomizeYourProfile;
