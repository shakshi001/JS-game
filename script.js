let userScore = 0;
let compScore = 0;


const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const generateCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was Draw . play again";
    msg.style.backgrounColor = "yellow";
}

const showWinner = (userWin, userChoice , compChoice) => {
    if(userWin){
        console.log("you win");
        msg.innerText = `You win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("you lose");
        msg.innerText = `you lose! ${compChoice} beats ${userChoice}`
        msg.style.backgrounColor = "red";
    }
}


const playGame = (userChoice) => {
         console.log("user choice = ",userChoice);
         //Generate computer choice
         const compChoice = generateCompChoice();
         console.log("comp choice = ",compChoice);
         if(userChoice === compChoice){
                drawGame();
         }else{
            let userWin = true;
            if(userChoice === "rock"){
                compChoice === "paper" ? false :true;
            }else if(userChoice === "paper"){
               userWin  = compChoice === "scissors" ? false : true;
            }else{
                 userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice,compChoice);

         }

}

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
         console.log("choice was clicked",userChoice);
         playGame(userChoice);
    });

});