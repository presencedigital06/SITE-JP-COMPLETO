const slides = document.querySelectorAll('.slide');
const thumbs = document.querySelectorAll('.thumb');

let current = 0;
let autoSlide;

function showSlide(index){

slides.forEach(slide=>{
slide.classList.remove('active');
});

thumbs.forEach(thumb=>{
thumb.classList.remove('active');
});

slides[index].classList.add('active');
thumbs[index].classList.add('active');

current = index;
}

function nextSlide(){

current++;

if(current >= slides.length){
current = 0;
}

showSlide(current);
}

function prevSlide(){

current--;

if(current < 0){
current = slides.length - 1;
}

showSlide(current);
}

document.querySelector('.next').addEventListener('click',()=>{

nextSlide();

resetAutoPlay();

});

document.querySelector('.prev').addEventListener('click',()=>{

prevSlide();

resetAutoPlay();

});

thumbs.forEach((thumb,index)=>{

thumb.addEventListener('click',()=>{

showSlide(index);

resetAutoPlay();

});

});

function startAutoPlay(){

autoSlide = setInterval(()=>{
nextSlide();
},4000);

}

function resetAutoPlay(){

clearInterval(autoSlide);

startAutoPlay();

}

startAutoPlay();

/* MENU MOBILE */

const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

if(toggle){

toggle.addEventListener('click',()=>{

navbar.classList.toggle('active');

});

}