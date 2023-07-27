import * as React from 'react';
 import './myNftList.css'
 import { CenterLayout } from '../../components/layout';
 import { Link } from 'react-router-dom';
 import { BackButton } from '../../components/button';
 import { GetToken } from '../../components/getToken';
 import { useSelector } from 'react-redux';
 import { accountId, accountPublicKey } from '../../redux/account';
 import CSS from 'csstype';
 import { ShortTitleBar } from '../../components/titleBar';
 import { Col,Row,Card,CardText,CardTitle,Button,CardImg,} from 'reactstrap';
 import { useLedger } from '../../redux/useLedger';
 import { useState } from 'react';
 import { useEffect } from 'react';
 import { useAppSelector } from '../../redux/useLedger';
 import { selectWalletNodeHost } from '../../redux/useLedger';
 import { LedgerClientFactory } from '@signumjs/core';
 import { useContext } from 'react';
 import { AppContext } from '../../redux/useContext';

 interface MyNftProps {
     image:string;
     level:number;
 }


 const MyNft: React.FunctionComponent<MyNftProps> =  (props) => {
     const {image,level} = props;
     const [loading, setLoading] = useState<boolean>(true);
     const [imgAddress, setImgAddress] = useState<string>("");
     const nodeHost = useAppSelector(selectWalletNodeHost);
     const ledger2 = LedgerClientFactory.createClient({nodeHost});
     const userAccountpublicKey:string = useSelector(accountPublicKey);
     const {appName,Wallet,Ledger} = useContext(AppContext);
     var nftImgAddress:string = "";
     var addressSuffix:string ="https://ipfs.io/ipfs/"; 
     useEffect(() => {
         // Function to fetch data from the APIc
         console.log(`ipfs.io/ipfs/${image}`);
         fetch(`https://ipfs.io/ipfs/${image}`).then((res)=>{
             res.text().then((text)=>{
                 console.log(text); 
                 var nftInfo = JSON.parse(text);
                 console.log(nftInfo); 
                 console.log(typeof(nftInfo.media[0].social));
                 setImgAddress(nftInfo.media[0].social);
                 nftImgAddress = nftInfo.media[0].social; 
                 console.log(nftImgAddress);
                 console.log(imgAddress);
                 nftImgAddress = addressSuffix.concat(nftImgAddress);
                 console.log(nftImgAddress);
                 setLoading(false);
             });

         });

         // Call the fetchData function

         // Optional cleanup function (not needed in this case)
         // If you had any subscription or timers, you'd clean them up here

         // Since we want the effect to run only once (on mount), we pass an empty dependency array
       }, []);
     const test = (abc:string) => {
         console.log(abc);
         return 1;
     }
     const equipNft = async() => {
       console.log("123");
       const accountInfo = `{"av":{"${imgAddress}":"image/png"}}`;

       const setAccountInfo = await ledger2.account.setAccountInfo({
         name:"1234",
         description:accountInfo,
         feePlanck:"1000000",
         senderPublicKey:userAccountpublicKey,
       })
       console.log(setAccountInfo);
       Wallet.Extension.confirm(setAccountInfo.unsignedTransactionBytes);
     };
   return(
 <>
 {loading?(<div>loading</div>):(
     imgAddress === ""?(<div>loading</div>):(

             <div className = "myNftList">
               <img className = "myNftImage" src = {`https://ipfs.io/ipfs/${imgAddress}`}></img>
               <div className = "myNftDescription">
               <div className = "myNftNumber">#0000000001</div>
                 <div>
                   <span  className = "myNftLevel">
                     Lv{level}       
                     </span>   
                     <span  className = "myNftReward">
                       reward + 1000%
                       </span>
                 </div>
                 <div className = "myNftPrice">
                   $0 signa
                 </div>
               </div>
               <div className = "myNftBottom">
               <button className = "myNftButton" onClick = {equipNft}>equip</button>
               <img className = "myNftButtomArrow" src  = {`${process.env.PUBLIC_URL}/img/NftList/ic-send@1x.png`}></img>
               </div>
             </div>
     )
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

   export default MyNft;