import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSensorData } from '../services/dataService';
  
function Sensor () {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [sensor, setSensorData] = useState();
    
    useEffect(() => {
        getSensorData(id).then(res => setSensorData(res.data));
      }, [id]);

    return <div>
        {sensor && sensor.map(data =>
            <div>
                <h2>Sensor {data.id}</h2>
                <h3>Temp {data.temp}</h3>
                <h3>Location {data.location}</h3>
            </div>
        )}
    </div>
}
export default Sensor;