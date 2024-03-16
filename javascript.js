
function getComputerChoice()
{
    
    var options=["Rock",
    "Paper",
    "Scissors"];
    var index=Math.floor(Math.random() * 3);
    var choice=options[index];
    return choice;
}


var winner=null;

function playRound(playerSelection, computerSelection) {
    
    console.log(`computer choice: ${computerSelection}`);
    console.log(`player choice: ${playerSelection}`);
    winner=null;
    let str=null;
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase())
    {
        str="Oh no!! It's a tie";
        console.log(str);

        return "Tie";
    }
    else
    {

        if(playerSelection.toUpperCase()=== "ROCK" )
        {
            if(computerSelection=="Scissors")
            {
               str="You won!! Rock beat Scissors";
               winner="player"; 
               console.log(str);

               return "Won";
            } 

            else
            {
                str=`You lose!! ${computerSelection} beat Rock`;
                winner="computer"; 
                console.log(str);

                return "Lost";


            }
        }
        else if(playerSelection.toUpperCase()=== "SCISSORS" )
        {
            if(computerSelection=="Paper")
            {
                str="You won!! Scissors beat Paper";
                winner="player"; 
                console.log(str);

                return "Won";


            }
            
            else
            {
            str=`You lose!! ${computerSelection} beat Scissors`;
            winner="computer"; 
            console.log(str);

            return "Lost";

            }
        }

        else if(playerSelection.toUpperCase()=== "PAPER" )
        {
            if(computerSelection=="Rock")
            {
            str="You won!! Paper beat Rock";
            winner="player"; 
            console.log(str);

            return "Won";


            }
            
            else
            {
            str=`You lose!! ${computerSelection} beat Paper`;
            winner="computer"; 
            console.log(str);

            return "Lost";

            }
        }
    }
    
  }
  

function playGame()
{
    var player=0;
    var computer =0;
        const computerSelection = getComputerChoice();
        console.log(`computer choice ${computerSelection}`);
        const playerSelection=prompt("Choose Rock, Paper or Scissors"); 
        console.log(playRound(playerSelection, computerSelection));
        console.log(`${winner} wins this round`);

        if(winner=="player")
        {
            player++;
            
        }
        if (winner=="computer")
        {
            computer++;
        }
        console.log(`Scoreboard : computer ${computer} player: ${player}  `);

    

    if(player === computer)
    {
        console.log("Score even");
    }
    else if(player > computer)
    {
        console.log(`You won by ${player} points !!`);

    }
    else if(computer > player)
    {
        console.log(`Computer won by ${computer} points`);

    }
    
}

var player=0;
var computer =0;
var tieCounter=0;    
const display=document.querySelector(".contain");
const content=document.querySelector(".result");
const gameOutcome = document.getElementById('gameOutcome');
const restart = document.getElementById('restart');
const overlay = document.getElementById('overlay');

const btn=document.querySelectorAll("button");
btn.forEach((button) => {

    button.addEventListener('click',() => {

        content.textContent= "ROUND RESULT: " + (playRound(button.id,getComputerChoice())); 
        content.append(document.createElement("BR"));
        const newP = document.createElement('p');
        content.append(newP);
        if(content.textContent === "ROUND RESULT: Won"){
        player ++;
        newP.textContent = "YOUR SCORE: " + player +  " | " + "COMPUTER SCORE: " + computer + " | " + "TIE COUNTER: " + tieCounter;

        }
        else if(content.textContent === "ROUND RESULT: Lost"){
            computer ++;
            newP.textContent = "YOUR SCORE: " + player + " | " + "COMPUTER SCORE: " + computer + " | " + "TIE COUNTER: " + tieCounter;
        }
        else if(content.textContent === "ROUND RESULT: Tie"){
            tieCounter ++;
            newP.textContent = "YOUR SCORE: " + player + " | " + "COMPUTER SCORE: " + computer + " | " + "TIE COUNTER: " + tieCounter;
        }
        
        /*function isGameOver() {*/
            if (player === 5 || computer === 5) {
                overlay.style.display = "block";
                if (player > computer) {
                    gameOutcome.textContent = "YOU ARE WORTHY!";
                } else {
                    gameOutcome.textContent = "TRY YOUR LUCK AGAIN !"
                }
        
            }
        /*}*/
        
        restart.addEventListener('click', restartGame);
        
        function restartGame() {
            overlay.style.display = "none";
            computer = 0;
            player = 0;
            tieCounter=0;
            content.textContent= " "; 

            playerChoice.innerHTML = "";
            computerChoice.innerHTML = "";
            currentScore.textContent = `${playerScore} : ${computerScore}`;
            roundOutcome.textContent = "First to score 5 points wins the game!";
        }
      
    });
});
