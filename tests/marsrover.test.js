const marsRover = require("../src/marsrover");

it("verify initial parameters", () => {
  expect(marsRover.getMarsRover()).toEqual({ x: 0, y: 0, direction: "N" });
});

it("verify parameters after initialization", () => {
  marsRover.initialize({ x: 2, y: 2, direction: "W" });
  expect(marsRover.getMarsRover()).toEqual({ x: 2, y: 2, direction: "W" });
});

it("verify parameters after sending command f pointing N", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "N" });
  marsRover.sendCommand("f");
  expect(marsRover.getMarsRover()).toEqual({ x: 0, y: 1, direction: "N" });
});

it("verify parameters after sending command f pointing S", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "S" });
  marsRover.sendCommand("f");
  expect(marsRover.getMarsRover()).toEqual({ x: 0, y: -1, direction: "S" });
});

it("verify parameters after sending command f pointing E", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "E" });
  marsRover.sendCommand("f");
  expect(marsRover.getMarsRover()).toEqual({ x: 1, y: 0, direction: "E" });
});

it("verify parameters after sending command f pointing W", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "W" });
  marsRover.sendCommand("f");
  expect(marsRover.getMarsRover()).toEqual({ x: -1, y: 0, direction: "W" });
});

it("verify parameters after sending command b", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "N" });
  marsRover.sendCommand("b");
  expect(marsRover.getMarsRover()).toEqual({ x: 0, y: -1, direction: "N" });
});

it("verify parameters after sending command b pointing S", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "S" });
  marsRover.sendCommand("b");
  expect(marsRover.getMarsRover()).toEqual({ x: 0, y: 1, direction: "S" });
});

it("verify parameters after sending command b pointing E", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "E" });
  marsRover.sendCommand("b");
  expect(marsRover.getMarsRover()).toEqual({ x: -1, y: 0, direction: "E" });
});

it("verify parameters after sending command b pointing W", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "W" });
  marsRover.sendCommand("b");
  expect(marsRover.getMarsRover()).toEqual({ x: 1, y: 0, direction: "W" });
});

it("verify parameters after sending command l pointing N", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "N" });
  marsRover.sendCommand("l");
  expect(marsRover.getMarsRover()).toEqual({ x: 0, y: 0, direction: "W" });
});

it("verify parameters after sending command l pointing S", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "S" });
  marsRover.sendCommand("l");
  expect(marsRover.getMarsRover()).toEqual({ x: 0, y: 0, direction: "E" });
});

it("verify parameters after sending command l pointing E", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "E" });
  marsRover.sendCommand("l");
  expect(marsRover.getMarsRover()).toEqual({ x: 0, y: 0, direction: "N" });
});

it("verify parameters after sending command l pointing W", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "W" });
  marsRover.sendCommand("l");
  expect(marsRover.getMarsRover()).toEqual({ x: 0, y: 0, direction: "S" });
});

it("verify parameters after sending command r pointing N", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "N" });
  marsRover.sendCommand("r");
  expect(marsRover.getMarsRover()).toEqual({ x: 0, y: 0, direction: "E" });
});

it("verify parameters after sending command r pointing S", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "S" });
  marsRover.sendCommand("r");
  expect(marsRover.getMarsRover()).toEqual({ x: 0, y: 0, direction: "W" });
});

it("verify parameters after sending command r pointing E", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "E" });
  marsRover.sendCommand("r");
  expect(marsRover.getMarsRover()).toEqual({ x: 0, y: 0, direction: "S" });
});

it("verify parameters after sending command r pointing W", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "W" });
  marsRover.sendCommand("r");
  expect(marsRover.getMarsRover()).toEqual({ x: 0, y: 0, direction: "N" });
});

it("verify parameters after sending command f not in default position", () => {
  marsRover.initialize({ x: 10, y: -4, direction: "W" });
  marsRover.sendCommand("f");
  expect(marsRover.getMarsRover()).toEqual({ x: 9, y: -4, direction: "W" });
});

it("verify parameters after sending command r not in default position", () => {
  marsRover.initialize({ x: -13, y: 7, direction: "S" });
  marsRover.sendCommand("r");
  expect(marsRover.getMarsRover()).toEqual({ x: -13, y: 7, direction: "W" });
});

it("verify parameters after sending command ffr", () => {
  marsRover.initialize({ x: 0, y: 0, direction: "N" });
  marsRover.sendCommand("ffr");
  expect(marsRover.getMarsRover()).toEqual({ x: 0, y: 2, direction: "E" });
});
