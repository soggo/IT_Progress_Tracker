/*
A js function to return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
["hello", "Hello"]
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true
 */
/*
Psuedocode
1. Declare function to a accept two strings
2. set them both to lower case
3. check somehow using index of, 
4. log the amount of times index of returns somehting other than -1.
5. if the total of that is equal to the total second string it a pass
*/


function mutation(arr){
  let itemzero = [...arr[0].toLowerCase()]
  let itemone  = [...arr[1].toLowerCase()]
    let letterFound =0;
for(let i =0; i<arr[1].length; i++){
    if(itemzero.indexOf(itemone[i]) != -1){
        letterFound++
        }}
if(letterFound ==arr[1].length){
    return true
}
else{
    return false
}
}

console.log(
    mutation(["a quick brown dog jumped over the lazY fox", "army"])
)