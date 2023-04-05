import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({

    name: 'chat',
    initialState: {
        messages: [],
    },
    reducers:{
     addMessages:(state,action)=>{
      state.messages.splice(10,2)
       state=state.messages.push(action.payload);
       console.log('action.payload',action.payload)
     }
    }

})

export const {addMessages} = chatSlice.actions;
export default chatSlice.reducer;