// import React from 'react';
import { Paper } from '@mui/material';
import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';
const ProductChart = ({datas}) => {
  const data = [
    {
      name: 'Product P',
      uv: 40,
      pv: 24,
      amt: 24,
    },
    {
      name: 'Rating R',
      uv: 30,
      pv: 13,
      amt: 22,
    },
    {
      name: 'Product P',
      uv: 20,
      pv: 8,
      amt: 22,
    },
    {
      name: 'Rating D',
      uv: 27,
      pv: 39,
      amt: 20,
    },
    {
      name: 'Product P',
      uv: 18,
      pv: 48,
      amt: 21,
    },
    {
      name: 'Rating R',
      uv: 23,
      pv: 38,
      amt: 25,
    },
    {
      name: 'Product P',
      uv: 34,
      pv: 43,
      amt: 21,
    },
  ];
  
  const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const radius = 10;
    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
        <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
          {value.split(' ')[1]}
        </text>
      </g>
    );
  };  
  return (
    <Paper style={{padding:"2px"}}>
      <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={370}>
{/* <Paper> */}
<BarChart
          width={50}
          height={30}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
          <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
        </BarChart>

{/* </Paper> */}
      </ResponsiveContainer>
      </div>
    </Paper>
    );
};

export default ProductChart;