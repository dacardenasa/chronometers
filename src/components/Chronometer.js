import React, { Component } from "react";
import { Container } from "@material-ui/core";
import { AddChronometerButton } from './AddChronometerButton';
import { ChronometerMainView, ChronometerCreateView, ChronometerUpdateView } from './views';
import chronometers from '../chronometers'; 
const easyTimer = require('easytimer.js').Timer;

export class Chronometer extends Component {
  constructor() {
    super();
    this.titleRef = React.createRef();
    this.projectRef = React.createRef();
    this.title = '';
    this.project = '';
    this.state = {
      chronometers: chronometers
    };
  }

  createChronometer(e) {
    e.preventDefault();
    const chronometerid = this.state.chronometers.length + 1;
    const newChronometer = {
      id: chronometerid,
      title: "",
      project: "",
      timer: new easyTimer(),
      time: "00:00:00",
      play: false,
      fill: false,
      edit: false,
    }
    this.setState({
      chronometers: this.state.chronometers.concat(newChronometer)
    });
  }

  saveChronometer(e, timerId) {
    e.preventDefault();
    this.setState({
      chronometers: this.state.chronometers.map( chronometer => {
        if (chronometer.id === timerId) {
          chronometer.title = this.titleRef.current.value;
          chronometer.project = this.projectRef.current.value;
          chronometer.fill = true;
          return chronometer;
        } else {
          return chronometer;
        }
      })
    });
  }

  cancelCreateChronometer(e, timerId) {
    e.preventDefault();
    this.setState({
      chronometers: this.state.chronometers.filter( chronometer =>
        chronometer.id !== timerId
      )
    });
  }

  editChronometer(e, timerId) {
    e.preventDefault();
    this.setState({
      chronometer: this.state.chronometers.map( chronometer => {
        if(chronometer.id === timerId) {
          this.title = chronometer.title;
          this.project = chronometer.project;
          chronometer.edit = true;
          return chronometer;
        } else {
          return chronometer;
        }
      })
    });
  }

  updateChronometer(e, timerId) {
    e.preventDefault();
    this.setState({
      chronometers: this.state.chronometers.map( chronometer => {
        if (chronometer.id === timerId) {
          chronometer.title = this.titleRef.current.value;
          chronometer.project = this.projectRef.current.value;
          chronometer.edit = false;
          return chronometer;
        } else {
          return chronometer;
        }
      })
    });
  }

  cancelupdate(e, timerId) {
    e.preventDefault();
    this.setState({
      chronometer: this.state.chronometers.map( chronometer => {
        if(chronometer.id === timerId) {
          chronometer.title = this.title;
          chronometer.project = this.project;
          chronometer.edit = false;
          return chronometer;
        } else {
          return chronometer;
        }
      })
    });
  }

  deleteChronometer(e, timerId) {
    e.preventDefault();
    let chronometer = this.state.chronometers.find(chronometer => chronometer.id === timerId);
    let timer = chronometer.timer;
    timer.stop();
    this.setState({
      chronometers: this.state.chronometers.filter( chronometer => 
        chronometer.id !== timerId
      )
    });
  }

  startChronometer(e, timerId) {
    e.preventDefault();
    let chronometer = this.state.chronometers.find(chronometer => chronometer.id === timerId);
    let timer = chronometer.timer;

    timer.start({callback: (timer) => {
      const chronometerTime = timer.getTimeValues().toString();
        this.setState({
          chronometers: this.state.chronometers.map( chronometer => {
            if (chronometer.id === timerId ) {
              chronometer.time = chronometerTime;
              chronometer.play = true;
              return chronometer;
            } else {
              return chronometer;
            }
          })
        });
    }});
  }

  stopChronometer(e, timerId) {
    e.preventDefault();
    let chronometer = this.state.chronometers.find(chronometer => chronometer.id === timerId);
    let timer = chronometer.timer;

    this.setState({
      chronometers: this.state.chronometers.map( chronometer => {
        if (chronometer.id === timerId) {
          chronometer.play = false;
          return chronometer;
        } else {
          return chronometer;
        }
      })
    });
    timer.pause();
  }

  handleChangeTitle(e, timerId) {
    let title = e.target.value;
    this.setState({
      chronometers: this.state.chronometers.map( chronometer => {
        if(chronometer.id === timerId){
          chronometer.title = title;
          return chronometer;
        } else {
          return chronometer;
        }
      })
    });
  }

  handleChangeProject(e, timerId) {
    let project = e.target.value;
    this.setState({
      chronometers: this.state.chronometers.map( chronometer => {
        if(chronometer.id === timerId){
          chronometer.project = project;
          return chronometer;
        } else {
          return chronometer;
        }
      })
    });
  }

  enableAddChronometerButton(){
    return this.state.chronometers.some(chronometer => chronometer.fill === false);
  }

  render() {
    let enableButton = this.enableAddChronometerButton();
    return (
    <Container maxWidth="sm">
      {
        this.state.chronometers.map( (chronometer) => {
          return( 
          chronometer.fill && !chronometer.edit ?
            <ChronometerMainView 
            key={chronometer.id} 
            title={chronometer.title} 
            project={chronometer.project} 
            time={chronometer.time} 
            play={chronometer.play}
            editChronometer={(e) => this.editChronometer(e, chronometer.id)}
            deleteChronometer={(e) => this.deleteChronometer(e, chronometer.id)}
            chronometerStatus={ chronometer.play ? 
              (e) => this.stopChronometer(e, chronometer.id) : 
              (e) => this.startChronometer(e, chronometer.id) } 
            /> 
          : !chronometer.fill ?
            <ChronometerCreateView 
            key={chronometer.id}
            title={this.titleRef}
            project={this.projectRef}
            save={(e) => this.saveChronometer(e, chronometer.id)}
            cancel={(e) => this.cancelCreateChronometer(e, chronometer.id)} 
            />
          : chronometer.edit ?
            <ChronometerUpdateView 
            key={chronometer.id}
            title={chronometer.title}
            project={chronometer.project}
            refTitle={this.titleRef}
            refProject={this.projectRef}
            changeTitle={(e) => this.handleChangeTitle(e, chronometer.id)}
            changeProject={(e) => this.handleChangeProject(e, chronometer.id)}
            update={(e) => this.updateChronometer(e, chronometer.id)}
            cancel={(e) => this.cancelupdate(e, chronometer.id) }
            />
          : null
          )
        })
      }
      <AddChronometerButton
      enable={enableButton}
      handleClick={(e) => this.createChronometer(e)}
      />
    </Container>
    )
  }
}


