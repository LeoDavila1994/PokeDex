import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
		name: 'userName',
    initialState: "",
    reducers: {
        
    }
})

export const {  } = userNameSlice.actions;

export default userNameSlice.reducer;
