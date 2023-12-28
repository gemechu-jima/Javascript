
/*=======typedjs ======== */
// const typed=new Typed('.multple-text',{
//     strings:['font-Developer', 'Youtuber', 'Bloger'],
//     typespeed:1000,
//     backSpeed:100,
//     backDelay:100,
//     loop:true,
// })
// scroll 


/*=======update date manuel ======== */
const date=document.querySelector('#date');
date.innerHTML=new Date().getFullYear();
/*=======close links and Toggle of hamburger Icon ======== */
const sections=document.querySelectorAll('section');
const navLinks=document.querySelectorAll("header .navbar ul li a");
const hamburger=document.querySelector('.hamburger');
const navbar=document.querySelector('.navbar');
const links=document.querySelector('.links');
const bar1=document.querySelector('.bar1');
const bar2=document.querySelector('.bar2');
const bar3=document.querySelector('.bar3');
const loginSignup =document.querySelector('.login-signup')
hamburger.addEventListener('click', function(){
    bar1.classList.toggle('bar11')
    bar2.classList.toggle('bar22')
    bar3.classList.toggle('bar33')
    bar1.classList.toggle('bar')
    bar2.classList.toggle('bar')
    bar3.classList.toggle('bar')
    const navbarHeight=navbar.getBoundingClientRect().height;
    const linksHeight=links.getBoundingClientRect().height;
    const loginSignupHeight=loginSignup.getBoundingClientRect().height;
    const linksHeightAndLoginSignupHeight=linksHeight+loginSignupHeight;
        if(navbarHeight===0){
            navbar.style.height=`${linksHeightAndLoginSignupHeight}px`
        }else{
            navbar.style.height=0;
        }

})
/*=======fixed Navbar when Scroll window to down ======== */
const header= document.querySelector('.header');
const footerIcon=document.querySelector('.footer-icon');
window.addEventListener('scroll',function(){
    const scrollHeight=window.pageYOffset;
    const headerHeight=header.getBoundingClientRect().height;
        if(scrollHeight>=headerHeight){
            header.classList.add('fixed') ;
        }else{
            header.classList.remove('fixed') ; 
        }
        if(scrollHeight>=500){
            footerIcon.classList.add('show-top')
        }else{
            footerIcon.classList.remove('show-top')
        }
})
/*=======Scroll Navbar exactly where we want ======== */
const scrollLinks=document.querySelectorAll('.scroll-links');
scrollLinks.forEach((scrollLink)=>{
    scrollLink.addEventListener('click',function(ev){
        ev.preventDefault();
        const id=scrollLink.getAttribute('href').slice(1)
        const element=document.getElementById(id);
        const fixedClass=header.classList.contains('fixed');
        const headerHeight= header.getBoundingClientRect().height;
        let position=element.offsetTop-87;
        window.scroll({
            left:0,
            top:position,
        });
        navbar.style.height=0;
        bar1.classList.toggle('bar11')
        bar2.classList.toggle('bar22')
        bar3.classList.toggle('bar33')
        bar1.classList.toggle('bar')
        bar2.classList.toggle('bar')
        bar3.classList.toggle('bar')
    })
})
/*=======open new tab on button ======== */
const aboutArticle=document.querySelector('.about-article')
const btns=document.querySelectorAll('.btn');
const contents=document.querySelectorAll('.content');
aboutArticle.addEventListener("click", function(ev){
    const id=ev.target.dataset.id;
            if(id){
                btns.forEach(function(btn){
                    btn.classList.remove('active');
                    ev.target.classList.add('active');
                })
                contents.forEach((content)=>{
                    content.classList.remove('active')
                    document.getElementById(id).classList.add('active')
                })
            }
})


//*====== Time count system in javascript=====*\\
const months=[
    "January","february","March","April",
    "May","June","July","August","September",
    "October","November","December"
];
const weekDays=["Monday","Tuesday","Wednesday",
"Thursday","Friday","Saturday","Sunday"];
const dateExpired=document.querySelector(".deadline h4");
const deadeline=document.querySelector(".remiendate");
const formatDate=document.querySelectorAll(".format-date h2");
const deadLineDate= new Date(2023, 9, 10, 10, 30, 20);
const year=deadLineDate.getFullYear();
const dateNumber=deadLineDate.getDate();
const hour=deadLineDate.getHours();
const minute=deadLineDate.getMinutes();
const second=deadLineDate.getSeconds();
const month=months[deadLineDate.getMonth()];
const day=weekDays[deadLineDate.getDay()];
dateExpired.textContent=`The registartion date deadline is On ${day}
 ${dateNumber} ${month}  ${year} ${hour}:${minute}:${second} am`
 const deadLineTime=deadLineDate.getTime();
