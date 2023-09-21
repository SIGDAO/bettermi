import { useContext } from "react";
import { UnsignedTransaction } from "@signumjs/core";
import { Contract, ContractDataView } from "@signumjs/contracts";
import { LedgerClientFactory } from "@signumjs/core";
import { useSelector } from "react-redux";
import { Api } from "@signumjs/core";
import { useNavigate } from "react-router-dom";
import { encryptAES,generateMasterKeys,hashSHA256 } from "@signumjs/crypto";
import { sortUnconfirmedTransactionArrayAccordingToAscendingTimeStamps } from "./updateUserNftList";
import { sortArrayAccordingToDescendingTimeStamps } from "./updateUserNftList";
import { send } from "process";
import { sendMessage } from "./updateUserNftList";


export async function AddNftToAccount(ledger2:any, recipientId:string,nftToBeDistributed:string){
    
}


export async function FindLatestTransactionNumber(ledger2:any,recipient:string,nftDistributor:string){//Takes the account id of recipient but not the contrat Id
    console.log(ledger2);
    console.log(recipient);
    console.log(nftDistributor)
    const message = await ledger2.account.getUnconfirmedAccountTransactions(recipient);
    console.log(message);
    var unconfirmedTransactionList = await sortUnconfirmedTransactionArrayAccordingToAscendingTimeStamps(message.unconfirmedTransactions);
    console.log(unconfirmedTransactionList);
    var latestTransactionNumber:string = "0";
    var finalArray:string[] = [];
    var tempArray:string[] = [];
    for(var i = unconfirmedTransactionList.length - 1;i >= 0;i--){
        if(unconfirmedTransactionList[i].sender === nftDistributor && unconfirmedTransactionList[i].recipient === recipient){
            tempArray = unconfirmedTransactionList[i].attachment.message.split(",");
            console.log("Latest Transaction found",tempArray[0]);
            latestTransactionNumber = tempArray[0];
            console.log("latest transaction number is ",latestTransactionNumber);
            return latestTransactionNumber;
    }
}
    var transactionList = await ledger2.account.getAccountTransactions({
        accountId: recipient,
    });
    var nftListInUserAccount = await sortArrayAccordingToDescendingTimeStamps(transactionList.transactions);
    console.log("Finding the lastest transaction from user's nftStorage account",transactionList);
    for (var i = 0;nftListInUserAccount.length;i++){
        if(nftListInUserAccount[i].sender === nftDistributor && nftListInUserAccount[i].recipient === recipient){    
            tempArray = nftListInUserAccount[i].attachment.message.split(",");
                latestTransactionNumber = tempArray[0];
                console.log("latest transaction number is ",latestTransactionNumber);
                return latestTransactionNumber;
            }
    }
    console.log("latest transaction number is ",latestTransactionNumber)
    return latestTransactionNumber;
}

