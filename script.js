let menuHeader = document.querySelector('.navbar_content');

menuHeader.addEventListener('click',(event)=>{
    menuHeader.querySelectorAll('.header-list_element').forEach(item => item.classList.remove('header-list_element--active'));
    event.target.classList.add('header-list_element--active');
});

// slider
let slider = document.querySelector('#slider-show');
let slides = document.querySelectorAll('.slide');
let current = 0;
let sliderOffset = true;
let slideBackgroundFlag = true;

function createSlide() {
    let offset = 0;
    slider.innerHTML = '';
    let slide;
    if (current === 0) {
        slide = 1;
    }
    else {
        slide = 0;
    }
    let element = slides[slide].cloneNode(true);
    element.style.left = offset*1020 - 1020 + 'px';
    slider.appendChild(element);
    
    slides[current].style.left = offset*1020 + 'px';
    slider.appendChild(slides[current]);

    offset++;
    slides[slide].style.left = offset*1020 + 'px';
    slider.appendChild(slides[slide]);
}

function leftShift() {
    if (sliderOffset) {
        if (slideBackgroundFlag === true) {
            slideBackgroundFlag=false;
            document.querySelector('#slider').classList.add('slide_second-background');
        } 
        else {
            slideBackgroundFlag=true;
            document.querySelector('#slider').classList.remove('slide_second-background');
        }
        sliderOffset = false;
        let slides2 = document.querySelectorAll('.slide');
        let offset2 = -1;
        for (let i = 0; i < slides2.length; i += 1) {
            slides2[i].style.left = offset2*1020 - 1020 +'px';
            offset2++;
        }
        current++;
        if (current >= slides.length) {
            current = 0;
        }
    }   
}
document.getElementById('next-slide').addEventListener('click', leftShift);

function rightShift() {
    if (sliderOffset) {
        if (slideBackgroundFlag === true) {
            slideBackgroundFlag=false;
            document.querySelector('#slider').classList.add('slide_second-background');
        } 
        else {
            slideBackgroundFlag=true;
            document.querySelector('#slider').classList.remove('slide_second-background');
        }
        sliderOffset = false;
        let slides2 = document.querySelectorAll('.slide');
        let offset2 = -1;
        for (let i = 0; i < slides2.length; i += 1) {
            slides2[i].style.left = offset2*1020 + 1020 +'px';
            offset2++;
        }
        current++;
        if (current >= slides.length) {
            current = 0;
        }
    } 
}
document.getElementById('prev-slide').addEventListener('click', rightShift);

createSlide();

slider.addEventListener('transitionend', function () {
    createSlide();
    sliderOffset = true;
});


let screenoff = false;
function screenOff(){
    if(screenoff == true){
        screenoff=false;
        document.querySelectorAll(".phone_button").forEach(item=>item.style.background="transparent");
    }
    else{
        screenoff=true;
        document.querySelectorAll(".phone_button").forEach(item => item.style.background="black");
    }
}