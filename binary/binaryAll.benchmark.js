const doBinarySearch = require('./binary');
const doBinarySearch2 = require('./binary2');
const doBinarySearch3 = require('./binary3');
const doBinarySearch4 = require('./binary4');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

let targets = Array.from({length: 1000}, (_, i) => i);
let list = targets.filter(i => i !== 0 && i%2);

suite.add('beginning', () => {
  doBinarySearch(list, 5);
})
.add('midlle', () => {
  doBinarySearch(list, 501);
})
.add('end', () => {
  doBinarySearch(list, 993);
})
.add('nonexistent', () => {
  doBinarySearch(list, 400);
})
.add('beginning 2', () => {
  doBinarySearch2(list, 5);
})
.add('midlle 2', () => {
  doBinarySearch2(list, 501);
})
.add('end 2', () => {
  doBinarySearch2(list, 993);
})
.add('nonexistent 2', () => {
  doBinarySearch2(list, 400);
})
.add('beginning 3', () => {
  doBinarySearch3(list, 5);
})
.add('midlle 3', () => {
  doBinarySearch3(list, 501);
})
.add('end 3', () => {
  doBinarySearch3(list, 993);
})
.add('nonexistent 3', () => {
  doBinarySearch3(list, 400);
})
.add('beginning 4', () => {
  doBinarySearch4(list, 5);
})
.add('midlle 4', () => {
  doBinarySearch4(list, 501);
})
.add('end 4', () => {
  doBinarySearch4(list, 993);
})
.add('nonexistent 4', () => {
  doBinarySearch4(list, 400);
})
.on('cycle', (e) => {
  console.log(String(e.target))
})
.on('complete', function() {
  console.log(`Fastes is ${this.filter('fastest').map('name')}`)
})
.run({'async': true});