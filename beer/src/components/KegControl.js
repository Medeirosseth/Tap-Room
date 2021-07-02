import React from "react";
import newKegForm from "./newKegForm";
import KegList from "./KegList";
import Keg from "./Keg";

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state =  {
      formVisibleOnPage: false
    };

    render(){
      let currentVisibleState = null;
      if(this.currentVisibleState){
        currentVisibleState = <newKegForm />
      } else {
        currentVisibleState = <KegList/>
      }
      return (
        <React.Fragment>
          {currentVisibleState}
        </React.Fragment>
      )
    }

  }

  render() {
    return(
      <React.Fragment>
      </React.Fragment>
    )
  }
}

export default KegControl;