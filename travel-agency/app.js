let searchBtn = document.querySelector('#search-btn')
let searchBar = document.querySelector('.search-bar-container')
let closeModal = document.querySelector('.fa-x')
let openModal = document.querySelector('.fa-user')
let modal = document.querySelector('.login-form-container')
let videoBtn = document.querySelectorAll('.vid-btn')

window.onscroll =()=>{
    searchBtn.classList.remove('fa-x')
    searchBar.classList.remove('active')
}
searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-x')
    searchBar.classList.toggle('active')
})

openModal.addEventListener('click',()=>{
    modal.classList.add('active')  
})

closeModal.addEventListener('click',()=>{
    modal.classList.remove('active')  
})

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active')
        let src = btn.getAttribute('data-src')
        document.querySelector('#video-slider').src = src
    })
})