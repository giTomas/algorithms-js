const doBinarySearch = require('./binary');
const doBinarySearch2 = require('./binary2');
const doBinarySearch3 = require('./binary3');
const doBinarySearch4 = require('./binary4');
const doBinarySearch5 = require('./binary5');
const doLinearSearch = require('../linear/linear');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

let targets = Array.from({length: 1000}, (_, i) => i);
let list = targets.filter(i => i !== 0 && i%2);

suite.add('beginning', () => {
  doBinarySearch(list, 5);
})
.add('beginning 2', () => {
  doBinarySearch2(list, 5);
})
.add('beginning 3', () => {
  doBinarySearch3(list, 5);
})
.add('beginning 4', () => {
  doBinarySearch4(list, 5);
})
.add('beginning 5', () => {
  doBinarySearch5(list, 5);
})
.add('beginning Linear', () => {
  doLinearSearch(list, 5);
})
.on('cycle', (e) => {
  console.log(String(e.target))
})
.on('complete', function() {
  console.log(`Fastes is ${this.filter('fastest').map('name')}`)
})
.run({'async': true});
