const doLinearSearch = (array, targetValue) => {
  for (let guess = 0; guess < array.length; guess++) {
    if (array[guess] === targetValue) return guess;
  }
  return -1;
};

module.exports = doLinearSearch;
