// A function to Copy each element of the first array into the second array, in order. given two arrays
/*
pseudocode

step 1 : copy arrays into new array to not alter main array
step 2 : select array 2 with a for looop.
step 3 : within array 2 for push arr 1 items, starting from index n given
 */

function frankenSplice(arr1, arr2, n) {
   let copyarr1 = [...arr1]
   let copyarr2 = [...arr2]
    for(let i =0; i<arr2.length; i++){
        console.log(copyarr1[i])
        copyarr2.splice(n,0,copyarr1[i])
        
    }
        console.log(copyarr2)
  
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 2);

//   a1 = [0,1,2,3,4]
//   a1.splice(1,0,'c')
//   a1