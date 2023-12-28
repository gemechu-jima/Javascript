
const centerContainer=document.querySelectorAll('.center-container');


centerContainer.forEach(function(fqa){
fqa.addEventListener('click',function(){
    this.classList.toggle('active');
  
})
});
// or we can
//const centerContainer=document.getElementByClassName('center-container');
// for(let i=0; i<=centerContainer.length;i++){
//     centerContainer[i].addEventListener('click',function(){
//         this.classList.toggle('active')
//     })
// }