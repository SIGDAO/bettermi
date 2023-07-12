import * as React from 'react';
import './profile.css'
import { CenterLayout } from '../../components/layout';
import AnimaGenContent from './animaGenContent';

interface IProfileProps  {
}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {


  return <CenterLayout
    content={<AnimaGenContent />}
    bgImg={false}
  />
};

export default Profile;
