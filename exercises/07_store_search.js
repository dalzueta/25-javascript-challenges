module.exports = (store, product) => {
  return search(store, product);
};

function search(store, product) {
  if (typeof store === "object") {
    const keys = Object.keys(store);
    for (let i = 0; i < keys.length; i++) {
      if (search(store[keys[i]], product)) return true;
    }
  } else if (store === product) {
    return true;
  }
  return false;
}
