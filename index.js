const tilesContainer = document.querySelector(".tiles");
const colors = [
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "gray",
];
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;

let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color) {
  const element = document.createElement("div");
  element.classList.add("tile");
  element.setAttribute("data-color", color);

  return element;
}

for (let i = 0; i > tileCount; i++) {
  const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
  const color = colorsPicklist[randomIndex];
  const tile = buildTile(color);

  colorsPicklist.splice(randomIndex, 1);
  tilesContainer.appendChild(tile);
}
