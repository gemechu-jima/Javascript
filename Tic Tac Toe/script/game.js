
function newGame(){
    if(player[0].name==0||player[1].name==0){
       alert('please fill nam of player first')
       return;
         }

         resetAllGame();
        activeGame.style.display='block';
        playerTurn.textContent=player[activeplayer].name;
         
}
///////////////////////////////
function switchPlayer () {
   
   
    if(activeplayer===0){
        activeplayer=1;
    }else{
        activeplayer=0; 
    }
    playerTurn.textContent=player[activeplayer].name;
}
/////////////////////////////
function selectGameField(event){
   
    // console.log(event.target.tagName);
    if(event.target.tagName!=='LI'){
        return;
    }
    const selectRow=event.target.dataset.row-1; 
    const selectCol=event.target.dataset.col-1;
    if( gameData[selectRow][selectCol]){
        alert('please select other field')
        return;
    }
  
    event.target.textContent=player[activeplayer].symbol;
    event.target.classList.add('disabled');
   
    gameData[selectRow][selectCol]=activeplayer+1;
    
    
   const winnerid= checkingGame();
   console.log(winnerid);
   
   if (winnerid !==0){
    endGame(winnerid);
   }
   
currentRound++;
 switchPlayer();

}  
////////////////////////////////////////////////////////////////////////////////////////
function checkingGame(){
//horizonatal checking
for(let i=0; i<=2; i++){
  if(
        gameData[i][0]>0 && 
        gameData[i][0]==gameData[i][1] && 
        gameData[i][1]==gameData[i][2]
    ){
        return gameData[i][0];
       
     }
}
//vertical checking 
for(let i=0; i<=2; i++){
   if(
        gameData[0][i]>0 && 
        gameData[0][i]==gameData[1][i] && 
        gameData[1][i]==gameData[2][i]
        ){
            return gameData[0][i];
    }
         
  }

//Diagonal Top to left
  if(
    gameData[0][0]>0 && 
    gameData[0][0]==gameData[1][1] && 
    gameData[1][1]==gameData[2][2]
   ){
    return gameData[0][0];
   }
//Diagonal left to top 
   if(
        gameData[2][0]>0 && 
        gameData[2][0]==gameData[1][1] && 
        gameData[1][1]==gameData[0][2]
    ){
        return gameData[2][0];
    }

    if(currentRound===9){
        return-1;
    }

    return 0;
    switchPlayer();
}
function endGame(winnerid){
    gameOverElement.style.display='block';
    if( winnerid >0){
        const winner=player[ winnerid-1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent=winner;
    }else{

     gameOverElement.firstElementChild.textContent='Now It\'s a draw';
    }
}
 function resetAllGame(){
    activeplayer=0;
    currentRound=1;
    gameOverElement.lastElementChild.innerHTML=
    'You won<span id="winner">winner</span>';
    
gameOverElement.style.display='none';
activeGame.style.display='none';
let gameBoardIndex=0;
for(let i=0; i<3 ;i++){
    for(let j=0; j<3; j++){ 
        gameData[i][j]=0;
        const gameBoardItemElement= gameFields.children[gameBoardIndex];
        gameBoardItemElement.textContent='';
        gameBoardItemElement.classList.remove('disabled');
        gameBoardIndex++;
    }
}
}
