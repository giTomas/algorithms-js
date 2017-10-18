// import doBinarySearch from './binary.js';
const doBinarySearch = require('./binary4')


let targets = Array.from({length: 1000}, (_, i) => i);
let list = targets.filter(i => i !== 0 && i%2);


targets = [...targets, 1050, 2500, 10000]

targets.forEach((i) => {

  if (i !== 0 && i%2) {
    test(`search for index of ${i} in list`, () => {
      expect(doBinarySearch(list, i)).toBe(list.indexOf(i))
    });
  }
  else {
    test(`search for index of ${i} in list, return will be -1`, () => {
      expect(doBinarySearch(list, i)).toBe(list.indexOf(-1))
    });
  }
});
