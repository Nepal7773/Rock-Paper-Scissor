let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
// console.log(choices);

const getComputerChoice = () => {
    const option = ["Rock", "Paper", "Scissors"];
    const x = Math.floor(Math.random() * 3);
    return option[x];
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        document.getElementById("userScore").innerHTML = userScore;
        document.getElementById("msg").innerHTML = `You win!,Your ${userChoice} beats ${computerChoice}`;
        document.getElementById("msg").style.backgroundColor = "green";

        // console.log("You Win the Match");

    }
    else {
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore;
        document.getElementById("msg").innerHTML = `You Lose,${computerChoice} beats ${userChoice}`;
        document.getElementById("msg").style.backgroundColor = "red";


        // console.log("You Lose")
    }

}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    // generate computer choice
    const computerChoice = getComputerChoice();
    // console.log("computer choice", computerChoice);

    if (userChoice === computerChoice) {
        // console.log("Match Draw");
        document.getElementById("msg").innerHTML = "Game was Draw.Play Again";
        document.getElementById("msg").style.backgroundColor = "bLack";

    } else {
        let userWin = true;
        if (userChoice == "Rock") {
            //paper,scissors
            userWin = computerChoice == "Paper" ? false : true;
        }
        else if (userChoice == "Paper") {
            userWin = computerChoice == "Rock" ? true : false;
        }
        else {
            userWin = computerChoice == "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);

    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice is selected", userChoice);
        playGame(userChoice);
    });
})