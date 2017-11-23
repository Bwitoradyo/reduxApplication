"use strict";
import axios from "axios";

// GET CART
export const getCart = () => {
  return (dispatch) => {
    axios.get("/api/cart")
      .then((response) => {
         dispatch({type:"GET_CART", payload:response.data})
      })
      .catch((err) => {
        dispatch({type:"GET_CART_REJECTED", msg:"error when getting cart from session"})     
      })
  }

}

//ADD TO CART
export const addToCart = (cart) => {
  return (dispatch) => {
    axios.post("/api/cart", cart)
      .then((response) => {
         dispatch({type:"ADD_TO_CART", payload:response.data})
      })
      .catch((err) => {
        dispatch({type:"ADD_TO_CART_REJECTED", msg:"error when adding to cart"})     
      })
  }
}
//UPDATE CART
export const updateCart = (_id, unit, cart) => {
    //Create a copy of the current array of books
    const currentBookToUpdate = cart
    //Determine at which index in books array is the book to be updated
    const indexToUpdate = currentBookToUpdate.findIndex((book) => {
      return book._id === _id
      }
    )
    const newBookToUpdate = {
      ...currentBookToUpdate[indexToUpdate],
      quantity: currentBookToUpdate[indexToUpdate].quantity + unit
    }
    let cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
    ...currentBookToUpdate.slice(indexToUpdate + 1)]
   
  return {
    type: "UPDATE_CART",
    payload: cartUpdate
  }
}



//DELETE FROM CART
export const deleteCartItem = (cart) => {
  return (dispatch) => {
    axios.post("/api/cart", cart)
      .then((response) => {
         dispatch({type:"DELETE_CART_ITEM", payload:response.data})
      })
      .catch((err) => {
        dispatch({type:"DELETE_CART_ITEM_REJECTED", msg:"error when deleting cart item"})     
      })
  }
}
 
