// السلايد
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let ime = document.querySelectorAll('.ime')
 document.querySelector('.slid').appendChild(ime[0])
})
prev.addEventListener('click', function(){
    let ime = document.querySelectorAll('.ime')
 document.querySelector('.slid').prepend(ime[ime.length - 1]) // here the length of items = 6
})