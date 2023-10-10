import React from 'react';
import './loadingMinting.css';
import { CenterLayout } from '../../components/layout';
import { useLedger } from '../../redux/useLedger';
import { useSelector } from 'react-redux';
import { accountId } from '../../redux/account';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TransferNftToNewUser } from '../../NftSystem/transferNft';
import { FindLatestTransactionArray } from '../../NftSystem/updateUserNftStorage';
import { FindLatestTransactionNumber } from '../../NftSystem/updateUserNftStorage';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

interface ILoadingMintingProps {
}

const LoadingMinting: React.FunctionComponent<ILoadingMintingProps> = (props) => {
  const navigate = useNavigate();
  const ledger = useLedger();
  const userAccountId = useSelector(accountId);
  const nftCodeHashId = process.env.REACT_APP_NFT_MACHINE_CODE_HASH!; // the code hash of the BMI contract 
  const bmiCodeHashId = process.env.REACT_APP_BMI_MACHINE_CODE_HASH!; // the code hash of the BMI contract
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const nftLoaded = useRef(false);
  const nftDistributor = process.env.REACT_APP_NFT_DISTRIBUTOR!;
  const nftDistributorPublicKey = process.env.REACT_APP_NFT_DISTRIBUTOR_PUBLIC_KEY!;
  const nftDistributorPrivateKey = process.env.REACT_APP_NFT_DISTRIBUTOR_PRIVATE_KEY!;
  const mimiNftStorageAccounts = process.env.REACT_APP_NFT_STORAGE_MIMI!.split(",");
  const ioNftStorageAccounts = process.env.REACT_APP_NFT_STORAGE_IO!.split(",");
  const checkIfNFTMinted = async () => {
    if (!ledger) return;
    // const startTime: number = Date.now(); // get the current time in milliseconds


    let nftContract = await ledger.contract.getContractsByAccount({
      accountId: userAccountId,
      machineCodeHash: nftCodeHashId,
    });
    let bmiContract = await ledger.contract.getContractsByAccount({
      accountId: userAccountId,
      machineCodeHash: bmiCodeHashId,
    });

    while(bmiContract.ats[0] == null){
      bmiContract = await ledger.contract.getContractsByAccount({
        accountId: userAccountId,
        machineCodeHash: bmiCodeHashId,
        });
      nftContract = await ledger.contract.getContractsByAccount({
        accountId: userAccountId,
        machineCodeHash: nftCodeHashId,
      });
      console.log(nftContract);
      console.log(bmiContract);
    }
    const description = bmiContract.ats[0].description;
    var gender = "Male";
    if(description.includes("Female")){
      gender = "Female";
    }
    if(gender === "Male"){
      console.log("called gender === Male");
      await TransferNftToNewUser(ledger,userAccountId,ioNftStorageAccounts,nftCodeHashId,nftDistributor,nftDistributorPublicKey,nftDistributorPrivateKey);
    }
    else{
      await TransferNftToNewUser(ledger,userAccountId,mimiNftStorageAccounts,nftCodeHashId,nftDistributor,nftDistributorPublicKey,nftDistributorPrivateKey);
    }
    console.log("gender is   ",gender);
    const latestTransactionNumber = await FindLatestTransactionNumber(ledger,nftContract.ats[0].at,nftDistributor);
    const latestTransactionList = await FindLatestTransactionArray(ledger,nftContract.ats[0].at,nftDistributor,latestTransactionNumber);
    console.log(latestTransactionList);
    console.log(latestTransactionList[0]);
    if(latestTransactionList.length === 0){
      console.log("The latestTransactionList is empty, returned error", latestTransactionList);
      setCount(100)
      setIsLoading(false);
      navigate('/generateFreeNFT',{state:{nftId:"error"}});
    }
    else{
      setCount(100)
      setIsLoading(false);
      navigate('/generateFreeNFT',{state:{nftId:latestTransactionList[0]}});
    }
  }


  useEffect(() => {
    if(nftLoaded.current ===true){
      console.log("loaded nft");
    }
    else{
      nftLoaded.current = true;
    checkIfNFTMinted()
      .catch((err) => {
        console.error(err);
      })
    }
  }, [])

  
  useEffect(() => {
    const incrementInterval = 240000 / 96; // Time divided by the number of increments
    // const incrementInterval = 5000 / 100;
    const timer = setInterval(() => {
      if(count < 100){
      setCount((prevCount) => prevCount + 1);
      }
      // if (count => 100 ) {
      // } else {
      //   setIsLoading(false);
      //   navigate('/generateFreeNFT');
      //   clearInterval(timer);
      // }
    }, incrementInterval);

    return () => {
      // setIsLoading(false);
      // navigate('/generateFreeNFT');
      clearInterval(timer);
    };
  }, []);


  // useEffect(() => {
  //   if (count >= 100) {
  //     setIsLoading(false);
  //     navigate('/generateFreeNFT');

  //     // const timeout = setTimeout(() => {
  //     //   setIsLoading(false);
  //     //   navigate('/generateFreeNFT');
  //     // }, 1000);

  //     // timeout
  
  //     // return () => {
  //     //   clearTimeout(timeout);
  //     // };
  //   }
  // }, [count]);




  const content: JSX.Element = (
    <div className="screen">
    <div className="bettermidapp-generate-free-nft-minting">
      <div className="bg_2-JdJl2l">
          {/* <img className="bg-7ckAMs" src="img/loadingMinting/bg-11@1x.png" alt="BG" /> */}
          {/* <div className="loader-7ckAMs">
            <div className="x001-loading-u5QZHJ">
                <div className="x107-MxmV9X"></div>
                <div className="x108-MxmV9X"></div>
                <div className="x109-MxmV9X"></div>
                <div className="x110-MxmV9X"></div>
                <div className="x111-MxmV9X"></div>
                <div className="x112-MxmV9X"></div>
                <div className="x113-MxmV9X"></div>
                <div className="x114-MxmV9X"></div>
                <div className="x115-MxmV9X"></div>
            </div>
          </div> */}
          {/* <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> */}
          <div className="mimi-loading">
            <img className='mimi-loading-image' src="/img/loadingMinting/mimi-dancing-for-loadin-page.gif" alt="" />
          </div>
          <div className="x50-7ckAMs">{count}%</div>
          {/* <a href="bettermidapp-settings-1.html">
            <div className="ic_settings_24px-7ckAMs ic_settings_24px">
                <img
                  className="ic_settings_24px-alZAUJ ic_settings_24px"
                  src="img/loadingMinting/ic-settings-24px-1@1x.png"
                  alt="ic_settings_24px"
                  />
            </div>
          </a> */}
          {/* <a href="bettermidapp-ai-coach.html">
            <div className="ic_sentiment_very_satisfied_24px-7ckAMs ic_sentiment_very_satisfied_24px">
                <img
                  className="ic_sentiment_very_satisfied_24px-VxvOOd ic_sentiment_very_satisfied_24px"
                  src="img/loadingMinting/ic-sentiment-very-satisfied-24px-1@1x.png"
                  alt="ic_sentiment_very_satisfied_24px"
                  />
            </div>
          </a> */}
      </div>
      {/* <a href="javascript:history.back()">
          <div className="icon-arrow-left-JdJl2l icon-arrow-left">
            <img
                className="icon-arrow-left-cQ3AYZ icon-arrow-left"
                src="img/loadingMinting/icon-arrow-left-10@1x.png"
                alt="icon-arrow-left"
                />
          </div>
      </a> */}
      {/* <div className="bars-status-bar-i-phone-light-JdJl2l">
          <div className="frame-PAFj23"></div>
          <div className="status-bar-PAFj23">
            <div className="battery-9cGPS4">
                <div className="border-IlCvJx"></div>
                <img className="cap-IlCvJx" src="img/loadingMinting/cap-1@1x.png" alt="Cap" />
                <div className="capacity-IlCvJx"></div>
            </div>
            <img className="wifi-9cGPS4" src="img/loadingMinting/wifi-1@1x.png" alt="Wifi" />
            <img className="cellular-connection-9cGPS4" src="img/loadingMinting/cellular-connection-1@1x.png" alt="Cellular Connection" />
            <div className="time-style-9cGPS4">
                <div className="time-fIdwUD sfprotext-semi-bold-white-15px">9:41</div>
            </div>
          </div>
      </div> */}
      <div className="minting-JdJl2l inter-normal-white-15px">Minting…</div>
      <div className="reminder-text-1 inter-normal-white-15px">Please wait patiently<br/>and do not refresh the page</div>
      {/* <div className="reminder-text-2 inter-normal-white-15px">and do not refresh the page</div> */}
    </div>

    </div>
  )
  

  return (
    <CenterLayout
      content={content}
      bgImg={false}
    />
  )
};

export default LoadingMinting;
