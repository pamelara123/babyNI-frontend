import React from 'react'
import LineChart from '../Charts/LineChart'
import "./Charts.css";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Charts = ({data}) => {
  const myData = data;
  return (
    <div className="charts">   
      <div>
        <LineChart data = {myData}/>
      </div>
 
    </div>
  )
}

export default Charts