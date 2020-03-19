//
//header
//
let menuHeader = document.querySelector('.navbar_content');

menuHeader.addEventListener('click',(event)=>{
    if (event.target.tagName==='li'.toUpperCase()){
    menuHeader.querySelectorAll('.header-list_element').forEach(item => item.classList.remove('header-list_element--active'));
    event.target.classList.add('header-list_element--active');
    }
});

document.addEventListener('scroll', onscroll);
function onscroll(){
    let position = window.scrollY;
    let div = document.querySelectorAll('.main>div');
    let links = document.querySelectorAll('#header a');
    div.forEach((element)=>{        
        if(element.offsetTop <= position && (element.offsetTop + element.offsetHeight) > position){
            links.forEach(a=>{
                a.querySelector('li').classList.remove('header-list_element--active');
                if(element.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.querySelector('li').classList.add('header-list_element--active');
                    console.log(a.querySelector('li'));
                }
            });
        }
    });
}
//
// slider
//
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
//
//portfolio
//
let tags = document.querySelectorAll('.tag')
for (let i=0;i<tags.length;i++){
    tags[i].addEventListener('click', mixPicture);
}
function mixPicture() {
    console.log(tags);
    let gallery = document.querySelector('.portfolio_pics');
    let pictures = Array.from(document.querySelectorAll('.portfolio_pics_imgs'));
    let newGallery = pictures.sort(function() {return Math.random() - 0.5});
    gallery.innerHTML="";
    newGallery.forEach(item=>gallery.append(item));
    tags.forEach(item => item.classList.remove('tag_active'));
    event.target.classList.add('tag_active');
}

pictures = document.querySelector('.portfolio_pics');

pictures.addEventListener('click', event=>{
    if (event.target.tagName==='img'.toUpperCase()){
        pictures.querySelectorAll('img').forEach(item =>{item.classList.remove('picture_active');});
        event.target.classList.add('picture_active');
    }
});


//
//get a qoute
//
//form

let form = document.querySelector('#get_a_qoute--form');

document.querySelector('#get_a_qoute--submit').addEventListener('click',  event => {
    let subject = document.querySelector('#get_a_qoute--subject').value;
    let describe = document.querySelector('#get_a_qoute--description').value;
    let them = document.querySelector('#subject-message');
    let description = document.querySelector('#describe-message');
    event.preventDefault();
    if (form.checkValidity()) {
        if (subject){
            them.innerHTML ='<i class="message-title">Тема:</i> '+subject;
        }
        else {
            them.innerHTML='<i class="message-title">Без темы</i>';
        }
        if (describe){
            description.innerHTML ='<i class="message-title">Описание:</i> '+describe;
        }
        else {
            description.innerHTML='<i class="message-title">Без описания</i>'; 
        }
        document.getElementById('message-block').classList.remove('hidden');
    }
});

document.querySelector('#button-close').addEventListener('click', event=> {
    document.querySelector('#message-block').classList.add('hidden');
    form.reset();
});
