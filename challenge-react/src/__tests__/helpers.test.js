const { formatNumber } = require('../helpers.js');

describe('helpers', function () {
  test('test failed for `formatNumber`.', function () {
    expect(formatNumber(1000)).toEqual('1,000');
  });
});
