import * as React from 'react';
import '../../components/calendar.css';
import './generateBMINFTImport.css';


import { CenterLayout } from '../../components/layout';
import { BackButton, DisabledButton } from '../../components/button';
import { BirthSelect, GenderSelect } from '../../components/select';
import { selectCurrentGender, selectCurrentImg, selectCurrentBMI, selectCurrentBirthday } from '../../redux/profile';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectWalletNodeHost } from '../../redux/useLedger';
import { TransferNftTokenOwnershipFinale } from '../../components/transferNftTokenFinale';

import { useNavigate } from 'react-router-dom';
import { useLedger } from '../../redux/useLedger';
import { Api } from '@reduxjs/toolkit/dist/query';
import { UnsignedTransaction } from "@signumjs/core";
import { useContext } from 'react';
import { AppContext } from '../../redux/useContext';
import { accountPublicKey } from '../../redux/account';
import { accountId } from '../../redux/account';
import { TransferNFTOwnership } from './transferNFTOwnership';
import { accountSlice } from '../../redux/account';
import { store } from '../../redux/reducer';
import { calBMIType, calRewardSigdaoOnSelfie } from '../../components/selfieToEarnRewardType';
import { TransferToken } from '../../components/transferToken';



interface IGenerateBMINFTImportProps {
}



