import * as React from 'react';
 import './myNftList.css'
 import { useSelector } from 'react-redux';
 import { accountId, accountPublicKey } from '../../redux/account';
 import { useState } from 'react';
 import { useEffect } from 'react';
 import { useAppSelector } from '../../redux/useLedger';
 import { selectWalletNodeHost } from '../../redux/useLedger';
 import { LedgerClientFactory } from '@signumjs/core';
 import { useLocation, useNavigate } from 'react-router-dom';
 import MyNftList from './myNftList';
import { FindLatestTransactionArray,FindLatestTransactionNumber } from '../../NftSystem/updateUserNftStorage';
import { getNftContractStorage } from '../../redux/account';
import { useRef } from 'react';
import LoadingMinting from '../loadingMinting/loadingMinting';
import LoadingMintingMyNftList from './loadMintingMyNftList';
import { ShortTitleBar } from '../../components/titleBar';
import { IsUserUpdatingIcon } from '../../NftSystem/updateUserNftStorage';
import { GetEquippedNftId } from '../../NftSystem/updateUserNftStorage';



 interface MyNftProps {
    userId?:string
 }


interface myNftList{
  level:string;
  image:string;
  nftId:string;
}


 const IndexMyNftList: React.FunctionComponent<MyNftProps> =  (props) => {
    const location = useLocation();

     const nodeHost = useSelector(selectWalletNodeHost);
     const ledger2 = LedgerClientFactory.createClient({nodeHost});
    const userAccountId:string = useSelector(accountId);
     const userId = location.state == null?userAccountId:location.state.userAccountId;
     //console.log("location.state is  ",location.state);
     //console.log("userId is ",userId);
     //console.log("userAccountId is ",userAccountId);
     const navigate = useNavigate();
     const [isUpdating, setIsUpdating] = useState<boolean>(false);
     const [isLoading,setIsLoading] = useState<boolean>(true);
     const [loadingNft,setLoadingNft] = useState<boolean>(true);
     const nftLoaded = useRef(false);
     const dataFetchedRef = useRef(false);
     const [myNfts,setMyNfts] = useState<myNftList[]>([]);
     const [equippedNftIpfsAddress,setEquippedNftIpfsAddress] = useState<string>("");
     var isOtherUser = true;
     if(location.state == null){
        isOtherUser = false;
     }
     //console.log("isOtherUser is ",isOtherUser);

    const checkIsLoading = async() => {

        // const messages = await ledger2.account.getUnconfirmedAccountTransactions(userAccountId);
        // console.log(messages);
        // for (var i = 0; i < messages.unconfirmedTransactions.length; i++){
        //     if(messages.unconfirmedTransactions[i].type === 1 && messages.unconfirmedTransactions[i].subtype === 5 && messages.unconfirmedTransactions[i].sender === userAccountId){
        //         console.log("updating personal info");
        //         setIsUpdating(true);
        //         setIsLoading(false);
        //         return;
        //     }
        // }
        try{
        const equippedNftId = await GetEquippedNftId(ledger2,userId);
        setEquippedNftIpfsAddress(equippedNftId);
        const isUserUpdatingIcon = await IsUserUpdatingIcon(ledger2,userId);
        if(isUserUpdatingIcon === true){
                //console.log("updating personal info");
                setIsUpdating(true);
                setIsLoading(false);
                return;
        }
        //console.log("is user updating icon",isUserUpdatingIcon);
        setIsUpdating(false);
        setIsLoading(false);
      }
      catch(e:any){
        console.log(e);
      }
    };

    useEffect(() => {
      if (dataFetchedRef.current === true) { console.log("called"); return; }
      else{
        dataFetchedRef.current = true;
        checkIsLoading();
      }
   },[]);
    




   return(
      <>
        {
              (isLoading === true||loadingNft === true) ?(
                <>
                <ShortTitleBar title='My NFTs' setting = {false}addSign = {false} aiCoach = {false} filter = {false} importButton = {false} />
              <LoadingMintingMyNftList loadingNft={loadingNft} userId = {userId}
                setLoadingNft={setLoadingNft} myNfts={myNfts} setMyNfts = {setMyNfts} isOtherUser = {isOtherUser}></LoadingMintingMyNftList>
                </>
                ):
              (isOtherUser === true)?(

                    <MyNftList setIsUpdatingDescription={setIsUpdating} isUpdatingDescription={isUpdating} myNfts = {myNfts} isOtherUser={true}></MyNftList>
              ):(
                <MyNftList setIsUpdatingDescription={setIsUpdating} isUpdatingDescription={isUpdating} myNfts = {myNfts} isOtherUser={false} equippedNftIpfsAddress = {equippedNftIpfsAddress}></MyNftList>
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