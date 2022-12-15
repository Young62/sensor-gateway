import axios from "axios";

export const getSensors = () => {
    return axios.get('http://localhost:3001/sensors');
}

export const getAboutData = () => {
    return axios.get('http://localhost:3001/about');
}

export const getSensorData = (id) => {
    return axios.get(`http://localhost:3001/sensor/${id}`);
}

export const postSensorData = (id, temp, location) => {
    const payload = {id: id, temp: temp, location: location};
    return axios.post(`http://localhost:3001/sensor/${id}`, payload);
}