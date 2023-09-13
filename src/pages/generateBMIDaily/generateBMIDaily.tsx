import * as React from 'react';
import './generateBMIDaily.css';
import { CenterLayout } from '../../components/layout';
import { BackButton } from '../../components/button';
import { Link, useNavigate } from 'react-router-dom';
import { selectCurrentGender, selectCurrentImg, selectCurrentBMI, profileSlice } from '../../redux/profile';
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { useLedger } from '../../redux/useLedger';
import { accountId } from '../../redux/account';
import { accountPublicKey } from '../../redux/account';
import { AppContext } from '../../redux/useContext';
import { UnsignedTransaction } from "@signumjs/core";
import { TransferNft } from '../../NftSystem/transferNft';
import { walletNodeHost } from '../../redux/wallet';
import { LedgerClientFactory } from '@signumjs/core';




interface IGenerateBMIDailyProps {
}


const GenerateBMIDaily: React.FunctionComponent<IGenerateBMIDailyProps> = (props) => {
  const selfie = useSelector(selectCurrentImg)
  const bmi = useSelector(selectCurrentBMI)
  const publicKey = useSelector(accountPublicKey);
  const userAccountId = useSelector(accountId);
  const {appName, Wallet, Ledger} = useContext(AppContext);
  const nftStorageAccounts = process.env.REACT_APP_NFT_STORAGE?.split(",");
  const codeHashIdForNft = "5093642053599315133";


  const navigate = useNavigate();
  const ledger = useLedger();
  const dispatch = useDispatch();
  const codeHashId = "7457358473503628676"; // the code hash of the BMI contract 
  
  

  const handleImport = async () => {
    if (!ledger) return;
    // const startTime: number = Date.now(); // get the current time in milliseconds

    let storeNftContract = await ledger.contract.getContractsByAccount({
      accountId: userAccountId,
      machineCodeHash: process.env.REACT_APP_NFT_MACHINE_CODE_HASH!,
    });
    console.log(storeNftContract);
    try{        
      if(storeNftContract.ats[0] == null){
        console.log(storeNftContract.ats[0]);
      console.log("called storeNftContract.ats.length",typeof(process.env.REACT_APP_NFT_CONTRACT_REFERENCED_TRANSACTION_HASH));
      const initializeNftContract = await ledger.contract.publishContractByReference({
        name: "NFT",
        description:"storage_space_for_your_nft",
        referencedTransactionHash:process.env.REACT_APP_NFT_CONTRACT_REFERENCED_TRANSACTION_FULL_HASH!,
        feePlanck:"30000000",
        senderPublicKey:publicKey,
        deadline:1440,}) as UnsignedTransaction;
        console.log(initializeNftContract);
      await Wallet.Extension.confirm(initializeNftContract.unsignedTransactionBytes);
    }}catch(error){
      if (error.name !== "ExtensionWalletError") {
        navigate('/errorGenerateNFT')
      }
    }

    let ourContract = await ledger.contract.getContractsByAccount({
      accountId: userAccountId,
      machineCodeHash: codeHashId,
    });


    const sendBMI = await ledger.message.sendMessage({
      message: JSON.stringify({
        'bmi': bmi || '25.5',
        'time': new Date(),
      }) ,
      messageIsText: true,
      recipientId: ourContract.ats[0]?.at,
      feePlanck: "1000000",
      senderPublicKey: publicKey,
      deadline: 1440,
    }) as UnsignedTransaction;
    
   // TransferNft(ledger2,userAccountId,nftStorageAccounts,codeHashIdForNft);

    await Wallet.Extension.confirm(sendBMI.unsignedTransactionBytes);


    dispatch(profileSlice.actions.setIsSelfie(true));
    // try {
    //   await Wallet.Extension.confirm(sendBMI.unsignedTransactionBytes);
    // } catch (error) {
    //   navigate('/errorWalletNotConnected');
    // }

    navigate('/selfieToEarn');
}

  const content: JSX.Element = (
    <div className="screen">
      <div className="bettermidapp-generate-bmi-daily">
        {/* <div className="bg_2-Fd1por"><img className="bg-8YXhC4" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/bg-11@1x.png`} alt="BG" /></div> */}
        <BackButton />
        <img className="photo-Fd1por" src={selfie ? selfie : `${process.env.PUBLIC_URL}/img/generateBMIDaily/photo-1@1x.png`} alt="Photo" />
        <div className="bottom-controls-Fd1por" onClick={handleImport}>
          <div className="button_-mint-FZh05Y">
            <div className="button1-WZiHbv"></div>
            <div className="mint-WZiHbv inter-semi-bold-white-15px">Import</div>
          </div>
        </div>
        <div className="bmi-bar-Fd1por">
          <div className="x42-W9pEKc"></div>
          <div className="x43-W9pEKc"></div>
          <div className="x44-W9pEKc"></div>
          <div className="x45-W9pEKc"></div>
          <div className="x48-W9pEKc"></div>
          <img className="x546-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---546@1x.png`} alt="546" />
          <img className="x612-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---546@1x.png`} alt="612" />
          <img className="x547-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---546@1x.png`} alt="547" />
          <img className="x548-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---546@1x.png`} alt="548" />
          <img className="x549-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---546@1x.png`} alt="549" />
          <img className="x550-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---546@1x.png`} alt="550" />
          <img className="x555-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="555" />
          <img className="x556-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="556" />
          <img className="x560-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="560" />
          <img className="x611-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="611" />
          <img className="x561-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="561" />
          <img className="x610-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="610" />
          <img className="x562-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="562" />
          <img className="x609-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="609" />
          <img className="x563-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="563" />
          <img className="x608-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="608" />
          <img className="x564-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="564" />
          <img className="x565-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="565" />
          <img className="x566-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="566" />
          <img className="x607-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="607" />
          <img className="x567-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="567" />
          <img className="x606-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="606" />
          <img className="x568-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="568" />
          <img className="x605-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="605" />
          <img className="x569-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---569@1x.png`} alt="569" />
          <img className="x570-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="570" />
          <img className="x571-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="571" />
          <img className="x572-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="572" />
          <img className="x573-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="573" />
          <img className="x574-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="574" />
          <img className="x575-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="575" />
          <img className="x576-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="576" />
          <img className="x577-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="577" />
          <img className="x578-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="578" />
          <img className="x613-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="613" />
          <img className="x579-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="579" />
          <img className="x614-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="614" />
          <img className="x621-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="621" />
          <img className="x580-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="580" />
          <img className="x615-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="615" />
          <img className="x622-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="622" />
          <img className="x581-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="581" />
          <img className="x616-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="616" />
          <img className="x623-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="623" />
          <img className="x582-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="582" />
          <img className="x583-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="583" />
          <img className="x584-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="584" />
          <img className="x617-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="617" />
          <img className="x624-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="624" />
          <img className="x585-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="585" />
          <img className="x618-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="618" />
          <img className="x625-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="625" />
          <img className="x586-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="586" />
          <img className="x619-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="619" />
          <img className="x626-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="626" />
          <img className="x587-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="587" />
          <img className="x588-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="588" />
          <img className="x589-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="589" />
          <img className="x590-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="590" />
          <img className="x591-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="591" />
          <img className="x592-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="592" />
          <img className="x593-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="593" />
          <img className="x594-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="594" />
          <img className="x595-W9pEKc" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/file---555@1x.png`} alt="595" />
        </div>
        <div className="x16226-Fd1por">
          <div className="bmi-goal-hRJK8R">
            <div className="healthy-XoARmf">Healthy</div>
            <div className="x876-XoARmf"></div>
          </div>
          <div className="today-bmi-hRJK8R today-bmi">
            <div className="underweight-nuwbc0">Underweight</div>
            <div className="x877-nuwbc0 x877"></div>
          </div>
          <div className="today-bmi-dLN1xz today-bmi">
            <div className="overweight-fJOyTP">Overweight</div>
            <div className="x877-fJOyTP x877"></div>
          </div>
          <div className="today-bmi-RPkxVM today-bmi">
            <div className="obese-Uyn5Ye">Obese</div>
            <div className="x877-Uyn5Ye x877"></div>
          </div>
        </div>
        <div className="bmi-Fd1por">
          <div className="bmi-result-bg-xzTWC0">
            <img className="seperate-line-tCiIF6 seperate-line" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/seperat-line-1@1x.png`} alt="seperate line" />
            <img className="seperate-line-yGZJUM seperate-line" src={`${process.env.PUBLIC_URL}/img/generateBMIDaily/seperat-line-1@1x.png`} alt="seperate line" />
          </div>
          <div className="bmi-result-xzTWC0">
            <div className="bg-jtY5eq"></div>
            <div className="x255-jtY5eq">{bmi || '25.5'}</div>
            <div className="kgm2-jtY5eq">
              <span className="span0-JRVpal inter-normal-royal-blue-14px">kg/m</span><span className="span1-JRVpal inter-normal-royal-blue-14px">2</span>
            </div>
          </div>
          <h1 className="title-xzTWC0 inter-semi-bold-white-28px">Your BMI Result :</h1>
        </div>
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

export default GenerateBMIDaily;
