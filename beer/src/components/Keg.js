import React from "react"
import PropTypes from "prop-types";



function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
        <h3>Brewery: {props.brewery}</h3>
        <h3>Name: {props.name}</h3>
        <h4>${props.price} || {props.alcoholContent}</h4>
        <p><em>{props.issue}</em></p>
        <hr />
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  kegList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default Keg;