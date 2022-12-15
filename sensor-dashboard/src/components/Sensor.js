import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSensorData } from '../services/dataService';
  
function Sensor () {
    const { id } = useParams();
    const [sensor, setSensorData] = useState();
    
    useEffect(() => {
        getSensorData(id).then(res => setSensorData(res.data));
      }, [id]);

    return <div>
        {sensor &&
            <div>
                <h2>Sensor {sensor[0].id}</h2>
                <h3>Distance {sensor[0].temp}</h3>
            </div>
        }
    </div>
}
export default Sensor;