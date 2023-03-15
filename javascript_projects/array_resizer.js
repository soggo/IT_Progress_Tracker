/*
a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */

/*
sudo

1. declare function to accept array and size
2. create container array
3. strip inputed array into individual characters and concatenate that
4. parse them accroding to size into arrays and append to container array
*/



function chunkArrayInGroups(arr, n){
    arrCopy= [...arr];
    arrConcat ="";
    arrContainer=[];
    for (let i = 0; i < arrCopy.length; i += n) {
        arrConcat = arrCopy.slice(i, i+n);
        arrContainer.push(arrConcat);
      }
    
      return arrContainer;
    }
    //IAM
function chunkArrayInGroups(arr, size){
    const arrCopy = [...arr];
    const arrConcat = arrCopy.join('');
    console.log(arrConcat)
    let arrContainer = [];
    for (let i = 0; i < arrConcat.length; i += size) {
        let subArr = arrConcat.slice(i, i + size);
        arrContainer.push(subArr.split(''));
    }
    return arrContainer;
}

    console.log(chunkArrayInGroups(["a", "b", "c", "d"], 1));