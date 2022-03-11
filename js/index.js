const burgerMenu  = document.querySelector('.header__menu'),
      burgerClick = document.querySelector('.header__burger'),
      ScrollBody = document.getElementsByClassName('body'),
      Myhobbies = document.querySelector('.Myhobbies','.Hobbies'),
      GalleryHobbies = document.querySelector('.gallery__items_hobbies'),
      MyProjects = document.querySelector('.Myprojects','.Project'),
      GalleryProjects = document.querySelector('.gallery__items_projects'),
      Example = document.querySelectorAll('.header__list li')


Example.forEach((e)=>{ 
    e.addEventListener('click',()=>{
        removeItems()
        e.classList.add('active')
    })
})

function removeItems() {
    Example.forEach((e)=>e.classList.remove('active'))
}

burgerClick.addEventListener('click',()=>{
    burgerMenu.classList.toggle('active');
    burgerClick.classList.toggle('active');
    ScrollBody.classList.toggle('active');
})

// Myhobbies.addEventListener('click',()=>{
//     Gallery.classList.toggle('hobbi')

// })

MyProjects.addEventListener('click',(e)=>{
    e.preventDefault()
    GalleryHobbies.classList.remove('active')
    GalleryProjects.classList.add('active')
})

Myhobbies.addEventListener('click',(e)=>{
    e.preventDefault()
    GalleryProjects.classList.remove('active')
    GalleryHobbies.classList.add('active')
})

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('body').toggleClass('lock')
    })
})