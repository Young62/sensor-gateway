import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from '../services/dataService';
import Sensor from './Sensor';
import {
  Link,
  Route,
  Routes
} from 'react-router-dom';
  
function Data () {
    const [sensorData, setServiceData] = useState([]);
    const [selectedSensor, setSelectedSensor] = useState();
  
    useEffect(() => {
      getData().then(res => setServiceData(res.data));
    }, [sensorData]);

    function sensorClicked(sensor) {
      console.log('Clicked Sensor', sensor);
      setSelectedSensor(sensor);
    }

    return <div>
        <h2>Data Dashboard</h2>
        <ul>
            {sensorData.map(sensor => (
                <li>
                    <Link to={"/data/" + sensor.id} onClick={() => sensorClicked(sensor)}>Sensor {sensor.id}</Link>
                </li>
            ))}
        </ul>
        
        <Routes>
          <Route path='/:id' element={< Sensor sensor={selectedSensor} />}></Route>
        </Routes>
        
    </div>
}
export default Data;