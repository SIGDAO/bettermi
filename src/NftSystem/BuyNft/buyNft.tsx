import { generateMethodCall } from "@signumjs/contracts";
import { Attachment,AttachmentMessage } from "@signumjs/core";
export async function BuyNft(Wallet:any,ledger2:any,nftId:string,nftPrice:string){
    const hash = "2";
    const rest = [230000000, 26,1000000]
    const hexMessage = generateMethodCall({
        methodHash: hash.toString(),
        methodArgs: rest
});
const hi:AttachmentMessage =new AttachmentMessage({
  messageIsText:false,
  message:hexMessage,

});
if(hi != null && nftId != null){
const transaction = await ledger2.asset.transferAsset({
  assetId:"13116962758643420722",
  quantity:nftPrice!,
  attachment:hi,
  amountPlanck:"32000000",
  feePlanck:"1000000",
  recipientId:nftId!,
  deadline:1440,
  senderPublicKey:"b3b1134600c4939e2d34a5ee442ca7f602e8d9ff013c3ebf6cf2dfbc4120dd6a",
});
await Wallet.Extension.confirm(transaction.unsignedTransactionBytes);
}
  };