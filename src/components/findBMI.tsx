import { useLedger } from '../redux/useLedger';
import { accountId } from '../redux/account';
import { useSelector } from "react-redux";

export interface BMI_Day {
  timeStamp: Date;
  BMI: number;
}


export interface UserBMIState {
  userBMI: BMI_Day[] | undefined;
}


export const useFindBMI = async () => {
  const tempAccountId = useSelector(accountId);
  const Ledger2 = useLedger();
  var contractAddress:string = '';

  if(Ledger2 != null){
    const contractId = await Ledger2.contract.getContractsByAccount({ accountId :tempAccountId});
    console.log(contractId);

    for(var i = 0;i < contractId.ats.length;i++){
        if(contractId.ats[i].machineCodeHashId == "7457358473503628676"){
            contractAddress = contractId.ats[i].at;
            console.log(contractAddress);
            break;
        }
    }
    const message = await Ledger2.account.getAccountTransactions({accountId:contractAddress}); //Contract Id
    const BMI:BMI_Day[] = [];
    message.transactions.map((obj)=>{
        BMI.push();
        // return_Date(Number(obj.timestamp));
    }); 

    console.log(BMI);
    return BMI;
  }
}
