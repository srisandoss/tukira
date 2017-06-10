"use strict";

//ADD TO CARD
export function addToCart(book) {
    return {
        type:"ADD_TO_CART",
        payload: book
    }
}