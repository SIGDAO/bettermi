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
  const nftDistributorPrivateKey = process.env.REACT_APP_NFT_DISTRIBUTOR_PRIVATE_KEY!;
    const ledger2 =LedgerClientFactory.createClient({nodeHost:nodeHost || walletNodeHost});
    
    //const assetId = "3862155318820066741";
     const assetId = "13116962758643420722";
    console.log(ledger2, "ledger2");
    console.log(nodeHost, "nodeHost");
    console.log(quantity, 'quantity');


    if(ledger2 != null){
      try {
        await ledger2.asset.transferAsset({
          assetId:assetId,
          quantity:quantity,
          recipientId:accountId,
          senderPrivateKey:nftDistributorPrivateKey,
          skipAdditionalSecurityCheck:true,
          feePlanck:"1000000",
          senderPublicKey:"041f3b333d93ba9b24eaf324d1090f763f7c78ed0b7922d2d3eaeecaf440501c",
        })

      } catch (error) {
        console.log(error);
      }
    }
}