export async function FindLatestTransactionArray(ledger2:any,recipient:string,nftDistributor:string,latestTransactionNumber:string):Promise<string[]>{//Takes the account id of recipient but not the contrat Id
    console.log(recipient);
    const message = await ledger2.account.getUnconfirmedAccountTransactions(recipient);
    var unconfirmedTransactionList = await sortUnconfirmedTransactionArrayAccordingToAscendingTimeStamps(message.unconfirmedTransactions);
    console.log(unconfirmedTransactionList);
    var finalArray:string[] = [];
    var tempArray:string[] = [];
    if(latestTransactionNumber === "0"){
        finalArray.push("empty")
        return finalArray;
    }
    for(var i = unconfirmedTransactionList.length - 1;i >= 0;i--){
        if(unconfirmedTransactionList[i].sender === nftDistributor && unconfirmedTransactionList[i].recipient === recipient){
            tempArray = unconfirmedTransactionList[i].attachment.message.split(",");
            console.log("the temp array is",tempArray);
            if(tempArray[1] === "empty"){
                console.log("no NftLeft");
                finalArray.push("empty")
                return finalArray;
            }
            if(latestTransactionNumber === tempArray[0]){
                tempArray.splice(0,1);
                finalArray = finalArray.concat(tempArray);
            }
            console.log("the final array is",finalArray);
        //     finalArray = finalArray.concat(tempArray);
        //     for(var j = i; j >= 0; j--){
        //         if(unconfirmedTransactionList[j].sender === nftDistributor && unconfirmedTransactionList[j].recipient === recipient){
        //             tempArray = unconfirmedTransactionList[j].attachment.message.split(",");
        //             if(tempArray[j] === latestTransactionNumber){
        //                 tempArray.splice(0,1);
        //                 finalArray = finalArray.concat(tempArray);
        //             console.log("Latest Transaction found",tempArray[0]);
        //             }
        //             if(Number(tempArray[j]) < Number(latestTransactionNumber)){
        //                 break;
        //             } 
        //     }
        //     break;
        // }
    if(Number(tempArray[i]) < Number(latestTransactionNumber)){
        break;
    }
}
    }
    var transactionList = await ledger2.account.getAccountTransactions({
        accountId: recipient,
    });
    var nftListInUserAccount = await sortArrayAccordingToDescendingTimeStamps(transactionList.transactions);
    console.log("Finding the lastest transaction from user's nftStorage account",nftListInUserAccount);
    console.log(nftListInUserAccount.length);
    for (var i = 0;i<nftListInUserAccount.length;i++){
        tempArray = nftListInUserAccount[i].attachment.message.split(",");
        console.log(i);
        console.log(tempArray);
        if(nftListInUserAccount[i].sender === nftDistributor && nftListInUserAccount[i].recipient === recipient){
            if(tempArray[1] === "empty"){
                console.log("no nft left");
                finalArray.push("empty")
                return finalArray;            
            }
            if(latestTransactionNumber === tempArray[0]){
                console.log("Latest Transaction found",tempArray[0]);
                tempArray.splice(0,1);
                finalArray = finalArray.concat(tempArray);
                continue;
            }
            if(Number(tempArray[0]) != Number(latestTransactionNumber)){
                console.log("not latest transaction",latestTransactionNumber,"   ",tempArray);
                break;
            } 
        }
}
console.log("the final array is",finalArray);
return finalArray;
}



export async function updateReceiverAccount(ledger2:any, recipientId:string,codeHashId:string,nftToBeDistributed:string,nftDistributor:string,nftDistributorPublicKey:string,nftDistributorPrivateKey:string){
    let receiverNftStorage = await ledger2.contract.getContractsByAccount({
        accountId: recipientId,
        machineCodeHash: codeHashId,
    });
    var latestTransactionList:string[] = [];
    var finalNftList:string[] = [];
    var finalNftListString:string = "";
    const latestTransactionNumber = await FindLatestTransactionNumber(ledger2,receiverNftStorage.ats[0].at,nftDistributor);
    const newTransactionNumber = (Number(latestTransactionNumber) + 1).toString();
    latestTransactionList = await FindLatestTransactionArray(ledger2,receiverNftStorage.ats[0].at,nftDistributor,latestTransactionNumber);
    if(latestTransactionList[0] === "empty"){
        finalNftList.push(newTransactionNumber);
        finalNftList.push(nftToBeDistributed); 
        finalNftListString = finalNftList.join(",");
        console.log("final nft list is",finalNftListString);
        sendMessage(ledger2,finalNftListString,receiverNftStorage.ats[0].at,nftDistributorPublicKey,nftDistributorPrivateKey,"1000000");
    }

    else{
        console.log("latest transaction list is ",latestTransactionList);
        if(latestTransactionList.includes(nftToBeDistributed) === true){
            console.log("The nft is already included, return");
            return "unsuccessful";
        }
        finalNftList.push(newTransactionNumber);
        finalNftList.push(nftToBeDistributed);
        for(var i = 0;i<latestTransactionList.length;i++){
            console.log(latestTransactionList[i]);
            finalNftList.push(latestTransactionList[i]);
            if(i !=0 && i%46 == 0){
                finalNftListString = finalNftList.join(",");
                console.log("final nft list to be sent is",finalNftListString);
                sendMessage(ledger2,finalNftListString,receiverNftStorage.ats[0].at,nftDistributorPublicKey,nftDistributorPrivateKey,"6000000");
                finalNftList = [];
                finalNftList.push(newTransactionNumber);
                console.log("The finalNftList after clearing",finalNftList);
                continue;
            }
            if(i == latestTransactionList.length - 1){
                finalNftListString = finalNftList.join(",");
                console.log("final nft list to be sent is",finalNftListString);
                const feePlanck:string = ((Math.floor((i%46)/8) + 1)*1000000).toString();
                console.log(feePlanck);
                sendMessage(ledger2,finalNftListString,receiverNftStorage.ats[0].at,nftDistributorPublicKey,nftDistributorPrivateKey,feePlanck);
                finalNftList = [];
                finalNftList.push(newTransactionNumber);
                console.log("The finalNftList after clearing",finalNftList);
            }
        }

        //sendMessage(ledger2,finalNftListString,senderNftStorage.ats[0].at,nftDistributorPublicKey,nftDistributorPrivateKey,"1000000");

    }


}

