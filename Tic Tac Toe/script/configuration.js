
function openPlayerNameForm(event){
    changerPlayer=event.target.dataset.playid;
    modal.style.display='block';
    backdrop.style.display='block';
}

function closePlayNameForm(){
    modal.style.display='none';
    backdrop.style.display='none';
    validInput.textContent='';
    label.classList.remove('error');
    input.classList.remove('error1');
    input.value='';
}

function validationInupt(event){
    event.preventDefault();

    const formData=new FormData(event.target);
    const entereddata=formData.get('playerName').trim();
    
    if(entereddata===''){
        validInput.textContent="please enterd valid name";
        label.classList.add('error');
        input.classList.add('error1');
    }else{
        document.querySelector(`#player-${changerPlayer}-section h3`).
        textContent=entereddata;
        player[changerPlayer-1].name=entereddata; //console.log(player[changerPlayer-1].name);
        closePlayNameForm()
    }
   
    }
   
   