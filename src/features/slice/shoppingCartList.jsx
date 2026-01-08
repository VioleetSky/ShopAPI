import {createSlice} from "@reduxjs/toolkit";

const initialState=JSON.parse(localStorage.getItem("Cart"))||{
    list: [],
}

const shoppingCartList=createSlice({
    name:'ShoppingCartList',
    initialState,
    reducers:{
        addToCartList: {
            prepare(product) {
                return {
                    payload: {
                        ...product,
                        quantity: 1,
                    }
                };
            },
            reducer(state, action) {
                const unique=state.list.find(item=>item.id===action.payload.id);
                if(unique){
                unique.quantity+=1;
                }
                else{
                    state.list.push(action.payload);
                }

            }
        },
        removeFromCartList(state, action){
            state.list = state.list.filter(item => item.id !== action.payload)
        },
        incrementQuantity(state, action){
            const findProduct = state.list.find(item=>item.id===action.payload);
            if(findProduct){
                findProduct.quantity+=1;
            }
        },
        decrementQuantity(state, action){
            const findProduct = state.list.find(item=>item.id===action.payload);
            if(!findProduct) return;
            findProduct.quantity-=1;
            if(findProduct.quantity<1){
                state.list=state.list.filter(item=>item.id!==action.payload);
            }
        },
        emptyCart(state){
            state.list=[]
        }
    }
});

export const {addToCartList, removeFromCartList, decrementQuantity, incrementQuantity, emptyCart} = shoppingCartList.actions;
export default shoppingCartList.reducer;