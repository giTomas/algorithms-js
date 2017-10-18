// 1. Let min = 0 and max = n-1.
// 2. If max < min, then stop: target is not present in array. Return -1.
// 3. Compute guess as the average of max and min, rounded down (so that it is an integer).
// 4. If array[guess] equals target, then stop. You found it! Return guess.
// 5. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
// 6. Otherwise, the guess was too high. Set max = guess - 1.
// 7. Go back to step 2.

const doBinarySearch = (array, targetValue) => {
  let min = 0;
  let max = array.length -1;
  let guess;

  while (max > min) {

      guess = parseInt((min + max) / 2, 10);

      if (array[guess] === targetValue) return guess;

      if (array[guess] < targetValue) {
        guess++;
        if (array[guess] !== targetValue) {
          min = guess
        }
        return guess;

      }
      else {
        guess--;
        if (array[guess] !== targetValue) {
          max = guess;
        }
        return guess;
      };
  }

  return -1;
};

module.exports = doBinarySearch;

// export default doBinarySearch;
