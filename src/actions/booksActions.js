"use strict";
// GET BOOKS
export const getBooks = () => {
  return {
    type:"GET_BOOKS"
  }
}

// POST A BOOK
export const postBooks = (book) => {
  return {
    type:"POST_BOOK",
    payload: book
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