const GenerateBMINFTImport: React.FunctionComponent<IGenerateBMINFTImportProps> = (props) => {
  const gender = useSelector(selectCurrentGender)
  const selfie = useSelector(selectCurrentImg)
  const BMI = useSelector(selectCurrentBMI)
  const birthday = useSelector(selectCurrentBirthday)
  const nodeHost = useSelector(selectWalletNodeHost);
  const [minted, setMinted] = React.useState(false); // whether the user has minted the NFT
  const navigate = useNavigate();
  const ledger = useLedger();
  const {appName,Wallet,Ledger} = useContext(AppContext);
  const publicKey = useSelector(accountPublicKey);
  const userAccountId = useSelector(accountId);
  const codeHashId = "7457358473503628676";
  const storeNftCodeHashId = "4589039375104983465";
  console.log(process.env.REACT_APP_NFT_STORAGE);
  console.log(process.env.REACT_APP_NFT_STORAGE?.split(","));
  const nftStorageAccounts = process.env.REACT_APP_NFT_STORAGE?.split(",");
  const nftStorageAccount = nftStorageAccounts![Math.floor(Math.random() * nftStorageAccounts!.length)];
  const nftDistributor = process.env.REACT_APP_NFT_DISTRIBUTOR;
  const NEXT_PUBLIC_NFT_CONTRACT_METHOD_TRANSFER:string= "-8011735560658290665";
  console.log(nftStorageAccount);
  var nftsWaitedToBeDistributed:string[] = [];
  var nftsToBeDistributed:string;

  console.log(ledger);
  const confirm = async () => {
    if (minted){
      console.log('not minted');
      return
    }

    if(ledger){
      setMinted(true);
      TransferNftTokenOwnershipFinale(nodeHost,userAccountId);   
      const asset = await ledger.asset.getAssetHolders({assetId:"13116962758643420722"});
      asset.accountAssets.map((obj)=>{
        if(obj.account == userAccountId){
          store.dispatch(accountSlice.actions.setToken(Number(obj.quantityQNT)/1000000));
          localStorage.setItem('token',obj.quantityQNT);
            console.log(obj.quantityQNT);
        }
      });

      let ourContract = await ledger.contract.getContractsByAccount({
        accountId: userAccountId,
        machineCodeHash: codeHashId,
      });
      // console.log(ourContract);
      // console.log(ourContract.ats[0]);
      let storeNftContract = await ledger.contract.getContractsByAccount({
        accountId: userAccountId,
        machineCodeHash: process.env.REACT_APP_NFT_MACHINE_CODE_HASH!,
      });
      // console.log(storeNftContract);
      // console.log(storeNftContract.ats[0]);
      // console.log(typeof(storeNftContract.ats[0]));
      console.log(Wallet);
      try {
        // todo: check if user has finished all smart contract build up
        if(storeNftContract.ats[0] == null){
          //console.log("called storeNftContract.ats.length",typeof(process.env.REACT_APP_NFT_CONTRACT_REFERENCED_TRANSACTION_HASH));
          const initializeNftContract = await ledger.contract.publishContractByReference({
            name: "NFT",
            description:"storage_space_for_your_nft",
            referencedTransactionHash:process.env.REACT_APP_NFT_CONTRACT_REFERENCED_TRANSACTION_HASH!,
            feePlanck:"30000000",
            senderPublicKey:publicKey,
            deadline:1440,}) as UnsignedTransaction;
            console.log(initializeNftContract);
          await Wallet.Extension.confirm(initializeNftContract.unsignedTransactionBytes);
        }
        if(ourContract.ats[0] == null){
          //console.log("called ourContract.ats[0] == null");
          const initializeContract = await ledger.contract.publishContractByReference({
            name: "BMI",
            description: JSON.stringify({'bmi': BMI, 'gender': gender, 'birthday': birthday, 'time': new Date()}),  //the first data is hidden in the description
            referencedTransactionHash:"62502D4233CA88EB7896031ACF4D729F4C6A570187161CA00FF291ED382769FD",
            feePlanck:"30000000",
            senderPublicKey:publicKey,
            deadline:1440,}) as UnsignedTransaction;
            console.log(initializeContract);
          await Wallet.Extension.confirm(initializeContract.unsignedTransactionBytes);
        } else{ //check whether the user has registered an account
          const sendBMI = await ledger.message.sendMessage({
            message: JSON.stringify({
              'bmi': BMI,
              'time': new Date(),
            }) ,
            messageIsText: true,
            recipientId: ourContract.ats[0].at,
            feePlanck: "1000000",
            senderPublicKey: publicKey,
            deadline: 1440,
          }) as UnsignedTransaction;
          await Wallet.Extension.confirm(sendBMI.unsignedTransactionBytes);
        }
        await TransferToken(nodeHost, userAccountId, calRewardSigdaoOnSelfie(BMI).toString());
        //await TransferNFTOwnership(ledger,userAccountId,Wallet);
        navigate('/loadingMinting');
      } catch (error) {
        console.log(error);
        setMinted(false);
      }
    }
  }


  const content: JSX.Element = (
    <div className="screen">
          <div
      className="bettermidapp-generate-bmidata-import"
      // onclick="window.open('bettermidapp-generate-bmi-daily.html', '_self');"
    >
      <BackButton/>
      <p className="import-biological-sex-birth-pqhvJT inter-bold-royal-blue-15px">IMPORT BIOLOGICAL SEX &amp; BIRTH:</p>
      <p className="your-selection-cannot-be-changed-later-pqhvJT">Your selection cannot be changed later.</p>
      <GenderSelect options={[{"label": "Female", "value": "1"}, {"label": "Male", "value": "2"}]} title='False' newPage={true} onSelect={(e) => console.log(e)}/>
      <BirthSelect />
      <div className="bmi-pqhvJT">
        <div className="bmi-result-bg-bL0gm3">
          <img className="seperate-line-IJAMVx seperate-line" src="img/generateBMINFTImport/seperat-line-1@1x.png" alt="seperate line" />
          <img className="seperate-line-X2g18V seperate-line" src="img/generateBMINFTImport/seperat-line-1@1x.png" alt="seperate line" />
        </div>
        <div className="bmi-result-bL0gm3">
          {/* <div className="bg-Gw4eM2" style={{backgroundColor: calBMIType(BMI).color}}></div> */}
          <div className="bg-Gw4eM2" ></div>
          <div className="x255-Gw4eM2">{BMI || 25.5}</div>
          <div className="kgm2-Gw4eM2">
            <span className="span0-IFVIgU inter-normal-royal-blue-14px">kg/m</span><span className="span1-IFVIgU inter-normal-royal-blue-14px">2</span>
          </div>
        </div>
        <h1 className="title-bL0gm3 inter-semi-bold-white-28px">Your BMI Result :</h1>
      </div>
      <div className="bottom-controls-pqhvJT" onClick={confirm}>
        {minted ?
          <DisabledButton text="connecting..." height='56px' width='248px' />
          :
          <div className="button_-mint-RUzxTX">
            <div className="button1-T8l3Om"></div>
            <div className="mint-T8l3Om inter-semi-bold-white-15px">Mint your NFT</div>
          </div>
        }
      </div>

      <img className="photo-pqhvJT" src={selfie? selfie : "img/generateBMINFTImport/photo-1@1x.png"} alt="Photo" />
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

export default GenerateBMINFTImport;
