var test = require('tape');
var assign = require('object-assign');
var quickSort = require('../quick.js');

test('quick sort', (t) => {
  var arr = [10, 2, 3, 5, 1, 32, 0, -23];
  var expectArr = assign([], arr);
  expectArr.sort(function (m, n) {
    return m > n;
  });
  t.deepEqual(quickSort(arr), expectArr)

  t.deepEqual(quickSort([1]), [1]);
  t.deepEqual(quickSort([-1]), [-1]);
  t.end();
});