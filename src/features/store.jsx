import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./slice/apiSlice.jsx";
import favoriteList from "./slice/favoriteListSlice.jsx";
import ShoppingCartList from "./slice/shoppingCartList.jsx";

export const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        favoriteList: favoriteList,
        shoppingCartList: ShoppingCartList
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

let prevCart=null;

store.subscribe(()=>{
    const state=store.getState();
    const currentCart=state.shoppingCartList;

    if(currentCart!==prevCart)
    {
    localStorage.setItem("Cart",JSON.stringify(currentCart));
    }
    prevCart=currentCart;

})

let prevFavoriteList=null;
store.subscribe(()=>{
    const state=store.getState();
    const currentFavoriteList=state.favoriteList;
    if(currentFavoriteList!==prevFavoriteList){
        localStorage.setItem("favoriteList",JSON.stringify(currentFavoriteList));
    }
    prevFavoriteList=currentFavoriteList;
})