
function getComputerChoice()
{
    
    var options=["Rock",
    "Paper",
    "Scissors"];
    var index=Math.floor(Math.random() * 3);
    var choice=options[index];
    /*alert(choice);
    */

    return choice;
}


var winner=null;

function playRound(playerSelection, computerSelection) {
    
    /*console.log(computerSelection);*/
    winner=null;
    let str=null;
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase())
    {
        str="Oh no!! It's a tie";
    }
    else
    {

        if(playerSelection.toUpperCase()=== "ROCK" )
        {
            if(computerSelection=="Scissors")
            {
               str="You won!! Rock beat Scissors";
               winner="player"; 
            } 

            else
            {
                str=`You lose!! ${computerSelection} beat Rock`;
                winner="computer"; 

            }
        }
        else if(playerSelection.toUpperCase()=== "SCISSORS" )
        {
            if(computerSelection=="Paper")
            {
                str="You won!! Scissors beat Paper";
                winner="player"; 

            }
            
            else
            {
            str=`You lose!! ${computerSelection} beat Scissors`;
            winner="computer"; 

            }
        }

        else if(playerSelection.toUpperCase()=== "PAPER" )
        {
            if(computerSelection=="Rock")
            {
            str="You won!! Paper beat Rock";
            winner="player"; 

            }
            
            else
            {
            str=`You lose!! ${computerSelection} beat Paper`;
            winner="computer"; 

            }
        }
    }
    /*alert(str);*/
    return str;
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

/*playGame();*/

/*
function playrock()
{
    
    var playerSelection="rock"
    let ans=playRound(playerSelection,computerSelection);
    alert(ans);
}
*/
const btnRock=document.querySelector(".rock");

btnRock.addEventListener("click", ()=> {
    var computerSelection = getComputerChoice();
    var playerSelection="rock"
    let ans=playRound(playerSelection,computerSelection);
    console.log(ans);
});

const btnPaper=document.querySelector(".paper");

btnPaper.addEventListener("click", ()=> {
    var computerSelection = getComputerChoice();
    var playerSelection="paper"
    let ans=playRound(playerSelection,computerSelection);
    console.log(ans);
});

const btnScissors=document.querySelector(".scissors");

btnScissors.addEventListener("click", ()=> {
    var computerSelection = getComputerChoice();
    var playerSelection="scissors"
    let ans=playRound(playerSelection,computerSelection);
    console.log(ans);
});