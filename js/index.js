const burgerMenu  = document.querySelector('.header__menu'),
      burgerClick = document.querySelector('.header__burger'),
      ScrollBody = document.getElementsByClassName('body'),
      StyleMoto = document.querySelector('.gallery__image img')

burgerClick.addEventListener('click',()=>{
    burgerMenu.classList.toggle('active');
    burgerClick.classList.toggle('active');
    ScrollBody.classList.toggle('active');
})

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('body').toggleClass('lock')
    })
})