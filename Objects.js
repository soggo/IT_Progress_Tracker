//////////// JAVASCRIPT OBJECT EXERCISE 1/////////////////////////

const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };

  
ourDog.name= " Sax";
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
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){return "This dog has " + dog.numLegs + " legs."}
  };
  console.log(dog.sayLegs());
////////////////Making code more reusable with *this* keyword////////////
 dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

console.log(dog.sayLegs());



////////////////////////Defining a constructor function////////////