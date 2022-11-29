import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false,
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleState: (state) => {
            state.value = !state.value;
        },
    },
});

export const { toggleState } = menuSlice.actions;
export default menuSlice.reducer;
