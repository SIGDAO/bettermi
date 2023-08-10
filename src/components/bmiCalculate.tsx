import { useLedger } from '../redux/useLedger';
import { accountId } from '../redux/account';
import { useSelector } from "react-redux";
import { BMI_Day } from '../redux/userBMI';
import { UTCTimestamp, SeriesDataItemTypeMap, Time } from 'lightweight-charts';
// import { SeriesDataItemTypeMap } from 'lightweight-charts/dist/typings/series-options';


// todo: merge with userBMI
export interface UserBMIState {
  userBMI: BMI_Day[] | undefined;
}

const findBMIblockchainContract = async (tempAccountId: string, Ledger2: any) => {
  var contractAddress:string = '';
  var description: string ;

  const contractId = await Ledger2.contract.getContractsByAccount({ accountId :tempAccountId});

  console.log(contractId, 'contractID');

  if (!contractId.hasOwnProperty('ats')) return false

  for(let i = 0;i < contractId.ats.length;i++){
      if(contractId.ats[i].machineCodeHashId == "7457358473503628676"){
          contractAddress = contractId.ats[i].at;
          console.log(contractId.ats[i]);
          description = "";
          break;
      }
  }

  if (!contractAddress) return false

  const message = await Ledger2.account.getAccountTransactions({accountId:contractAddress}); //Contract Id
  console.log(message);
  console.log(description);

  return {
    message: message,
    description: description,
  };
}


export const findBMI = async (tempAccountId: string, Ledger2: any, today?: boolean | undefined) => {
  if(Ledger2 == null) return [];

  const bmiDataObject = await findBMIblockchainContract(tempAccountId, Ledger2);
  const message = bmiDataObject ? bmiDataObject.message : null;
  if (!message) return [];
  let BMI: SeriesDataItemTypeMap['Area'][]= [];
  for(let i = message.transactions.length - 1; i >= 0 ;i--){
    let content = JSON.parse(message.transactions[i].attachment.message);
    if (typeof content === 'number') continue;
    let tempDate = new Date(content.time)
    let dateFormat: UTCTimestamp  = Math.floor((tempDate.getTime() / 1000)) as UTCTimestamp;
    // let dateFormat = tempDate.getTime()


    // let tempDate = content.time.toLocaleString('en-US', options);
    // console.log(tempDate); // output: "2023-07-20 15:30"
    // let dateFormat: string = tempDate.getFullYear() + "-" + (tempDate.getMonth()+1) + "-" + tempDate.getDate()
    BMI.push({time: dateFormat, value: Number(content.bmi)});
    // return_Date(Number(obj.timestamp));
  }

  return BMI;
}


export const isTodayHaveSelfieRecord = async (tempAccountId: string, Ledger2: any) => {
  // if no ledger, return false
  if(Ledger2 == null) return false;

  const message = await findBMIblockchainContract(tempAccountId, Ledger2);
  if (!message) return false;

  let BMI: SeriesDataItemTypeMap['Area'][]= [];

  for(let i = message.transactions.length - 1; i >= 0 ;i--){
    let content = JSON.parse(message.transactions[i].attachment.message);

    if (typeof content === 'number') continue;

    let tempDate = new Date(content.time)
    const today = new Date();

    console.log(tempDate.getDate(), today.getDate(), 'today', 'tmr');
    if (tempDate.getDate() === today.getDate() && tempDate.getMonth() === today.getMonth() && tempDate.getFullYear() === today.getFullYear()) {
      return true;
    };
  }
  console.log(BMI);

  return false;
  
}

export const isSelfieRecord = async (tempAccountId: string, Ledger2: any) => {
  const message = await findBMIblockchainContract(tempAccountId, Ledger2)
  console.log(message, 'message');
  // if no ledger, return false
  if (!message) return false;
  return true;
}
