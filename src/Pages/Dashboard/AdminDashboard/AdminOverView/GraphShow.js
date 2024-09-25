import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GraphChart from './GraphChart';

const GraphShow = () => {
    const [model, setModel] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/adminShowproduct')
        .then(res=>res.json())
        .then(data => {
            const sliceData = data.allQuestions.slice(0, 1);
    
            setModel(sliceData)
    
          })
        // .then(data=>setModel(data.allQuestions))
    },[]);
    return (
        <div>
             {
                            model.map(datas => <GraphChart key={datas._id} datas={datas}></GraphChart>) 

                        }
            
        </div>
    );
};

export default GraphShow;