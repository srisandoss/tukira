"use strict";

//REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redex';

import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";

//IMPORT FROM REDUCERS
import reducers from "./reducers/index";

import {addToCart} from "./actions/cartActions";
import {postBooks, deleteBooks, updateBooks} from "./actions/booksActions";

//STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

/*tore.subscribe(function(){
    console.log("current state is: ", store.getState());
});*/

import BooksList from "./components/pages/booksList"

render(
    
        <BooksList />
        , document.getElementById("app")
   
)

//STEP 2 create and dispatch actions

store.dispatch(postBooks(
    [{
        id: 1,
        title: "this is the book title",
        description: "this is the book desc",
        price: 100
    }],
    [{
        id: 2,
        title: "this is the book title",
        description: "this is the book desc",
        price: 200
    }]
));

//DELETE a book
store.dispatch(deleteBooks(
    {id: 1}
))

// Update a book
store.dispatch(updateBooks(
    {
        id: 2,
        title: "Learning"
    }
))

