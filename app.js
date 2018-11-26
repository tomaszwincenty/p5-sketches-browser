const state = {
  displayComponent: "sketches",
  currentSketch: sketch1
};

new p5(state.currentSketch, "sketchContainer");

const showGallery = () => {
  const { displayComponent } = state;
  if (displayComponent === "sketches") {
    document.getElementById("sketchContainer").hidden = true;
    document.getElementById("gallery").hidden = false;
    document.getElementById("switchViewsButton").innerHTML = "Go to gallery";
    state.displayComponent = 'gallery';
  }
  if (displayComponent === "gallery") {
    document.getElementById("sketchContainer").hidden = false;
    document.getElementById("gallery").hidden = true;
    document.getElementById("switchViewsButton").innerHTML = "Go to sketch";
    state.displayComponent = 'sketches';
  }
};
