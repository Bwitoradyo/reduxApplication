"use strict";

//BOOKS REDUCERS

export const booksReducers = (state = {books:[
  {
    _id: 1,
    title: "this is the book title",
    description: "this is the book description",
    price: 33.33
   },
   {
    _id: 2,
    title: "this is the second book title",
    description: "this is the second book description",
    price: 50
   }   
]} , action) => {
  switch(action.type){
    case "GET_BOOKS":
    //return copy of the state and a copy of the books array from the state
    return {...state, books:[...state.books]}
    break;

    case "POST_BOOK":
    //let books = state.books.concat(action.payload);
    //return {books};
    return {books:[...state.books, ...action.payload]}
    break;

    case "DELETE_BOOK":
    //Create a copy of the current array of books
    const currentBookToDelete = [...state.books]
    //Determine at which index in books array is the book to be deleted
    const indexToDelete = currentBookToDelete.findIndex((book) => {
      return book._id.toString() === action.payload
      }
    )
    //Use slice to remove the book at the specified index
    return {books: [...currentBookToDelete.slice(0, indexToDelete),
    ...currentBookToDelete.slice(indexToDelete + 1)
    ]}
    break;

    case "UPDATE_BOOK":
    //Create a copy of the current array of books
    const currentBookToUpdate = [...state.books]
    //Determine at which index in books array is the book to be updated
    const indexToUpdate = currentBookToUpdate.findIndex((book) => {
      return book._id === action.payload._id
      }
    )
    //Create a new book object with the new values and with the same array index
    //of the item we want to replace. To achie this we will use ...spread
    //but we can also use concat method as well
    const newBookToUpdate = {
      ...currentBookToUpdate[indexToUpdate],
      title: action.payload.title
    }
    //This Log has the purpose to show you how newBookToUpdate looks like
    console.log("what is the new book to update", newBookToUpdate);
    //Use slice to remove the book at the specified index, replace with the new object and concatenate
    //with the rest of items in the array
    return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
    ...currentBookToUpdate.slice(indexToUpdate + 1)
    ]}
    break;
     
  }
  return state
}

