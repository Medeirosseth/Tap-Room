import React from "react";
import Keg from "./Keg";


function KegList(){
  return(
    <React.Fragment>
      <Keg 
      brewery="Sethers Brewery"
      name= "Dont worry be Hoppy"
      price= "100"
      alcoholContent="5.7 Abv"
      issue="Firebase will not save record!"/>
      <Keg 
      brewery="Medeiros Co"
      name= "IPA alot when I drink"
      price= "95"
      alcoholContent="6.8 Abv"
      issue="Firebase will not save record!"/>
    </React.Fragment>
  )
}


export default KegList;