function remainingTime(){
const today=new Date().getTime();
const timeResult=deadLineTime-today;
// claculate time in the day
let oneday=24*60*60*1000;
let oneHour=60*60*1000;
let oneMinute=60*1000;
let oneSecond=1000;
let days=Math.floor(timeResult/oneday);
let hours=Math.floor((timeResult%oneday)/oneHour);
let minutes=Math.floor((timeResult%oneHour)/oneMinute);
let seconds=Math.floor((timeResult%oneMinute)/oneSecond)
 
const value=[days, hours, minutes, seconds];

function format(item){
    if(item<10){
        return item=`0${item}`
    }else{
        return item
    }
}
 
formatDate.forEach((item, index)=>{
    item.innerHTML=format(value[index]);
})
if(timeResult<0){
    clearInterval(countDown);
    deadeline.innerHTML=`<h2> Sorry Date registration is expired!</h2>`
}
}
let countDown=setInterval(remainingTime, 1000)
    
remainingTime()

/********* Add Grocery ***********/
const groceryForm =document.querySelector(".grocery-form")
const alert=document.querySelector('.alert')
const grocery=document.querySelector(".grocery input");
const container=document.querySelector('.grocery-container');
const list =document.querySelector(".grocery-list")
const submit=document.querySelector(".submit");
const clear=document.querySelector(".clear");
/********* Add Grocery Etra Element***********/
let editElement;
let flagEdit=false;
let editID="";

/********* Add Grocery addeventelister***********/
groceryForm.addEventListener('submit', addItems)
clear.addEventListener('click', clearItems)
window.addEventListener('DOMContentLoaded', setupItem)
/********* Add Grocery Function***********/
function addItems(ev){
ev.preventDefault();
const value=grocery.value;
let id=new Date().getTime().toString();
if(value && !flagEdit){
   createItem(id, value)
    container.classList.add('show-container');
    setBackDefault();
    addToLocalStorage(id,value);
}
else if(value && flagEdit){
    editElement.innerHTML=grocery.value;
    editLocalStorage(editID, value);
   Alert('items is updated','success')
    setBackDefault();
}
else{
   Alert('please enter data', 'danger');

}

}
function Alert(text, action){
    alert.textContent=text;
    alert.classList.add(`alert-${action}`);
    setTimeout(function (){
        alert.textContent="";
        alert.classList.remove(`alert-${action}`);
    },1000)
}
function clearItems(){
    const items=document.querySelectorAll('.grocery-item')
    if(items.length>0){
        items.forEach((item)=>{
            list.removeChild(item);
        })
    }
    Alert('All data is clear', 'danger')
    container.classList.remove('show-container')
    setBackDefault();
    localStorage.removeItem('list')
}
//delete
function deleteItem(ev){
const element=ev.currentTarget.parentElement.parentElement;
const id=element.dataset.id;
list.removeChild(element);
if(list.children.length===0){
    container.classList.remove('show-container')
}
Alert("item is deleted","danger")
setBackDefault();
//removefromloalstorage
removeFromLocalStroage(id)
}
//edit
function editItem(ev){
    const element=ev.currentTarget.parentElement.parentElement;
    editElement=ev.currentTarget.parentElement.previousElementSibling;
   grocery.value=editElement.innerHTML;
   submit.textContent="Edit";
   flagEdit=true;
   editID=element.dataset.id;
}
//back to default
function setBackDefault(){
grocery.value="";
flagEdit=false;
editID="";
submit.textContent="submit";
}
//to Add local storage 
function addToLocalStorage(id,value){
    const grocery ={id, value};
    let items=getLocalStorage()
    console.log(items);
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));

}
//remove from local storage
function removeFromLocalStroage(id){
    let items=getLocalStorage()
    items=items.filter((item)=>{
        if(item.id!==id){
            return item;
        }
    })
    localStorage.setItem('list', JSON.stringify(items));
}
//edit item in local storage
function editLocalStorage(id, value){
    let items=getLocalStorage()
    items.map((item)=>{
        if(item.id===id){
            item.value=value;
        }
        return item;
    })
    localStorage.setItem('list', JSON.stringify(items));
}
function getLocalStorage(){
    return localStorage.getItem('list')?
           JSON.parse(localStorage.getItem('list')):
           [];
}
// setup of item
function setupItem(){
let items=getLocalStorage();
if(items.length>0){
    items.forEach((item)=>{
     createItem(item.id, item.value);
    })
    

}
}
function createItem(id, value){
    const element=document.createElement('article');
    element.classList.add('grocery-item');
    let attr=document.createAttribute('data-id');
    attr.value=id;
    element.setAttributeNode(attr);
    element.innerHTML=`
                <p class="title">${value} </p>
                <div class="btn-container">
                <button class="edit-btn">&Edot;</button>
                <button class="delete-btn" >&Del;</button>
                </div>`;
    const deletebtn=element.querySelector('.delete-btn')
    const editbtn=element.querySelector('.edit-btn')
    deletebtn.addEventListener('click',deleteItem)
    editbtn.addEventListener('click',editItem)

    list.appendChild(element);
}
