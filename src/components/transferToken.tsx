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


export async function TransferToken(nodeHost:any,accountId:any,quantity:string){
  const walletNodeHost:string = nodeHost?nodeHost:window.localStorage.getItem('nodeHost');
  
    const ledger2 =LedgerClientFactory.createClient({nodeHost:nodeHost || walletNodeHost});
    
    const assetId = "3862155318820066741";
    console.log(ledger2, "ledger2");
    console.log(nodeHost, "nodeHost");
    console.log(quantity, 'quantity');


    if(ledger2 != null){
      try {
        await ledger2.asset.transferAsset({
          assetId:assetId,
          quantity:quantity,
          recipientId:accountId,
          senderPrivateKey:"83a4a4e95bc8da68a9c00b7b86523d576b967236ac67a7c0bfb98b3c5d19df0e",
          skipAdditionalSecurityCheck:true,
          feePlanck:"1000000",
          senderPublicKey:"041f3b333d93ba9b24eaf324d1090f763f7c78ed0b7922d2d3eaeecaf440501c",
        })

      } catch (error) {
        console.log(error);
      }
    }
}
