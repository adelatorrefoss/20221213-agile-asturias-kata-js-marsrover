const marsRover = {
  x: 0,
  y: 0,
  direction: "N",
};

const initialize = (params) => {
  marsRover.x = params.x;
  marsRover.y = params.y;
  marsRover.direction = params.direction;
};

const getMarsRover = () => marsRover;

const sendCommand = (command) => {
  for (let i = 0; i < command.length; i++) {
    processStep(command.charAt(i));
  }
};

const processStep = (step) => {
  switch (step) {
    case "f":
      move(1);
      break;

    case "b":
      move(-1);
      break;

    case "l":
      rotateLeft();
      break;

    case "r":
      rotateRight();
      break;
  }
};

function rotateRight() {
  switch (marsRover.direction) {
    case "N":
      marsRover.direction = "E";
      break;
    case "S":
      marsRover.direction = "W";
      break;
    case "E":
      marsRover.direction = "S";
      break;
    case "W":
      marsRover.direction = "N";
      break;
  }
}

function rotateLeft() {
  switch (marsRover.direction) {
    case "N":
      marsRover.direction = "W";
      break;
    case "S":
      marsRover.direction = "E";
      break;
    case "E":
      marsRover.direction = "N";
      break;
    case "W":
      marsRover.direction = "S";
      break;
  }
}

function move(inc) {
  switch (marsRover.direction) {
    case "N":
      marsRover.y += inc;
      break;
    case "S":
      marsRover.y -= inc;
      break;
    case "E":
      marsRover.x += inc;
      break;
    case "W":
      marsRover.x -= inc;
      break;
  }
}

module.exports = {
  initialize,
  getMarsRover,
  sendCommand,
};
