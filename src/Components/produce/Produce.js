import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
  return (
    <React.Fragment>
        <div class="row">
  <div class="leftcolumn">
    <div class="card">
        <h5>{props.month}</h5>
  <p>{props.selection}</p>
  </div>
  </div>
  </div>
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection : PropTypes.array
};



export default Produce;