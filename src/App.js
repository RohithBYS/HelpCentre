import './App.css';
import Header from './Header/Header.js'
// import Body from './Body/Body';
import { BasicTable } from './Body/BasicTable'
import HelpCentre from './HelpCentre/HelpCentre';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import LineChart from './Charts/LineChart';
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';
import DoughnutChart from './Charts/DoughnutChart';
import BubbleChart from './Charts/BubbleChart';
import ScatterChart from './Charts/ScatterChart';
import { useState } from 'react';



function App() {
  const [chart, setChart] = useState(1)
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
   }, []);
  
  return (
    <>
   <div class="font-loader">
   
      <Header/>
      {/* <Body/>  */}
      {/* <BasicTable/> */}
      <HelpCentre/>
      

{/*      
      <div className='chart-cont'>
        <div className='chart'>
         
          <h2>Line Chart</h2>
          <LineChart/>
        </div>
        <div className='chart'>
          <h2>Bar Chart</h2>
          <BarChart/> 
        </div>  
        
          <div className='chart-second'>
            <h2>Pie Chart</h2>
            <PieChart/>
          </div>
          <div className='chart-second'>
            <h2>Doughnut Chart</h2>
            <DoughnutChart/>
        </div>
        <div className='chart'>
            <h2>Bubble Chart</h2>
            <BubbleChart/>
        </div>
        <div className='chart'>
            <h2>Scatter Chart</h2>
            <ScatterChart/>
        </div> */}

    {/* </div> */}
     
   </div>
 
   </>
  );
}

export default App;
