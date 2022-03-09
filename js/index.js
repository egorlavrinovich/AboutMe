const burgerMenu  = document.querySelector('.header__menu'),
      burgerClick = document.querySelector('.header__burger'),
      ScrollBody = document.getElementsByClassName('body'),
      Myhobbies = document.querySelector('.Myhobbies'),
      GalleryHobbies = document.querySelector('.gallery__items_hobbies'),
      MyProjects = document.querySelector('.Myprojects'),
      GalleryProjects = document.querySelector('.gallery__items_projects')

burgerClick.addEventListener('click',()=>{
    burgerMenu.classList.toggle('active');
    burgerClick.classList.toggle('active');
    ScrollBody.classList.toggle('active');
})

// Myhobbies.addEventListener('click',()=>{
//     Gallery.classList.toggle('hobbi')

// })

MyProjects.addEventListener('click',()=>{
    GalleryHobbies.classList.remove('active')
    GalleryProjects.classList.add('active')
})

Myhobbies.addEventListener('click',()=>{
    GalleryProjects.classList.remove('active')
    GalleryHobbies.classList.add('active')
})

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('body').toggleClass('lock')
    })
})