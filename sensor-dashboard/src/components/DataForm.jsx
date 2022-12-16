import React from 'react';
import { useState, useReducer } from "react";
import { postSensorData } from '../services/dataService';

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}
  
function DataForm () {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
      event.preventDefault();
     setSubmitting(true);
     
     postSensorData(formData.id, formData.temp, formData.location);

      // TODO tie submitting to server acceptance
     setTimeout(() => {
       setSubmitting(false);
     }, 3000)
   }

   const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
    }
  
    return(
      <div className="wrapper">
        <h1>How About Them Apples</h1>
        {submitting &&
        <div>
            You are submitting the following:
            <ul>
            {Object.entries(formData).map(([name, value]) => (
                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
            ))}
            </ul>
        </div>
        }
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Id</p>
              <input name="id" onChange={handleChange} />
            </label>
            <label>
              <p>Temp</p>
              <input name="temp" onChange={handleChange} />
            </label>
            <label>
              <p>Location</p>
              <input name="location" onChange={handleChange} />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
export default DataForm;
