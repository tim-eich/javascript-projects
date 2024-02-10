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

  test("should return 'Launch!' when passed a number that is ONLY divisible by 2", function() {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });

  test("should return 'Code!' when passed a number that is ONLY divisible by 2", function() {
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });

  test("should return 'Rocks!' when passed a number that is ONLY divisible by 2", function() {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });

  test("should return 'LaunchCode!' when passed a number that is divisible by 2 AND 3", function() {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });

  test("should return 'Code Rocks!' when passed a number that is divisible by 3 AND 5", function() {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });

  test("should return 'Launch Rocks!' when passed a number that is divisible by 2 AND 5", function() {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });

  test("should return 'LaunchCode Rocks!' when passed a number that is divisible by 2, 3, AND 5", function() {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });

  test("should return 'Rutabagas! That doesn't work.' when passed a number that is NOT divisible by 2, 3, or 5", function() {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });
});

