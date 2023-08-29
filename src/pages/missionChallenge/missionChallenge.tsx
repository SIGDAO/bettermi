import * as React from 'react';
import './missionChallenge.css'
import { CenterLayout } from '../../components/layout';
import { ShortTitleBar } from '../../components/titleBar';
import { Link } from 'react-router-dom';
import { accountId } from '../../redux/account';
import { useSelector } from 'react-redux';
import { TransferToken } from '../../components/transferToken';
import { Button } from '@mui/material';
import { walletNodeHost } from '../../redux/wallet';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface IMissionChallengeProps {
}

interface missionList {
  title: string,
  duration: string,
  bodyPart: string,
  sigdao: string,
  nftLevel: string,
  missionPath: string,
}



const missionList = [
  {
    title: `1. Hello Bae !`,
    duration: `1 mins`,
    bodyPart: `Arms`,
    sigdao: `+5.25`,
    nftLevel: `1`,
    missionPath: '',
    timeslot: [{
      startingTime: '9:00',
      endTime: '9:06',
    },
    {
      startingTime: '10:00',
      endTime: '10:06',
    }],
  },
  // {
  //   title: '2. Swiping Left & Right',
  //   duration: `1 mins`,
  //   bodyPart: `Arms`,
  //   sigdao: `+5.25`,
  //   nftLevel: `1`,
  //   missionPath: '',
  //   timeslot: [{
  //     startingTime: '9:00',
  //     endTime: '9:06',
  //   },
  //   {
  //     startingTime: '10:00',
  //     endTime: '10:06',
  //   }],
  // },
  // {
  //   title: '3. Into Your Dm',
  //   duration: `1 mins`,
  //   bodyPart: `Arms`,
  //   sigdao: `+5.25`,
  //   nftLevel: `1`,
  //   missionPath: '',
  //   timeslot: [{
  //     startingTime: '9:00',
  //     endTime: '9:06',
  //   },
  //   {
  //     startingTime: '10:00',
  //     endTime: '10:06',
  //   }],
  // },
  // {
  //   title: '4. Getting Butterflies',
  //   duration: `2 mins`,
  //   bodyPart: `Arms`,
  //   sigdao: `+5.25`,
  //   nftLevel: `2`,
  //   missionPath: '',
  //   timeslot: [{
  //     startingTime: '14:00',
  //     endTime: '14:06',
  //   },
  //   {
  //     startingTime: '15:00',
  //     endTime: '15:06',
  //   }],
  // },
  // {
  //   title: '5. Let\'s Cuddle',
  //   duration: `2 mins`,
  //   bodyPart: `Arms`,
  //   sigdao: `+5.25`,
  //   nftLevel: `2`,
  //   missionPath: '',
  //   timeslot: [{
  //     startingTime: '14:00',
  //     endTime: '14:06',
  //   },
  //   {
  //     startingTime: '15:00',
  //     endTime: '15:06',
  //   }],
  // },
  // {
  //   title: '6. I\'m a Good Listener',
  //   duration: `2 mins`,
  //   bodyPart: `Arms`,
  //   sigdao: `+5.25`,
  //   nftLevel: `2`,
  //   missionPath: '',
  //   timeslot: [{
  //     startingTime: '14:00',
  //     endTime: '14:06',
  //   },
  //   {
  //     startingTime: '15:00',
  //     endTime: '15:06',
  //   }],
  // },
  // {
  //   title: '7. I\'m a Good Listener',
  //   duration: `3 mins`,
  //   bodyPart: `Arms`,
  //   sigdao: `+5.25`,
  //   nftLevel: `3`,
  //   missionPath: '',
  //   timeslot: [{
  //     startingTime: '20:00',
  //     endTime: '20:06',
  //   },
  //   {
  //     startingTime: '21:00',
  //     endTime: '21:06',
  //   }],
  // },
  // {
  //   title: '8. I\'m a Good Listener',
  //   duration: `3 mins`,
  //   bodyPart: `Arms`,
  //   sigdao: `+5.25`,
  //   nftLevel: `3`,
  //   missionPath: '',
  //   timeslot: [{
  //     startingTime: '20:00',
  //     endTime: '20:06',
  //   },
  //   {
  //     startingTime: '21:00',
  //     endTime: '21:06',
  //   }],
  // },
  // {
  //   title: '9. I\'m a Good Listener',
  //   duration: `3 mins`,
  //   bodyPart: `Arms`,
  //   sigdao: `+5.25`,
  //   nftLevel: `3`,
  //   missionPath: '',
  //   timeslot: [{
  //     startingTime: '20:00',
  //     endTime: '20:06',
  //   },
  //   {
  //     startingTime: '21:00',
  //     endTime: '21:06',
  //   }],
  // },
]

