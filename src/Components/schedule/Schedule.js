import React from "react";
import PropTypes from "prop-types";

function Schedule(props) {
  return (
    <React.Fragment>
      <div class="row">
        <div class="leftcolumn">
          <div class="card">
            <h5>{props.day}</h5>
            <p>{props.location}</p>
            <p>{props.hours}</p>
            <p>{props.booth}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};


export default Schedule;