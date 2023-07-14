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

interface IMissionChallengeProps {
}

interface MissionFormList {
  title: string,
  duration: string,
  bodyPart: string,
  sigdao: string,
  nftLevel: string,
  missionPath: string,
}

// todo: replace this with real data
const missionFormList = () => {
  const missionList = []
  for (let i = 0; i < 9; i++) {
    missionList.push({
      title: `1. Hello Bae !`,
      duration: `3 mins`,
      bodyPart: `Arms`,
      sigdao: `+5.25`,
      nftLevel: `1`,
      missionPath: '',
    })
  }
  return missionList
}

const missionList: MissionFormList[] = missionFormList()


const MissionChallenge: React.FunctionComponent<IMissionChallengeProps> = (props) => {
  const title = 'Challenges X 9 Hacks'
  const userAccountId = useSelector(accountId);
  const userWalletNodeHost = useSelector(walletNodeHost);
  const content: JSX.Element = (
    <div className="screen">
      <div className="bettermidapp-challenges-1">
        <ShortTitleBar title={title} />
        <img className="photo-7K5ObS" src="img/missionChallenge/photo@1x.png" alt="Photo" />
        <div className="challenges-card-7K5ObS">
          <img className="layer-nLfc9z" src="img/missionChallenge/layer-1@1x.png" alt="Layer" />
          <div className="scroll-group-nLfc9z">
            <div className="challenge-cards-QuyfDF">
            <Button onClick={() =>TransferToken(userWalletNodeHost,userAccountId)} className="challenge-cards-Ic1qil">
                <img className="card_bg" src="img/missionChallenge/card-bg-1@1x.png" alt="Card_bg" />
                <div className="x1-hello-bae inter-semi-bold-white-18px">1. Hello Bae !</div>
                <Link to="/challengeCountdown">
                  <div className="ic_next">
                    <img
                      className="ic_chevron_right_24px"
                      src="img/missionChallenge/ic-chevron-right-24px-1@1x.png"
                      alt="ic_chevron_right_24px"
                      />
                  </div>
                </Link>
                <img className="nft_-avatar" src="img/missionChallenge/nft-avatar@1x.png" alt="NFT_Avatar" />
                <div className="durations">
                  <div className="x3-mins inter-semi-bold-cadet-blue-14px">3 mins</div>
                  <img className="ic_time" src="img/missionChallenge/ic-time@1x.png" alt="ic_time" />
                </div>
                <div className="body-parts">
                  <img className="ic_-body" src="img/missionChallenge/ic-body@1x.png" alt="ic_Body" />
                  <div className="arms inter-semi-bold-cadet-blue-14px">Arms</div>
                </div>
                <div className="sigdao-score">
                  <div className="x10 inter-semi-bold-keppel-14px">+5.25</div>
                  <div className="signdao_tokengradient">
                    <div className="x441"></div>
                    <div className="x442"></div>
                    <img className="x880" src="img/missionChallenge/file---880-1x-png-10@1x.png" alt="880" />
                  </div>
                </div>
                <div className="score-bar_2">
                  <div className="x895"></div>
                  <div className="starting inter-semi-bold-white-15px">STARTING</div>
                </div>
                <div className="lv-1 inter-semi-bold-keppel-15px">LV 1</div>
                <img className="seperate-line" src="img/missionChallenge/seperate-line-1@1x.png" alt="seperate line" />
              </Button>
              <div className="challenge-cards-VYwpDS">
                <img className="card_bg" src="img/missionChallenge/card-bg-1@1x.png" alt="Card_bg" />
                <div className="x1-hello-bae inter-semi-bold-white-18px">1. Hello Bae !</div>
                <Link to="/challengeCountdown">
                  <div className="ic_next">
                    <img
                      className="ic_chevron_right_24px"
                      src="img/missionChallenge/ic-chevron-right-24px-1@1x.png"
                      alt="ic_chevron_right_24px"
                      />
                  </div>
                </Link>
                <img className="nft_-avatar" src="img/missionChallenge/nft-avatar@1x.png" alt="NFT_Avatar" />
                <div className="durations">
                  <div className="x3-mins inter-semi-bold-cadet-blue-14px">3 mins</div>
                  <img className="ic_time" src="img/missionChallenge/ic-time@1x.png" alt="ic_time" />
                </div>
                <div className="body-parts">
                  <img className="ic_-body" src="img/missionChallenge/ic-body@1x.png" alt="ic_Body" />
                  <div className="arms inter-semi-bold-cadet-blue-14px">Arms</div>
                </div>
                <div className="sigdao-score">
                  <div className="x10 inter-semi-bold-keppel-14px">+5.25</div>
                  <div className="signdao_tokengradient">
                    <div className="x441"></div>
                    <div className="x442"></div>
                    <img className="x880" src="img/missionChallenge/file---880-1x-png-10@1x.png" alt="880" />
                  </div>
                </div>
                <div className="score-bar_2">
                  <div className="x895"></div>
                  <div className="starting inter-semi-bold-white-15px">STARTING</div>
                </div>
                <div className="lv-1 inter-semi-bold-keppel-15px">LV 1</div>
                <img className="seperate-line" src="img/missionChallenge/seperate-line-1@1x.png" alt="seperate line" />
              </div>
              <div className="challenge-cards-Iosh5Y">
                <img className="card_bg" src="img/missionChallenge/card-bg-1@1x.png" alt="Card_bg" />
                <div className="x1-hello-bae inter-semi-bold-white-18px">1. Hello Bae !</div>
                <Link to="/challengeCountdown">
                  <div className="ic_next">
                    <img
                      className="ic_chevron_right_24px"
                      src="img/missionChallenge/ic-chevron-right-24px-1@1x.png"
                      alt="ic_chevron_right_24px"
                      />
                  </div>
                </Link>
                <img className="nft_-avatar" src="img/missionChallenge/nft-avatar@1x.png" alt="NFT_Avatar" />
                <div className="durations">
                  <div className="x3-mins inter-semi-bold-cadet-blue-14px">3 mins</div>
                  <img className="ic_time" src="img/missionChallenge/ic-time@1x.png" alt="ic_time" />
                </div>
                <div className="body-parts">
                  <img className="ic_-body" src="img/missionChallenge/ic-body@1x.png" alt="ic_Body" />
                  <div className="arms inter-semi-bold-cadet-blue-14px">Arms</div>
                </div>
                <div className="sigdao-score">
                  <div className="x10 inter-semi-bold-keppel-14px">+5.25</div>
                  <div className="signdao_tokengradient">
                    <div className="x441"></div>
                    <div className="x442"></div>
                    <img className="x880" src="img/missionChallenge/file---880-1x-png-10@1x.png" alt="880" />
                  </div>
                </div>
                <div className="score-bar_2">
                  <div className="x895"></div>
                  <div className="starting inter-semi-bold-white-15px">STARTING</div>
                </div>
                <div className="lv-1 inter-semi-bold-keppel-15px">LV 1</div>
                <img className="seperate-line" src="img/missionChallenge/seperate-line-1@1x.png" alt="seperate line" />
              </div>
              <div className="challenge-cards-v4gmYN">
                <img className="card_bg" src="img/missionChallenge/card-bg-1@1x.png" alt="Card_bg" />
                <div className="x1-hello-bae inter-semi-bold-white-18px">1. Hello Bae !</div>
                <Link to="/challengeCountdown">
                  <div className="ic_next">
                    <img
                      className="ic_chevron_right_24px"
                      src="img/missionChallenge/ic-chevron-right-24px-1@1x.png"
                      alt="ic_chevron_right_24px"
                      />
                  </div>
                </Link>
                <img className="nft_-avatar" src="img/missionChallenge/nft-avatar@1x.png" alt="NFT_Avatar" />
                <div className="durations">
                  <div className="x3-mins inter-semi-bold-cadet-blue-14px">3 mins</div>
                  <img className="ic_time" src="img/missionChallenge/ic-time@1x.png" alt="ic_time" />
                </div>
                <div className="body-parts">
                  <img className="ic_-body" src="img/missionChallenge/ic-body@1x.png" alt="ic_Body" />
                  <div className="arms inter-semi-bold-cadet-blue-14px">Arms</div>
                </div>
                <div className="sigdao-score">
                  <div className="x10 inter-semi-bold-keppel-14px">+5.25</div>
                  <div className="signdao_tokengradient">
                    <div className="x441"></div>
                    <div className="x442"></div>
                    <img className="x880" src="img/missionChallenge/file---880-1x-png-10@1x.png" alt="880" />
                  </div>
                </div>
                <div className="score-bar_2">
                  <div className="x895"></div>
                  <div className="starting inter-semi-bold-white-15px">STARTING</div>
                </div>
                <div className="lv-1 inter-semi-bold-keppel-15px">LV 1</div>
                <img className="seperate-line" src="img/missionChallenge/seperate-line-1@1x.png" alt="seperate line" />
              </div>
              <div className="challenge-cards-5BboFx">
                <img className="card_bg" src="img/missionChallenge/card-bg-1@1x.png" alt="Card_bg" />
                <div className="x1-hello-bae inter-semi-bold-white-18px">1. Hello Bae !</div>
                <Link to="/challengeCountdown">
                  <div className="ic_next">
                    <img
                      className="ic_chevron_right_24px"
                      src="img/missionChallenge/ic-chevron-right-24px-1@1x.png"
                      alt="ic_chevron_right_24px"
                      />
                  </div>
                </Link>
                <img className="nft_-avatar" src="img/missionChallenge/nft-avatar@1x.png" alt="NFT_Avatar" />
                <div className="durations">
                  <div className="x3-mins inter-semi-bold-cadet-blue-14px">3 mins</div>
                  <img className="ic_time" src="img/missionChallenge/ic-time@1x.png" alt="ic_time" />
                </div>
                <div className="body-parts">
                  <img className="ic_-body" src="img/missionChallenge/ic-body@1x.png" alt="ic_Body" />
                  <div className="arms inter-semi-bold-cadet-blue-14px">Arms</div>
                </div>
                <div className="sigdao-score">
                  <div className="x10 inter-semi-bold-keppel-14px">+5.25</div>
                  <div className="signdao_tokengradient">
                    <div className="x441"></div>
                    <div className="x442"></div>
                    <img className="x880" src="img/missionChallenge/file---880-1x-png-10@1x.png" alt="880" />
                  </div>
                </div>
                <div className="score-bar_2">
                  <div className="x895"></div>
                  <div className="starting inter-semi-bold-white-15px">STARTING</div>
                </div>
                <div className="lv-1 inter-semi-bold-keppel-15px">LV 1</div>
                <img className="seperate-line" src="img/missionChallenge/seperate-line-1@1x.png" alt="seperate line" />
              </div>
              <div className="challenge-cards-xcQXac">
                <img className="card_bg" src="img/missionChallenge/card-bg-1@1x.png" alt="Card_bg" />
                <div className="x1-hello-bae inter-semi-bold-white-18px">1. Hello Bae !</div>
                <Link to="/challengeCountdown">
                  <div className="ic_next">
                    <img
                      className="ic_chevron_right_24px"
                      src="img/missionChallenge/ic-chevron-right-24px-1@1x.png"
                      alt="ic_chevron_right_24px"
                      />
                  </div>
                </Link>
                <img className="nft_-avatar" src="img/missionChallenge/nft-avatar@1x.png" alt="NFT_Avatar" />
                <div className="durations">
                  <div className="x3-mins inter-semi-bold-cadet-blue-14px">3 mins</div>
                  <img className="ic_time" src="img/missionChallenge/ic-time@1x.png" alt="ic_time" />
                </div>
                <div className="body-parts">
                  <img className="ic_-body" src="img/missionChallenge/ic-body@1x.png" alt="ic_Body" />
                  <div className="arms inter-semi-bold-cadet-blue-14px">Arms</div>
                </div>
                <div className="sigdao-score">
                  <div className="x10 inter-semi-bold-keppel-14px">+5.25</div>
                  <div className="signdao_tokengradient">
                    <div className="x441"></div>
                    <div className="x442"></div>
                    <img className="x880" src="img/missionChallenge/file---880-1x-png-10@1x.png" alt="880" />
                  </div>
                </div>
                <div className="score-bar_2">
                  <div className="x895"></div>
                  <div className="starting inter-semi-bold-white-15px">STARTING</div>
                </div>
                <div className="lv-1 inter-semi-bold-keppel-15px">LV 1</div>
                <img className="seperate-line" src="img/missionChallenge/seperate-line-1@1x.png" alt="seperate line" />
              </div>
              <div className="challenge-cards-VQtE8g">
                <img className="card_bg" src="img/missionChallenge/card-bg-1@1x.png" alt="Card_bg" />
                <div className="x1-hello-bae inter-semi-bold-white-18px">1. Hello Bae !</div>
                <Link to="/challengeCountdown">
                  <div className="ic_next">
                    <img
                      className="ic_chevron_right_24px"
                      src="img/missionChallenge/ic-chevron-right-24px-1@1x.png"
                      alt="ic_chevron_right_24px"
                      />
                  </div>
                </Link>
                <img className="nft_-avatar" src="img/missionChallenge/nft-avatar@1x.png" alt="NFT_Avatar" />
                <div className="durations">
                  <div className="x3-mins inter-semi-bold-cadet-blue-14px">3 mins</div>
                  <img className="ic_time" src="img/missionChallenge/ic-time@1x.png" alt="ic_time" />
                </div>
                <div className="body-parts">
                  <img className="ic_-body" src="img/missionChallenge/ic-body@1x.png" alt="ic_Body" />
                  <div className="arms inter-semi-bold-cadet-blue-14px">Arms</div>
                </div>
                <div className="sigdao-score">
                  <div className="x10 inter-semi-bold-keppel-14px">+5.25</div>
                  <div className="signdao_tokengradient">
                    <div className="x441"></div>
                    <div className="x442"></div>
                    <img className="x880" src="img/missionChallenge/file---880-1x-png-10@1x.png" alt="880" />
                  </div>
                </div>
                <div className="score-bar_2">
                  <div className="x895"></div>
                  <div className="starting inter-semi-bold-white-15px">STARTING</div>
                </div>
                <div className="lv-1 inter-semi-bold-keppel-15px">LV 1</div>
                <img className="seperate-line" src="img/missionChallenge/seperate-line-1@1x.png" alt="seperate line" />
              </div>
              <div className="challenge-cards-Jaqnoy">
                <img className="card_bg" src="img/missionChallenge/card-bg-1@1x.png" alt="Card_bg" />
                <div className="x1-hello-bae inter-semi-bold-white-18px">1. Hello Bae !</div>
                <Link to="/challengeCountdown">
                  <div className="ic_next">
                    <img
                      className="ic_chevron_right_24px"
                      src="img/missionChallenge/ic-chevron-right-24px-1@1x.png"
                      alt="ic_chevron_right_24px"
                      />
                  </div>
                </Link>
                <img className="nft_-avatar" src="img/missionChallenge/nft-avatar@1x.png" alt="NFT_Avatar" />
                <div className="durations">
                  <div className="x3-mins inter-semi-bold-cadet-blue-14px">3 mins</div>
                  <img className="ic_time" src="img/missionChallenge/ic-time@1x.png" alt="ic_time" />
                </div>
                <div className="body-parts">
                  <img className="ic_-body" src="img/missionChallenge/ic-body@1x.png" alt="ic_Body" />
                  <div className="arms inter-semi-bold-cadet-blue-14px">Arms</div>
                </div>
                <div className="sigdao-score">
                  <div className="x10 inter-semi-bold-keppel-14px">+5.25</div>
                  <div className="signdao_tokengradient">
                    <div className="x441"></div>
                    <div className="x442"></div>
                    <img className="x880" src="img/missionChallenge/file---880-1x-png-10@1x.png" alt="880" />
                  </div>
                </div>
                <div className="score-bar_2">
                  <div className="x895"></div>
                  <div className="starting inter-semi-bold-white-15px">STARTING</div>
                </div>
                <div className="lv-1 inter-semi-bold-keppel-15px">LV 1</div>
                <img className="seperate-line" src="img/missionChallenge/seperate-line-1@1x.png" alt="seperate line" />
              </div>
              <div className="challenge-cards-qjZztr">
                <img className="card_bg" src="img/missionChallenge/card-bg-1@1x.png" alt="Card_bg" />
                <div className="x1-hello-bae inter-semi-bold-white-18px">1. Hello Bae !</div>
                <Link to="/challengeCountdown">
                  <div className="ic_next">
                    <img
                      className="ic_chevron_right_24px"
                      src="img/missionChallenge/ic-chevron-right-24px-1@1x.png"
                      alt="ic_chevron_right_24px"
                      />
                  </div>
                </Link>
                <img className="nft_-avatar" src="img/missionChallenge/nft-avatar@1x.png" alt="NFT_Avatar" />
                <div className="durations">
                  <div className="x3-mins inter-semi-bold-cadet-blue-14px">3 mins</div>
                  <img className="ic_time" src="img/missionChallenge/ic-time@1x.png" alt="ic_time" />
                </div>
                <div className="body-parts">
                  <img className="ic_-body" src="img/missionChallenge/ic-body@1x.png" alt="ic_Body" />
                  <div className="arms inter-semi-bold-cadet-blue-14px">Arms</div>
                </div>
                <div className="sigdao-score">
                  <div className="x10 inter-semi-bold-keppel-14px">+5.25</div>
                  <div className="signdao_tokengradient">
                    <div className="x441"></div>
                    <div className="x442"></div>
                    <img className="x880" src="img/missionChallenge/file---880-1x-png-10@1x.png" alt="880" />
                  </div>
                </div>
                <div className="score-bar_2">
                  <div className="x895"></div>
                  <div className="starting inter-semi-bold-white-15px">STARTING</div>
                </div>
                <div className="lv-1 inter-semi-bold-keppel-15px">LV 1</div>
                <img className="seperate-line" src="img/missionChallenge/seperate-line-1@1x.png" alt="seperate line" />
              </div>
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
