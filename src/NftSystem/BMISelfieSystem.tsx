import { useContext } from "react";
import { UnsignedTransaction } from "@signumjs/core";
import { Contract, ContractDataView } from "@signumjs/contracts";
import { LedgerClientFactory } from "@signumjs/core";
import { useSelector } from "react-redux";
import { Api } from "@signumjs/core";
import { useNavigate } from "react-router-dom";
import { encryptAES,generateMasterKeys,hashSHA256 } from "@signumjs/crypto";
import { UpdateUserNftList } from "./updateUserNftList";
import { sendMessage } from "./updateUserNftList";
import { sortArrayAccordingToDescendingTimeStamps, sortUnconfirmedTransactionArrayAccordingToAscendingTimeStamps } from "./updateUserNftList";
import { FindLatestTransactionArray, FindLatestTransactionNumber, UpdateUserStorage } from "./updateUserNftStorage";
import { updateReceiverAccount } from "./updateUserNftStorage";
import { CheckNftOwnerId } from "./updateUserNftStorage";

function isToday(date: string): boolean {
    const today = new Date();
    const givenDate = new Date(date);
    console.log(givenDate);
    console.log(givenDate.getDate());

    return (
      givenDate.getDate() === today.getDate() &&
      givenDate.getMonth() === today.getMonth() &&
      givenDate.getFullYear() === today.getFullYear()
    );
  }

export async function CheckTakenSelfie(userAccountId:string,ledger2:any,BMIContractCodeHashId:string,nftDistributor:string){
    //userAccountId is the user's id not the BMI contract
    let BMIContract = await ledger2.contract.getContractsByAccount({
        accountId: userAccountId,
        machineCodeHash: BMIContractCodeHashId,
      });
      console.log(BMIContract.ats[0].at,"contract is 123");
     const message = await ledger2.account.getUnconfirmedAccountTransactions(BMIContract.ats[0].at);
     console.log(message);
    var unconfirmedTransactionList = await sortUnconfirmedTransactionArrayAccordingToAscendingTimeStamps(message.unconfirmedTransactions);
    console.log(unconfirmedTransactionList);
    for(var i = unconfirmedTransactionList.length - 1;i >= 0;i--){
        if(unconfirmedTransactionList[i].recipient === BMIContract.ats[0].at && unconfirmedTransactionList[i].sender === userAccountId){  //Also need to check sender
            var nftList = unconfirmedTransactionList[i].attachment.message;
            nftList = JSON.parse(nftList);
            console.log(nftList);
            if (typeof nftList === 'number') continue;
            console.log(nftList);
            const isTakenSelfie = isToday(nftList.time);
            console.log(isToday(nftList.time));
            return isTakenSelfie;
        }
    }
    const messagesOnChain = await ledger2.account.getAccountTransactions({accountId: BMIContract.ats[0].at});
    console.log(messagesOnChain);
    for(let i = 0 ; i < messagesOnChain.transactions.length ;i--){
        console.log(messagesOnChain.transactions[i].recipient,BMIContract.ats[0].at);
        console.log(messagesOnChain.transactions[i].sender,userAccountId);
        if(messagesOnChain.transactions[i].recipient === BMIContract.ats[0].at && messagesOnChain.transactions[i].sender === userAccountId){  //Also need to check sender
            let content = JSON.parse(messagesOnChain.transactions[i].attachment.message);
            if (typeof content === 'number') continue;
                console.log(content);
                const isTakenSelfie = isToday(content.time);
                console.log(isToday(content.time));
                return isTakenSelfie;
            // let dateFormat: UTCTimestamp  = Math.floor((tempDate.getTime() / 1000)) as UTCTimestamp;
        
            // BMI.push({time: dateFormat, value: Number(content.bmi)});
            // // sort the BMI value by time asc
            // BMI.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))
    
        // return_Date(Number(obj.timestamp));
      }

    // const message = bmiDataObject.message || null;
    // console.log(message, 'bmiDataObject message');
    // // if (!message) return [];
    // for(let i = message.transactions.length - 1; i >= 0 ;i--){
    //   let content = JSON.parse(message.transactions[i].attachment.message);
    //   if (typeof content === 'number') continue;
    //   let tempDate = new Date(content.time)
    //   let dateFormat: UTCTimestamp  = Math.floor((tempDate.getTime() / 1000)) as UTCTimestamp;
  
    //   BMI.push({time: dateFormat, value: Number(content.bmi)});
    //   // sort the BMI value by time asc
    //   BMI.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))
  
    //   // return_Date(Number(obj.timestamp));
    // }
    }
    return false;
}
export async function CheckIsUserANewUser(ledger2:any,userId:String,codeHashIdForContract:string,nftDistributor:string){
  let senderNftStorage = await ledger2.contract.getContractsByAccount({
      accountId: userId,
      machineCodeHash: codeHashIdForContract,
  });
  if(senderNftStorage.ats.length === 0){
return true;
  }
  else{return false}
  //console.log(senderNftStorage.ats);
};