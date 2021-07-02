import React from "react";
import newKegForm from "./newKegForm";
import KegList from "./KegList";

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state =  {
      formVisibleOnPage: false,
      masterKegList: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick = () => {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }

    handleAddingNewKegToList = (newKeg) => {
      const newMasterKegList = this.state.masterKegList.concat(newKeg);
      this.setState({masterKegList: newMasterKegList,
        formVisibleOnPage: false})
    }

    

    render(){
      let currentVisibleState = null;
      let buttonText = null;
      if(this.currentVisibleState){
        currentVisibleState = <newKegForm  onNewKegCreation={this.handleAddingNewKegToList}/>;
        buttonText = "Return to Keg List";
      } else {
        currentVisibleState = <KegList kegList={this.state.masterKegList}/>
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