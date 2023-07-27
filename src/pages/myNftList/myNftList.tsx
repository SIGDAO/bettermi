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
import { Col,Row,Card,CardText,CardTitle,Button,CardImg,} from 'reactstrap';
import { useAppSelector, useLedger } from '../../redux/useLedger';
import MyNft from './myNft';
import { selectWalletNodeHost } from '../../redux/useLedger';
import { LedgerClientFactory } from '@signumjs/core';
import { useState,useEffect } from 'react';

interface IMyNftListProps {
}

interface myNftList{
  image:string;
  level:number;
}

const MyNftList: React.FunctionComponent<IMyNftListProps> =  (props) => {
  const userAccountId:string = useSelector(accountId);
  const mobile = process.env.REACT_APP_MOBILE === 'true';
  let height : string | number
  let width : string | number;
  const [loading, setLoading] = useState(true);
  const [myNfts, setMyNfts] = useState<myNftList[]>([]);
  //var myNft:myNftList[] = [];
  var nft:myNftList;
  const nodeHost = useAppSelector(selectWalletNodeHost);
  const ledger2 = LedgerClientFactory.createClient({nodeHost});
  const trialAccountId = "416342944383657789";
  var nftAddressList:string[] = [];
  var userNftList:myNftList[] = [];
  var tempNftList:myNftList[] = [
    {image:"QmRVXt88C6pELpCCXmTvLLLea4AgfoPFf9AnWAU7NMaQxP",level:1},
    {image:"QmNhdiqCRXzoVm3pn5eaqvudAjbWsavwqi6a6Bs7ZL5WeE",level:1},
    {image:"QmUmcKm3LNdw9fZHdXn3x15GhBhANbX6RmtMwUxmAvuQQK",level:1},
    {image:"QmTeKUcGh2QG8kWxUSBxVE6fHhb55mxzmu3A9cJJQbNSFw",level:1},
    {image:"QmPpnv2XXoDyKC15XT7Sd746Z7QXQxiY5zwE5jjtLVGi3P",level:1},
    {image:"QmPpnv2XXoDyKC15XT7Sd746Z7QXQxiY5zwE5jjtLVGi3P",level:1},
    {image:"QmTeKUcGh2QG8kWxUSBxVE6fHhb55mxzmu3A9cJJQbNSFw",level:1},
  ];
  // for(var i = 0;i<6;i++){
  //   nft = {
  //     image:`${process.env.PUBLIC_URL}/img/NftList/nft-1@1x.png`,
  //     level:1,
  //   }
  //   myNfts.push(nft);
  // }
  // console.log(myNfts);

  useEffect(() => {
    // // Function to fetch data from the API
    // ledger2.account.getAccountTransactions({accountId:"2826449997764829726"}).then(
    //   async(transactions) => {
    //   //console.log(transactions);
    //   //console.log(transactions.transactions.length);
    //   for(var i=0;i<transactions.transactions.length;i++){
    //     if(transactions.transactions[i].sender == trialAccountId){
    //      // console.log(transactions.transactions[i].sender);
    //       nftAddressList = transactions.transactions[i].attachment.message.split(",");
    //       //console.log(nftAddressList);
    //       break;
    //     }
    //   }
    //   nftAddressList.map(async(nftAddress)=>{
    //     const hi = await ledger2.contract.getContract(nftAddress);
    //     //console.log("array is ",nftAddress,"  ",hi);
    //     const trial = JSON.parse(hi.description);
    //     //console.log(trial);
    //     //console.log(trial.descriptor);
    //     nft = {level:trial.version,image:trial.descriptor};
    //     userNftList.push(nft);
    //   });
    //   console.log(userNftList);
    //   //setMyNfts(userNftList);
    //   console.log(myNfts);
    //   setLoading(false);
    // });

    // Call the fetchData function

    // Optional cleanup function (not needed in this case)
    // If you had any subscription or timers, you'd clean them up here

    // Since we want the effect to run only once (on mount), we pass an empty dependency array
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
  const bgStyle : CSS.Properties = mobile ? 
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
    'overflowY': 'auto',
    'zIndex': '1',
    'overflowX': 'hidden',
    'display':'flex!important',
  }
  const centerLayoutStyle : CSS.Properties = {
    // 'backgroundPosition': 'center',
    'minHeight': `${height}`, // ipad size
    'width': `min(100vw,${width})`, // ipad size
    'height': '100%',
    //'margin': 'auto',
     'display': 'flex',
     //'justifyContent': 'center',
     //'alignItems': 'center',
    //'backgroundColor': 'green',
    'flexDirection' : 'column',
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
  const displayMyNft = userNftList.map((nft) => {//Contract Id
    return(
      <MyNft  image={nft.image} level = {nft.level}></MyNft>
    );
    }
  );
  const tempDisplayMyNft = tempNftList.map((nft) => {//Contract Id
    return(
      <MyNft  image={nft.image} level = {nft.level}></MyNft>
    );
    }
  );
  //const content : JSX.Element = (
return(
    <div style={bgStyle}>
    <div style={centerLayoutStyle}>
              <ShortTitleBar title='My NFTs' />
      <div className = "containerMyNftList">
        <div className = "containerMyNftList2">
            {tempDisplayMyNft}
        </div>
      </div>
      {loading?(<p>loading...</p>):(
        <>
              <ShortTitleBar title='My NFTs' />
              {console.log(userNftList)}
      <div className = "containerMyNftList">
        <div className = "containerMyNftList2">
            {displayMyNft}
        </div>
      </div>
      </>
      )
}
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