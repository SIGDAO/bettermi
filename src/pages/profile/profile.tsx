import * as React from 'react';
import './profile.css'
import { CenterLayout } from '../../components/layout';
import AnimaGenContent from './animaGenContent';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


interface IProfileProps  {
}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isBackButton, setIsBackButton] = useState<boolean>(true);
  const { state } = useLocation();

  useEffect(() => {
    if (state?.previousPath === '/customizeYourProfile') {
      setIsOpen(true);
      setIsBackButton(false);
      window.history.replaceState({}, document.title)
    }

  }, [])


  return <CenterLayout
    content={
      <div className='screen'>
        <AnimaGenContent 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          isBackButton={isBackButton}
          setIsBackButton={setIsBackButton}
        />
      </div>
    }
    bgImg={false}
    // noScroll={isOpen}
  />
};

export default Profile;
