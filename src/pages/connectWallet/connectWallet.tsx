import * as React from 'react';
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
export interface IConnectWalletProps {
}

const connectWallet = (appName:any,Wallet:any,Ledger:any) => {

  //const wallet = new GenericExtensionWallet();
  let key:string;
  Wallet.Extension.connect({appName,networkName:Ledger.Network})
  .then((wallet:any) => {console.log(wallet);key = wallet.publicKey; console.log(key);
    const import_account:Address =  Address.fromPublicKey(key, Ledger.AddressPrefix);
    const accountinfo:userAccount = {
      accountId:import_account.getNumericId(),
      accountRS:import_account.getReedSolomonAddress(),
      publicKey:import_account.getPublicKey(),
      isWatchOnlyMode:true,
    };
    store.dispatch(accountSlice.actions.setAccount(accountinfo));
  console.log(store.getState());
  store.dispatch(walletSlice.actions.setWalletPublicKey(key));
  store.dispatch(walletSlice.actions.setIsWalletConnected(true));
  console.log(store.getState());
})
  .catch((error:any) => console.error(error));
  // store.dispatch(walletSlice.actions.setIsWalletConnected(true));
  // store.dispatch(walletSlice.actions.setWallet(wallet));
  // store.dispatch(walletSlice.actions.setAddress(wallet.getAddress()));
  // store.dispatch(wall
}

export default function ConnectWallet (props: IConnectWalletProps) {
  const {appName,Wallet,Ledger} = useContext(AppContext);
  const content : JSX.Element = (
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
  )

  return (
    <CenterLayout
      bgImg={process.env.PUBLIC_URL + '/img/BGwithstar.png'}
      content={content}
    />
  );
}
