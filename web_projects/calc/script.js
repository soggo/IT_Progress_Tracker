function add(a,b){
    return (a+b);
}


function multiply(a,b){
    return a*b;
}


function divide(a,b){
    return a/b;
}


function subtract(a,b){
    return a-b;
}


let bottomElement = document.querySelector('.bottom')
let topElement = document.querySelector('.top')
let keys = document.querySelectorAll('.keys')
keys.forEach(function(i){
    i.addEventListener('click', function(){
        bottomElement.textContent += i.textContent
    })
})

let clear = document.querySelector('.redButton')
let deleter = document.querySelector('.greenButton')
let decimal = document.querySelector('.period')
let plus =  document.querySelector('.plus')
let divider = document.querySelector('.divide')
let multiplyer = document.querySelector('.multiply')
let subtracter = document.querySelector('.subtract')
let nextClick = document.querySelector('.top')
let checker = document.querySelector('top')

clear.addEventListener('click', function(){
    bottomElement.textContent = ''
    topElement.textContent =''
})
deleter.addEventListener('click', function(){
    bottomElement.textContent = bottomElement.textContent.slice(0, -1);
    decimal.classList.remove('disabled')
})

decimal.addEventListener('click', function(){
     decimal.classList.add('disabled');
})
plus.addEventListener('click', function(){
    topElement.textContent+=bottomElement.textContent
    decimal.classList.remove('disabled')
    bottomElement.textContent=''
    console.log(topElement.textContent)
    let digits= topElement.textContent.split("+")
    console.log(digits)
    let val1= Number(digits[0])
    let val2= Number(digits[1])
    console.log(typeof(val1, val2))
    console.log(val1,val2)
    if(digits.length>2){
        let sum = add(val1,val2)
        console.log(sum)
        
            bottomElement.textContent = topElement.textContent.slice(0, -1);
            decimal.classList.remove('disabled')
        topElement.textContent = sum
        bottomElement.textContent = ""
    }
})

subtracter.addEventListener('click', function(){
    topElement.textContent+=bottomElement.textContent
    decimal.classList.remove('disabled')
    bottomElement.textContent=''
    console.log(topElement.textContent)
    if(topElement.textContent[topElement.textContent.length-1]= "+"){
        let holder = topElement.textContent[topElement.textContent.length-1]= "-"
        return holder
    }
    holder= topElement.textContent.split("-")
    console.log(holder)
    let val1= Number(holder[0])
    let val2= Number(holder[1])
    console.log(typeof(val1, val2))
    console.log(val1,val2)
    if(holder.length>2){
        let sum = subtract(val1,val2)
        console.log(sum)
            bottomElement.textContent = topElement.textContent.slice(0, -1);
            decimal.classList.remove('disabled')
        topElement.textContent = sum
        bottomElement.textContent = ""
    }
})

// checker.addEventListener