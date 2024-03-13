
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
getComputerChoice();


  