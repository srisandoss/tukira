"use restict";

//BOOKS REDUCERS
export function booksReducers(state={
    books:  [{
            id: 1,
            title: "this is the book title1",
            description: "this is the book desc1",
            price: 44
        },
        {
            id: 2,
            title: "this is the book title2",
            description: "this is the book desc2",
            price: 55
        }]
    }, action) {
    switch(action.type) {
        case "GET_BOOKS":
            //let books = state.books.concat(action.payload);
            //return {books};
            return {...state, books:[...state.books]}
            break;
        case "POST_BOOK":
            //let books = state.books.concat(action.payload);
            //return {books};
            return {...state, books:[...state.books, ...action.payload]}
            break;
        case "DELETE_BOOK":
            //Create a copy of the current array of books
            const currentBookToDelete = [...state.books];
            // Determine at which index in books array is the book to be deleted
            const indexToDelete = currentBookToDelete.findIndex(
                function(book) {
                    return book.id === action.payload.id;
                }
            );
            return {books: [...currentBookToDelete.slice(0, indexToDelete),
                ...currentBookToDelete.slice(indexToDelete + 1)]}
            break;
        case "UPDATE_BOOK":
            //Create a copy of the current array of books
            const currentBookToUpdate = [...state.books];
            // Determine at which index in books array is the book to be deleted
            const indexToUpdate = currentBookToUpdate.findIndex(
                function(book) {
                    return book._id === action.payload._id;
                }
            );

            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            }
           //  console.log("What is it newBookToUpdate: ", newBookToUpdate);
            return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
                ...currentBookToUpdate.slice(indexToUpdate + 1)]}
            break;
    }
    return state;
};