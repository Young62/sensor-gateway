import React from 'react';
import { getAboutData } from '../services/dataService';
import { useState, useEffect } from 'react';
  
function About () {
    const [serviceData, setServiceData] = useState([]);
  
    useEffect(() => {
      getAboutData().then(res => setServiceData(res.data));
    }, []);

    return <div>
        <h2>System Information</h2>
        
        <ul>
          <li>{serviceData.name}</li>
          <li>{serviceData.version}</li>
        </ul>
    </div>
}
export default About;