export async function CheckNftOwnerId(ledger2:any,contractId:string){
    const contract = await ledger2.contract.getContract(contractId);
    console.log(contract);
    const view = new ContractDataView(contract);
    console.log(view.getVariableAsDecimal(0));
    return view.getVariableAsDecimal(0);

};


export async function updateSenderAccount(ledger2:any, senderId:string,codeHashId:string,nftToBeDistributed:string,nftDistributor:string,nftDistributorPublicKey:string,nftDistributorPrivateKey:string){
    let senderNftStorage = await ledger2.contract.getContractsByAccount({
        accountId: senderId,
        machineCodeHash: codeHashId,
    });
    var latestTransactionList:string[] = [];
    var finalNftList:string[] = [];
    var finalNftListString:string = "";
    const latestTransactionNumber = await FindLatestTransactionNumber(ledger2,senderNftStorage.ats[0].at,nftDistributor);
    const newTransactionNumber = (Number(latestTransactionNumber) + 1).toString();
    latestTransactionList = await FindLatestTransactionArray(ledger2,senderNftStorage.ats[0].at,nftDistributor,latestTransactionNumber);
    if(latestTransactionList[0] === "empty"){

        console.log("no such nft exist. No NFT in this account");
        return "unsuccessful";
    }
    else{
        console.log("latest transaction list is ",latestTransactionList);
        const index = latestTransactionList.indexOf(nftToBeDistributed);
        if(index !== -1){
            latestTransactionList.splice(index,1);
            finalNftList.push(newTransactionNumber);
            if(latestTransactionList.length === 0){
                finalNftList.push("empty");
                console.log("final nft list is empty and it is",finalNftList);
                finalNftListString = finalNftList.join(",");
                sendMessage(ledger2,finalNftListString,senderNftStorage.ats[0].at,nftDistributorPublicKey,nftDistributorPrivateKey,"1000000");
            }
            for(var i = 0;i<latestTransactionList.length;i++){
                console.log(latestTransactionList[i]);
                finalNftList.push(latestTransactionList[i]);
                if(i !=0 && i%46 == 0){
                    finalNftListString = finalNftList.join(",");
                    console.log("final nft list to be sent is",finalNftListString);
                    sendMessage(ledger2,finalNftListString,senderNftStorage.ats[0].at,nftDistributorPublicKey,nftDistributorPrivateKey,"6000000");
                    finalNftList = [];
                    finalNftList.push(newTransactionNumber);
                    console.log("The finalNftList after clearing",finalNftList);
                    continue;
                }
                if(i == latestTransactionList.length - 1){
                    finalNftListString = finalNftList.join(",");
                    console.log("final nft list to be sent is",finalNftListString);
                    const feePlanck:string = ((Math.floor((i%46)/8) + 1)*1000000).toString();
                    console.log(feePlanck);
                    sendMessage(ledger2,finalNftListString,senderNftStorage.ats[0].at,nftDistributorPublicKey,nftDistributorPrivateKey,feePlanck);
                    finalNftList = [];
                    finalNftList.push(newTransactionNumber);
                    console.log("The finalNftList after clearing",finalNftList);
                }
            }
            return "successful";
        }
        else{
            console.log("no such nft exist. No NFT in this account");
            return "unsuccesful";
        }
    }
}

