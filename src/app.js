"use strict";
// REACT
import React from "react";
import {render} from "react-dom";

import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";

// IMPORT COMBINED REDUCERS
import reducers from "./reducers/index";

// IMPORT ACTIONS
import {addToCart} from "./actions/cartActions";
import {postBooks, deleteBooks, updateBooks} from "./actions/booksActions";



//STEP 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);


import BooksList from "./components/pages/booksList";

render(
  <BooksList/>, document.getElementById("app")		
)
//STEP 2 create and dispatch actions
store.dispatch(postBooks(
  [{
    id: 1,
    title: "this is the book title",
    description: "this is the book description",
    price: 33.33
   },
   {
    id: 2,
    title: "this is the second book title",
    description: "this is the second book description",
    price: 50
   } 
  ]   			
))

//DELETE a book
store.dispatch(deleteBooks(
  {id: 1}			
))

//UPDATE a book
store.dispatch(updateBooks(
  {   
    id: 2,
    title: "Learn React in 24 hr"
  }			
))

// -->>CART ACTIONS <<--
store.dispatch(addToCart ([{id:1}]))
