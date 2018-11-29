const drawCurrentSketch = (selectedSketch) => {
  const container = document.getElementById("sketch-iframe");
  const src = document.createAttribute("src");
  src.value = `./sketches/${selectedSketch}.html`;
  container.setAttributeNode(src);
};

const onShowGallery = () => {
  document.getElementById("sketch-container").hidden = true;
  document.getElementById("gallery").hidden = false;
};

const onSelectSketch = (selectedSketch) => {
  drawCurrentSketch(selectedSketch);
  document.getElementById("sketch-container").hidden = false;
  document.getElementById("gallery").hidden = true;
};
