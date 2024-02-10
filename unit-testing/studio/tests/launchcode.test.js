// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("should return 'nonprofit'", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("should return true for a single letter", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("should return, umm, something", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("should the names and number of programs offered", function() {
    expect(launchcode.keys().length).toEqual(3);
  });
});