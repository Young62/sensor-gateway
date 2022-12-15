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
                    <p>Location X</p>
                    <input name="locationX" />
                </label>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    </div>
}
export default DataForm;
