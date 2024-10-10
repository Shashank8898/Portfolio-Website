let btn = document.querySelector('.Portal');
let photo = document.querySelector('.photo');
let Intro = document.querySelector('.right-body');
let logo = document.querySelector('.logo');
let header = document.querySelector('.navbar');
let hoverArea1 = document.querySelector('.aud1');
let hoverArea2 = document.querySelector('.aud2');
let hoverArea3 = document.querySelector('.aud3');
let hoverArea4 = document.querySelector('.aud4');
const audio = document.getElementById('hover-audio');
btn.addEventListener('click', function(){
    console.log("Button Clicked")   
    photo.classList.add('photo-closing');
    Intro.classList.add('intro-closing');
    logo.classList.add('logo-closing');
    header.classList.add('header-closing');
})

// Button which on click redirect to Work.html with a 2s delay.
function delayedRedirect() {
    setTimeout(function() {
        window.location.href = "Work.html"; 
    },2000);
}

hoverArea1.addEventListener('mouseover', () => {
    audio.currentTime = 0; 
    audio.play();
});
hoverArea1.addEventListener('mouseout', () => {
    audio.pause();
    audio.currentTime = 0;  // Reset the audio when hover stops
});

hoverArea2.addEventListener('mouseover', () => {
    audio.currentTime = 0; 
    audio.play();
});
hoverArea2.addEventListener('mouseout', () => {
    audio.pause();
    audio.currentTime = 0;  // Reset the audio when hover stops
});

hoverArea3.addEventListener('mouseover', () => {
    audio.currentTime = 0; 
    audio.play();
});
hoverArea3.addEventListener('mouseout', () => {
    audio.pause();
    audio.currentTime = 0;  // Reset the audio when hover stops
});

hoverArea4.addEventListener('mouseover', () => {
    audio.currentTime = 0; 
    audio.play();
});
hoverArea4.addEventListener('mouseout', () => {
    audio.pause();
    audio.currentTime = 0;  // Reset the audio when hover stops
});