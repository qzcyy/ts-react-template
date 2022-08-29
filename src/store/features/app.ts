import { createSlice } from '@reduxjs/toolkit';

export const initialState:APP.AppState={
    currentRouterConfig:{
        path:''
    }
}

export const appSlice=createSlice({
    name:'app',
    initialState,
    reducers:{
        setCurrentRouterConfig:(state,action)=>{
            state.currentRouterConfig=action.payload
        }
    }
})
export const {
    setCurrentRouterConfig
}=appSlice.actions
export default appSlice.reducer
