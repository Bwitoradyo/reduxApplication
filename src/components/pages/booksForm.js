"use strict";
import React from "react";
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from "react-bootstrap";

class BooksForm extends React.Component{
  render(){
    return(
      <Well>
      	<Panel>
      	  <FormGroup controlId="title">
      	    <ControlLabel>Title</ControlLabel>
      	    <FormControl
	      type="text"
	      placeholder="Enter title"
	      ref="title"
	    />
      	  </FormGroup>
      	  <FormGroup controlId="description">
      	    <ControlLabel>Title</ControlLabel>
      	    <FormControl
	      type="text"
	      placeholder="Enter description"
	      ref="description"
	    />
      	  </FormGroup>
      	  <FormGroup controlId="price">
      	    <ControlLabel>Title</ControlLabel>
      	    <FormControl
	      type="text"
	      placeholder="Enter price"
	      ref="price"
	    />
      	  </FormGroup>
	  <Button bsStyle="primary">Save book</Button>
      	</Panel>
      </Well>		    
    )
  }
}

export default BooksForm;
