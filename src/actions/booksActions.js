"use strict";
import axios from "axios";

// GET BOOKS
export const getBooks = () => {
  return (dispatch) => {
    axios.get("/api/books")
      .then((response) => {
        dispatch({type:"GET_BOOKS", payload:response.data})
          .catch((err) =>{
          dispatch({type:"GET_BOOKS_REJECTED", payload:"There was an error while getting books data"}) 
        })
      })
  }
}

// POST A BOOK
export const postBooks = (book) => {
  return (dispatch) => {
    axios.post("/api/books", book)
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
  return (dispatch) => {
    axios.delete("/api/books/" + id)
      .then((response) => {
        dispatch({type:"DELETE_BOOK", payload:id})
      })
        .catch((err) => {
	  dispatach({type:"DELETE_BOOK_REJECTED", payload:"There was an error while deleting a book"})
	})
  }
}

// UPDATE A BOOK
export const updateBooks = (book) => {
  return{ 
    type: "UPDATE_BOOK",
    payload: book
  }
}
