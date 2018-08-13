var test = require('tape')
var lcs = require('./lcs.js');

test('test lcs', function (t) {
  var str1 = 'ABCBDAB',
    str2 = 'BDCABA';
  t.equal(lcs.method1(str1, str2), 4);

  var re = lcs.method2(str1, str2);
  t.equal(re.tables[7][6], 4)

  t.end();
})
