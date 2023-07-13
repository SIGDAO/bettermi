import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function MyApp() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue: any) {
    setValue(nextValue);
  }

  return (
    <Calendar
      calendarType='Arabic'
      onChange={onChange}
      value={value}
      locale='en-US'
    />
  );
}

export default MyApp;



// test trading view


// import { createChart, ColorType } from 'lightweight-charts';
// import React, { useEffect, useRef } from 'react';

// interface ChartProps {
//   data: { time: string; value: number }[];
//   colors?: {
//     backgroundColor?: string;
//     lineColor?: string;
//     textColor?: string;
//     areaTopColor?: string;
//     areaBottomColor?: string;
//   };
// }

// const initialColors = {
//   backgroundColor: 'transparent',
//   lineColor: '#2962FF',
//   textColor: 'black',
//   areaTopColor: '#2962FF',
//   areaBottomColor: 'rgba(41, 98, 255, 0.28)',
// }


// const initialData = [
//   { time: '2018-12-22', value: 26.5 },
//   { time: '2018-12-23', value: 27.5 },
//   { time: '2018-12-24', value: 25.5 },
//   { time: '2018-12-25', value: 25.5 },
//   // { time: '2018-12-26', value: 25.17 },
//   // { time: '2018-12-27', value: 28.89 },
//   // { time: '2018-12-28', value: 25.46 },
//   // { time: '2018-12-29', value: 23.92 },
//   // { time: '2018-12-30', value: 22.68 },
//   // { time: '2018-12-31', value: 22.67 },
// ];


// const ChartComponent: React.FC<ChartProps> = ({
//   data,
//   colors = initialColors,
// }) => {
//   const chartContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleResize = () => {
//       if (chartContainerRef.current) {
//         chart.applyOptions({ width: chartContainerRef.current.clientWidth });
//       }
//     };

//     const chart = createChart(chartContainerRef.current!, {
//       layout: {
//         background: { type: ColorType.Solid, color: colors.backgroundColor! },
//         textColor: colors.textColor!,
//       },
//       width: chartContainerRef.current?.clientWidth,
//       height: 300,
//     });
//     chart.timeScale().fitContent();

//     const newSeries = chart.addAreaSeries({
//       lineColor: colors.lineColor!,
//       topColor: colors.areaTopColor!,
//       bottomColor: colors.areaBottomColor!,
//     });
//     newSeries.setData(data);

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);

//       chart.remove();
//     };
//   }, [data, colors]);

//   return <div ref={chartContainerRef} />;
// };

// const App: React.FC = () => {
//   return (
//     <div className="testing" style={{'backgroundColor': 'black',}}>
//       <ChartComponent data={initialData} colors={initialColors}/>
//     </div>
//   )
// };

// export default App;