function palindrome(str) {
    let x = str
      x = x.split(/\_/gi).join("")
     x = x.split(/\W/).join('').toLowerCase()
     let rex =x.split("").reverse().join("")
    if (x === rex){
        return true}
        else{return false}
    }