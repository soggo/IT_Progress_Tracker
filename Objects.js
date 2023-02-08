//////////// JAVASCRIPT OBJECT EXERCISE 1/////////////////////////

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};


ourDog.name = " Sax";
console.log(ourDog.name)
ourDog.bark = "LoL"
console.log(ourDog)
const article = {
  "title": "How to create boobs in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};


//////////// Creating methods for an Object///////////////////////////////////
/**
 * A method is aa special property of js objects, methods are functions that are also properties of an object
 */
let dog1 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () { return "This dog has " + this.numLegs + " legs." }
};
console.log(dog1.sayLegs());
////////////////Making code more reusable with *this* keyword////////////
dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

console.log(dog.sayLegs());



////////////////////////Defining a constructor function////////////
function Dog() {
  this.name = "spot"
  this.numlegs = 4
  this.color = "brown"
}


//////////////////////////////////////Use a Constructor to Create Objects//////////
let Hound = new Dog()
/////////////////////Verify an Object's Constructor with instanceof & accept arguments///
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(4)

let a00 = myHouse instanceof House
console.log(a00)

///////////////Understand Own Properties//////////////////////////////
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps1 = [];
for (let i in canary) {
  if (canary.hasOwnProperty(i)) {
    ownProps1.push(i)
  }
}

ownProps1

////////////////////////////////////////////Use Prototype Properties //////////////
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;
let beagle1 = new Dog("Snoopy");
console.log(beagle1.numLegs)

//////////////////////Iterating over properites/////////////////
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let i in beagle) {
  if (beagle.hasOwnProperty(i)) {
    ownProps.push(i);
  } else {
    prototypeProps.push(i)
  }
}


console.log(ownProps);
console.log(prototypeProps);



///////////////////////Using prototype as an object////////////////
function Dogx(name) {
  this.name = name;
}

Dogx.prototype = {
  numLegs: 2, // Protoype property as opposed to own property
  eat: () => {
    return ("chop chop") // property method
  },
  describe: function () {
    return ("My name is " + this.name)
  }
};
////////////////////////////////////////Using Inheritance////////////////
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
 
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
 
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

  eat: function() {
   return ("nom nom nom");
  }

};

Dog.prototype = Object.create(Animal.prototype);
let doggy = new Dog()
console.log(doggy.eat())