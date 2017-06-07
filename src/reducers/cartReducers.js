"use strict";

export function cartReducers(state={cart:[]}, action) {
     switch(action.type) {
        case "ADD_TO_CART":
            //let books = state.books.concat(action.payload);
            //return {books};
            return {cart:[...state.cart, ...action.payload]}
            break;
       
       
    }
    return state;
}