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
 import { P2PTransferNftToken } from '../../components/p2pTransferNftToken';

 interface MyNftProps {
    image:string;
    level:string;
    isOpenPopup: boolean;
    setIsOpenPopup: (isOpenPopup: boolean) => void;
     nftId:string;
     setSelectedAssetId:(nftId:string) => void;
    setLevel:(level:string) => void;
    
 }


 const MyNft: React.FunctionComponent<MyNftProps> =  (props) => {
     const {image, level, isOpenPopup, setIsOpenPopup,nftId,setSelectedAssetId,setLevel} = props;
     const [loading, setLoading] = useState<boolean>(true);
     const [imgAddress, setImgAddress] = useState<string>("");
     const nodeHost = useAppSelector(selectWalletNodeHost);
     const ledger2 = LedgerClientFactory.createClient({nodeHost});
     const userAccountpublicKey:string = useSelector(accountPublicKey);
     const {appName,Wallet,Ledger} = useContext(AppContext);
     const [nftLevel,setNftLevel] = useState<string>("");
     var nftImgAddress:string = "";
     var addressSuffix:string ="https://ipfs.io/ipfs/"; 
     useEffect(() => {
         // Function to fetch data from the APIc
         //console.log(`ipfs.io/ipfs/${image}`);
         fetch(`https://ipfs.io/ipfs/${image}`).then((res)=>{
             res.text().then((text)=>{
                 console.log(text); 
                 var nftInfo = JSON.parse(text);
                //  setNftLevel(nftInfo.attributes[0].level);
                //  console.log(nftInfo.attributes.description);
                 if(nftInfo.description.includes("1") === true){
                  setNftLevel("1");
                 }
                 if(nftInfo.description.includes("2") === true){
                  setNftLevel("2");
                 }
                 if(nftInfo.description.includes("3") === true){
                  setNftLevel("3");
                 }
                 //console.log(nftInfo); 
                 //console.log(typeof(nftInfo.media[0].social));
                 setImgAddress(nftInfo.media[0].social);
                 nftImgAddress = nftInfo.media[0].social; 
                 //console.log(nftImgAddress);
                 //console.log(imgAddress);
                 nftImgAddress = addressSuffix.concat(nftImgAddress);
                 //console.log(nftImgAddress);
                 setLoading(false);
             });

         });

         // Call the fetchData function

         // Optional cleanup function (not needed in this case)
         // If you had any subscription or timers, you'd clean them up here

         // Since we want the effect to run only once (on mount), we pass an empty dependency array
       }, [image]);
     const test = (abc:string) => {
         console.log(abc);
         return 1;
     }
     const equipNft = async() => {
       console.log("123");
       const accountInfo = `{"av":{"${imgAddress}":"image/png"},"ds":"${nftLevel}"}`;
       const setAccountInfo = await ledger2.account.setAccountInfo({
         name:"1234",
         description:accountInfo,
         feePlanck:"1000000",
         senderPublicKey:userAccountpublicKey,
       })
       //console.log(setAccountInfo);
       Wallet.Extension.confirm(setAccountInfo.unsignedTransactionBytes);
     };
     const transferToken = async() => {
      P2PTransferNftToken(Wallet,nodeHost,"4572964086056463895",nftId,userAccountpublicKey);
     };
   return(
      <>
      {loading?(<div>loading</div>):(
          imgAddress === ""?(<div>loading</div>):(

                  <div className = "myNftList">
                    <img className = "myNftImage" src = {`https://ipfs.io/ipfs/${imgAddress}`}></img>
                    <div className = "myNftDescription">
                    <div className = "myNftNumber">#0000000001</div>
                      <div className = "myNftBar">
                        <div  className = "myNftLevel">
                          Lv{nftLevel}       
                          </div>
                          <div className = "myNftVerticalLine"></div>  
                          <div  className = "inter-normal-white-12px">
                            Reward + 10%
                            </div>
                      </div>
                      <div className = "myNftPrice">
                        $0 SIGNA
                      </div>
                    </div>
                    <div className = "myNftBottom">
                    <button className = "myNftButton" onClick = {equipNft}>AVALIBLE</button>
                    <img 
                      onClick={() => {
                        setIsOpenPopup((prev) => !prev);
                        setSelectedAssetId(nftId);
                        setLevel(nftLevel);
                      }} 
                      className = "myNftButtomArrow" 
                      src  = {`${process.env.PUBLIC_URL}/img/NftList/ic-send@1x.png`}
                    />
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