import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Navbar.css';
import axios from 'axios';

const Navbar = ({passData}) => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedTable, setselectedTable] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [ data,setData] = useState();

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleFrequencyChange = (event) => {
    setselectedTable(event.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = () => {
    // Implement your submission logic here

    axios.post('https://localhost:7124/api/GetData/get-data/',{
      Ne:selectedType,
      table: selectedTable,
      timeFrom:startDate,
      timeTo:endDate
    })
    .then(function (response) {
      console.log(response);
      setData(response.data);
      passData(response.data);
      console.log("dataaaaaaaaaaaa: " , response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log('Form submitted!');

    
  };


  return (
    <div className="div navbar">
     

      <div className="datepickers">
      <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          placeholderText="From"
          showTimeInput
          dateFormat="MMMM d, yyyy h:mm aa"
        />

<DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          endDate={endDate}
          minDate={startDate}
          placeholderText="To"
          showTimeInput
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>

      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            value="NeAlias"
            checked={selectedType === 'NeAlias'}
            onChange={handleTypeChange}
          />
          NeAlias
        </label>

        <label>
          <input
            type="radio"
            value="NeType"
            checked={selectedType === 'NeType'}
            onChange={handleTypeChange}
          />
          NeType
        </label>

        <label>
          <input
            type="radio"
            value="hourly_aggregation"
            checked={selectedTable === 'hourly_aggregation'}
            onChange={handleFrequencyChange}
          />
          Hourly
        </label>

        <label>
          <input
            type="radio"
            value="daily_aggregation"
            checked={selectedTable === 'daily_aggregation'}
            onChange={handleFrequencyChange}
          />
          Daily
        </label>

        {/* Submit Button */}
        <button type="button" onClick={handleSubmit}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default Navbar;
