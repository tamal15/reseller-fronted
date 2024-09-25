import { Grid, Paper, Typography } from "@mui/material";
// import React, { PureComponent } from "react";
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const WeekBarChart = ({ datas }) => {
    console.log(datas)

    const data = [
      {
          "name": "ProductPrice",
          "uv": datas?.ProductPrice,
          "pv": datas?.ProductPrice,

      },
      {
          "name": "rating",
          "uv": datas?.rating,
          "pv": datas?.rating,

      },
      {
          "name": "ProductPrice",
          "uv": datas?.ProductPrice,
          "pv": datas?.ProductPrice,

      },
      {
          "name": "rating",
          "uv": datas?.rating,
          "pv": datas?.rating,

      },
      {
          "name": "ProductPrice",
          "uv": datas?.ProductPrice,
          "pv": datas?.ProductPrice,

      },
      {
          "name": "rating",
          "uv": datas?.rating,
          "pv": datas?.rating,

      },


  ]
    //   export default class Example extends PureComponent {
        const demoUrl = 'https://codesandbox.io/s/synchronized-area-chart-kpg1s';

        // render() {
            return (
              <Paper style={{padding:"2px"}}>
                <div style={{ width: '100%' }}>
                {/* <h4>A demo of synchronized AreaCharts</h4> */}
                <ResponsiveContainer width="100%" height={270}>
                  <AreaChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </ResponsiveContainer>
                <p>Maybe some other content</p>
        
                {/* <ResponsiveContainer width="100%" height={200}>
                  <AreaChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                  </AreaChart>
                </ResponsiveContainer> */}
              </div>
              </Paper>
            );
        //   }
        // }
};

export default WeekBarChart;
