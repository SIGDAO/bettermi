import * as React from 'react';
 import './myNftList.css'
 import { useSelector } from 'react-redux';
 import { accountId, accountPublicKey } from '../../redux/account';
 import { useState } from 'react';
 import { useEffect } from 'react';
 import { useAppSelector } from '../../redux/useLedger';
 import { selectWalletNodeHost } from '../../redux/useLedger';
 import { LedgerClientFactory } from '@signumjs/core';
 import { useNavigate } from 'react-router-dom';
 import MyNftList from './myNftList';
import { FindLatestTransactionArray,FindLatestTransactionNumber } from '../../NftSystem/updateUserNftStorage';
import { getNftContractStorage } from '../../redux/account';
import { useRef } from 'react';
import LoadingMinting from '../loadingMinting/loadingMinting';
import LoadingMintingMyNftList from './loadMintingMyNftList';
import { ShortTitleBar } from '../../components/titleBar';

 interface MyNftProps {
    
 }


interface myNftList{
  level:string;
  image:string;
  nftId:string;
}


 const IndexMyNftList: React.FunctionComponent<MyNftProps> =  (props) => {

  
     const nodeHost = useSelector(selectWalletNodeHost);
     const ledger2 = LedgerClientFactory.createClient({nodeHost});
     const userAccountId = useSelector(accountId);
     const navigate = useNavigate();
     const [isUpdating, setIsUpdating] = useState<boolean>(false);
     const [isLoading,setIsLoading] = useState<boolean>(true);
     const [loadingNft,setLoadingNft] = useState<boolean>(true);
     const nftLoaded = useRef(false);
     const [myNfts,setMyNfts] = useState<myNftList[]>([]);  


    const checkIsLoading = async() => {

        const messages = await ledger2.account.getUnconfirmedAccountTransactions(userAccountId);
        console.log(messages);
        for (var i = 0; i < messages.unconfirmedTransactions.length; i++){
            if(messages.unconfirmedTransactions[i].type === 1 && messages.unconfirmedTransactions[i].subtype === 5 && messages.unconfirmedTransactions[i].sender === userAccountId){
                console.log("updating personal info");
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
    




   return(
      <>
        {
              (isLoading === true||loadingNft === true) ?(
                <>
                <ShortTitleBar title='My NFTs' setting = {false}addSign = {false} aiCoach = {false} filter = {false} importButton = {false} />
              <LoadingMintingMyNftList loadingNft={loadingNft} 
                setLoadingNft={setLoadingNft} myNfts={myNfts} setMyNfts = {setMyNfts}></LoadingMintingMyNftList>
                </>
                ):
              (

                    <MyNftList setIsUpdatingDescription={setIsUpdating} isUpdatingDescription={isUpdating} myNfts = {myNfts}></MyNftList>
                  

              )
        }
       </>
         );

     // return (
     //   <CenterLayout
     //     content={content}
     //     bgImg={false}
     //   />
     // );"{"version":1,"descriptor":"QmNhdiqCRXzoVm3pn5eaqvudAjbWsavwqi6a6Bs7ZL5WeE"}"
   };

   export default IndexMyNftList;