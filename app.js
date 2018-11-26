const sketches = new Sketches();
const state = {
  displayComponent: "sketches",
  currentSketch: "sketch1"
};
let sketchHandler;

const drawCurrentSketch = () => {
  if (sketchHandler) sketchHandler.remove();
  sketchHandler = new p5(sketches[state.currentSketch], "sketchContainer");
};

const showGallery = () => {
  const { displayComponent } = state;
  if (displayComponent === "sketches") {
    document.getElementById("sketchContainer").hidden = true;
    document.getElementById("gallery").hidden = false;
    document.getElementById("switchViewsButton").innerHTML = "Go to sketches";
    state.displayComponent = "gallery";
  }
  if (displayComponent === "gallery") {
    document.getElementById("sketchContainer").hidden = false;
    document.getElementById("gallery").hidden = true;
    document.getElementById("switchViewsButton").innerHTML = "Go to gallery";
    state.displayComponent = "sketches";
  }
};

const selectSketch = sketch => {
  state.currentSketch = sketch;
  drawCurrentSketch();
};

const thumbTemplate = (targetSketch, sketchName, imgUrl) => `
  <div>
    <img />
    <span> Show ${sketchName}</span>
    <button onclick="selectSketch('${targetSketch}')"> Show this sketch </button>
  </div>
`;

const thumbnailsArray = [
  thumbTemplate("sketch1", "SKETCH 1 🙃", ""),
  thumbTemplate("sketch2", "SKETCH 2 😒", "")
];

const thumbnails = thumbnailsArray.reduce(
  (acc, thumbnail) => `${acc}${thumbnail}`
);

document.getElementById("gallery").innerHTML = thumbnails;

const init = () => {
  drawCurrentSketch();
};

init();
