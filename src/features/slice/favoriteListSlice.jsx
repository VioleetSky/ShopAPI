import {createSlice} from "@reduxjs/toolkit";

const saved=localStorage.getItem("favoriteList");
const initialState= saved ? JSON.parse(saved) : {
    list: []
}

const favoriteList=createSlice({
    name:'favoriteList',
    initialState,
    reducers:{
        addToList(state, action){
            const product=state.list.find(item=>item.id === action.payload.id);
            if(!product) {
                state.list.push(action.payload);
            }
        },
        removeFromList(state, action){
            state.list = state.list.filter(item => item.id !== action.payload.id)
        }
    }
});

export const {addToList, removeFromList} = favoriteList.actions;
export default favoriteList.reducer;