import React from 'react';
import AddIcon from '@material-ui/icons/Add';

export const AddChronometerButton = (props) => {
  return(
    <div className="add-button-box">
      <button className="add-button" disabled={props.enable ? true : false} onClick={props.handleClick}>
        <AddIcon fontSize="large" />
      </button>
    </div>
  );
};