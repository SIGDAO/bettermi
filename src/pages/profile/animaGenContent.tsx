import * as React from 'react';
import MenuBar from '../../components/menuBar';
import { Link } from 'react-router-dom';
import { ShortTitleBar } from '../../components/titleBar';

interface IAnimaGenContentProps {
}

const AnimaGenContent: React.FunctionComponent<IAnimaGenContentProps> = (props) => {
  return (
    <div className="bettermidapp-profile-1">
      <ShortTitleBar title='Profile' />
      <div className="x16212-mYAx6W">
          <div className="x888-ySqSNx"></div>
          <div className="my-friends-ySqSNx inter-semi-bold-white-18px">My Friends</div>
          <div className="view-all-120-ySqSNx inter-medium-royal-blue-14px">View all (120)</div>
      </div>
      <div className="x4-mYAx6W">
          <div className="friends-YkVKQj friends">
            <div className="friends-StsdnU friends">
                <div className="friend-WmQMWx friend">
                  <img className="nft_-avatar-eAUt5U nft_-avatar" src="img/profile/nft-avatar-8@1x.png" alt="NFT_Avatar" />
                  <div className="maple inter-normal-white-14px">Maple</div>
                </div>
                <div className="friend-nxH9CQ friend">
                  <img className="nft_-avatar-hxX6ds nft_-avatar" src="img/profile/nft-avatar-9@1x.png" alt="NFT_Avatar" />
                  <div className="samantha inter-normal-white-14px">Samantha</div>
                </div>
                <div className="friend-1KEEE5 friend">
                  <img className="nft_-avatar-HKS8zh nft_-avatar" src="img/profile/nft-avatar-10@1x.png" alt="NFT_Avatar" />
                  <div className="ronald inter-normal-white-14px">Ronald</div>
                </div>
                <div className="friend-hnvfxm friend">
                  <img className="nft_-avatar-H8e0rI nft_-avatar" src="img/profile/nft-avatar-11@1x.png" alt="NFT_Avatar" />
                  <div className="pheobus inter-normal-white-14px">Pheobus</div>
                </div>
            </div>
            <div className="friends-7avldw friends">
                <div className="friend-Xg1IZd friend">
                  <img className="nft_-avatar-BN9JUR nft_-avatar" src="img/profile/nft-avatar-8@1x.png" alt="NFT_Avatar" />
                  <div className="maple inter-normal-white-14px">Maple</div>
                </div>
                <div className="friend-DkWpJj friend">
                  <img className="nft_-avatar-TUw4zm nft_-avatar" src="img/profile/nft-avatar-9@1x.png" alt="NFT_Avatar" />
                  <div className="samantha inter-normal-white-14px">Samantha</div>
                </div>
                <div className="friend-SAkoWC friend">
                  <img className="nft_-avatar-ADQV6Y nft_-avatar" src="img/profile/nft-avatar-10@1x.png" alt="NFT_Avatar" />
                  <div className="ronald inter-normal-white-14px">Ronald</div>
                </div>
                <div className="friend-aQA2Yw friend">
                  <img className="nft_-avatar-QbW8xx nft_-avatar" src="img/profile/nft-avatar-11@1x.png" alt="NFT_Avatar" />
                  <div className="pheobus inter-normal-white-14px">Pheobus</div>
                </div>
            </div>
          </div>
      </div>
      <div className="x3-mYAx6W">
          <div className="add-nft-WdopRj"></div>
          <div className="x24-WdopRj">
            <div className="x0-hg7RBj"><img className="nft" src="img/full_mimi.png" alt="NFT" /></div>
            <div className="x1-hg7RBj"><img className="nft" src="img/full_mimi.png" alt="NFT" /></div>
            <div className="x2-hg7RBj"><img className="nft" src="img/full_mimi.png" alt="NFT" /></div>
          </div>
          <img className="add-WdopRj" src="img/profile/add-1@1x.png" alt="Add" />
          <img className="ic_add-WdopRj" src="img/profile/ic-add-1@1x.png" alt="ic_add" />
      </div>
      <div className="profile-card-mYAx6W">
          <img className="layer-YwZqds" src="img/profile/layer-4@1x.png" alt="Layer" />
          <Link to={'/myNftList'}>
            <div className="button_nft-collections-YwZqds">
              <div className="button1-pUSHJN"></div>
              <div className="continue-pUSHJN inter-semi-bold-white-15px">My NFTs Collections</div>
            </div>
          </Link>
          <div className="ic_edit-YwZqds ic_edit">
            <img className="ic_edit-yzbpuj ic_edit" src="img/profile/ic-edit@1x.png" alt="ic_edit" />
          </div>
          <div className="ic_add_friends-YwZqds ic_add_friends">
            <img className="ic_add_friends-SYgxJR ic_add_friends" src="img/profile/ic-add-friends@1x.png" alt="ic_add_friends" />
          </div>
          <div className="ic_text-YwZqds ic_text">
            <img className="ic_text-rE9IRI ic_text" src="img/profile/ic-text@1x.png" alt="ic_text" />
          </div>
          <div className="profile-content-YwZqds">
            <div className="zoe_li-JYIfVl">zoe_li</div>
            <p className="im-a-positive-person-JYIfVl inter-normal-white-12px">
                I'm a positive person. I love to travel and eat.
            </p>
            <p className="x29-personal-trainer-JYIfVl inter-semi-bold-keppel-14px">
                ♉️&nbsp;&nbsp;|&nbsp;&nbsp;29&nbsp;&nbsp;|&nbsp;&nbsp;PERSONAL TRAINER
            </p>
          </div>
          {/* <a href="bettermidapp-mimi-nfts-1.html"
            > */}
            <div className="view-all-YwZqds inter-medium-royal-blue-14px">View all</div>
          {/* </a> */}
          <img className="nft_-avatar-YwZqds nft_-avatar" src="img/profile/nft-avatar-12@1x.png" alt="NFT_Avatar" />
      </div>
      <MenuBar/>
    </div>
  )
};

export default AnimaGenContent;
