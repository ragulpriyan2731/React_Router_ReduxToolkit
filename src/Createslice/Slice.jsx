import { createSlice } from "@reduxjs/toolkit";
const initialvalue={
    count:0}


export const slice=createSlice({
    name:"counter",
    initialvalue,
    reducer:{
    increment:(state)=>{
        state.count+=1},
    decrement:(state)=>{
        state.count-=1}
}
})
export const{increment,decrement}=createSlice.actions
export default createSlice.reducer