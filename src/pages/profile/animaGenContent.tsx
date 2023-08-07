import * as React from 'react';
import MenuBar from '../../components/menuBar';
import { Link } from 'react-router-dom';
import { ShortTitleBar } from '../../components/titleBar';
import { useState } from 'react';
import { useAppSelector } from '../../redux/useLedger';
import { selectWalletNodeHost } from '../../redux/useLedger';
import { LedgerClientFactory } from '@signumjs/core';
import { useEffect } from 'react';
import { accountId } from '../../redux/account';
import { useSelector } from 'react-redux';
import { selectCurrentUsername } from '../../redux/profile';

interface IAnimaGenContentProps {
}

const handleCopyDiscordUsername = () => {
  navigator.clipboard.writeText("zoeeeee#1234");
  // todo: display a message to tell the user that the username has been copied to clipboard
  // alert("Copied to clipboard!");
}


const AnimaGenContent: React.FunctionComponent<IAnimaGenContentProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imgAddress, setImgAddress] = useState<string>("");
  const nodeHost = useAppSelector(selectWalletNodeHost);
  const ledger2 = LedgerClientFactory.createClient({nodeHost});
  const userId = useAppSelector(accountId);
  const username = useSelector(selectCurrentUsername)

  const handleSave = () => {
    setIsOpen((prev) => !prev)
  }

  const handleCancel = () => {
    setIsOpen((prev) => !prev)
  }


  useEffect(() => {
    // Function to fetch data from the APIc
    ledger2.account.getAccount({accountId:userId}).then((account)=>{
      console.log(account);
      const description = JSON.parse(account.description);
      console.log(description);
      console.log(Object.keys(description.av));
      console.log(typeof(Object.keys(description.av)[0]));
      setImgAddress(Object.keys(description.av)[0]);
      setLoading(false);  
    }).catch((error)=>{ console.log("need to equip nft");});
  }, []);

  return (
    <div className="bettermidapp-profile-3">
      <ShortTitleBar title="Profile" />
      <div className="overlap-group5">
        <div className="overlap-group1-profile">
          <img className="layer" src="img/profile/layer-1@1x.png" alt="Layer" />
          <Link to="/myNftList">
            <div className="button_nft-collections">
              <div className="continue-profile inter-semi-bold-white-15px">My NFTs Collections</div>
            </div>
          </Link>
          <div className="ic_edit" onClick={() => setIsOpen((prev) => !prev)}>
            <img className='ic_edit-content' src="img/profile/ic-edit-1@1x.png" alt="" />
          </div>
          <div className="profile-content">
            <div className="zoe_li">zoe_li</div>
            <div className="perso-container">
              <p className="im-a-positive-perso">I'm a positive person. I love to travel and eat.</p>
              <p className="x29-personal-trainer inter-semi-bold-keppel-15px">
                ♉️&nbsp;&nbsp;|&nbsp;&nbsp;29&nbsp;&nbsp;|&nbsp;&nbsp;PERSONAL TRAINER
              </p>
            </div>
          </div>
          <img className="nft_-avatar" src="img/profile/nft-avatar-1@1x.png" alt="NFT_Avatar" />
          <div className="card-number inter-normal-white-15px">zoeeeee#1234</div>
          <div className="copy-icon" onClick={() => handleCopyDiscordUsername()}>
            <img src="img/profile/file---11690@1x.png" alt="" />
          </div>
          <div className="x16227">
            <div className="discord-icon">
              <img className="discord-icon-content" src='img/profile/file---11691@1x.png' />
            </div>
            <div className="discord inter-bold-royal-blue-15px">DISCORD</div>
          </div>
        </div>
        <div className="x3">
          <div className="overlap-group-profile">
            <img className="add" src="img/profile/add-2@1x.png" alt="Add" />
            <img className="ic_add" src="img/profile/ic-add-2@1x.png" alt="ic_add" />
          </div>
          <div className="x24">
            <img className="x24-item" src="img/profile/nft-1@1x.png" alt="NFT" />
            <img className="x24-item" src="img/profile/nft-1@1x.png" alt="NFT" />
            <img className="x24-item" src="img/profile/nft-1@1x.png" alt="NFT" />
          </div>
        </div>
      </div>
      {isOpen && 
        <div className="edit-profile-layer">
          <div className="icon-arrow-left-1-popup icon-arrow-left-3-popup" onClick={() => handleCancel()}>
            <img className="icon-arrow-left-popup" src="img/profile/icon-arrow-left-1@1x.png" alt="icon-arrow-left" />
          </div>
          <div className="edit-profile">
            <div className="overlap-group-1-popup inter-bold-royal-blue-15px">
              <img className="seperate-line" src="img/profile/seperate-line-1@1x.png" alt="Seperate line" />
              <img className="bg" src="img/profile/bg-7@1x.png" alt="BG" />
              <img className="seperat-line" src="img/profile/seperat-line-3@1x.png" alt="Seperat line" />
              <div className="pick-a-username">PICK A USERNAME</div>
              <div className="about-yourself">ABOUT YOURSELF</div>
              <div className="description-to-friends">DESCRIPTION TO FRIENDS</div>
              <div className="rewards">
                <div className="ic_edit-1"></div>
                <div className="edit-profile-1 inter-semi-bold-white-18px">Edit Profile</div>
              </div>
              <div className="search_bar">
                <div className="card-number-1 inter-normal-white-15px">zoe_li</div>
                <div className="random-dice">
                  <div className="card-number-2">Random</div>
                  <img className="ic_casino_24px" src="img/profile/ic-casino-24px@1x.png" alt="ic_casino_24px" />
                </div>
              </div>
              <div className="search_bar-1 search_bar-4">
                <p className="card-number-3 inter-semi-bold-keppel-15px">
                  ♉️&nbsp;&nbsp;|&nbsp;&nbsp;29&nbsp;&nbsp;|&nbsp;&nbsp;PERSONAL TRAINER
                </p>
              </div>
              <div className="search_bar-2 search_bar-4">
                <p className="card-number-4 inter-normal-white-15px">I'm a positive person. I love to travel and eat.</p>
              </div>
              <div className="search_bar-3 search_bar-4">
                <div className="card-number-5 inter-normal-white-15px">zoeeeee#1234</div>
              </div>
              <div className="button_save" onClick={() => handleSave()}>
                <div className="continue-1 inter-semi-bold-white-15px">Save</div>
              </div>
              <div className="x16227-1">
                <div className="discord-icon">
                  <img className="discord-icon-content" src='img/profile/file---11691@1x.png' />
                </div>
                <div className="discord-username inter-bold-royal-blue-15px">DISCORD USERNAME</div>
              </div>
            </div>
          </div>
        </div>
      }
      <MenuBar />
      {/* <div className="title-bar">
        <div className="overlap-group2">
          <div className="bars-status-bar-i-phone-light">
            <div className="status-bar">
              <div className="time-style"><div className="time sfprotext-semi-bold-white-15px">9:41</div></div>
              <img className="cellular-connection" src="img/profile/cellular-connection-1@1x.png" alt="Cellular Connection" />
              <img className="wifi" src="img/profile/wifi-1@1x.png" alt="Wifi" />
              <div className="battery">
                <div className="overlap-group-1">
                  <div className="capacity"></div>
                </div>
                <img className="cap" src="img/profile/cap-1@1x.png" alt="Cap" />
              </div>
            </div>
          </div>
          <div className="overlap-group3">
            <div className="profile inter-semi-bold-white-18px">Profile</div>
            <div className="overlap-group1-profile-1">
              <img className="seperat-line" src="img/profile/seperat-line-10@1x.png" alt="Seperat line" />
              <div className="icon-arrow-left">
                <img className="icon-arrow-left-1" src="img/profile/icon-arrow-left-1@1x.png" alt="icon-arrow-left" />
              </div>
            </div>
            <div className="ic_settings_24px"></div>
            <div className="ic_sentiment_very_satisfied_24px"></div>
          </div>
        </div>
      </div> */}
      {/* <div className="menu-bar">
        <div className="overlap-group4">
          <img className="seperat-line-1" src="img/profile/seperat-line-10@1x.png" alt="Seperat line" />
          <div className="flex-row">
            <div className="ic_-missions ic_"></div>
            <div className="ic_-selfie ic_"></div>
            <div className="ic_home"></div>
            <div className="ic_rewards">
              <div className="ic_rewards-1">
                <img className="x11661" src="img/profile/file---11661@1x.png" alt="11661" />
                <div className="flex-row-1">
                  <img className="x116" src="img/profile/file---11659@1x.png" alt="11659" />
                  <img className="x116" src="img/profile/file---11660@1x.png" alt="11660" />
                </div>
              </div>
            </div>
            <div className="ic_profile"></div>
          </div>
        </div>
      </div> */}
    </div>
  )
};

