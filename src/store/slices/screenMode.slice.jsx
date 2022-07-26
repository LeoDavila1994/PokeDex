import { createSlice } from '@reduxjs/toolkit';

export const screenModeSlice = createSlice({
    name: 'screenMode',
    initialState: true,
    reducers: {
        mode: ( state, action) => {
            return !state;
        }
    }
})

export const { mode } = screenModeSlice.actions;

export default screenModeSlice.reducer;