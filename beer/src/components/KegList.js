import React from "react";
import Keg from "./Keg";

  const masterKegList = [
    {
        brewery: "Sethers Brewery",
        name: "Dont worry be Hoppy",
        price: "100",
        alcoholContent: "5.7 Abv",
    },
    {
        brewery: "Medeiros Co",
        name: "IPA alot when I drink",
        price: "95",
        alcoholContent: "6.8 Abv",
    },
    {
        brewery: "React Brewery",
        name: "Byte Me",
        price: "101",
        alcoholContent: "4.5 Abv",
    }
  ];

function KegList(){
  return(
    <React.Fragment>
      <hr/>
      {masterKegList.map((keg, index) =>
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

export default KegList;