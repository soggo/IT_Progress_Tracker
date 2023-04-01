let clicked = document.querySelectorAll('.clickable');
let selectedMessage = document.querySelector('.enborder');

clicked.forEach(function(e) {
    e.addEventListener('click', function() {
        let circles = document.querySelectorAll('.clickable');
        circles.forEach(function(circle) {
            circle.style.backgroundColor = '';
        });
        e.style.backgroundColor = '#fc7613'; selectedMessage.textContent = `You selected ${e.textContent} out of 5`;
    });
});


let show= document.querySelector('.submit');
let hide = document.querySelector('.hidden');
let defalt = document.querySelector('.component-container')

function revealSubmit(){
    if(hide.classList.contains('reveal')){
        hide.classList.remove('reveal')
       
      
    }else{
        hide.classList.add('reveal')
        defalt.classList.add('hidden')

    }
}

show.addEventListener('click',revealSubmit)