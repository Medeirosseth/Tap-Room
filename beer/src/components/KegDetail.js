import React from 'react';
import Keg from './Keg'
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingEdit } = props;
  
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{Keg.brewery} - {Keg.name}</h3>
      <h3>{Keg.price} - {Keg.alcoholContent}</h3>
      <button onClick ={()=> onClickingEdit(keg.id) }> Update Keg</button>
      <button onClick ={()=> onClickingDelete(keg.id) }> Remove Keg</button>
      <hr/>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}


export default KegDetail;