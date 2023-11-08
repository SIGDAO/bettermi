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
import { useEffect, useState,useRef } from 'react';
import { missionList } from '../../data/featureMissionList';
import { CheckIsUserFirstDayOfRegistration } from '../../NftSystem/BMISelfieSystem';
import { selectWalletNodeHost } from '../../redux/useLedger';
import { LedgerClientFactory } from '@signumjs/core';

interface IMissionChallengeProps {
}


const MissionChallenge: React.FunctionComponent<IMissionChallengeProps> = (props) => {
  const title = 'Challenges X 9 Hacks'
  const userAccountId = useSelector(accountId);
  const nodeHost = useSelector(selectWalletNodeHost);
  const ledger2 = LedgerClientFactory.createClient({nodeHost});
  const navigate = useNavigate();
  const [isInTimeSlot, setIsInTimeSlot] = useState<boolean[]>([]);
  const [Timedifference, setTimedifference] = useState<string[]>([]);
  const BMIMachineCodeHashId = process.env.REACT_APP_BMI_MACHINE_CODE_HASH!;
  const nftDistributor = process.env.REACT_APP_NFT_DISTRIBUTOR!;
  const nftDistributorPrivateKey = process.env.REACT_APP_NFT_DISTRIBUTOR_PRIVATE_KEY!;
  const nftDistributorPublicKey = process.env.REACT_APP_NFT_DISTRIBUTOR_PUBLIC_KEY!;
  const updated = useRef(false);
  let isNew = false;
  const NewUserCheck = async () => {
      const isUpdated = await CheckIsUserFirstDayOfRegistration(ledger2,userAccountId,BMIMachineCodeHashId);
      console.log("isUpdated",isUpdated);
      if(isUpdated === true){
        return true;
      }
      else{
        return false;
      }
    
  }

  // useEffect(() => {

  //   NewUserCheck();
  // })
  useEffect(() => {
    const handleBeforeUnload = () => {
      updated.current = false; // Reset the value before navigating away
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const checkTimeSlot = async() => {
      if(updated.current === false){
        updated.current = true
      isNew = await NewUserCheck();//Run a check on whether there is a new user. Also, the handleBeforeUnload function ensures the check only run once
      }
      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes();
      const currentTimeInSecond = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();


      setIsInTimeSlot(
        missionList.map((mission) => {
          if(mission.title === "1. Hello Bae !" && isNew === true){
            console.log("special case for Hello Bae",isNew)
            return true;
          }
          const { timeslot } = mission;
          const isInSlot = timeslot.some(
            (slot) => currentTime >= getTimeInMinutes(slot.startingTime) && currentTime <= getTimeInMinutes(slot.endTime)
          );
          console.log("is In slot for",mission.title, "is",isInSlot)
          return isInSlot;
        })
      );

      setTimedifference(
        missionList.map((mission) => {
          const { timeslot } = mission;
          const timedifferentInFormat = timeslot.map((slot) => {
            const time = slot.startingTime.split(':').map(ele => parseInt(ele));
            const formatTime = time[0] * 60 * 60 + time[1] * 60;
            const timeDiff = formatTime - currentTimeInSecond;

            if (timeDiff < 0) {
              return timeDiff + 24 * 60 * 60;
            }

            return timeDiff;
          })
          let filteredtimedifferentInFormat = timedifferentInFormat.filter((date) => {
            console.log(date > 0, 'timedifferentInFormat date')
            return date > 0;
          })
          console.log(filteredtimedifferentInFormat, 'filteredtimedifferentInFormat')

          filteredtimedifferentInFormat.sort((a, b) => a - b);
          console.log(filteredtimedifferentInFormat, 'timedifferentInFormat')
          const hours = Math.floor(filteredtimedifferentInFormat[0] / 3600).toString().padStart(2, '0');
          const minutes = Math.floor((filteredtimedifferentInFormat[0] % 3600) / 60).toString().padStart(2, '0');
          const seconds = (filteredtimedifferentInFormat[0] % 60).toString().padStart(2, '0');

          console.log(hours, minutes, seconds, 'hours, minutes, seconds')
          // const hours = Math.floor(timedifferentInFormat[0] / (1000 * 60 * 60));
          // const minutes = Math.floor((timedifferentInFormat[0] / (1000 * 60)) % 60);
          // const seconds = Math.floor((timedifferentInFormat[0] / 1000) % 60);

          return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          // return timedifferentInFormat;
          // return '';
        })
      )
      console.log(Timedifference, 'Timedifference');
      console.log(isInTimeSlot, 'isInTimeSlot');
    };

    const interval = setInterval(checkTimeSlot, 1000);

    return () => clearInterval(interval);

      // setIsInTimeSlot(
      //   missionList.map((mission) => {
      //     return true;
      //   })
      // );


  }, []);

  const getTimeInMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };


  // const checkTimeSlot = () => {
  //   const currentTime = new Date().toLocaleTimeString([], {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //   });

  //   for (const mission of missionList) {
  //     for (const time of mission.timeslot) {
  //       if (currentTime >= time.startingTime && currentTime <= time.endTime) {
  //         setIsInTimeSlot(true);
  //         return;
  //       }
  //     }
  //   }


  //   setIsInTimeSlot(false);
  // };

  // useEffect(() => {
  //   const interval = setInterval(checkTimeSlot, 1000); // Check every second

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);


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
                    onClick={() => {
                      if (isInTimeSlot[index]) {
                        navigate(`/challengeCountdown/${index+1}`)
                      }
                    }}
                    className="challenge-cards-Ic1qil"
                  >
                    {isInTimeSlot[index] ? 
                      <>
                        <div className="score-bar_2">
                          <div className="starting inter-semi-bold-white-15px">
                            STARTING
                          </div>
                        </div>
                        <div 
                          className="inner-mission-container" 
                          // style={isInTimeSlot[index] ? {opacity: '1'} : {opacity: '0.4'}}
                        >
                          <div className="mission-graph">
                            <img className='mission-gif' src={mission.missionImgPath} alt="" />
                          </div>
                          <div className="mission-detail">
                            <div className="mission-topic inter-semi-bold-white-18px">
                              {mission.title}
                            </div>
                            <div className="mission-time-bodyPart-container">
                              <div className="mission-time-container">
                                <img
                                  className="ic_time"
                                  src="img/missionChallenge/ic-time@1x.png"
                                  alt="ic_time"
                                />
                                <p className='inter-semi-bold-cadet-blue-14px'>{mission.duration}</p>
                              </div>
                              <div className="mission-bodyPart-container">
                                <img
                                    className="ic_-body"
                                    src="img/missionChallenge/ic-body@1x.png"
                                    alt="ic_Body"
                                  />
                                <p className='inter-semi-bold-cadet-blue-14px'>{mission.bodyPart}</p>
                              </div>
                            </div>
                            <div className="mission-level-and-reward">
                              <div className="mission-level inter-semi-bold-keppel-15px">
                                LV {mission.nftLevel}
                              </div>
                              <div className="level-and-sigdao-separate-line"></div>
                              <div className="mission-reward-container">
                              <div className="signdao_tokengradient">
                                <div className="x441"></div>
                                <div className="x442"></div>
                                <img
                                  className="x880"
                                  src="img/missionChallenge/file---880-1x-png-10@1x.png"
                                  alt="880"
                                />
                              </div>
                                <p className='inter-semi-bold-keppel-14px'>{mission.sigdao}</p>
                              </div>
                              <img className='mission-bar-arrow-right' src="img/missionChallenge/ic-chevron-right-24px-1@1x.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </>
                    : 
                    <>
                      <div className="score-bar_2-active inter-semi-bold-keppel-15px">
                        {/* {mission.timeslot[0].startingTime} */}
                        {Timedifference[index]}
                      </div>
                      <div className="inner-mission-container-layout">
                        <div className="showing-time">
                          {}
                        </div>
                        <div 
                          className="inner-mission-container" 
                          // style={isInTimeSlot[index] ? {opacity: '1'} : {opacity: '0.4'}}
                        >
                          <div className="mission-graph">
                            <img className='mission-gif' src={mission.missionImgPath} alt="" />
                          </div>
                          <div className="mission-detail">
                            <div className="mission-topic inter-semi-bold-white-18px">
                              {mission.title}
                            </div>
                            <div className="mission-time-bodyPart-container">
                              <div className="mission-time-container">
                                <img
                                  className="ic_time"
                                  src="img/missionChallenge/ic-time@1x.png"
                                  alt="ic_time"
                                />
                                <p className='inter-semi-bold-cadet-blue-14px'>{mission.duration}</p>
                              </div>
                              <div className="mission-bodyPart-container">
                                <img
                                    className="ic_-body"
                                    src="img/missionChallenge/ic-body@1x.png"
                                    alt="ic_Body"
                                  />
                                <p className='inter-semi-bold-cadet-blue-14px'>{mission.bodyPart}</p>
                              </div>
                            </div>
                            <div className="mission-level-and-reward">
                              <div className="mission-level inter-semi-bold-keppel-15px">
                                LV {mission.nftLevel}
                              </div>
                              <div className="level-and-sigdao-separate-line"></div>
                              <div className="mission-reward-container">
                              <div className="signdao_tokengradient">
                                <div className="x441"></div>
                                <div className="x442"></div>
                                <img
                                  className="x880"
                                  src="img/missionChallenge/file---880-1x-png-10@1x.png"
                                  alt="880"
                                />
                              </div>
                                <p className='inter-semi-bold-keppel-14px'>{mission.sigdao}</p>
                              </div>
                              <img className='mission-bar-arrow-right' src="img/missionChallenge/ic-chevron-right-24px-1@1x.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                    }

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


