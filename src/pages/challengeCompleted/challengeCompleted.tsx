import * as React from 'react';
import './challengeCompleted.css'
import { Link } from 'react-router-dom';
import { CenterLayout } from '../../components/layout';
import { ShortTitleBar } from '../../components/titleBar';

interface IChallengeCompletedProps {
}

const ChallengeCompleted: React.FunctionComponent<IChallengeCompletedProps> = (props) => {
  const content: JSX.Element = (
    <div className="screen">
      <div className="bettermidapp-challenge-finished-1">
        <ShortTitleBar title='' setting={false} />
        <div className="x16219-iwUDzs">
          <div className="you-have-earned-75VOY2">You have earned:</div>
          <h1 className="title-75VOY2">Completed!</h1>
          <div className="finished-75VOY2">
            <div className="button3-copy-3oZEl3">
              <div className="button1-vX3ONf button1"></div>
            </div>
            <img className="icon-awesome-check-3oZEl3" src={`${process.env.PUBLIC_URL}/img/challengeSuccess/icon-awesome-check@1x.png`} alt="Icon awesome-check" />
          </div>
          <div className="sigdao-score-75VOY2">
            <div className="x10-VOfFBB inter-semi-bold-keppel-14px">+5.25</div>
            <div className="signdao_tokengradient-VOfFBB">
              <div className="x441-gxWo6F"></div>
              <div className="x442-gxWo6F"></div>
              <img className="x880-gxWo6F" src={`${process.env.PUBLIC_URL}/img/challengeSuccess/file---880-1x-png-10@1x.png`} alt="880" />
            </div>
          </div>
        </div>
        <Link to="/allMission">
          <div className="button_-done-iwUDzs">
            <div className="button1-UidXYK button1"></div>
            <div className="continue-UidXYK inter-semi-bold-white-15px">Done</div>
          </div>
        </Link>
      </div>
    </div>
  )

  return (
    <CenterLayout
      content={content}
      bgImg={false}
    />
  );
}

export default ChallengeCompleted;
