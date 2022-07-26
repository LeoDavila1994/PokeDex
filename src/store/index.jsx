import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from './slices/userName.slice'
import screenModeSlice from './slices/screenMode.slice'
import pokePageSlice from './slices/pokePage.slice'

export default configureStore({
    reducer: {
        userName: userNameSlice,
        screenMode: screenModeSlice,
        pokePage: pokePageSlice
    }
})
