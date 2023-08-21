import { useLedger } from '../redux/useLedger';
import { accountId } from '../redux/account';
import { useDispatch, useSelector } from "react-redux";
import { BMI_Day } from '../redux/userBMI';
import { UTCTimestamp, SeriesDataItemTypeMap, Time } from 'lightweight-charts';
// import { SeriesDataItemTypeMap } from 'lightweight-charts/dist/typings/series-options';


// todo: merge with userBMI
export interface UserBMIState {
  userBMI: BMI_Day[] | undefined;
}


const findBMIblockchainContract = async (tempAccountId: string, Ledger2: any) => {
  var contractAddress:string = '';
  var description: any;
  var bmiArray: SeriesDataItemTypeMap['Area'][]= [];
  var contractData: any;

  const contractId = await Ledger2.contract.getContractsByAccount({ accountId :tempAccountId});

  console.log(contractId, 'contractID');

  if (!contractId.hasOwnProperty('ats')) return false;

  for(let i = 0;i < contractId.ats.length;i++){
    if(contractId.ats[i].machineCodeHashId == "7457358473503628676"){
        console.log('hi')
        contractData = contractId.ats[i];
        break;
    }
  }

  if (!contractData) return false;
  console.log(contractData, 'contractData');
  contractAddress = contractData.at;

  // todo: make it better
  try {
    
    description = JSON.parse(contractData?.description);
  } catch (error) {
    description = null;
  }


  if (!contractAddress) return false

  const message = await Ledger2.account.getAccountTransactions({accountId:contractAddress}); //Contract Id
  console.log(message, 'message');
  console.log(description, 'description');

  return {
    message: message || null,
    description: description,
  }
}


export const findBMI = async (tempAccountId: string, Ledger2: any, today?: boolean | undefined) => {
  let BMI: SeriesDataItemTypeMap['Area'][]= [];

  if(Ledger2 == null) return [];

  const bmiDataObject = await findBMIblockchainContract(tempAccountId, Ledger2);
  console.log(bmiDataObject, 'bmiDataObject');

  if (!bmiDataObject) return [];

  // handle bmi contract description
  if (bmiDataObject.description) {
    let firstRecordDate = new Date(bmiDataObject?.description?.time)
    BMI.push({time: Math.floor((firstRecordDate.getTime() / 1000)) as UTCTimestamp, value: Number(bmiDataObject?.description?.bmi)});  
  }

  // handle bmi contract message
  const message = bmiDataObject.message || null;
  console.log(message, 'bmiDataObject message');
  // if (!message) return [];
  for(let i = message.transactions.length - 1; i >= 0 ;i--){
    let content = JSON.parse(message.transactions[i].attachment.message);
    if (typeof content === 'number') continue;
    let tempDate = new Date(content.time)
    let dateFormat: UTCTimestamp  = Math.floor((tempDate.getTime() / 1000)) as UTCTimestamp;
    BMI.push({time: dateFormat, value: Number(content.bmi)});
    // return_Date(Number(obj.timestamp));
  }

  

  return BMI;
}


export const isTodayHaveSelfieRecord = async (tempAccountId: string, Ledger2: any, bmi_fetchedData?: any) => {
  // if no ledger, return false
  if(Ledger2 == null) return false;

  // if bmi_fetchedData, check if today have record
  if (bmi_fetchedData) {    
    for (let i = 0; i < bmi_fetchedData.length; i++) {
      const element = bmi_fetchedData[i];
      const today = new Date();
      const elementDate = new Date(element.time * 1000);
      if (elementDate.getDate() === today.getDate() && elementDate.getMonth() === today.getMonth() && elementDate.getFullYear() === today.getFullYear()) {
        return true;
      };
    }
    return false;
  }


  // if no bmi_fetchedData, fetch data from blockchain and check if today have record
  const contract = await findBMIblockchainContract(tempAccountId, Ledger2);
  if (!contract) return false;

  const { message, description } = contract;

  let BMI: SeriesDataItemTypeMap['Area'][]= [];

  // handle bmi contract description
  const descriptionTime = new Date(description.time);
  if (descriptionTime.getDate() === descriptionTime.getDate() && descriptionTime.getMonth() === descriptionTime.getMonth() && descriptionTime.getFullYear() === descriptionTime.getFullYear()) {
    return true;
  };


  // handle bmi contract message
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

  return false;
  
}

export const isSelfieRecord = async (tempAccountId: string, Ledger2: any) => {
  const message = await findBMIblockchainContract(tempAccountId, Ledger2)
  console.log(message, 'message');
  // if no ledger, return false
  if (!message) return false;
  return true;
}
