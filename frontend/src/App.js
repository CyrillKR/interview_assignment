import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function App() {

  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(`http://localhost:3500`);
        const toChartObj = data.data.responseArray.map((item, index) => {
          return {
            name: index,
            uv: item
          };
        });
        setChartData(toChartObj);
      } catch (e) {
        if (e.response) {
          console.log(e.response);
        }
      }
    };
    fetchData();
    return fetchData;
    ;
  }, []);

  return (
    <>
      <LineChart width={800} height={600} data={chartData}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </>
  );
}
