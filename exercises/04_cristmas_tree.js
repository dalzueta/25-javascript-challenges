module.exports = (height) => {
  let tree = "";
  const weight = height + (height - 1);

  tree = buildTree(weight, height);

  return tree;
};

function createTrunk(weight) {
  let trunk = "";
  const middle = Math.floor(weight / 2);

  for (let i = 0; i < weight; i++) {
    if (i == middle) {
      trunk += "#";
    } else {
      trunk += "_";
    }
  }
  return trunk + "\n" + trunk;
}

function buildTree(width, height, n = 1) {
  if (n > width) return createTrunk(width);

  const guiones = width - n;
  const stars = width - guiones;
  n++;
  return (
    "_".repeat(guiones / 2) +
    "*".repeat(stars) +
    "_".repeat(guiones / 2) +
    "\n" +
    buildTree(width, height - 1, ++n)
  );
}
