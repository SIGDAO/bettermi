import * as React from 'react';
import './myNftList.css'
import { CenterLayout } from '../../components/layout';
import { Link } from 'react-router-dom';
import { BackButton } from '../../components/button';
import { GetToken } from '../../components/getToken';
import { useSelector } from 'react-redux';
import { accountId } from '../../redux/account';
import CSS from 'csstype';
import { ShortTitleBar } from '../../components/titleBar';
import { Col, Row, Card, CardText, CardTitle, Button, CardImg, } from 'reactstrap';
import { useAppSelector, useLedger } from '../../redux/useLedger';
import MyNft from './myNft';
import { selectWalletNodeHost } from '../../redux/useLedger';
import { LedgerClientFactory } from '@signumjs/core';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import {generateMasterKeys} from "@signumjs/crypto";

interface IMyNftListProps {
}

interface myNftList{
  image:string;
  level:number;
  assetId:string;
}

const MyNftList: React.FunctionComponent<IMyNftListProps> = (props) => {
  const userAccountId: string = useSelector(accountId);
  const mobile = process.env.REACT_APP_MOBILE === 'true';
  let height: string | number
  let width: string | number;
  const [loading, setLoading] = useState(true);
  const [myNfts, setMyNfts] = useState<myNftList[]>([]);
  const [onDuty, setOnDuty] = useState<string>("");
  const [array, setArray] = useState<string[]>([]);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [userNftTokenList,setNftTokenList] = useState<myNftList[]>([]);
  const dataFetchedRef = useRef(false);
  const nftTokenIssuer:string = process.env.REACT_APP_NFT_TOKEN_ISSUER!;
  console.log(typeof(nftTokenIssuer));
  console.log(nftTokenIssuer);
  console.log(nftTokenIssuer=="4572964086056463895");
  const {publicKey, signPrivateKey} = generateMasterKeys("smoke term keen design mirror skull mom humble twin welcome speak gloom");
  console.log("publicKey", publicKey);  
  console.log("signPrivateKey", signPrivateKey);
  //var myNft:myNftList[] = [];
  var nft: myNftList;
  const nodeHost = useAppSelector(selectWalletNodeHost);
  const ledger2 = LedgerClientFactory.createClient({ nodeHost });
  console.log(nodeHost);
  const trialAccountId = "416342944383657789";
  var nftAddressList:string[] = [];
  var userNftList:myNftList[] = [];
  var userNftToken:myNftList[] = [];
  // for(var i = 0;i<6;i++){
  //   nft = {
  //     image:`${process.env.PUBLIC_URL}/img/NftList/nft-1@1x.png`,
  //     level:1,
  //   }
  //   myNfts.push(nft);
  // }
  // console.log(myNfts);

  useEffect(() => {
    if (dataFetchedRef.current) { console.log("called"); return; }
    dataFetchedRef.current = true;
    ledger2.account.getAccount({ accountId: userAccountId }).then((account) => {
      const description = JSON.parse(account.description);
      console.log(description);
      console.log(Object.keys(description.av));
      console.log(typeof(Object.keys(description.av)[0]));
      setOnDuty(Object.keys(description.av)[0]);
      console.log(onDuty);
    }).catch((error) => { console.log(error) });
    // Function to fetch data from the API

    ledger2.account.getAccount({accountId:userAccountId}).then(async(account) => {
      console.log(account);
      for (var i = 0;i<account.assetBalances.length;i++){
        const token = await ledger2.asset.getAsset({assetId:account.assetBalances[i].asset});
        console.log(token);
        if(token.issuer === process.env.REACT_APP_NFT_TOKEN_ISSUER && token.name === "BetterMi"){
          console.log(JSON.parse(token.description));
          console.log(JSON.parse(token.description).descriptor);
          console.log(typeof(JSON.parse(token.description).descriptor));
          userNftToken.push({level:1,image:JSON.parse(token.description).descriptor,assetId:token.asset});
          setNftTokenList(userNftToken);
        }
      }
      // account.assetBalances.map(async(asset)=>{
      //   const token = await ledger2.asset.getAsset({assetId:asset.asset});
      //   if(token.issuer === nftTokenIssuer && token.name === "BetterMi"){
      //     console.log(JSON.parse(token.description));
      //     console.log(JSON.parse(token.description).descriptor);
      //     console.log(typeof(JSON.parse(token.description).descriptor));
      //     userNftToken.push({level:1,image:JSON.parse(token.description).descriptor});
      //     setNftTokenList(userNftToken);
      // }
      // });      setLoading(false);
    }).then(() => { setLoading(false);}).catch((error)=>{console.log(error)});;


    // ledger2.asset.getAssetsByOwner({accountId:userAccountId}).then(
    //   async(assets) => {
    //     assets.assets.map((asset)=>{
    //       if(asset.issuer === process.env.REACT_APP_NFT_DISTRIBUTOR && asset.name === "BetterMi"){
    //         console.log(JSON.parse(asset.description));
    //         console.log(JSON.parse(asset.description).descriptor);
    //         console.log(typeof(JSON.parse(asset.description).descriptor));
    //         userNftToken.push({level:1,image:JSON.parse(asset.description).descriptor});
    //         setNftTokenList(userNftToken);
    //         setLoading(false);
    //       }
    //     });
    //   }
    // ).catch((error)=>{console.log(error)});
    // console.log(userNftToken,"userNftToken");
    // console.log(userNftTokenList ,"userNftTokenList");//Get token by ownership



    // ledger2.account.getAccountTransactions({accountId:"2826449997764829726"}).then(
    //   async(transactions) => {
    //   //console.log("transaction is ",transactions);
    //   //console.log(transactions.transactions.length);
    //   for(var i=0;i<transactions.transactions.length;i++){
    //     if(transactions.transactions[i].sender == trialAccountId){
    //      // console.log(transactions.transactions[i].sender);
    //       nftAddressList = transactions.transactions[i].attachment.message.split(",");
    //       //console.log(nftAddressList);
    //       break;
    //     }
    //   }
    //   console.log("nftAddress is  ",nftAddressList);
    //   nftAddressList.map((nftAddress)=>{
    //     ledger2.contract.getContract(nftAddress).then((hi)=>{
    //         //console.log("array is ",nftAddress,"  ",hi);
    //         const trial = JSON.parse(hi.description);
    //         //console.log(trial);
    //         //console.log(trial.descriptor);
    //         nft = {level:trial.version,image:trial.descriptor};
    //         //console.log([...myNfts,nft]);
    //         //console.log(myNfts);
    //         setMyNfts([...myNfts,nft]);
    //         setArray([...array,"123"]);
    //         //console.log("testing array is ",array);
    //         //console.log("appended list is ",[...myNfts,nft]);
    //         userNftList.push(nft);
    //         setMyNfts(userNftList);
    //         setLoading(false);
    //     });
    //   });
    //   //console.log("userNftList is",userNftList);
    //   //console.log("myNft is",myNfts);
    // });


  }, []);



  /*const myNftList = ledger2.account.getAccountTransactions({accountId:"	2826449997764829726"}); //Contract Id
  const BMI:BMI_Day[] = [];
  message.transactions.map((obj)=>{
      // console.log(obj);
      // console.log(typeof(obj.attachment.message),typeof(obj.timestamp));
      BMI.push({timeStamp:Number(obj.timestamp),BMI:obj.attachment.message});
      return_Date(Number(obj.timestamp));
  }); 
  //console.log(message);
  console.log(BMI);*/

  if (mobile) {
    height = "844px";
    width = "390px";
    // display in ipad air size
  } else {
    height = "100vh";
    width = "820px";
  }
  const bgStyle: CSS.Properties = mobile ?
    {
      'background': `transparent`,
    }
    :
    {
      'position': 'fixed',
      'background': `linear-gradient(112deg, #221D4B 0%, #171717 100%)`,
      'boxShadow': '0px 3px 30px var(--royal-blue)',
      'width': '100vw',
      'minHeight': '100vh',
      'height': '100%',
      // 'overflowY': `${isOpenPopup ? 'hidden' : 'auto'}`,
      'overflowY': 'auto',
      'zIndex': '1',
      'overflowX': 'hidden',
      'display': 'flex!important',
    }
  const centerLayoutStyle: CSS.Properties = {
    // 'backgroundPosition': 'center',
    'minHeight': `${height}`, // ipad size
    'width': `min(100vw,${width})`, // ipad size
    'height': '100%',
    //'margin': 'auto',
    'display': 'flex',
    //'justifyContent': 'center',
    //'alignItems': 'center',
    //'backgroundColor': 'green',
    'flexDirection': 'column',
  }
  const customStyle: CSS.Properties = {
    'alignItems': 'flex-start',
    'cursor': 'pointer',
    'display': 'flex',
    'height': '44px',
    'left': '16px',
    'minWidth': '44px',
    'paddingLeft': '14px',
    'position': 'relative',
    'top': '44px',
  }
  const displayMyNft = myNfts.map((nft) => {//Contract Id
    console.log("userNftList is  ",userNftList);
    return(
      <MyNft  image={nft.image} level = {nft.level} assetId = {nft.assetId} ></MyNft>
    );
  }
  );
  const displayNftToken = userNftTokenList.map((nft) => {//Contract Id
    console.log("userNftTokenList is  ",nft);
    return(
      <MyNft  image={nft.image} level = {nft.level} assetId = {nft.assetId}></MyNft>
    );
  }
  );
  // const tempDisplayMyNft = tempNftList.map((nft) => {//Contract Id
  //   console.log("myNftList is  ",myNfts);
  //   console.log("loading is  ",loading);
  //   return(
  //     <MyNft  image={nft.image} level = {nft.level}></MyNft>
  //   );
  //   }
  // );
  //const content : JSX.Element = (
return(
    <div style={bgStyle}>
    <div style={centerLayoutStyle}>
              <ShortTitleBar title='My NFTs' addSign = {true} setting = {false} filter = {true}/>
      <div className = "containerMyNftList">
        <div className = "containerMyNftList2">
        {onDuty === ""?(             
        <div className = "myNftList">
             <img className = "myNftImage" src = {"img/profile/nft-avatar-1@1x.png"}></img>
             <div className = "myNftDescription">
             <div className = "myNftNumber">#0000000001</div>
               <div className = "myNftBar">
                 <div  className = "myNftLevel">
                   Lv{1}       
                   </div>
                   <div className = "myNftVerticalLine"></div>  
                   <div  className = "myNftReward">
                     reward + 1000%
                     </div>
               </div>
               <div className = "myNftPrice">
                 $0 signa
               </div>
             </div>
             <div className = "myNftBottom">
             <button className = "myNftButtonOnDuty" style = {{backgroundColor:"#39B3AF!important"}}>On Duty</button>
             <img className = "myNftButtomArrow" src  = {`${process.env.PUBLIC_URL}/img/NftList/ic-send@1x.png`}></img>
             </div>
           </div>
           ):(
             <div className = "myNftList">
             <img className = "myNftImage" src = {`https://ipfs.io/ipfs/${onDuty}`}></img>
             <div className = "myNftDescription">
             <div className = "myNftNumber">#0000000001</div>
               <div className = "myNftBar">
                 <div  className = "myNftLevel">
                   Lv{1}       
                   </div>
                   <div className = "myNftVerticalLine"></div>  
                   <div  className = "myNftReward">
                     reward + 1000%
                     </div>
               </div>
               <div className = "myNftPrice">
                 $0 signa
               </div>
             </div>
             <div className = "myNftBottom">
             <button className = "myNftButtonOnDuty" style = {{backgroundColor:"#39B3AF!important"}}>On Duty</button>
             <img className = "myNftButtomArrow" src  = {`${process.env.PUBLIC_URL}/img/NftList/ic-send@1x.png`}></img>
             </div>
           </div>
               )

               }
              {/* {displayMyNft} */}
              {loading?(<div></div>):(displayNftToken)}
        </div>
      </div>
      {/* {loading?(<p>loading...</p>):(
        <>
              <ShortTitleBar title='My NFTs' />
              {console.log(userNftList)}{console.log(array)}
      <div className = "containerMyNftList">
        <div className = "containerMyNftList2">
            {displayMyNft}
        </div>
      </div>
      </>
      )
} */}
    </div>
    </div>


  );


  // return (
  //   <CenterLayout
  //     content={content}
  //     bgImg={false}
  //   />
  // );"{"version":1,"descriptor":"QmNhdiqCRXzoVm3pn5eaqvudAjbWsavwqi6a6Bs7ZL5WeE"}"
};

export default MyNftList;