import React from "react";
import newKegForm from "./newKegForm";
import KegList from "./KegList";
import KegDetail from './KegDetail'

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state =  {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedKeg!= null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

    handleAddingNewKegToList = (newKeg) => {
      const newMasterKegList = this.state.masterKegList.concat(newKeg);
      this.setState({masterKegList: newMasterKegList,
        formVisibleOnPage: false})
    }

    handledChangingSelectedKeg = (id) => {
      const selectedKeg = this.state.masterKegList.filter(keg => keg.id == id)[0];
      this.setState({selectedKeg : selectedKeg})
    }

    handleDeletingTicket = (id) => {
      const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
      this.setState({
        masterKegList: newMasterKegList,
        selectedKeg: null
      })
    }
    

    render(){
      let currentlyVisibleState = null;
      let buttonText = null; 
  
      if (this.state.selectedTicket != null) {
        currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} />
        buttonText = "Return to Keg List";
      }
      else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <newKegForm onNewKegCreation={this.handleAddingNewKegToList}  />;
        buttonText = "Return to Keg List";
      } else {
        currentlyVisibleState = <KegList KegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
        buttonText = "Add Keg";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
      
}




export default KegControl;