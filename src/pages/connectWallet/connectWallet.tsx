import './connectWallet.css'
import { CenterLayout } from '../../components/layout';
import { ButtonWithAction, ButtonWithNavigation, DisabledButton } from '../../components/button';
import { store } from '../../redux/reducer';
import { walletSlice } from '../../redux/wallet';
import { DeeplinkableWallet,GenericExtensionWallet } from '@signumjs/wallets';
import { Address, Ledger } from '@signumjs/core';
import { userAccount } from '../../redux/account';
import { accountSlice } from '../../redux/account';
import { useContext } from 'react';
import { AppContext } from '../../redux/useContext';
import { useNavigate } from 'react-router-dom';
export interface IConnectWalletProps {
}

export default function ConnectWallet (props: IConnectWalletProps) {
  const navigate = useNavigate();
  const {appName,Wallet,Ledger} = useContext(AppContext);

  const connectWallet = (appName:any,Wallet:any,Ledger:any) => {
    //const wallet = new GenericExtensionWallet();
    console.log(typeof process.env.REACT_APP_MOBILE)
    let key:string;
    Wallet.Extension.connect({appName,networkName:Ledger.Network})
    .then((wallet:any) => {console.log(wallet);key = wallet.publicKey; console.log(key);
      const import_account:Address =  Address.fromPublicKey(key, Ledger.AddressPrefix);
      const accountinfo:userAccount = {
        accountId:import_account.getNumericId(),
        accountRS:import_account.getReedSolomonAddress(),
        publicKey:import_account.getPublicKey(),
        isWatchOnlyMode:true,
        token:0,
      };
      store.dispatch(accountSlice.actions.setAccount(accountinfo));
    console.log(store.getState());
    store.dispatch(walletSlice.actions.setWalletPublicKey(key));
    store.dispatch(walletSlice.actions.setIsWalletConnected(true));
    store.dispatch(walletSlice.actions.setWalletNodeHost(wallet.currentNodeHost));
    console.log(store.getState());
    navigate('/connectSuccess')
  })
  // todo: add error handling, and show it to user
    .catch((error:any) => {
      console.log(error);
      console.log(error.NotFoundWalletError);
      if (error.name === 'NotFoundWalletError'){
        window.location.href = 'https://chrome.google.com/webstore/detail/signum-xt-wallet/kdgponmicjmjiejhifbjgembdcaclcib/'
      }
    });
  }
  
  const content : JSX.Element = (
    <div className="connectWallet-layout">
      <div id='connectWallet-container'>
        <h1 id='connectWalletTopic' className="default-font-setting">Connect Your Wallet</h1>
        <p id='connectWalletDisciption' className="default-font-setting">
          Connect your crypto wallet <br />&amp; Start your Bettermi Journey!
        </p>
        <div id='img-slider'>
          <img className='connect-profilePic-side' src={process.env.PUBLIC_URL + "/img/connectWallet/photo-6@1x.png" } alt="Photo" />
          <img className='connect-profilePic' src={process.env.PUBLIC_URL + "/img/mimi.png"} alt="Photo" />
          <img className='connect-profilePic-side' src={process.env.PUBLIC_URL + "/img/connectWallet/photo-7@1x.png"} alt="photo" />
        </div>
        <div id='collectWallet-button-container'>
          <DisabledButton
            text='Phoenix wallet'
            height='56px'
            width='150px'
          />
          <ButtonWithAction
            text='XT wallet'
            action={() => connectWallet(appName,Wallet,Ledger)} // TODO: add action to connect wallet
            height='56px'
            width='150px'
          />
        </div>
      </div>
    </div>
  )

  return (
    <CenterLayout
      bgImg={false}
      content={content}
    />
  );
}
