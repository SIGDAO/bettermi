// test trading view


// import { createChart, ColorType } from 'lightweight-charts';

import { Chart, AreaSeries, PriceLine, PriceScale } from "lightweight-charts-react-wrapper";
import { IChartApi, LineStyle, ColorType, LineWidth, PriceScaleMode, AreaData, SeriesDataItemTypeMap, UTCTimestamp } from "lightweight-charts";
// PriceScaleModem, 
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { findBMI } from "../../components/findBMI";
import { useSelector, useDispatch } from "react-redux";
import { accountId } from "../../redux/account";
import { useLedger } from "../../redux/useLedger";
import { userBMISlice } from "../../redux/userBMI";

interface ChartProps {
  data?: { time: string; value: number }[];
  height?: number;
  width?: number;
}

const initialColors = {
  backgroundColor: 'transparent',
  lineColor: '#2962FF',
  textColor: 'white',
  areaTopColor: '#2962FF',
  areaBottomColor: 'rgba(41, 98, 255, 0.28)',
}


const testing:LineWidth = 1

const areaSeriesInitialOptions = {
  // lineColor: initialColors.lineColor!,
  lineColor: 'transparent',
  topColor: initialColors.areaTopColor!,
  bottomColor: initialColors.areaBottomColor!,
  lineWidth: testing,
  // lineStyle: LineStyle.LargeDashed,
  priceFormat: {
    // type: "price",
    precision: 1,
  },
}

const initialData: SeriesDataItemTypeMap['Area'][] = [
  {
    "time": 1689907868 as UTCTimestamp,
    "value": 22.5
  }
]

const CustomTradingViewChart: React.FC = () => {
  // const [bmilist, setBMIlist] = useState([])
  const [data, setData] = useState<SeriesDataItemTypeMap['Area'][]>()
  const dispatch = useDispatch();
  const tempAccountId = useSelector(accountId);
  const Ledger2 = useLedger();
  const height = 300
  const width = 1000

  useEffect(() => {
    findBMI(tempAccountId, Ledger2)
      .then((res) => {
        // data = res
        // const displayData = [res]
        setData(res)
        console.log("data", typeof res)
        console.log("res data", res)
        // console.log("data", initialData)
        // dispatch(userBMISlice.actions.setBMI(res))
      })

  }, []);

  // const genBMIlist 

  // useEffect(() => {
  //   console.log('data', data)
  // }, [data])

  


  const options = {
    layout: {
      background: { type: ColorType.Solid, color: initialColors.backgroundColor! },
      textColor: initialColors.textColor!,
      fontFamily: "Inter",
    },
    grid: {
      vertLines: {
        color: "rgba(42, 46, 57, 0)",
      },
      horzLines: {
        color: "rgba(42, 46, 57, 0.6)",
      },
    },
    leftPriceScale: {
      // position: 'left',
      borderVisible: false,
      visible: true,
      mode: PriceScaleMode.Normal,
      ticksVisible: true,
    },
    timeScale: {
      fixRightEdge: true,
      fixLeftEdge: true,
    },
    rightPriceScale: {
      visible: false,
    },
    localization: {
      locale: 'en-US',
      dateFormat: 'dd/MM/yyyy',
    },
    width: width || 1000,
    height: height || 300,
  }
  

  return (
    <Chart {...options}>
      {data && (
        <AreaSeries 
          {...areaSeriesInitialOptions} 
          data={data}
          // markers={data.map((item: any, index: any) => {
          //   return {
          //     time: item.time,
          //     position: 'inBar',
          //     color: data.length - 1 === index ? '#39b3af' : '#687074',
          //     shape: 'circle',
          //     // text: item.value,
          //     // size: 1,
          //     // shape: 'arrowDown',
          //     // text: 'test',
          //   }})
          // }
        >
          <PriceLine 
            price={26.5} 
            color={'#39b3af'} 
            lineWidth={2} 
            lineStyle={LineStyle.LargeDashed} 
          />
        </AreaSeries>
      )}
    </Chart>
  )
}

export default CustomTradingViewChart;

