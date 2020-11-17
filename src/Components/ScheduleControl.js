import React from 'react';
import ScheduleList from './schedule/ScheduleList';
import ProduceList from './produce/ProduceList'

class ScheduleControl extends React.Component {

  constructor(props) {
    super(props); //https://overreacted.io/why-do-we-write-super-props/
    this.state = {
      formVisibleOnPage: false
    };
  }
  handleClick = () => {
    this.setState(prevState=> ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <ProduceList />
      buttonText = "return back to daily schedule";
    } else {
      currentlyVisibleState = <ScheduleList />
      buttonText = "see produce list";
    }
    return (

      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>
          {buttonText}
        </button> 
      </React.Fragment>
    );
  }
}

export default ScheduleControl;