"use strict";

import React from "react";
import {connect} from "react-redux";
import {Panel, Col, Row, Well, Button, ButtonGroup, Label} from "react-bootstrap";
import {bindActionCreators} from "redux";

import {deleteCartItem} from "../../actions/cartActions";

class Cart extends React.Component{

  onDelete(_id){
    //Create a copy of the current array in cart
    const currentBookToDelete = this.props.cart;
    //Determine at which index in books array is the book to be deleted
    const indexToDelete = currentBookToDelete.findIndex((cart) => {
      return cart._id === _id
      }
    )
    //Use slice to remove the book at the specified index
    let cartAfterDelete = [...currentBookToDelete.slice(0, indexToDelete),
    ...currentBookToDelete.slice(indexToDelete + 1)
    ]
  
    this.props.deleteCartItem(cartAfterDelete);
  }	
	
  render(){
    //If we at list have one item in the array, render the cart
    if(this.props.cart[0]){
      return this.renderCart();
    }else{
      return this.renderEmpty();
    }
  }
 
  renderEmpty(){
    return(<div></div>)
  }

  renderCart(){
    const cartItemsList = this.props.cart.map((cartArr) => {
      return(
        <Panel key={cartArr._id}>
	  <Row>
	    <Col xs={12} sm={4}>
	      <h6>{cartArr.title}</h6><span>    </span>
	    </Col>
	    <Col xs={12} sm={2}>
	      <h6>usd. {cartArr.price}</h6><span>    </span>
	    </Col>
	    <Col xs={12} sm={2}>
	      <h6>qty. <Label bsStyle="success"></Label>   </h6><span>    </span>
	    </Col>
	    <Col xs={6} sm={4}>
	      <ButtonGroup style={{minWidth:"300px"}}>
	         <Button bsStyle="default" bsSize="small">-</Button>
	         <Button bsStyle="default" bsSize="small">+</Button>
		 <span>     </span>
		 <Button onClick={this.onDelete.bind(this, cartArr._id)}  bsStyle="danger"  bsSize="small">DELETE</Button>
	      </ButtonGroup>
	    </Col>
	  </Row>
	</Panel>		      
      )  
    }, this)

    return(
      <Panel header="Cart" bsStyle="primary">
        {cartItemsList}
      </Panel>		    
    )
  }

}

const mapStateToProps = (state) => {
  return{
    cart:state.cart.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteCartItem: deleteCartItem
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
