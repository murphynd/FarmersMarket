import React from 'react';
import Produce from "./Produce";
import availableProduce from "./SeasonData"



function ProduceList(props) {
  return (
    <React.Fragment>
      <Produce // JSX tags being used props to child component which is the Schedule
        month={availableProduce[props.currentIndex].month}
        selection={availableProduce[props.currentIndex].selection} />
    </React.Fragment>
  );
}
export default ProduceList;