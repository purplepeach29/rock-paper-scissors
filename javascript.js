
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
    return str;
  }
  

/*const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));
  */

function playGame()
{
    var player=0;
    var computer =0;
    for(var i=0;i<5;i++)
    {
        const computerSelection = getComputerChoice();
        console.log(`computer ${computerSelection}`);
        const playerSelection=prompt("Choose Rock, Paper or Scissors"); 
        console.log(playRound(playerSelection, computerSelection));
        if(winner=="Player")
        {
            player++;
        }
        if (winner=="computer")
        {
            computer++;
        }
    }

    
}
playGame();