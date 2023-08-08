import * as React from 'react';
import './profile.css'
import { CenterLayout } from '../../components/layout';
import AnimaGenContent from './animaGenContent';
import { useState } from 'react';


interface IProfileProps  {
}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);


  return <CenterLayout
    content={
      <div className='screen'>
        <AnimaGenContent isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    }
    bgImg={false}
    // noScroll={isOpen}
  />
};

export default Profile;
