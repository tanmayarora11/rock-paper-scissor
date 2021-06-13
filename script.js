let userScore = 0;
let computerScore = 0;
let userScore_span = $("#user-score");
let computerScore_span = $("#comp-score");
let scoreBoard_div = $(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = $("#Rock");
let paper_div = $("#Paper");
let scissor_div = $("#Scissors");
let reset = $("#reset");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    const userChoice_div = $("#" + userChoice);
    const computerChoice_div = $("#" + computerChoice);

    userScore++;
    userScore_span.text(userScore);
    computerScore_span.text(computerScore);
    result_p.innerHTML = `${userChoice} ${smallUserWord} beats ${computerChoice} ${smallCompWord} .<br> You win!`;

    userChoice_div.addClass('green-glow');
    setTimeout(() => userChoice_div.removeClass('green-glow'), 300);

    computerChoice_div.addClass('red-glow');
    console.log("win" + computerChoice_div.hasClass('green-glow'));
    setTimeout(() => computerChoice_div.removeClass('red-glow'), 300);
    
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    const userChoice_div = $("#" + userChoice);
    const computerChoice_div = $("#" + computerChoice);

    userScore_span.text(userScore);
    computerScore_span.text(computerScore);
    result_p.innerHTML = `${userChoice} ${smallUserWord} equals ${computerChoice} ${smallCompWord} .<br> It's a draw.`;

    computerChoice_div.addClass('red-glow');
    console.log("draw" + computerChoice_div.hasClass('green-glow'));
    setTimeout(() => computerChoice_div.removeClass('red-glow'), 300);

    userChoice_div.addClass('red-glow');
    setTimeout(() => userChoice_div.removeClass('red-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    const userChoice_div = $("#" + userChoice);
    const computerChoice_div = $("#" + computerChoice);

    computerScore++;
    userScore_span.text(userScore);
    computerScore_span.text(computerScore);
    result_p.innerHTML = `${userChoice} ${smallUserWord} lose to ${computerChoice} ${smallCompWord} .<br> You lose. . .`;

    userChoice_div.addClass('red-glow');
    setTimeout(() => userChoice_div.removeClass('red-glow'), 300);

    computerChoice_div.addClass('green-glow');
    console.log("lose" + computerChoice_div.hasClass('green-glow'));
    setTimeout(() => computerChoice_div.removeClass('green-glow'), 300);
    
}

function game(userChoice) {
    console.log(userChoice);
    const computerCoice = getComputerChoice();
    switch (userChoice + computerCoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerCoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, computerCoice);
            break;
        case "Rock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerCoice);
            break;
    }
}

function main() {
    console.log("hello");
    rock_div.on('click', () => game("Rock"));
    paper_div.on('click', () => game("Paper"));
    scissor_div.on('click', () => game("Scissors"));
    reset.on('click', () => {
        userScore = 0;
        computerScore = 0;
        userScore_span.text(userScore);
        computerScore_span.text(computerScore);
        result_p.innerHTML = "Lets Play Rock-Paper-Scissor<br>And Win!";
    });
}

main();