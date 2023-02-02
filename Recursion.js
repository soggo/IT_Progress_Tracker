////////////////////////////////Exercise 1////////////////////////////
function rangeOfNumberss(startNum, endNum) {
    if (startNum <0 || endNum < startNum){
      return[];
    } 
    else {
        let countrange=rangeOfNumberss(startNum, endNum-1)
        countrange.push(endNum)
      return(countrange)
    }
    }
    
    console.log(rangeOfNumberss(-1,6))
    
    
    function rangeOfNumbers(startNum, endNum) {
      if (endNum < startNum) {
        return [];
      } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
      }
    }
    console.log(rangeOfNumbers(1,10))


/////////////////////////////////////Exercise 2/////////////////////////////

function countdown(n){
  
    if (n < 1){
      return []} 
      else{
        let countback= countdown(n-1)
        countback.push(n)
        return countback
    }
  }
  
  console.log(countdown(5))




/////////////////////////////Exercise 3//////////////////////////////////////
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));
  