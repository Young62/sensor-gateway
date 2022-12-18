import { configureStore } from '@reduxjs/toolkit'; 
import sensorsSlice from './sensorsSlice';

export const store = configureStore({
    reducer: {
        sensors: sensorsSlice
    }
});
