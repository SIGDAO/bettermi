import { useLedger } from '../redux/useLedger';
import { accountId } from '../redux/account';
import { useSelector } from "react-redux";
import { BMI_Day } from '../redux/userBMI';
import { UTCTimestamp } from 'lightweight-charts';

// const options = { 
//   year: 'numeric', 
//   month: '2-digit', 
//   day: '2-digit', 
//   hour: '2-digit', 
//   minute: '2-digit', 
//   hour12: false 
// };


// todo: merge with userBMI
export interface UserBMIState {
  userBMI: BMI_Day[] | undefined;
}


export const findBMI = async (tempAccountId: string, Ledger2: any) => {
  // const tempAccountId = useSelector(accountId);
  // const Ledger2 = useLedger();
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
    console.log(message);
    let BMI:BMI_Day[] = [];
    message.transactions.map((obj: any)=>{
      let content = JSON.parse(obj.attachment.message);
      let tempDate = new Date(content.time)
      // const month = ('0' + (tempDate.getMonth() + 1)).slice(-2);
      // const day = ('0' + tempDate.getDate()).slice(-2);
      // const hours = ('0' + tempDate.getHours()).slice(-2);
      // const minutes = ('0' + tempDate.getMinutes()).slice(-2);
      // let dateFormat: string = `${tempDate.getFullYear()}-${month}-${day} ${hours}:${minutes}`;

      let dateFormat:number = Math.floor((tempDate.getTime() / 1000));
      // let dateFormat = tempDate.getTime()
      console.log(dateFormat);


      // let tempDate = content.time.toLocaleString('en-US', options);
      // console.log(tempDate); // output: "2023-07-20 15:30"
      // let dateFormat: string = tempDate.getFullYear() + "-" + (tempDate.getMonth()+1) + "-" + tempDate.getDate()
      BMI.push({time: dateFormat, value: Number(content.bmi)});
      // return_Date(Number(obj.timestamp));
    }); 



    console.log(BMI);

    return BMI;
  }
  return [];
}
