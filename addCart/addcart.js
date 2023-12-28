
const container=document.querySelector('.container');
const input=document.getElementById('id-input')
const addTask=document.getElementById('add-task');

addTask.addEventListener('click',function(e){
    e.preventDefault();
    let divElement=document.createElement('div')
    divElement.classList.add('output')
     
    let liElement=document.createElement('li');
    liElement.textContent=`${input.value}`;
    divElement.appendChild(liElement);

    let buttonAdd=document.createElement('i')
       buttonAdd.innerHTML=`<i class="fa fa-check" 
       style="font-size:48px;color:green"></i>`
       divElement.appendChild(buttonAdd);
    let buttonDelete=document.createElement('i')
        buttonDelete.innerHTML=`<i class="fa fa-trash-o"
         style="font-size:48px;color:red"></i>`
         divElement.appendChild(buttonDelete);
    container.appendChild(divElement);
   buttonAdd.addEventListener('click',function(e){
 e.preventDefault();
    buttonAdd.parentElement.style.textDecoration='line-through'
   })
    buttonDelete.addEventListener('click',function(){
        divElement.remove();
    })

})