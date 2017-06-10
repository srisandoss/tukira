"use strict";

//REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";

//IMPORT FROM REDUCERS
import reducers from "./reducers/index";

import {addToCart} from "./actions/cartActions";
import {postBooks, deleteBooks, updateBooks} from "./actions/booksActions";

//STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from "./components/pages/booksList";

render(
    <Provider store={store}>
        <BooksList />
    </Provider>, document.getElementById("app")
)

/*store.dispatch(postBooks(
      
));


store.dispatch(deleteBooks(
    {id: 1}
));

// Update a book
store.dispatch(updateBooks(
    {
        id: 2,
        title: "Learning"
    }
));

//-->> CART ACTIONS <<--
//ADD to CART
store.dispatch(addToCart([{id:1}]));*/
