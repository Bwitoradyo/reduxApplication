"use strict";
// REACT
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

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
import Menu from "./components/pages/menu";
import Footer from "./components/pages/footer";

render(
  <Provider store={store}>
    <div>
    <Menu/>
    <BooksList/>	
    <Footer/>
    </div>

  </Provider>, document.getElementById("app")		
)
//STEP 2 create and dispatch actions

