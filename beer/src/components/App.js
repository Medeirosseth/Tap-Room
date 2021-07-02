import React from "react";
import Header from "./Header";
import KegList from "./KegList";
import Keg from "./Keg";

function App(){
  return (
    <React.Fragment>
      <Header />
      <KegList />
      <Keg />
    </React.Fragment>
  )
}


export default App;