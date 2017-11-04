"use strict";
import React from "react";
import {connect} from "react-redux";

class BooksList extends React.Component{
  render(){
    const booksList = this.props.books.map((booksArr) => {
      return(
        <div key={booksArr.id}>
          <h2>{booksArr.title}</h2>
          <h2>{booksArr.description}</h2>
          <h2>{booksArr.price}</h2>
        </div>		      
      )
    })
    return(
      <div>
	{booksList}
      </div>		    
    ) 
  }
}

const mapStateToProps = (state) => {
  return{
    books:state.books.books
  }
}

export default connect(mapStateToProps)(BooksList);
