import React, { useEffect, useState } from 'react';
import { ComposedChart, ResponsiveContainer, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area, Bar } from 'recharts';
const GraphChart = ({datas}) => {
    // console.log(datas.ProductPrice)
    // const { id } = useParams();

   
    

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


    ]
    return (
        <div
        // AOS---------
        style={{background:""}}
        className=' flex justify-center'>

        <ResponsiveContainer width="90%" height={400}>
            <ComposedChart  width={400} height={400} data={data}>
                <XAxis  dataKey="name" />
                <YAxis  />
                <Tooltip  />
                <Legend />
                <CartesianGrid  stroke="black" />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={100} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
        </ResponsiveContainer>
    </div>
    );
};

export default GraphChart;