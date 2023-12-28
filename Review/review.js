
const sidebar=document.querySelector('.sidebar');
const container=document.querySelector('.container');
const hamburger=document.querySelector('.hamburger');
const service=document.querySelector('.service');
console.log(sidebar);

hamburger.addEventListener('click', function() {
console.log(sidebar.classList);
if(sidebar.classList.contains("show-sidebar")){
sidebar.classList.remove('show-sidebar');
}else{
sidebar.classList.add("show-sidebar")
}
    container.classList.toggle('small-container')
})

service.addEventListener('mouseover',function(){
    document.querySelector('.nav-dropdown ').classList.add('show-side-dropdown');
})
service.addEventListener('mouseout',function(){
    document.querySelector('.nav-dropdown ').classList.remove('show-side-dropdown');
})

// second project
const review=[
    {
        id:1,
        img:"image/pexels-italo-melo-2379004.jpg",
        author:"Gemechu",
        job:"Wed Developer",
        info:' Lorem ipsum dolor sit amet consectetur adipisicing elit.\
        asperiores debitis incidunt, eius earum ipsam cupiditate libero?\
        Iste, doloremque nihil?',
    },
    {
        id:1,
        img:"image/pexels-daniel-xavier-1121796.jpg",
        author:"Abiy",
        job:"Flutter Developer",
        info:'avaScript is the programming language of the Web.\
         JavaScript is easy to learn. This tutorial will teach you \
         JavaScript from basic to advanced. Start learning ...',
    },
    {
        id:1,
        img:"image/pexels-justin-shaifer-1222271.jpg",
        author:"Behilu",
        job:"web Designer",
        info:' With the classList property of a DOM element, \
        we can add, remove, check, and toggle an element’s class in JavaScript.',
    },
    {
        id:1,
        img:"image/pexels-spencer-selover-775358.jpg",
        author:"Nebiyat",
        job:"C++ programmer",
        info:' To replace an existing class, we can use the replace method.\
         The replace method returns true if the class was successfully replaced; otherwise, it returns false.',
    }
]

const author=document.getElementById('author');
const job=document.getElementById('job');
const img=document.getElementById('person-img');
const  info=document.getElementById('info');
const prevbtn=document.querySelector('.prev-btn');
const nextbtn=document.querySelector('.next-btn');
const randombtn=document.querySelector('.random-btn');

let counter=2;
window.addEventListener("DOMContentLoaded", function(){
   showPerson();
})

function showPerson(){
    img .src=review[counter].img;
    author.textContent=review[counter].author;
    job.textContent=review[counter].job;
    info.textContent=review[counter].info
}

nextbtn.addEventListener('click',function(){
    counter++;
    if(counter>review.length-1){
        counter=0;
    }
    showPerson();
})
prevbtn.addEventListener('click',function(){
    counter--;
    if(counter<0){
        counter=3;
    }
    showPerson();
})
randombtn.addEventListener('click',function(){
    counter=Math.floor(Math.random()*review.length);
    showPerson();
})