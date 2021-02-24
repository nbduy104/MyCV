var wrapperEl = document.querySelector(".wrapper");
var canvasEl = document.querySelector("#mini-particle");
var particleOpt = {
  particleColor: "#0f0",
  webColor: "#0ff",
};
var range = 80,
  population = 200,
  radius = 2;

var particle = new ParticleFactory(
  wrapperEl,
  canvasEl,
  particleOpt,
  population,
  radius,
  range
);
particle.setup();
