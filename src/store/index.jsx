import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from './slices/userName.slice'
import screenModeSlice from './slices/screenMode.slice'

export default configureStore({
    reducer: {
        userName: userNameSlice,
        screenMode: screenModeSlice
    }
})
