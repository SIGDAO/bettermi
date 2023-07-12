import * as React from 'react';
import './challengeCompleted.css'
import { Link } from 'react-router-dom';
import { CenterLayout } from '../../components/layout';
import { ShortTitleBar } from '../../components/titleBar';

interface IChallengeCompletedProps {
}

const ChallengeCompleted: React.FunctionComponent<IChallengeCompletedProps> = (props) => {
  return (
    <CenterLayout
      content={content}
      bgImg={false}
    />
  );
}

export default ChallengeCompleted;
