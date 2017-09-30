// var square = (x) => {
//   var result = x * x;
//   return result;
// };
var square = (x) => x * x;

console.log(square(9))

var user = {
  name: 'Phil',
  sayHi: () => {
    console.log('Hi');
  }
}

user.sayHi();

//arrow functions do not work with 'this'
//arguments keyword does not work either
var wrong = {
  name: 'Phil',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`)
  }
}

wrong.sayHi();

// returns undefined

var correct = {
  name:'Phil',
  sayHi: () => {
      console.log(`Hi. I'm ${this.name}`)
  },
  alturnativeSayHi () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`)
  }
}

correct.alturnativeSayHi(1, 2, 3);
