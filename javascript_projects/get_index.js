///A program to eturn the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

/*
1. Declare function with to accept arr and arg.
2. sort array.
3. when array is sorted compare to arg.
4. compare each item till you find the one it is greater than.
5. Then return index position 
*/


function getIndexToIns(arr, n){
  let  arrCopy = [...arr]
  if(arrCopy.length == 0){
    return 0
  }
    arrCopy.sort((a,b) =>(a-b))
    for(let i=0; i<arrCopy.length; i++){
        if(arrCopy[i]>n){
            return i
        }
        else if(arrCopy[i]==n){
            return i
        }
        else if(arrCopy[arrCopy.length-1]<n){
            return arrCopy.length
           
        }    
    }

}

console.log(
    getIndexToIns([40, 60], 50)
    )

console.log(
    getIndexToIns([2, 5, 10], 15)
)

console.log(
    getIndexToIns([], 1) 
)

