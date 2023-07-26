import React, { useState, useEffect } from 'react';
import './selfieToEarn.css'
import { CenterLayout } from '../../components/layout';
import MenuBar from '../../components/menuBar';
import { ShortTitleBar } from '../../components/titleBar';
import { Link, useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import CustomTradingViewChart from './customTradingViewChart';
import './calendar.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectBMI, userBMISlice } from '../../redux/userBMI';
import { forEach } from 'lodash';
import { accountId } from '../../redux/account';
import { useLedger } from '../../redux/useLedger';
import { findBMI } from '../../components/findBMI';
import { BMI_Day } from '../../redux/userBMI';
import { SeriesDataItemTypeMap } from 'lightweight-charts';
import moment from 'moment';
// import { useFindBMI } from '../../components/findBMI';


export type ISelfieToEarnProps = {
  // children?: Promise<Element>;
}

const genBMIlist = (option: string) => {
  let returnList: BMI_Day [] = []
  let today = new Date()
  // console.log(today, "today")
  let totalDays = 0
  switch (option) {
    case '1W':
      totalDays = 7
      today = new Date(today.getDate() - totalDays)
      break
    case '1M':
      totalDays = 30
      today = new Date(today.getDate() - totalDays)
      break
    case '1Y':
      totalDays = 365
      today = new Date(today.getDate() - totalDays)
      break
    case '5Y':
      totalDays = 365 * 5
      today = new Date(today.getDate() - totalDays)
      break
    default:
      return []
  }
  for (let i = 0; i < totalDays; i++) {
    let tempDate = new Date(today.setDate(today.getDate() + 1))
    const year = tempDate.getFullYear();
    const month = ('0' + (tempDate.getMonth() + 1)).slice(-2);
    const day = ('0' + tempDate.getDate()).slice(-2);
    const hours = ('0' + tempDate.getHours()).slice(-2);
    const minutes = ('0' + tempDate.getMinutes()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;

    // let dateFormat: string = tempDate.getFullYear() + "-" + (tempDate.getMonth()+1) + "-" + tempDate.getDate()
    // console.log()
    returnList.push({time: formattedDate, value: Math.floor(Math.random() * 10) + 20.1})
  }
  return returnList

}


const SelfieToEarn: React.FunctionComponent<ISelfieToEarnProps> = (props) => {
  const [value, setValue] = useState(new Date()); // selected day on calendar
  // const [data, setData] = useState<SeriesDataItemTypeMap['Area'][]>()
  const [data, setData] = useState<any>()
  const [daySelectedData, setDaySelectedData] = useState<any>()
  const [weekOption, setweekOption] = useState(true);
  const [monthOption, setmonthOption] = useState(false);
  const [yearOption, setyearOption] = useState(false);
  const [fiveYearOption, setFiveYearOption] = useState(false);

  const tempAccountId = useSelector(accountId);
  const Ledger2 = useLedger();
  
  const navigate = useNavigate();
  // demo data
  const bmi_testing = useSelector(selectBMI) || 35;


  // var data: BMI_Day[];

  const optionList = [
    {
      text: '1W',
      option: weekOption,
      setOption: setweekOption,
    },
    {
      text: '1M',
      option: monthOption,
      setOption: setmonthOption,
    },
    {
      text: '1Y',
      option: yearOption,
      setOption: setyearOption,
    },
    {
      text: '5Y',
      option: fiveYearOption,
      setOption: setFiveYearOption,
    },
  ]
  
  const handleOptionClick = (option: any) => {
    option.setOption(true)

    optionList.forEach((item) => {
      if (item.text != option.text) {
        item.setOption(false)
      }
    })
  }


  function onChange(nextValue: any) {
    setValue(nextValue);
  }

  function handleTakeASelfie() {
    if (bmi_testing != 35 ){
      console.log('already taken a selfie')

    }
  }

  useEffect(() => {
    // testing data
    let res = genBMIlist("1W")
    setData([
      { time: '2023-07-19', value: 19.1 },
      { time: '2023-07-20', value: 20.1 },
      { time: '2023-07-21', value: 21.1 },
      { time: '2023-07-22', value: 26.5 },
      { time: '2023-07-23', value: 27.5 },
      { time: '2023-07-25', value: 22.68 },
      { time: '2023-07-26', value: 22.67 },
    ]
    )

    // real data
    // findBMI(tempAccountId, Ledger2)
    //   .then((res) => {
    //     // data = res
    //     // const displayData = [res]
    //     setData(res)
    //     // dispatch(userBMISlice.actions.setBMI(res))
    //   })
  }, []);

  // const genBMIlist 

  useEffect(() => {
    // console.log('data', data)
    // console.log('data', typeof data[0].time)
    // console.log('data', typeof initialData)
    // console.log('data', typeof initialData[0].time)
    // if (data) {
    //   // displayData.push(...data)
    // }
    // console.log('displayData', displayData)
  }, [data])

  
  useEffect(() => {
    // console.log(item)

    // forEach(optionList, (item) => {
    //   if (item.option) {
    //     console.log(item.text)
    //     let startIndex = data?.length() 

    //     // filtering
    //     console.log(bmiList)
    //     setData(bmiList)
    //     // dispatch(userBMISlice.actions.setBMI(bmiList))
    //   }
    // })
  }, [ weekOption, monthOption, yearOption, fiveYearOption ])

  useEffect(() => {
    console.log('daySelectedData', value)
    let todayTimestamp = Math.floor((value.getTime() / 1000))
    let tmrTimestamp = todayTimestamp + 86400
    setDaySelectedData(data?.filter((item: any) => {
      // console.log('item', item)
      // console.log('todayTimestamp', todayTimestamp)
      // console.log('yesterdayTimestamp', yesterdayTimestamp)
      // console.log('today', new Date(todayTimestamp * 1000 ))
      // console.log('yesterday', new Date(yesterdayTimestamp * 1000 ))
      return item.time >= todayTimestamp && item.time < tmrTimestamp
    }))
    console.log('daySelectedData', daySelectedData)
  }, [value])

  // const Custom..

  const displaySelectedDateRecord:JSX.Element = daySelectedData?.map((item: any) => {
    const date = new Date(item.time * 1000)
    const dateFormat = date.toLocaleDateString('en-GB')
    return (
      <div className="display-selected-data-record-container">
        <div className="trending-container">
          {/*  */}
          <img
            className="icon-arrow-left-XaN6DJ icon-arrow-left-img"
            src="img/selfieToEarn/icon-arrow-left-6@1x.png"
            alt="icon-arrow-left"
          />
          <div className="trending-text-container inter-normal-keppel-12px">-1.0 kg/m²</div>
        </div>
        <div className="day-and-bmi-data-container">
          <div className="inter-medium-white-15px">
            {dateFormat}
          </div>
          <div className="inter-normal-cadet-blue-12px">
            {item.value} kg/m²
          </div>
        </div>
        <div className="sigdao-reward-container">
          {/* <div className="signdao_tokengradient">
            <div className="x441"></div>
            <div className="x442"></div>
            <img className="x880" src="img/selfieToEarn/file---880-1x-png-10@1x.png" alt="880" />
          </div> */}
          <div className="sigdao-reward-text-container inter-semi-bold-keppel-14px">+2.625</div>
        </div>
      </div>
    )
  })


  const content: JSX.Element = (
    <div className="screen">
      <div className="bettermidapp-selfie-to-earn-1">
        <ShortTitleBar title='Selfie to Earn'/>
        <div className="take-a-selfie-button-container">
          <div className="button_-selfie-to-earn-MUU5YC" onClick={handleTakeASelfie}>
              <img className="ic_selfie-u8P1YH" src="img/selfieToEarn/ic-selfie-1@1x.png" alt="ic_selfie" />
              <p className="take-a-selfie-to-earn-u8P1YH inter-semi-bold-white-15px">Take a Selfie to Earn!</p>
              <img className="ic_arrow_forward-u8P1YH" src="img/selfieToEarn/ic-arrow-forward-1@1x.png" alt="ic_arrow_forward" />
          </div>
        </div>
        <div className="bmi_-status-MUU5YC">
            <div className="current-kgm2-C5Ye0d inter-normal-cadet-blue-12px-2">
              <span className="span0-b6eiBJ inter-normal-cadet-blue-12px">CURRENT (KG/M²)</span>
            </div>
            <div className="start-kgm2-C5Ye0d inter-normal-cadet-blue-12px-2">
              <span className="span0-OeIZvd inter-normal-cadet-blue-12px">START (KG/M²)</span>
            </div>
            <img className="bmi-goal-C5Ye0d bmi-goal" src="img/selfieToEarn/bmi-goal-1@1x.png" alt="BMI Goal" />
            <img className="bmi-goal-HuKS2x bmi-goal" src="img/selfieToEarn/bmi-goal-1@1x.png" alt="BMI Goal" />
            <div className="x255-C5Ye0d">{data && data[0]?.value}</div>
            <div className="x265-C5Ye0d">{data && data[data?.length -1]?.value}</div>
            <img className="x598-C5Ye0d" src="img/selfieToEarn/file---598@1x.png" alt="598" />
        </div>
        <div className="x6-MUU5YC x6">
          {/* orignal chat */}  
          <div className="mean-bmi-discription-container">
            <div className="mean-bmi-discription inter-normal-white-12px">
              Mean BMI (kg/m²)
            </div>
            <ul className="mean-bmi-setting">
              {optionList.map((option) =>{
                return (
                  <li className={option.option ? "mean-bmi-setting-item-selected inter-normal-cadet-blue-12px-3" :"mean-bmi-setting-item inter-normal-cadet-blue-12px-3" } key={option.text} onClick={() => handleOptionClick(option)}>{option.text}</li>
                )
              })}
            </ul>
          </div>
          <CustomTradingViewChart data={data} height={323} width={390}/>
          {/* <div className="bmi-tracking-diagram-NWkD1c">
            <img className="bmi-goal-FXAneT bmi-goal" src="img/selfieToEarn/bmi-goal-2@1x.png" alt="BMI Goal" />
            <img className="bmi-goal-qhySjD bmi-goal" src="img/selfieToEarn/bmi-goal-2@1x.png" alt="BMI Goal" />
            <img className="x11684-FXAneT" src="img/selfieToEarn/file---11684@1x.png" alt="11684" />
            <div className="x16178-FXAneT">
                <div className="bmi-goal-oWOsEy bmi-goal">
                  <div className="healthy-mgQn5v inter-normal-keppel-12px">Healthy</div>
                  <div className="x876-mgQn5v"></div>
                </div>
                <div className="today-bmi-oWOsEy today-bmi">
                  <div className="underweight-WRxJDX">Underweight</div>
                  <div className="x877-WRxJDX x877"></div>
                </div>
                <div className="today-bmi-A4cSad today-bmi">
                  <div className="overweight-ny26Tj inter-normal-neon-carrot-12px">Overweight</div>
                  <div className="x877-ny26Tj x877"></div>
                </div>
                <div className="today-bmi-wSx6aj today-bmi">
                  <div className="obese-VjCO7I">Obese</div>
                  <div className="x877-VjCO7I x877"></div>
                </div>
            </div>
            <div className="x16179-FXAneT">
                <div className="x16177-0Ljt8o">
                  <img className="x604-GfALGr" src="img/selfieToEarn/file---604@1x.png" alt="604" />
                  <img className="x11674-GfALGr" src="img/selfieToEarn/file---11674@1x.png" alt="11674" />
                  <img className="x11675-GfALGr" src="img/selfieToEarn/file---11675@1x.png" alt="11675" />
                  <img className="x11676-GfALGr" src="img/selfieToEarn/file---11676@1x.png" alt="11676" />
                  <div className="x21-GfALGr x21 inter-normal-white-12px">21</div>
                  <div className="x27-GfALGr x27 inter-normal-white-12px">27</div>
                  <div className="x33-GfALGr inter-normal-white-12px">33</div>
                </div>
                <div className="timeline-track-0Ljt8o">
                  <div className="mean-bmi-kgm2-QHKlEy">
                      <span className="span0-MSSTKa inter-normal-white-12px">Mean BMI (kg/m²)</span>
                  </div>
                  <div className="x1-w-QHKlEy">1W</div>
                  <div className="x1-m-QHKlEy inter-normal-cadet-blue-12px-3">1M</div>
                  <div className="x1-y-QHKlEy inter-normal-cadet-blue-12px-3">1Y</div>
                  <div className="x5-y-QHKlEy inter-normal-cadet-blue-12px-3">5Y</div>
                </div>
                <img className="x11677-0Ljt8o" src="img/selfieToEarn/file---11677-1x-png@1x.png" alt="11677" />
                <div className="x16180-0Ljt8o">
                  <div className="x447-VISwYj"></div>
                  <div className="x448-VISwYj"></div>
                  <div className="x449-VISwYj"></div>
                  <div className="x450-VISwYj"></div>
                  <div className="x451-VISwYj"></div>
                  <div className="x452-VISwYj"></div>
                  <div className="x453-VISwYj"></div>
                  <div className="mon-VISwYj inter-normal-cadet-blue-14px">Mon</div>
                </div>
                <div className="tue-0Ljt8o inter-normal-cadet-blue-14px">Tue</div>
                <div className="wed-0Ljt8o inter-normal-cadet-blue-14px">Wed</div>
                <div className="sun-0Ljt8o">Sun</div>
                <div className="sat-0Ljt8o inter-normal-cadet-blue-14px">Sat</div>
                <div className="fri-0Ljt8o inter-normal-cadet-blue-14px">Fri</div>
                <div className="thu-0Ljt8o inter-normal-cadet-blue-14px">Thu</div>
            </div>
          </div> */}
        </div>
        <div className="calender-MUU5YC">
          <Calendar
            calendarType='Arabic'
            onChange={onChange}
            value={value}
            locale='en-US'
            minDetail='decade'
            // allowPartialRange={true}
            // selectRange={true}
          />
        </div>
        <div className="x16207-MUU5YC">
            <div className="record-title-container">
              <div className="records-tDsdhu inter-semi-bold-white-18px">Records</div>
            </div>
            {/* <div className="view-all-tDsdhu">View all</div> */}
            <div className="rewards_card-container">
              {displaySelectedDateRecord}
            </div>
        </div>
        <MenuBar/>
      </div>
    </div>
  )

  return (
    <CenterLayout
      content={content}
      bgImg={false}
    />
  );
};

export default SelfieToEarn;
