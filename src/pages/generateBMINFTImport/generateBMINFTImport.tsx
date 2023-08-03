import * as React from 'react';
import '../../components/calendar.css';
import './generateBMINFTImport.css';


import { CenterLayout } from '../../components/layout';
import { BackButton } from '../../components/button';
import { BirthSelect, GenderSelect } from '../../components/select';
import { selectCurrentGender, selectCurrentImg, selectCurrentBMI } from '../../redux/profile';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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



interface IGenerateBMINFTImportProps {
}



const GenerateBMINFTImport: React.FunctionComponent<IGenerateBMINFTImportProps> = (props) => {
  const gender = useSelector(selectCurrentGender)
  const selfie = useSelector(selectCurrentImg)
  const BMI = useSelector(selectCurrentBMI)

  const [minted, setMinted] = React.useState(false); // whether the user has minted the NFT
  const navigate = useNavigate();
  const ledger = useLedger();
  const {appName,Wallet,Ledger} = useContext(AppContext);
  const publicKey = useSelector(accountPublicKey);
  const userAccountId = useSelector(accountId);
  const codeHashId = "7457358473503628676";


  const confirm = async () => {
    if (minted){
      console.log('not minted');
      return
    }

    if(ledger){
      setMinted(true);
      
      const asset = await ledger.asset.getAssetHolders({assetId:"3862155318820066741"});
      asset.accountAssets.map((obj)=>{
        if(obj.account == userAccountId){
          store.dispatch(accountSlice.actions.setToken(Number(obj.quantityQNT)));
          localStorage.setItem('token',obj.quantityQNT);
            console.log(obj.quantityQNT);
        }
      });
      console.log(store.getState());
      let ourContract = await ledger.contract.getContractsByAccount({
        accountId: userAccountId,
        machineCodeHash: codeHashId,
      });
      console.log(ourContract);
      console.log(ourContract.ats[0]);
      
      try {
        if(ourContract.ats[0] == null){
          const initializeContract = await ledger.contract.publishContractByReference({
            name: "BMI",
            description: `{'bmi': ${BMI}, 'gender': ${gender}, 'time': ${new Date()}}`,  //the first data is hidden in the description
            referencedTransactionHash:"62502D4233CA88EB7896031ACF4D729F4C6A570187161CA00FF291ED382769FD",
            feePlanck:"30000000",
            senderPublicKey:publicKey,
            deadline:1440,}) as UnsignedTransaction;
            console.log(initializeContract);
          await Wallet.Extension.confirm(initializeContract.unsignedTransactionBytes);
          while(ourContract.ats[0] == null){
            ourContract = await ledger.contract.getContractsByAccount({
              accountId: userAccountId,
              machineCodeHash: codeHashId,
  
              });
            console.log(ourContract);
          }
    /*
          const sendBMI = await ledger.message.sendMessage({
            message: BMI_test,
            messageIsText: true,
            recipientId: ourContract.ats[0].at,
            feePlanck: "1000000",
            senderPublicKey: publicKey,
            deadline: 1440,
            }) as UnsignedTransaction;
          await Wallet.Extension.confirm(sendBMI.unsignedTransactionBytes);*/
            
  
        } else{ //check whether the user has registered an account
          const sendBMI = await ledger.message.sendMessage({
            message: JSON.stringify({
              'bmi': BMI,
              'gender': gender,
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
        console.log('confirm');
        await TransferNFTOwnership(ledger,userAccountId,Wallet);
        navigate('/generateFreeNFT');
      } catch (error) {
        console.log(error);
        setMinted(false);
      }
    }
  }


  const content: JSX.Element = (
    <div
      className="bettermidapp-generate-bmidata-import"
      // onclick="window.open('bettermidapp-generate-bmi-daily.html', '_self');"
    >
      <BackButton/>
      <Link 
        to="/generateFreeNFT" 
        // onclick="window.event.stopPropagation()"
      >
        <div className="bottom-controls-pqhvJT">
          <div className="button_-mint-RUzxTX">
            <div className="button1-T8l3Om"></div>
            <div className="mint-T8l3Om inter-semi-bold-white-15px">Mint your NFT</div>
          </div>
        </div>
      </Link>
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
          <div className="bg-Gw4eM2"></div>
          <div className="x255-Gw4eM2">25.5</div>
          <div className="kgm2-Gw4eM2">
            <span className="span0-IFVIgU inter-normal-royal-blue-14px">kg/m</span><span className="span1-IFVIgU inter-normal-royal-blue-14px">2</span>
          </div>
        </div>
        <h1 className="title-bL0gm3 inter-semi-bold-white-28px">Your BMI Result :</h1>
      </div>
      <img className="photo-pqhvJT" src={selfie? selfie : "img/generateBMINFTImport/photo-1@1x.png"} alt="Photo" />
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