export default AnimaGenContent;


// return (
//   <div className="bettermidapp-profile-1">
//     <ShortTitleBar title='Profile' />
//     <div className="x16212-mYAx6W">
//         <div className="x888-ySqSNx"></div>
//         <div className="my-friends-ySqSNx inter-semi-bold-white-18px">My Friends</div>
//         <div className="view-all-120-ySqSNx inter-medium-royal-blue-14px">View all (120)</div>
//     </div>
//     <div className="x4-mYAx6W">
//         <div className="friends-YkVKQj friends">
//           <div className="friends-StsdnU friends">
//               <div className="friend-WmQMWx friend">
//                 <img className="nft_-avatar-eAUt5U nft_-avatar" src="img/profile/nft-avatar-8@1x.png" alt="NFT_Avatar" />
//                 <div className="maple inter-normal-white-14px">Maple</div>
//               </div>
//               <div className="friend-nxH9CQ friend">
//                 <img className="nft_-avatar-hxX6ds nft_-avatar" src="img/profile/nft-avatar-9@1x.png" alt="NFT_Avatar" />
//                 <div className="samantha inter-normal-white-14px">Samantha</div>
//               </div>
//               <div className="friend-1KEEE5 friend">
//                 <img className="nft_-avatar-HKS8zh nft_-avatar" src="img/profile/nft-avatar-10@1x.png" alt="NFT_Avatar" />
//                 <div className="ronald inter-normal-white-14px">Ronald</div>
//               </div>
//               <div className="friend-hnvfxm friend">
//                 <img className="nft_-avatar-H8e0rI nft_-avatar" src="img/profile/nft-avatar-11@1x.png" alt="NFT_Avatar" />
//                 <div className="pheobus inter-normal-white-14px">Pheobus</div>
//               </div>
//           </div>
//           <div className="friends-7avldw friends">
//               <div className="friend-Xg1IZd friend">
//                 <img className="nft_-avatar-BN9JUR nft_-avatar" src="img/profile/nft-avatar-8@1x.png" alt="NFT_Avatar" />
//                 <div className="maple inter-normal-white-14px">Maple</div>
//               </div>
//               <div className="friend-DkWpJj friend">
//                 <img className="nft_-avatar-TUw4zm nft_-avatar" src="img/profile/nft-avatar-9@1x.png" alt="NFT_Avatar" />
//                 <div className="samantha inter-normal-white-14px">Samantha</div>
//               </div>
//               <div className="friend-SAkoWC friend">
//                 <img className="nft_-avatar-ADQV6Y nft_-avatar" src="img/profile/nft-avatar-10@1x.png" alt="NFT_Avatar" />
//                 <div className="ronald inter-normal-white-14px">Ronald</div>
//               </div>
//               <div className="friend-aQA2Yw friend">
//                 <img className="nft_-avatar-QbW8xx nft_-avatar" src="img/profile/nft-avatar-11@1x.png" alt="NFT_Avatar" />
//                 <div className="pheobus inter-normal-white-14px">Pheobus</div>
//               </div>
//           </div>
//         </div>
//     </div>
//     <div className="x3-mYAx6W">
//         <div className="add-nft-WdopRj"></div>
//         <div className="x24-WdopRj">
//           <div className="x0-hg7RBj"><img className="nft" src="img/full_mimi.png" alt="NFT" /></div>
//           <div className="x1-hg7RBj"><img className="nft" src="img/full_mimi.png" alt="NFT" /></div>
//           <div className="x2-hg7RBj"><img className="nft" src="img/full_mimi.png" alt="NFT" /></div>
//         </div>
//         <img className="add-WdopRj" src="img/profile/add-1@1x.png" alt="Add" />
//         <img className="ic_add-WdopRj" src="img/profile/ic-add-1@1x.png" alt="ic_add" />
//     </div>
//     <div className="profile-card-mYAx6W">
//         <img className="layer-YwZqds" src="img/profile/layer-4@1x.png" alt="Layer" />
//         <Link to={'/myNftList'}>
//           <div className="button_nft-collections-YwZqds">
//             <div className="button1-pUSHJN"></div>
//             <div className="continue-pUSHJN inter-semi-bold-white-15px">My NFTs Collections</div>
//           </div>
//         </Link>
//         <div className="ic_edit-YwZqds ic_edit">
//           <img className="ic_edit-yzbpuj ic_edit" src="img/profile/ic-edit@1x.png" alt="ic_edit" />
//         </div>
//         <div className="ic_add_friends-YwZqds ic_add_friends">
//           <img className="ic_add_friends-SYgxJR ic_add_friends" src="img/profile/ic-add-friends@1x.png" alt="ic_add_friends" />
//         </div>
//         <div className="ic_text-YwZqds ic_text">
//           <img className="ic_text-rE9IRI ic_text" src="img/profile/ic-text@1x.png" alt="ic_text" />
//         </div>
//         <div className="profile-content-YwZqds">
//           <div className="zoe_li-JYIfVl">{username}</div>
//           <p className="im-a-positive-person-JYIfVl inter-normal-white-12px">
//               I'm a positive person. I love to travel and eat.
//           </p>
//           <p className="x29-personal-trainer-JYIfVl inter-semi-bold-keppel-14px">
//               ♉️&nbsp;&nbsp;|&nbsp;&nbsp;29&nbsp;&nbsp;|&nbsp;&nbsp;PERSONAL TRAINER
//           </p>
//         </div>
//         <Link to={'/myNftList'}>
//           <div className="view-all-YwZqds inter-medium-royal-blue-14px">View all</div>
//         </Link>
//         {loading ?
//         <img className="nft_-avatar-YwZqds nft_-avatar" src="img/profile/nft-avatar-12@1x.png" alt="NFT_Avatar" />
//         :
//         (
//           <img className = "nft_-avatar-YwZqds nft_-avatar" src = {`https://ipfs.io/ipfs/${imgAddress}`}></img>
//         )
// }
//       </div>
//     <MenuBar/>
//   </div>
// )
