import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../redux/slices/menuSlice';

export const store = configureStore({
    reducer: {
        menu: menuReducer,
    },
});
