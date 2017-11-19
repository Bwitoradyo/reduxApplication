"use strict";
import axios from "axios";

// GET BOOKS
export const getBooks = () => {
  return {
    type:"GET_BOOKS"
  }
}

// POST A BOOK
export const postBooks = (book) => {
  return (dispatch) => {
    axios.post("./books", book)
      .then((response) => {
        dispatch({type:"POST_BOOK", payload:response.data})
      })
      .catch((err) => {
        dispatch({type:"POST_BOOK_REJECTED", payload:"There was an error while posting a new book"})
      })
  }
}

// DELETE A BOOK
export const deleteBooks = (id) => {
   return {
     type: "DELETE_BOOK",
     payload: id
   }
}

// UPDATE A BOOK
export const updateBooks = (book) => {
  return{ 
    type: "UPDATE_BOOK",
    payload: book
  }
}
