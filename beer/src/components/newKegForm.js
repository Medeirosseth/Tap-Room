import React from "react"
import { v4 } from 'uuid'
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import Keg from "./Keg";

function NewKegForm(props){

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({
      brewery: event.target.brewery.value,
      name: event.target.name.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      id: Keg.id
    })
  }

  return(
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="submit" />

    </React.Fragment>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;