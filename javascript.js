
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
            str="You won!! Rock beat Scissors";
            
            else
            str=`You lose!! ${computerSelection} beat Rock`;
        }
        else if(playerSelection.toUpperCase()=== "SCISSORS" )
        {
            if(computerSelection=="Paper")
            str="You won!! Scissors beat Paper";
            
            else
            str=`You lose!! ${computerSelection} beat Scissors`;
        }

        else if(playerSelection.toUpperCase()=== "PAPER" )
        {
            if(computerSelection=="Rock")
            str="You won!! Paper beat Rock";
            
            else
            str=`You lose!! ${computerSelection} beat Paper`;
        }
    }
    return str;
  }
  
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
  