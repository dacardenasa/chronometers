const easyTimer = require('easytimer.js').Timer;

const chronometers = [
  {
    id: 1,
    title: "help students",
    project: "Make it Real",
    timer: new easyTimer(),
    time: "00:00:00",
    play: false,
    fill: true,
    edit: false,
    error: false,
  },
  {
    id: 2,
    title: "Make Homework",
    project: "High School",
    timer: new easyTimer(),
    time: "00:00:00",
    play: false,
    fill: true,
    edit: false,
    error: false,
  },
  {
    id: 3,
    title: "Build Landing Page",
    project: "Make it Real",
    timer: new easyTimer(),
    time: "00:00:00",
    play: false,
    fill: true,
    edit: false,
    error: false,
  },
]

export default chronometers;