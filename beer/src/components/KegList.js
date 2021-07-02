import React from "react";
import PropTypes from "prop-types";

function KegList(props){
  return(
    <React.Fragment>
      <hr/>
      {props.KegList.map((keg, index) =>
        <keg 
        brewery={keg.brewery}
        name={keg.name}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        key={index} />
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList;