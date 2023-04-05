import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({

    name: 'search',
    initialState: {},
    reducers:{
      cacheResult:(state,action)=>{
        state={...state,...action.payload}
        console.log('cacheResult',action.pay)
      },
    }

})

export const {cacheResult} = searchSlice.actions;
export default searchSlice.reducer;