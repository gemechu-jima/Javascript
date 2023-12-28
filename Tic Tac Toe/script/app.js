
let changerPlayer=0;
let activeplayer=0;
let currentRound=1;
let player=[
    {
   name:'' , 
   symbol:'X'   
    },
    {
    name:'' , 
   symbol:'O'   
    }
];
let gameData=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

const editBtn1Element=document.getElementById('edit-1-btn');
const editBtn2Element=document.getElementById('edit-2-btn');
const backdrop=document.getElementById('backdrop');
const modal=document.querySelector('.modal');
const cancelBtn=document.getElementById('cancel-btn');
const form=document.getElementById('form-section');
const confirmId=document.getElementById('confirm-btn');
const validInput=document.querySelector('.valid-input');
const label=document.querySelector('label');
const input=document.querySelector('input');

const startNewGame=document.getElementById('start-new-game');
const activeGame=document.getElementById('active-game');
const gameFields=document.querySelector('#game-border');
const playerTurn =document.querySelector('#playTurn');
const gameOverElement=document.querySelector('.game-over');
const resetGame=document.querySelector('#reset-game');




editBtn1Element.addEventListener('click',openPlayerNameForm);
editBtn2Element.addEventListener('click',openPlayerNameForm);
backdrop.addEventListener('click',closePlayNameForm);
cancelBtn.addEventListener('click',closePlayNameForm);
form.addEventListener('submit',validationInupt);
startNewGame.addEventListener('click',newGame)
gameFields.addEventListener('click',selectGameField);

// for(const gameField of gameFields){
//     gameField.addEventListener('click',selectGameField);
// }
// //resetGame.addEventListener('click',resetAllGame);