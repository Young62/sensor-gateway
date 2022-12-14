import axios from "axios";

export const getSensors = () => {
    return axios.get('http://localhost:3001/distance');
}

export const getAboutData = () => {
    return axios.get('http://localhost:3001/about');
}

export const getSensorData = () => {
    
}