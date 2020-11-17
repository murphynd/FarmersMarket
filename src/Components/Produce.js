import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
  return (
    <React.Fragment>
        <h5>{props.month}</h5>
  <p>{props.selection}{','}</p>
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string
};



export default Produce;