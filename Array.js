//////////////////////////////////JAVASCRIPT PARSE INT EXERCISE 1//////////////////////
function randomFraction() {

    // Only change code below this line
    return Math.floor( Math.random() *20)
    // Only change code above this line
  }
  console.log(randomFraction())
  console.log(randomFraction())
  console.log(randomFraction())
  function convertToInteger(str) {
    return parseInt(str);
  }
  console.log(convertToInteger("565"))
  
  let a = 99999
  let b = 192990
  
  console.log(a > b ? "a is grater" : "b is greater")
  
/////////////////////////////////////JAVASCRIPT SPLICE EXERCISE///////////////////////
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4)
// Only change code above this line
console.log(arr);

/////////////////////////////////////JAVASCRIPT SPLICE EXERCISE 2///////////////////////
function htmlColorNames(arr) {
  // Only change code below this line
arr.splice(0,1, 'DarkSalmon', 'BlanchedAlmond')
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
/////////////////////////////////////JAVASCRIPT SLICE EXERCISE 1///////////////////////
function forecast(arr) {
  // Only change code below this line
  return arr.slice(2,4)
  
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

/////////////////////////////////////JAVASCRIPT SPREAD EXERCISE 1///////////////////////
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
  newArr.push([...arr])
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));  


/////////////////////////////////////JAVASCRIPT SPREAD EXERCISE 2///////////////////////
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence= ['learning',...fragment,"is", "fun"] 
  return sentence;
}

console.log(spreadOut());

