
const qoute=[
    {
        id:1,
        img:"image/babi.jpg",
        qouteName:' "Money and success don’t change people\
         they merely amplify what is already there." ',
        name:'— Will Smith',
    },
    {
        id:2,
        img:'image/pexels-daniel-xavier-1121796.jpg',
        qouteName:'"Not how long, but how well you have\
         lived is the main thing.” ',
        name:'— Seneca'

    },
    {
        id:3,
        img:'image/pexels-italo-melo-2379004.jpg',
        qouteName:'"Life is what happens when you\
        re busy making other plans."',
        name:' — John Lennon'
    },
    {
        id:4,
        img:'image/pexels-spencer-selover-775358.jpg',
        qouteName:'"If you want to live a happy life, tie it to a goal,\
         not to people or things."',
        name:'– Albert Einstein'
    }
]
let counter=0;

const img=document.querySelector('img');
const quoteNam=document.querySelector('p');
const name=document.querySelector('.qoute-name');
const btn=document.getElementById('btn');
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');

btn.addEventListener('click', changeQuote);
prev.addEventListener('click',prevousQoute);
next.addEventListener('click',nextQoute);

window.addEventListener('DOMContentLoaded',function(){
    changeQ() 
})

function changeQuote(){
    let random =Math.trunc(Math.random()*4);
    console.log(random);
    counter=random;
    changeQ();
    
}
function nextQoute(){
    counter++;
    if(counter>=3){
        counter=0;
    }
    changeQ()
}
function prevousQoute(){
   counter--;
    if(counter<0){
        counter=3;
    }
    changeQ();
    console.log(counter);

}
function changeQ(){
    img.src=qoute[counter].img;
    quoteNam.textContent=qoute[counter].qouteName;
    name.textContent=qoute[counter].name;
}