import React from 'react';
import { green } from "@material-ui/core/colors";
import { DeleteForeverOutlined, EditOutlined } from "@material-ui/icons";

export const ChronometerMainView = (props) => {
  return (
    <div className="chronometer-box">
      <div className="summary-box">
        <h3>{props.title}</h3>
        <span>{props.project}</span>
      </div>
      <div className="time-box">
        <span>{props.time}</span>
      </div>
      <div className="actions-box">
        <button onClick={props.deleteChronometer}>
          <DeleteForeverOutlined style={{ color: green[500] }} />
        </button>
        <button onClick={props.editChronometer}>
          <EditOutlined style={{ color: green[500] }} />
        </button>
      </div>
      {props.play ? 
        <button className="cancel-button" onClick={props.chronometerStatus}>Stop</button> : 
        <button className="start-button" onClick={props.chronometerStatus}>Start</button>
      }
    </div>
  );
};

export const ChronometerCreateView = (props) => {
  return (
    <div className="chronometer-box">
      <form onSubmit={props.save}>
        <div className="title-box">
          <label htmlFor="title" className="label-title">
            Title
          </label>
          <br />
          <input type="text" ref={props.title}/>
        </div>
        <div className="project-box">
          <label htmlFor="project" className="label-title">
            Project
          </label>
          <br />
          <input type="text" ref={props.project}/>
        </div>
        <div className="buttons-box">
          <button type="submit" className="button-one">Create</button>
          <button className="button-two" onClick={props.cancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export const ChronometerUpdateView = (props) => {
  return (
    <div className="chronometer-box">
      <form onSubmit={props.update}>
        <div className="title-box">
          <label htmlFor="title" className="label-title">
            Title
          </label>
          <br />
          <input type="text" onChange={props.changeTitle} ref={props.refTitle} value={props.title} />
        </div>
        <div className="project-box">
          <label htmlFor="project" className="label-title">
            Project
          </label>
          <br />
          <input type="text" onChange={props.changeProject} ref={props.refProject} value={props.project} />
        </div>
        <div className="buttons-box">
          <button type="submit" className="button-one">Update</button>
          <button className="button-two" onClick={props.cancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
