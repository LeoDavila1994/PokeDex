import { createSlice } from '@reduxjs/toolkit';

export const pokePageSlice = createSlice({
    name: 'pokePage',
    initialState: 10,
    reducers: {
        changeNum : (_state, action) => {
            return action.payload
        }
    }
})

export const { changeNum } = pokePageSlice.actions;

export default pokePageSlice.reducer;