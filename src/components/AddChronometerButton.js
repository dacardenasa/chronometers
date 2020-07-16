import React from 'react';

export const AddChronometerButton = (props) => {
  return(
    <div className="add-button-box">
      <button className="add-button" disabled={props.enable ? true : false} onClick={props.handleClick}>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
    </div>
  );
};