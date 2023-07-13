import * as React from 'react';
import './myNftList.css'
import { CenterLayout } from '../../components/layout';
import { Link } from 'react-router-dom';
import { BackButton } from '../../components/button';
import { TransferToken } from '../../components/transferToken';
import { useSelector } from 'react-redux';
import { accountId } from '../../redux/account';
import { useLedger } from '../../redux/useLedger';
import { useContext } from 'react';
import { AppContext } from '../../redux/useContext';
import { Button } from '@mui/material';
import { store } from '../../redux/reducer';
import { walletNodeHost } from '../../redux/wallet';

interface IMyNftListProps {
}

const MyNftList: React.FunctionComponent<IMyNftListProps> = (props) => {
  const userAccountId:string = useSelector(accountId);
  const walletNode:string = useSelector(walletNodeHost);
  console.log(window.localStorage.getItem('nodeHost'));
  console.log(store.getState());
  const ledger = useLedger();
  console.log(ledger);
  const {appName,Wallet,Ledger} = useContext(AppContext);
  Wallet.Extension.connect({appName,networkName:Ledger.Network});
  const content : JSX.Element = (
    <>
        <div className="container-center-horizontal">
      <div className="bettermidapp-mimi-nfts-1 screen">
        <img className="bg-ipEwgj bg" src={`${process.env.PUBLIC_URL}/img/NftList/bg-10@1x.png`} alt="BG" />
        <div className="bars-status-bar-i-phone-light-ipEwgj bars-status-bar-i-phone-light">
          <div className="frame"></div>
          <div className="status-bar">
            {/* <div className="battery">
              <div className="border"></div>
              <img className="cap" src={`${process.env.PUBLIC_URL}/img/NftList/cap-10@1x.png`} alt="Cap" />
              <div className="capacity"></div>
            </div> */}
            {/* <img className="wifi" src={`${process.env.PUBLIC_URL}/img/NftList/wifi-10@1x.png`} alt="Wifi" />
            <img className="cellular-connection" src={`${process.env.PUBLIC_URL}/img/NftList/cellular-connection-10@1x.png`} alt="Cellular Connection" />
            <div className="time-style">
              <div className="time">
                9:41
              </div>
            </div> */}
          </div>
        </div>
        <div className="scroll-nft-card-ipEwgj">
          <div className="repeated-nft-card-19dZDf">
            <div className="x16217-VwzVjk x16217">
              <img className="nft-box" src={`${process.env.PUBLIC_URL}/img/NftList/nft-box@1x.png`} alt="NFT box" />
              <img className="nft" src={`${process.env.PUBLIC_URL}/img/NftList/nft-1@1x.png`} alt="NFT" />
               <div className="x00000001 inter-bold-royal-blue-14px">
          
                </div> 
              {/* <div className="x00000001 inter-bold-royal-blue-14px">#00000001</div> */}
              <div className="x0-signa inter-normal-cadet-blue-12px">$0 SIGNA</div>
              <div className="lv-1 inter-semi-bold-keppel-12px">Lv 1</div>
              <div className="reward-10 inter-normal-white-12px">Reward +10%</div>
              <img className="seperate-line" src={`${process.env.PUBLIC_URL}/img/NftList/seperate-line-1@1x.png`} alt="seperate line" />
              <div className="ic_send-DhT6v2 ic_send">
                <img className="ic_send-USHlN8 ic_send" src={`${process.env.PUBLIC_URL}/img/NftList/ic-send@1x.png`} alt="ic_send" />
              </div>
              <div className="button_nft_-equip">
                <div className="x119-srSqic x119"></div>
                <div  className="equip inter-semi-bold-white-12px">EQUIP</div>
              </div>
            </div>
            <div className="x16217-ssUnfI x16217">
              <img className="nft-box" src={`${process.env.PUBLIC_URL}/img/NftList/nft-box@1x.png`} alt="NFT box" />
              <img className="nft" src={`${process.env.PUBLIC_URL}/img/NftList/nft-1@1x.png`} alt="NFT" />
              <div className="x00000001 inter-bold-royal-blue-14px">#00000001</div>
              <div className="x0-signa inter-normal-cadet-blue-12px">$0 SIGNA</div>
              <div className="lv-1 inter-semi-bold-keppel-12px">Lv 1</div>
              <div className="reward-10 inter-normal-white-12px">Reward +10%</div>
              <img className="seperate-line" src={`${process.env.PUBLIC_URL}/img/NftList/seperate-line-1@1x.png`} alt="seperate line" />
              <div className="ic_send-jxGQtF ic_send">
                <img className="ic_send-CdJede ic_send" src={`${process.env.PUBLIC_URL}/img/NftList/ic-send@1x.png`} alt="ic_send" />
              </div>
              <div className="button_nft_-equip">
                <div className="x119-G9bwBo x119"></div>
                <div className="equip inter-semi-bold-white-12px">EQUIP</div>
              </div>
            </div>
            <div className="x16217-4iQVot x16217">
              <img className="nft-box" src={`${process.env.PUBLIC_URL}/img/NftList/nft-box@1x.png`} alt="NFT box" />
              <img className="nft" src={`${process.env.PUBLIC_URL}/img/NftList/nft-1@1x.png`} alt="NFT" />
              <div className="x00000001 inter-bold-royal-blue-14px">#00000001</div>
              <div className="x0-signa inter-normal-cadet-blue-12px">$0 SIGNA</div>
              <div className="lv-1 inter-semi-bold-keppel-12px">Lv 1</div>
              <div className="reward-10 inter-normal-white-12px">Reward +10%</div>
              <img className="seperate-line" src={`${process.env.PUBLIC_URL}/img/NftList/seperate-line-1@1x.png`} alt="seperate line" />
              <div className="ic_send-ImTyxU ic_send">
                <img className="ic_send-6aXymi ic_send" src={`${process.env.PUBLIC_URL}/img/NftList/ic-send@1x.png`} alt="ic_send" />
              </div>
              <div className="button_nft_-equip">
                <div className="x119-lmLWrF x119"></div>
                <div className="equip inter-semi-bold-white-12px">EQUIP</div>
              </div>
            </div>
            <div className="x16217-vaxOuK x16217">
              <img className="nft-box" src={`${process.env.PUBLIC_URL}/img/NftList/nft-box@1x.png`} alt="NFT box" />
              <img className="nft" src={`${process.env.PUBLIC_URL}/img/NftList/nft-1@1x.png`} alt="NFT" />
              <div className="x00000001 inter-bold-royal-blue-14px">#00000001</div>
              <div className="x0-signa inter-normal-cadet-blue-12px">$0 SIGNA</div>
              <div className="lv-1 inter-semi-bold-keppel-12px">Lv 1</div>
              <div className="reward-10 inter-normal-white-12px">Reward +10%</div>
              <img className="seperate-line" src={`${process.env.PUBLIC_URL}/img/NftList/seperate-line-1@1x.png`} alt="seperate line" />
              <div className="ic_send-CEvQNx ic_send">
                <img className="ic_send-QzS03L ic_send" src={`${process.env.PUBLIC_URL}/img/NftList/ic-send@1x.png`} alt="ic_send" />
              </div>
              <div className="button_nft_-equip">
                <div className="x119-sxzbHC x119"></div>
                <div className="equip inter-semi-bold-white-12px">EQUIP</div>
              </div>
            </div>
            <div className="x16217-e5wAUf x16217">
              <img className="nft-box" src={`${process.env.PUBLIC_URL}/img/NftList/nft-box@1x.png`} alt="NFT box" />
              <img className="nft" src={`${process.env.PUBLIC_URL}/img/NftList/nft-1@1x.png`} alt="NFT" />
              <div className="x00000001 inter-bold-royal-blue-14px">#00000001</div>
              <div className="x0-signa inter-normal-cadet-blue-12px">$0 SIGNA</div>
              <div className="lv-1 inter-semi-bold-keppel-12px">Lv 1</div>
              <div className="reward-10 inter-normal-white-12px">Reward +10%</div>
              <img className="seperate-line" src={`${process.env.PUBLIC_URL}/img/NftList/seperate-line-1@1x.png`} alt="seperate line" />
              <div className="ic_send-VTGvEh ic_send">
                <img className="ic_send-RWwapn ic_send" src={`${process.env.PUBLIC_URL}/img/NftList/ic-send@1x.png`} alt="ic_send" />
              </div>
              <div className="button_nft_-equip">
                <div className="x119-HxKb0m x119"></div>
                <div className="equip inter-semi-bold-white-12px">EQUIP</div>
              </div>
            </div>
            <div className="x16217-IgZtda x16217">
              <img className="nft-box" src={`${process.env.PUBLIC_URL}/img/NftList/nft-box@1x.png`} alt="NFT box" />
              <img className="nft" src={`${process.env.PUBLIC_URL}/img/NftList/nft-1@1x.png`} alt="NFT" />
              <div className="x00000001 inter-bold-royal-blue-14px">#00000001</div>
              <div className="x0-signa inter-normal-cadet-blue-12px">$0 SIGNA</div>
              <div className="lv-1 inter-semi-bold-keppel-12px">Lv 1</div>
              <div className="reward-10 inter-normal-white-12px">Reward +10%</div>
              <img className="seperate-line" src={`${process.env.PUBLIC_URL}/img/NftList/seperate-line-1@1x.png`} alt="seperate line" />
              <div className="ic_send-aVD1X9 ic_send">
                <img className="ic_send-BnGgTr ic_send" src={`${process.env.PUBLIC_URL}/img/NftList/ic-send@1x.png`} alt="ic_send" />
              </div>
              <div className="button_nft_-equip">
                <div className="x119-8rVG3l x119"></div>
                <div className="equip inter-semi-bold-white-12px">EQUIP</div>
              </div>
            </div>
          </div>
          <div className="button_nft_-on-duty-19dZDf">
            <div className="x119-xqjMJ3 x119"></div>
            <div className="on-duty-xqjMJ3 inter-semi-bold-white-12px">ON DUTY</div>
          </div>
        </div>
        {/* <div className="title-bar-ipEwgj">
          <img className="bg-efxqDX bg" src={`${process.env.PUBLIC_URL}/img/NftList/bg-11@1x.png`} alt="BG" />
          <div className="bars-status-bar-i-phone-light-efxqDX bars-status-bar-i-phone-light">
            <div className="frame"></div>
            <div className="status-bar">
              <div className="battery">
                <div className="border"></div>
                <img className="cap" src={`${process.env.PUBLIC_URL}/img/NftList/cap-10@1x.png`} alt="Cap" />
                <div className="capacity"></div>
              </div>
              <img className="wifi" src={`${process.env.PUBLIC_URL}/img/NftList/wifi-10@1x.png`} alt="Wifi" />
              <img className="cellular-connection" src={`${process.env.PUBLIC_URL}/img/NftList/cellular-connection-10@1x.png`} alt="Cellular Connection" />
              <div className="time-style"><div className="time">9:41</div></div>
            </div>
          </div>
          <div className="my-nf-ts-efxqDX">My NFTs</div>
          <img className="seperat-line-efxqDX seperat-line" src={`${process.env.PUBLIC_URL}/img/NftList/seperat-line-11@1x.png`} alt="Seperat line" />
          <div className="ic_add-efxqDX ic_add">
            <img className="add-nPxmxE" src={`${process.env.PUBLIC_URL}/img/NftList/add@1x.png`} alt="Add" />
            <img className="ic_add-nPxmxE ic_add" src={`${process.env.PUBLIC_URL}/img/NftList/ic-add@1x.png`} alt="ic_add" />
          </div>
          <div className="drop-down-list-efxqDX">
            <div className="ic_arrow_drop_down-gw8q3Y ic_arrow_drop_down">
              <img
                className="ic_arrow_drop_down-EWK4pQ ic_arrow_drop_down"
                src={`${process.env.PUBLIC_URL}/img/NftList/ic-arrow-drop-down@1x.png`}
                alt="ic_arrow_drop_down"
              />
            </div>
            <div className="free-gw8q3Y inter-normal-white-12px">Free</div>
            <div className="drop-down-_options-gw8q3Y">
              <div className="x892-VGCwkP"></div>
              <img className="seperat-line-VGCwkP seperat-line" src={`${process.env.PUBLIC_URL}/img/NftList/seperat-line-10@1x.png`} alt="Seperat line" />
              <img className="seperat-line-lSZ49y seperat-line" src={`${process.env.PUBLIC_URL}/img/NftList/seperat-line-10@1x.png`} alt="Seperat line" />
              <div className="lowest-price-VGCwkP inter-normal-white-12px">Lowest Price</div>
              <div className="highest-price-VGCwkP inter-normal-white-12px">Highest Price</div>
              <div className="all-VGCwkP inter-normal-white-12px">All</div>
            </div>
          </div> 
          <a href="javascript:history.back()">
            <div className="icon-arrow-left-efxqDX icon-arrow-left">
              <img
                className="icon-arrow-left-TgqIrE icon-arrow-left"
                src={`${process.env.PUBLIC_URL}/img/NftList/icon-arrow-left-12@1x.png`}
                alt="icon-arrow-left"
              /></div
  ></a>
  </div>*/}
      </div>
    </div>  

    </>
    
      );

  return (
    <>
    <CenterLayout
      content={content}
      bgImg={false}
    />
    </>
  );
};

export default MyNftList;
