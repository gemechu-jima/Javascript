'use strict'

// first project
const hex=[0, 1,2,3,4,5,6,7,8,9, 'A', "B",'C', 'D' , 'E', 'F'];

const color=document.getElementById('color');
const btn=document.getElementById('btn')

btn.addEventListener('click',changeBacgroundColor);
function changeBacgroundColor(){
    let hexColor='#';
    const randomNumber=generateNumber();
    for(let i=0; i<=5; i++){
        hexColor+=hex[randomNumber];
       
    }
    document.body.style.backgroundColor=hexColor;
    console.log(hexColor);
}
function generateNumber(){
    return Math.floor(Math.random()*15)
}

// seconnd project
const span=document.getElementById('span');
const btns=document.querySelectorAll('.btn')
let counter=0;

btns.forEach(function(btn){
    btn.addEventListener('click', function(ev){
        const style=ev.currentTarget.classList;
        if(style.contains('decrease')){
            counter--;
        }else if(style.contains('increase')){
            counter++;
        } else{
            counter=0;
        }
        if(counter>0){
            span.style.color='green';
        }else if(counter<0){
            span.style.color='red';
        }else{
            span.style.color='black';
        }
        span.textContent=counter
    })
})