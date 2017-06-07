"use strict";

// POST BOOK
export function postBooks(book) {
    return {
        type:"POST_BOOK",
        payload: book
    }
}

// DELETE A BOOK
export function deleteBooks(id) {
    return {
        type:"DELETE_BOOK",
        payload: id
    }
}

// UPADTE A BOOK
export function updateBooks(book) {
    return {
        type:"DELETE_BOOK",
        payload: book
    }
}
