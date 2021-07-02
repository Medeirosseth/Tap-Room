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
  }

    handleClick = () => {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }

    render(){
      let currentVisibleState = null;
      let buttonText = null;
      if(this.currentVisibleState){
        currentVisibleState = <newKegForm />;
        buttonText = "Return to Keg List";
      } else {
        currentVisibleState = <KegList/>
        buttonText = "Add Keg"
      }
      return (
        <React.Fragment>
          {currentVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      )
    }

}


export default KegControl;