"use strict";

//REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory, Match} from 'react-router';

import {createBrowserHistory} from 'history'
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
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './main';

const Routes = (
     <Provider store={store}>
         <div>
        <Match exactly pattern="/" component={Main} />
        <Match pattern="/admin" component={BooksForm} />
         <Match pattern="/cart" component={Cart} />
         </div>
    </Provider>, document.getElementById("app")
)

render(
   Routes, document.getElementById('app')
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
