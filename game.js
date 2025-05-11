let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const user = document.querySelector("#user-choice");
const comp = document.querySelector("#comp-choice");
const compChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
};
const drawGame=()=>{
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin,userChoice,comptChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won! ${userChoice} beats ${comptChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${comptChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}
const playGame=(userChoice)=>{
    const comptChoice = compChoice();
    if(userChoice===comptChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
           userWin =  comptChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin = comptChoice ==="scissors"?false:true;
        }
        else{
            userWin = comptChoice ==="rock"?false:true;
        }
        showWinner(userWin,userChoice,comptChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        user.innerText = `User choice : ${userChoice}`;
        const comChoice = compChoice();
        comp.innerText = `Comp choice : ${comChoice}`;
    });
});