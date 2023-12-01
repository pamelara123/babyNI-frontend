import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const Chart = ({ data }) => {
  const colors = ['#EA6A47', '#A5D8DD', '#7E909A']; // Add or modify colors as needed

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [selectedKPI, setSelectedKPI] = useState('rsL_INPUT_POWER');
  
  let neSelected;
  useEffect(() => {
    if (data && data.length > 0) {

     data.sort((a, b) => (a.time < b.time ? -1 : 1));
 
      const uniqueData = Array.from(new Set(data.map((dataPoint) => dataPoint.neAlias ? dataPoint.neAlias : dataPoint.neType)));

      if(data.neAlias === null){
        neSelected = "neType";
      }else if(data.neType ===null){
        neSelected = "neAlias";
      }

      const uniqueLabelsSet = new Set(data.map((dataPoint) => dataPoint.time));
      const uniqueLabels = Array.from(uniqueLabelsSet).sort();

      const newDatasets = uniqueData.map((unique, index) => ({
        label: unique,
        borderColor: colors[index % colors.length],
        backgroundColor: `rgba(${colors[index % colors.length]}, 0.5)`,
        borderWidth: 5,
        data: data
          .filter((dataPoint) => dataPoint.neAlias ? dataPoint.neAlias === unique : dataPoint.neType === unique)
          .map((dataPoint) => ({
            x: dataPoint.time,
            y: dataPoint[selectedKPI],
          }))
      }));

      const newData = {
        labels: uniqueLabels,
        datasets: newDatasets,
      };

      setChartData(newData);
    }

    console.log("chartData: " , chartData);
  }, [data, selectedKPI]);

 

  const handleKPIChange = (event) => {
    setSelectedKPI(event.target.value);
  };

  return (
    <div className="chart">
      <h2>Line Chart</h2>
      <div>
        <label htmlFor="kpiSelect">Select KPI:</label>
        <select id="kpiSelect" value={selectedKPI} onChange={handleKPIChange}>
          <option value="rsL_INPUT_POWER">RSL_INPUT_POWER</option>
          <option value="maxRxLevel">MaxRxLevel</option>
          <option value="rsL_Deviation">RSL_Deviation</option>
        </select>
      </div>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default Chart;
