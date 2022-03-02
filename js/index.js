const burgerMenu  = document.querySelector('.header__menu'),
      burgerClick = document.querySelector('.header__burger'),
      ScrollBody = document.getElementsByClassName('body'),
      StyleMoto = document.querySelector('.gallery__image img'),
      Myhobbies = document.querySelector('.Myhobbies'),
      Gallery = document.querySelector('.gallery__items'),
      MyProjects = document.querySelector('.Myprojects'),
      Aboutme = document.querySelector('.Aboutme')

burgerClick.addEventListener('click',()=>{
    burgerMenu.classList.toggle('active');
    burgerClick.classList.toggle('active');
    ScrollBody.classList.toggle('active');
})

Myhobbies.addEventListener('click',()=>[
    Gallery.classList.toggle('hobbi')

])

MyProjects.addEventListener('click',()=>{
    Gallery.classList.toggle('projects')
})

Aboutme.addEventListener('click',()=>{
    Gallery.classList.toggle('aboutme')
})

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('body').toggleClass('lock')
    })
})