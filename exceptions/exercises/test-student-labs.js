function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {
    let lab = labs[i];
    try {
      console.log(lab.runLab(3));
    } catch(err) {
      console.log("Error thrown.");
    }
    // console.log(`${lab.student} code worked: ${result === 27}`);
  }
}

let studentLabs = [
  {
      student: 'Carly',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Erica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  }
];

let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  }
];


gradeLabs(studentLabs);
gradeLabs(studentLabs2);


// try {
//   console.log('animal at index:', animals[index].name);
// } catch(err) {
//   console.log("We caught a TypeError, but our program continues to run!");
//   console.log("You tried to access an animal at index:", index);
// }