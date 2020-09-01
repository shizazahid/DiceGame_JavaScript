
let globalScore , roundScore , activePlayer, isGamePlaying, saveDice ;

initialize();

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+ dice + '</em>';  //with innerhtml method
//let x = document.querySelector('#score-0').textContent;
//console.log(x);


//EventHandler for rolling button using anonymous funtion
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(isGamePlaying){
       //1-random number
        let dicenumber=Math.floor(Math.random() * 6) + 1;

    //2-show the dice with number
        let showDice= document.querySelector('.dice');
        showDice.style.display='block';
        showDice.src='dice-' + dicenumber + '.png';

        let dicenumber2=Math.floor(Math.random() * 6) + 1;
        let showDice2= document.querySelector('.dice2');
        showDice2.style.display='block';
        showDice2.src='dice-' + dicenumber2 + '.png';
    
    //3-add the number in currentscore if the number is not 1
            if(dicenumber > 1 && dicenumber2 >1)
             {

                 roundScore = roundScore + dicenumber + dicenumber2;    //roundscore+=dicenumber;
                 document.querySelector('#current-' + activePlayer).textContent = roundScore;
             }
             else if(dicenumber === 1)
             {  window.alert('Oops! you got 1 in dice1')
                 nextPlayer();
             }
             else{
                 window.alert('Oops! you got 1 in dice2')
                 nextPlayer();
             }
         }
    })


    document.querySelector('.btn-hold').addEventListener('click',function(){
        if(isGamePlaying){
        //1- save the current score in global score
         globalScore[activePlayer] = globalScore[activePlayer] + roundScore;  //add in the previous score

        //2-display
        document.querySelector('#score-' + activePlayer).textContent = globalScore[activePlayer];
       

        //check if string is empty
        
        //3-check if player won the game
        if(globalScore[activePlayer] >= 100){
           document.querySelector('#name-' + activePlayer).textContent = 'You Won!';
           document.querySelector('.dice').style.display = 'none';
           document.querySelector('.dice2').style.display = 'none';

           //use the class winner for not writng code again
           document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
           document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
           isGamePlaying=false;
        }
        else{
        //4-shift the player turn
        nextPlayer();   
        }
    }
    })

    document.querySelector('.btn-new').addEventListener('click',initialize);



    function nextPlayer()
    {
       activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
       roundScore = 0;
       saveDice=0;
       document.getElementById('current-0').textContent='0';
       document.getElementById('current-1').textContent='0';

       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');

       document.querySelector('.dice').style.display='none';
       document.querySelector('.dice2').style.display='none';
    }
    
    function initialize(){
        globalScore=[0,0];
        roundScore=0;
        activePlayer= 0;
        saveDice = 0;
        winningScore = 0; 
        isGamePlaying = true;

        document.getElementById('score-0').textContent='0';
        document.getElementById('score-1').textContent='0';
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.dice').style.display ='none';
        document.querySelector('.dice2').style.display ='none';
        document.querySelector('#name-0').textContent = 'Player 1';
        document.querySelector('#name-1').textContent = 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.player-1-panel').classList.remove('active');


    }
