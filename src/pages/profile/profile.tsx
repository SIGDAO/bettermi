import * as React from 'react';
import './profile.css'
import { CenterLayout } from '../../components/layout';
import AnimaGenContent from './animaGenContent';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { selectCurrentGender } from '../../redux/profile';
import { accountId } from '../../redux/account';
import { useSelector } from 'react-redux';
import { selectWalletNodeHost } from '../../redux/useLedger';
import { LedgerClientFactory } from '@signumjs/core';

interface IProfileProps  {
}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isBackButton, setIsBackButton] = useState<boolean>(true);
  const { state } = useLocation();
  

  useEffect(() => {
    if (state?.previousPath === '/customizeYourProfile') {
      setIsOpen(true);
      setIsBackButton(false);
      window.history.replaceState({}, document.title);
    }

  }, []);

/* Function to check whether we are updating personal information*/
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const userAccountId = useSelector(accountId);
  const nodeHost = useSelector(selectWalletNodeHost);
const ledger2 = LedgerClientFactory.createClient({nodeHost});
  const checkIsLoading = async() => {

    const messages = await ledger2.account.getUnconfirmedAccountTransactions(userAccountId);
    console.log(messages);
    for (var i = 0; i < messages.unconfirmedTransactions.length; i++){
        if(messages.unconfirmedTransactions[i].type === 1 && messages.unconfirmedTransactions[i].subtype === 5 && messages.unconfirmedTransactions[i].sender === userAccountId){
            console.log("the user is updating personal info");
            setIsUpdating(true);
            setIsLoading(false);
            return;
        }
    }

    setIsUpdating(false);
    setIsLoading(false);
};

useEffect(() => {
  checkIsLoading();
},[]);

/* Function to check whether we are updating personal information*/




  return (
  <CenterLayout
  noScroll = {true}
    content={
      <div className='screen'>
        <AnimaGenContent 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          isBackButton={isBackButton}
          setIsBackButton={setIsBackButton}
        />
      </div>
    }
    bgImg={false}
    // noScroll={isOpen}
  />)
};

export default Profile;
