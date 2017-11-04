"use strict";
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {getBooks} from "../../actions/booksActions";

class BooksList extends React.Component{
  componentDidMount(){
    //Dispatch an action
    this.props.getBooks();
  }

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBooks: getBooks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
