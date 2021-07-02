import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types"

function KegDetail(props) {
  return (
    <React.Fragment>
      <h1>Keg Detail will be here</h1>
      <h3>{Keg.brewery} - {Keg.name}</h3>
      <h3>{Keg.price} - {Keg.alcoholContent}</h3>
      <hr/>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object
}


export default KegDetail;