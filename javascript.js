
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
    
    console.log(computerSelection);
    console.log(playerSelection);
    winner=null;
    let str=null;
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase())
    {
        str="Oh no!! It's a tie";
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
               return "Won";
            } 

            else
            {
                str=`You lose!! ${computerSelection} beat Rock`;
                winner="computer"; 
                return "Lost";


            }
        }
        else if(playerSelection.toUpperCase()=== "SCISSORS" )
        {
            if(computerSelection=="Paper")
            {
                str="You won!! Scissors beat Paper";
                winner="player"; 
                return "Won";


            }
            
            else
            {
            str=`You lose!! ${computerSelection} beat Scissors`;
            winner="computer"; 
            return "Lost";

            }
        }

        else if(playerSelection.toUpperCase()=== "PAPER" )
        {
            if(computerSelection=="Rock")
            {
            str="You won!! Paper beat Rock";
            winner="player"; 
            return "Won";


            }
            
            else
            {
            str=`You lose!! ${computerSelection} beat Paper`;
            winner="computer"; 
            return "Lost";

            }
        }
    }
    console.log(str);
    
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

const btn=document.querySelectorAll("button");
btn.forEach((button) => {

    button.addEventListener('click',() => {

        content.textContent= "Round Result: " + (playRound(button.id,getComputerChoice())); 
        content.append(document.createElement("BR"));
        const newP = document.createElement('p');
        content.append(newP);
        if(content.textContent === "Round Result: Won"){
        player ++;
        newP.textContent = "Your Score: " + player + "; " + "Computer Score: " + computer + "; " + "Tie Counter: " + tieCounter;

        }
        else if(content.textContent === "Round Result: Loss"){
            computer ++;
            newP.textContent = "Your Score: " + player + "; " + "Computer Score: " + computer + "; " + "Tie Counter: " + tieCounter;
        }
        else if(content.textContent === "Round Result: Tie"){
            tieCounter ++;
            newP.textContent = "Your Score: " + player + "; " + "Computer Score: " + computer + "; " + "Tie Counter: " + tieCounter;
        }
        
        if (player === 5){
            alert("You Win!")
            const scoreFinal = newP.textContent;
            newP.textContent = "Final --- " + scoreFinal;
            document.getElementById("rock").disabled = true; 
            document.getElementById("paper").disabled = true; 
            document.getElementById("scissors").disabled = true; 

        }
        else if(computer === 5){
            alert("You Lose")
            const scoreFinal = newP.textContent;
            newP.textContent = "Final --- " + scoreFinal;
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true; 
            document.getElementById("scissors").disabled = true; 
        }
    });
});
