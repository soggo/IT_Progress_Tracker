
///////////////////////////JAVASCRIPT LOOPS Exercise 1//////////////
const ourArray = [];
let i = 0;

while (i >= 5) {
  ourArray.push(i);
  i++;
}

console.log(ourArray)

const Darry= [];
for (let i =99; i>= 0; i--){
    Darry.push(i)
}

console.log(Darry)



//////////////////////////////////////////////////////////JAVASCRIPT LOOPS Exercise 2////////////////////////////////////
const myArray = [];

// Only change code below this line
for( let i = 0; i<=9999; i++){
    if( i%2 !=0 ){
        myArray.push(i)
    }
}
console.log(myArray)

///////////////////////////JAVASCRIPT LOOPS Exercise 3///////////////////////////////////////////////////////
 const myArr = [2, 3, 4, 5];

// Only change code below this line
let total = 0
for( let i = 0;  i <myArr.length; i++){
     console.log(myArr[i])
     total += myArr[i]
}

console.log(total)


const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
  function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line

  for(let i = 0; i <arr.length; i++){
  console.log(arr[i])
    for(let j = 0; j < arr[i].length; j++){
     console.log( arr[i][j])
     product *= arr[i][j];
  }
}
    // Only change code above this line
    console.log(product)
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

const ourArray1 = [];
let x = 0;

do {
  ourArray1.push(x);
  x++;
} while (x < 5);




// JAVASCRIPT LOOP EXERCISE 4////////////
const myArray1 = [];
let i1 = 4;

// Only change code below this line
do {
    myArray.push(i);
    i1++;
}while (i < 5)
console.log(myArray)

