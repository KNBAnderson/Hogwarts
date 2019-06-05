import {greeting, add} from './../src/functions';

/* eslint-disable no-undef */
describe('function', () => {
  
})




test('check that greeting() returns a string', function() {
  var string = greeting();
  expect(typeof string).toBe("string");
});
