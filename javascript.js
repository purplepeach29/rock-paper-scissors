var player=0;
var computer =0;
var tieCounter=0;    
const display=document.querySelector(".contain");
const content=document.querySelector(".result");
const compchoice=document.getElementById('compchoice');
const gameOutcome = document.getElementById('gameOutcome');
const restart = document.getElementById('restart');
const overlay = document.getElementById('overlay');


const btn=document.querySelectorAll("button");
btn.forEach((button) => {

    button.addEventListener('click',() => {

        let computerSelection = getComputerChoice();
        displayComputerchoice(computerSelection);
       

        content.textContent= "ROUND RESULT: " + (playRound(button.id,computerSelection)); 
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
        

        if (player === 5 || computer === 5) {
            overlay.style.display = "block";
            if (player > computer) {
                gameOutcome.textContent = "YOU ARE WORTHY!";
            } else {
                gameOutcome.textContent = "TRY YOUR LUCK AGAIN !"
            }
    
        }
    
    
        restart.addEventListener('click', restartGame);
        
        
      
    });
});


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
  
function displayComputerchoice(computerSelection)
{
    if(computerSelection==="Rock")
    compchoice.innerHTML = '<img width="100" height="100" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreepngimg.com%2Fthumb%2Frock%2F8-2-rock-png-picture-thumb.png&f=1&nofb=1&ipt=9cb3db63b15372630baf99c45261121ba7a516df847035c4263e64dc66a03cb9&ipo=images">';
    else if(computerSelection==="Paper")
    compchoice.innerHTML = '<img width="100" height="100" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.textures4photoshop.com%2Ftex%2Fthumbs%2Ffree-burnt-paper-texture-background-thumb35.png&f=1&nofb=1&ipt=d0caba553c7aabd13c2a6e03e370352dbf1bfc77047afb530e203a0650808ab7&ipo=images">';
    else if(computerSelection==="Scissors")
    compchoice.innerHTML = '<img width="100" height="100" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.rubylane.com%2Fshops%2Fchelseaantiques%2FRL00962.1L.jpg%3F52&f=1&nofb=1&ipt=29d75104cbb2c1c6849d06f30e8818cb1b4fd47b165de459bb80533d87e30780&ipo=images">';
    
}

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

/*older function*/
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
