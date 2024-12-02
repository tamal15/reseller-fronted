import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RoundedServiceCart from './RounndedServiceCart';

const RoundData = () => {
    const [model, setModel] = useState([]);
    useEffect(()=>{
        fetch('https://server.exportmark.com/adminShowproduct')
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
                            model.map(round => <RoundedServiceCart key={round._id} round={round}></RoundedServiceCart>) 

                        }
            
        </div>
    );
};

export default RoundData;