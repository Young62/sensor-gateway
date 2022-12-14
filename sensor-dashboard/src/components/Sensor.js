import React from 'react';
import { useParams } from 'react-router-dom';
  
function Sensor ({sensor}) {
    const { id } = useParams();

    return <div>
        <h2>Sensor {sensor.id}</h2>
        <h3>Distance {sensor.distance}</h3>
    </div>
}
export default Sensor;