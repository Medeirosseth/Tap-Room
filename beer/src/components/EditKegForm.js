import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from "prop=types";

function EditKegForm (props) {
  const { keg } = props

  function handleEditKegSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      brewery: event.target.brewery.value,
      name: event.target.name.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      id: keg.id
    })
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler = {handleEditKegSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  ticket: PropTypes.object,
  onEditKeg: PropTypes.func
}

export default EditKegForm;