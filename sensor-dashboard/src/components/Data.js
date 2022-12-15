import React from 'react';
import { useState, useEffect } from 'react';
import { getSensors } from '../services/dataService';
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
            {sensorData.map(sensorId => (
                <li>
                    <Link to={"/data/" + sensorId}>Sensor {sensorId}</Link>
                </li>
            ))}
        </ul>
        
        <Routes>
          <Route path='/:id' element={< Sensor />}></Route>
        </Routes>
        
    </div>
}
export default Data;