// todo: replace this with real data
// const missionFormList = () => {
//   const missionList = []
//   for (let i = 0; i < 9; i++) {
//     missionList.push({
//       title: `1. Hello Bae !`,
//       duration: `3 mins`,
//       bodyPart: `Arms`,
//       sigdao: `+5.25`,
//       nftLevel: `1`,
//       missionPath: '',
//     })
//   }
//   return missionList
// }


// const missionList: MissionFormList[] = missionFormList()


const MissionChallenge: React.FunctionComponent<IMissionChallengeProps> = (props) => {
  const title = 'Challenges X 9 Hacks'
  const userAccountId = useSelector(accountId);
  const userWalletNodeHost = useSelector(walletNodeHost);
  const navigate = useNavigate();
  const [isInTimeSlot, setIsInTimeSlot] = useState(false);
  const [booleanStates, setBooleanStates] = useState<boolean[]>(Array(missionList.length).fill(false));


  const checkTimeSlot = () => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    for (const mission of missionList) {
      for (const time of mission.timeslot) {
        if (currentTime >= time.startingTime && currentTime <= time.endTime) {
          setIsInTimeSlot(true);
          return;
        }
      }
    }


    setIsInTimeSlot(false);
  };

  useEffect(() => {
    const interval = setInterval(checkTimeSlot, 1000); // Check every second

    return () => {
      clearInterval(interval);
    };
  }, []);


  const content: JSX.Element = (
    <div className="screen">
      <div className="bettermidapp-challenges-1">
        <ShortTitleBar title={title} />
        <img className="photo-7K5ObS" src="img/missionChallenge/photo@1x.png" alt="Photo" />
        <div className="challenges-card-7K5ObS">
          <img className="layer-nLfc9z" src="img/missionChallenge/layer-1@1x.png" alt="Layer" />
          <div className="scroll-group-nLfc9z">
            <div className="challenge-cards-QuyfDF">
              {missionList.map((mission, index) => {
                return (
                  <Button
                    onClick={() => navigate(`/challengeCountdown/{}`)}
                    className="challenge-cards-Ic1qil"
                  >
                    <div className="inner-mission-container">
                      <div className="mission-graph">
                        <img className='mission-gif' src="img/missionChallenge/1HelloBae-BetterMiWithUniform.gif" alt="" />
                      </div>
                      <div className="mission-detail">
                        <div className="mission-topic inter-semi-bold-white-18px">
                          {mission.title}
                        </div>
                        <div className="mission-time-bodyPart-container">
                          <div className="mission-time-container">
                            <img src="/" alt="" />
                            <p>{mission.duration}</p>
                          </div>
                          <div className="mission-bodyPart-container">
                            <img src="" alt="" />
                            <p>{mission.bodyPart}</p>
                          </div>
                        </div>
                        <div className="mission-level-and-reward">
                          <div className="mission-level">
                            LV {mission.nftLevel}
                          </div>
                          <div className="mission-reward-container">
                            <img src="" alt="" className="sigdao-icon" />
                            <p>{mission.sigdao}</p>
                          </div>
                          <div className="mission-arrow-icon-container">
                            <img src="" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <img
                      className="card_bg"
                      src="img/missionChallenge/card-bg-1@1x.png"
                      alt="Card_bg"
                    />
                    <div className="x1-hello-bae inter-semi-bold-white-18px">
                      1. Hello Bae !
                    </div>
                    <Link to="/challengeCountdown/1">
                      <div className="ic_next">
                        <img
                          className="ic_chevron_right_24px"
                          src="img/missionChallenge/ic-chevron-right-24px-1@1x.png"
                          alt="ic_chevron_right_24px"
                        />
                      </div>
                    </Link>
                    <img
                      className="nft_-avatar"
                      src="img/missionChallenge/1HelloBae-BetterMiWithUniform.gif"
                      alt="NFT_Avatar"
                    />
                    <div className="durations">
                      <div className="x3-mins inter-semi-bold-cadet-blue-14px">
                        3 mins
                      </div>
                      <img
                        className="ic_time"
                        src="img/missionChallenge/ic-time@1x.png"
                        alt="ic_time"
                      />
                    </div>
                    <div className="body-parts">
                      <img
                        className="ic_-body"
                        src="img/missionChallenge/ic-body@1x.png"
                        alt="ic_Body"
                      />
                      <div className="arms inter-semi-bold-cadet-blue-14px">
                        Arms
                      </div>
                    </div>
                    <div className="sigdao-score">
                      <div className="x10 inter-semi-bold-keppel-14px">+5.25</div>
                      <div className="signdao_tokengradient">
                        <div className="x441"></div>
                        <div className="x442"></div>
                        <img
                          className="x880"
                          src="img/missionChallenge/file---880-1x-png-10@1x.png"
                          alt="880"
                        />
                      </div>
                    </div>
                    <div className="score-bar_2">
                      <div className="x895"></div>
                      <div className="starting inter-semi-bold-white-15px">
                        STARTING
                      </div>
                    </div>
                    <div className="lv-1 inter-semi-bold-keppel-15px">LV 1</div>
                    <img
                      className="seperate-line"
                      src="img/missionChallenge/seperate-line-1@1x.png"
                      alt="seperate line"
                    /> */}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
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

export default MissionChallenge;


// const cardContent = missionList.map((mission) => (
//   <div className="challenge-cards-Ic1qil">
//     <img className="card_bg" src="img/missionChallenge/card-bg-1@1x.png" alt="Card_bg" />
//     <div className="x1-hello-bae inter-semi-bold-white-18px">1. Hello Bae !</div>
//     <Link to="/challengeCountdown">
//       <div className="ic_next">
//         <img
//           className="ic_chevron_right_24px"
//           src="img/missionChallenge/ic-chevron-right-24px-1@1x.png"
//           alt="ic_chevron_right_24px"
//           />
//       </div>
//     </Link>
//     <img className="nft_-avatar" src="img/missionChallenge/nft-avatar@1x.png" alt="NFT_Avatar" />
//     <div className="durations">
//       <div className="x3-mins inter-semi-bold-cadet-blue-14px">3 mins</div>
//       <img className="ic_time" src="img/missionChallenge/ic-time@1x.png" alt="ic_time" />
//     </div>
//     <div className="body-parts">
//       <img className="ic_-body" src="img/missionChallenge/ic-body@1x.png" alt="ic_Body" />
//       <div className="arms inter-semi-bold-cadet-blue-14px">Arms</div>
//     </div>
//     <div className="sigdao-score">
//       <div className="x10 inter-semi-bold-keppel-14px">+5.25</div>
//       <div className="signdao_tokengradient">
//         <div className="x441"></div>
//         <div className="x442"></div>
//         <img className="x880" src="img/missionChallenge/file---880-1x-png-10@1x.png" alt="880" />
//       </div>
//     </div>
//     <div className="score-bar_2">
//       <div className="x895"></div>
//       <div className="starting inter-semi-bold-white-15px">STARTING</div>
//     </div>
//     <div className="lv-1 inter-semi-bold-keppel-15px">LV 1</div>
//     <img className="seperate-line" src="img/missionChallenge/seperate-line-1@1x.png" alt="seperate line" />
//   </div>

// ))


// const content: JSX.Element = (
//   <div className="bettermidapp-challenges-1 screen">
//     <ShortTitleBar title={title} setting={false} />
//     <img className="bg-7K5ObS bg" src="img/missionChallenge/bg-10@1x.png" alt="BG" />
//     <img className="photo-7K5ObS" src="img/missionChallenge/photo@1x.png" alt="Photo" />
//     <div className="challenges-card-7K5ObS">
//       <img className="layer-nLfc9z" src="img/missionChallenge/layer-1@1x.png" alt="Layer" />
//       <div className="scroll-group-nLfc9z">
//         <div className="challenge-cards-QuyfDF">
//           {/* {cardContent} */}
//         </div>
//       </div>
//     </div>
//     <div className="ic_help_24px-7K5ObS ic_help_24px">
//       <img className="ic_help_24px-pqAZxK ic_help_24px" src="img/missionChallenge/ic-help-24px-1@1x.png" alt="ic_help_24px" />
//     </div>
//   </div>
// )


