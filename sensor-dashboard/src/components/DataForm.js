import React from 'react';
  
function DataForm () {
    const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
    }
    
    return<div className="wrapper">
        <h1>Create a New Sensor</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
            <label>
                <p>Location</p>
                <input name="location" />
            </label>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    </div>
}
export default DataForm;
