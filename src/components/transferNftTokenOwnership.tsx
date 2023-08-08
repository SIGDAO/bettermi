import { useContext } from "react";
import { AppContext } from "../redux/useContext";
import { useLedger } from "../redux/useLedger";
import { UnsignedTransaction } from "@signumjs/core";
import { Contract, ContractDataView } from "@signumjs/contracts";
import { LedgerClientFactory } from "@signumjs/core";
import { accountId } from "../redux/account";
import { useSelector } from "react-redux";
import { Api } from "@signumjs/core";
import { walletNodeHost } from "../redux/wallet";
import { useNavigate } from "react-router-dom";


export const TransferNftTokenOwnership = async (nodeHost:any,accountId:any) => {
  const walletNodeHost:string = nodeHost?nodeHost:window.localStorage.getItem('nodeHost');
  const nftStorageAccounts = process.env.REACT_APP_NFT_STORAGE?.split(",");
const nftStorageAccount = nftStorageAccounts![Math.floor(Math.random() * nftStorageAccounts!.length)]; //Pick a random account from the storage
console.log(nftStorageAccount, "nftStorageAccount");
const nftDistributor = process.env.REACT_APP_NFT_DISTRIBUTOR;
    const ledger2 =LedgerClientFactory.createClient({nodeHost:walletNodeHost });
    console.log(typeof(nftStorageAccount));
    console.log(ledger2, "ledger2");
    const nftTokenId = await ledger2.account.getAccountTransactions({
        accountId: nftStorageAccount,
        type:1,
        subtype:0,
    });//get the nft Token ids from the user account
    var nftList;
    for(var i = 0;i<nftTokenId.transactions.length;i++){
        if(nftTokenId.transactions[i].sender === nftDistributor){
            nftList = nftTokenId.transactions[i].attachment.message;
        }
    }//filter out the messages that is from us
    console.log(nftList, "nftList");
    nftList = nftList.split(",");
    const arrayIndex = Math.floor(Math.random() * nftList.length);
    const nftToBeDistributed = nftList[arrayIndex];
    console.log(nftToBeDistributed, "nftToBeDistributed");
    await ledger2.asset.transferAsset({
        assetId:nftToBeDistributed,
        quantity:"1",
        recipientId:accountId,
        senderPrivateKey:process.env.REACT_APP_NFT_DISTRIBUTOR_PRIVATE_KEY!,
        skipAdditionalSecurityCheck:true,
        feePlanck:"1000000",
        senderPublicKey:process.env.REACT_APP_NFT_DISTRIBUTOR_PUBLIC_KEY!,
    });
    nftList.splice(arrayIndex,1);
    nftList.join(",");
    nftList = nftList.toString();
    console.log(nftList, "nftList");
    await ledger2.message.sendMessage({
        recipientId:nftStorageAccount,
        message:nftList,
        senderPublicKey:process.env.REACT_APP_NFT_DISTRIBUTOR_PUBLIC_KEY!,
        senderPrivateKey:process.env.REACT_APP_NFT_DISTRIBUTOR_PRIVATE_KEY!,
        feePlanck:"1000000",
    });
    // if(ledger2 != null){
    //   try {
    //     await ledger2.asset.transferAsset({
    //       assetId:assetId,
    //       quantity:"10",
    //       recipientId:accountId,
    //       senderPrivateKey:"83a4a4e95bc8da68a9c00b7b86523d576b967236ac67a7c0bfb98b3c5d19df0e",
    //       skipAdditionalSecurityCheck:true,
    //       feePlanck:"1000000",
    //       senderPublicKey:"041f3b333d93ba9b24eaf324d1090f763f7c78ed0b7922d2d3eaeecaf440501c",
    //     })

    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
}
