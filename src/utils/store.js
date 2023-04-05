import {configureStore} from "@reduxjs/toolkit"
import appSlice from "./appSlice"
import chatSlice from "./chatSlice"
import { cacheResult } from "./searchSlice"


const store = configureStore({
    reducer:{
        app:appSlice,
        search:cacheResult,
        chat:chatSlice,
    }
})



export default store