const burgerMenu  = document.querySelector('.header__menu'),
      burgerClick = document.querySelector('.header__burger'),
      ScrollBody = document.getElementsByClassName('body'),
      StyleMoto = document.querySelector('.gallery__image img'),
      Myhobbies = document.querySelector('.Myhobbies'),
      Hobbi = document.querySelector('.gallery__items'),
      MyProjects = document.querySelector('.Myprojects')

burgerClick.addEventListener('click',()=>{
    burgerMenu.classList.toggle('active');
    burgerClick.classList.toggle('active');
    ScrollBody.classList.toggle('active');
})

Myhobbies.addEventListener('click',()=>[
    Hobbi.classList.toggle('active')

])

MyProjects.addEventListener('click',()=>{
    MyProjects.classList.toggle('active')
})

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('body').toggleClass('lock')
    })
})