var finalScores,diceNumber,diceNumber2,activePlayer,isPlaying,prevDice,winScore;

init();

document.querySelector('.btn-roll').addEventListener('click',function() {

    if(isPlaying) {

        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice-2').style.display = 'block';

        diceNumber = Math.floor(Math.random()*6 + 1);
        diceNumber2 = Math.floor(Math.random()*6 + 1);


        if(diceNumber !== 1 && diceNumber2 !==1) {
           
            document.querySelector('.dice').src = 'dice-'+ diceNumber+'.png';
            document.querySelector('.dice-2').src = 'dice-'+ diceNumber2+'.png';
            document.getElementById('current-'+ activePlayer).textContent = diceNumber+diceNumber2;
            finalScores[activePlayer] += diceNumber+diceNumber2;

        } else {
            finalScores[activePlayer] = 0;
            changePlayer();
        } 
    }
});

document.querySelector('.btn-hold').addEventListener('click',function() {

    if(isPlaying) {

        document.getElementById('score-'+ activePlayer).textContent = finalScores[activePlayer];
        var winScore = document.querySelector('.win-score').value;
        var winValue;

        //Winner
        if(winScore) {  //type coresion (truthy : not 0,undefined,null,'')
            winValue = winScore;
        } else { //false(falsy)
            winValue = 100;
        }

        if(finalScores[activePlayer] >= winValue) {
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.getElementById('name-'+ activePlayer).textContent = 'WINNER!';
            document.querySelector('.player-'+ activePlayer+'-panel').classList.remove('active');
            isPlaying = false //stop playing
    
        } else {
            changePlayer();
        }
    } 
});

document.querySelector('.btn-new').addEventListener('click',init);

function changePlayer() {
    diceNumber = 0;
    diceNumber2 = 0;
    document.getElementById('current-'+ activePlayer).textContent = '0';
    document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');


    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;

    document.querySelector('.player-'+ activePlayer+'-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
}

function init() {
    finalScores = [0,0];
    diceNumber = 0;
    activePlayer = 0; //palyer1 by default
    isPlaying = true;
    prevDice = 0;
    winScore = 0;



    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.win-score').value = '';
}