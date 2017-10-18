const doBinarySearch = require('./binary4');
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
.on('cycle', (e) => {
  console.log(String(e.target))
})
.on('complete', function() {
  console.log(`Fastes is ${this.filter('fastest').map('name')}`)
})
.run({'async': true});
