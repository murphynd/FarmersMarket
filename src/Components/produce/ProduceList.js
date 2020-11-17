import React from 'react';
import Produce from "./Produce";
import availableProduce from "./SeasonData"



function ProduceList () {
  return (
    <React.Fragment>
        {availableProduce.map((produce, index) =>
          <Produce // JSX tags being used props to child component which is the Schedule
            month = {produce.month}
            selection = {produce.selection.map((bob) =>
              <li>{bob}</li>
            )}
            key = {index} />
        )}
    </React.Fragment>
  )
}
export default ProduceList; 

