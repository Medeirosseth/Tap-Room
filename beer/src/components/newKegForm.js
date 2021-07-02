import React from "react"
import { v4 } from 'uuid'
import PropTypes from "prop-types";

function newKegForm(props){

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({
      brewery: event.target.brewery.value,
      name: event.target.name.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      id: v4()
    })
  }

  return(
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          brewery='brewery'
          placeholder="Brewery" />
        <input
          type='text'
          name='name'
          placeholder="Name Of Beer" /> 
        <input
          type='text'
          price='price'
          placeholder="Price" /> 
        <input
          type='text'
          alcoholContent='alcoholContent'
          placeholder="Alcohol Content" />    
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  )
}

newKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default newKegForm;