export async function p2pTransferNft(ledger2:any,wallet:any,nftToBeDistributed:string,senderPublicKey:string,recipientId:string){
    const transaction = await ledger2.contract.callContractMethod({
        senderPublicKey: senderPublicKey,
        feePlanck: "2000000",
        amountPlanck: "30000000",
        contractId: nftToBeDistributed,
        methodHash: "-8011735560658290665",
        methodArgs: [recipientId],
        });
        await wallet.Extension.confirm(transaction.unsignedTransaction);
}

export async function TransferNft(ledger2:any,wallet:any,nftToBeDistributed:string,recipientId:string,senderPrivateKey:string,senderPublicKey:string){
    
await ledger2.contract.callContractMethod({
  senderPublicKey: senderPublicKey,
  senderPrivateKey: senderPrivateKey,
  feePlanck: "2000000",
  amountPlanck: "30000000",
  contractId: nftToBeDistributed,
  methodHash: "-8011735560658290665",
  methodArgs: [recipientId],
});
}

export async function UpdateUserStorage(ledger2:any, senderId:string,recipientId:string,codeHashId:string,nftToBeDistributed:string,nftDistributor:string,nftDistributorPublicKey:string,nftDistributorPrivateKey:string){
    const result = await updateSenderAccount(ledger2,senderId,codeHashId,nftToBeDistributed,nftDistributor,nftDistributorPublicKey,nftDistributorPrivateKey); //Find and delete
    if(result === "successful"){
        console.log("the result is",result);

        //Run check if such nft belong to user
        await updateReceiverAccount(ledger2,recipientId,codeHashId,nftToBeDistributed,nftDistributor,nftDistributorPublicKey,nftDistributorPrivateKey);
    }

    else{
        await updateReceiverAccount(ledger2,recipientId,codeHashId,nftToBeDistributed,nftDistributor,nftDistributorPublicKey,nftDistributorPrivateKey);
        console.log("oops something went wrong");

        //Run check if such nft belong to user
    }

}

export async function IsUserSettingUpdating(ledger2:any,userAccountId:string){

        const messages = await ledger2.account.getUnconfirmedAccountTransactions(userAccountId);
        console.log(messages);
        for (var i = 0; i < messages.unconfirmedTransactions.length; i++){
            if(messages.unconfirmedTransactions[i].type === 1 && messages.unconfirmedTransactions[i].subtype === 5 && messages.unconfirmedTransactions[i].sender === userAccountId){
                console.log("updating personal info");

                return true;
            }
        }
        return false;

}

// export function UpdateUserStorageButton(){
//     const codeHashId = "5093642053599315133";
//     const Ledger2 = LedgerClientFactory.createClient({nodeHost:"https:europe3.testnet.signum.network"});
//     const senderId = "416342944383657789";
//     const recipientId = "9998305876488457803";
//     const nftDistributor = "4572964086056463895";
//     const nftToBeDistributed = "10668973197928562219";
//     const nftDistributorPublicKey = "041f3b333d93ba9b24eaf324d1090f763f7c78ed0b7922d2d3eaeecaf440501c";
//     const nftDistributorPrivateKey = "83a4a4e95bc8da68a9c00b7b86523d576b967236ac67a7c0bfb98b3c5d19df0e";
//     const passInfo = async () => {
//         if(Ledger2 != null){
//             UpdateUserStorage(Ledger2,senderId,recipientId,codeHashId,nftToBeDistributed,nftDistributor,nftDistributorPublicKey,nftDistributorPrivateKey);
//      }}

//     return (<button onClick = {passInfo}>UpdateUserStorage</button>);
// }
