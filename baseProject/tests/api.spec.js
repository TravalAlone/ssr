/*
 * @Author: sheng.wang
 * @Date: 2021-01-17 22:17:01
 * @LastEditTime: 2021-01-17 22:30:58
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /baseProject/tests/api.spec.js
 */

const assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});