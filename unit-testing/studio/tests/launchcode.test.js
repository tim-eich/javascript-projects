// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("should return 'nonprofit'", function() {
    expect(launchcode.launchcode.organization).toBe("nonprofit");
  });

  test("should return true for a single letter", function() {
    expect(launchcode.launchcode.executiveDirector).toBe("Jeff");
  });

  test("should confirm LC is 100% cool", function() {
    expect(launchcode.launchcode.percentageCoolEmployees).toBe(100);
  });

  test("should list the names and number of programs offered", function() {
    expect(launchcode.launchcode.programsOffered[0]).toBe('JavaScript');
    expect(launchcode.launchcode.programsOffered[1]).toBe('Java');
    expect(launchcode.launchcode.programsOffered[2]).toBe('C++');
    expect(launchcode.launchcode.programsOffered.length).toEqual(3);
  });

  test("Should return 'Launch!' when passed a number that is ONLY divisible by 2", function() {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });
});

