import React from 'react';
import { useState, useEffect } from 'react';
import { getSensors, postSensorData } from '../services/dataService';
import Sensor from './Sensor';
import {
  Link,
  Route,
  Routes
} from 'react-router-dom';
  
function Data () {
    const [sensorData, setServiceData] = useState([]);
  
    useEffect(() => {
      getSensors().then(res => setServiceData(res.data));
    }, [sensorData]);

    return <div>
        <h2>Data Dashboard</h2>
        <ul>
            {sensorData.map(sensor => (
                <li>
                    <Link to={"/data/" + sensor.id}>Sensor {sensor.id}</Link>
                </li>
            ))}
        </ul>

        <button onClick={() => postSensorData(1, 92.5, [1, 4])}>TEST</button>
        
        <Routes>
          <Route path='/:id' element={< Sensor />}></Route>
        </Routes>
        
    </div>
}
export default Data;