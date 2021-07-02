import React from "react"
import PropTypes from "prop-types";



function Keg(props){
  return (
    <React.Fragment>
      <h3>{props.brewery} - {props.name} </h3>
      <h4>${props.price} || {props.alcoholContent}</h4>
      <p><em>{props.issue}</em></p>
      <hr />
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  issue: PropTypes.string
};

export default Keg;