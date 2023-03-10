function getComputerChoice(){
    const choices = ['ROCK','PAPER','SCISSORS'];
    const randomChoices = Math.floor(Math.random() * 3); // gΓ©nΓ©rer un index alΓ©atoire entre 0 et 2 (soit 3)
    return choices[randomChoices];
}  

function playRound(playerChoice,computerChoice){
    if(playerChoice != 'ROCK' && playerChoice != 'PAPER' && playerChoice !=  'SCISSORS' ){
        prompt('Choic Invalide ! Vous devez chosir entre Rock, Paper et Scissors' )
        return{isWrongChoice: true}
    } else if (
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") || // π§πΎβπ¦±π
        (playerChoice === "PAPER" && computerChoice === "ROCK") || // π§πΎβπ¦±π
        (playerChoice === "SCISSORS" && computerChoice === "PAPER") // π§πΎβπ¦±π
    ){
        alert(`Tu gagne ! car ${playerChoice} bat ${computerChoice} `) // π§πΎβπ¦±π
        return {isPlayerWon: true, isComputerWon: false}
    } else if (
        (playerChoice === "ROCK" && computerChoice === "PAPER") ||// π» π
        (playerChoice === "PAPER" && computerChoice === "SCISSORS") ||// π» π
        (playerChoice === "SCISSORS" && computerChoice === "ROCK") // π» π
    ){
        alert(`Tu perds car ${computerChoice} bat ${playerChoice}`) // π» π
        return {isPlayerWon: false, isComputerWon: true}
    } else if(playerChoice === computerChoice){// π» π§πΎβπ¦±
        alert("ΓgalitΓ©")// π» π§πΎβπ¦±
        return {isTie:true}; // π» π§πΎβπ¦±
    }
} 
    const playerChoice = prompt("Rock ? Paper ? Scissors ?").toUpperCase(); // ".toUpperCase" pour gΓ©rer la casse
    const computerChoice = getComputerChoice(); // Appel de ma fonction "getComputerChoice"
        alert(`l'ordinateur a choisi ${computerChoice}`);
    console.log(playRound(playerChoice,computerChoice));

        function game(){
            let playerScore = 0;
            let computerScore = 0;
            for (let i = 0; i < 5; i++) {
                alert("Tour : " + i);
                const playerChoice = prompt("Rock ? Paper ? Scissors ?").toUpperCase(); //π nouvel appel Γ  chaque itΓ©rationπ 
                const computerChoice = getComputerChoice(); //π nouvel appel Γ  chaque itΓ©rationπ 
                alert(`l'ordinateur a choisi ${computerChoice}`);
                let roundResult = playRound(playerChoice,computerChoice);
                if (roundResult.isPlayerWon){ //π§πΎβπ¦±π si le Tour est gagnΓ© par le joueur
                console.log("Tu as gagnΓ© !");
                playerScore++ // incrΓ©mentation(+1)
            } else if (!roundResult.isPlayerWon){ //π» πsi le Tour n'est pas gagnΓ© par le joueur (donc par le PC)
                console.log("Tu as perdu !")
                computerScore++ // incrΓ©mentation(+1)
            } else if(roundResult.isTie) {
                console.log("ΓgalitΓ© !");
                computerScore++;
                playerScore++;
                //  incrΓ©menter player && computer
            } else if(roundResult.isWrongChoice){
                i--; // dΓ©crΓ©menter i pour que l'itΓ©ration ne soit pas comptΓ©e
            }
        } 
        // Condition ALERT
        if(playerScore > computerScore){
            alert("Tu as gagnΓ© la partie !!")
        } else if (computerScore > playerScore){
            alert("Tu as perdu la partie :/")
    } else{
        alert("Match nul !")
    }
} game();