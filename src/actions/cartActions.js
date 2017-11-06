"use strict";

//ADD TO CART
export const addToCart = (book) => {
  return {
    type: "ADD_TO_CART",
    payload: book
  }
}

//DELETE FROM CART
export const deleteCartItem = (cart) => {
  return {
    type: "DELETE_CART_ITEM",
    payload: cart
  }
}
 
