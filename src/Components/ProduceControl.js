import React from 'react';
// import ScheduleList from './schedule/ScheduleList';
import ProduceList from './produce/ProduceList';

// class ScheduleControl extends React.Component {

//   constructor(props) {
//     super(props); //https://overreacted.io/why-do-we-write-super-props/
//     this.state = {
//       formVisibleOnPage: false
//     };
//   }
//   handleClick = () => {
//     this.setState(prevState=> ({
//       formVisibleOnPage: !prevState.formVisibleOnPage
//     }));
//   }

//   render(){
//     let currentlyVisibleState = null;
//     let buttonText = null;
//     if (this.state.formVisibleOnPage) {
//       currentlyVisibleState = <ProduceList />
//       buttonText = "return back to daily schedule";
//     } else {
//       currentlyVisibleState = <ScheduleList />
//       buttonText = "see produce list";
//     }
//     return (

//       <React.Fragment>
//         {currentlyVisibleState}
//         <button onClick={this.handleClick}>
//           {buttonText}
//         </button> 
//       </React.Fragment>
//     );
//   }
// }

// export default ScheduleControl;

class ProduceControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produceVisibleOnPage: 2
    };
  }
  handleClickUp = () => {
    if (this.state.produceVisibleOnPage >= 11) {
      this.setState({ produceVisibleOnPage: 0 })
    }
    else {
      this.setState(prevState => ({
        produceVisibleOnPage: prevState.produceVisibleOnPage + 1
      }));
    }
  }


  handleClickDown = () => {
    if (this.state.produceVisibleOnPage <= 0) {
      this.setState({ produceVisibleOnPage: 11 })
    }
    else {
      this.setState(prevState => ({
        produceVisibleOnPage: prevState.produceVisibleOnPage - 1
      }));
    }
  }

  render() {
    let currentVisibleState = null;
    currentVisibleState = <ProduceList
      currentIndex={this.state.produceVisibleOnPage} />

    return (
      <React.Fragment>
        <button className="arrow btn btn-outline-dark" onClick={this.handleClickDown}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg></button>
        <button className="arrow btn btn-outline-dark" onClick={this.handleClickUp}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg></button>
        {currentVisibleState}

      </React.Fragment>
    )
  }
}

export default ProduceControl;