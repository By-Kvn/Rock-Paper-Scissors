function getComputerChoice(){
    const choices = ['ROCK','PAPER','SCISSORS'];
    const randomChoices = Math.floor(Math.random() * 3); // générer un index aléatoire entre 0 et 2 (soit 3)
    return choices[randomChoices];
}  

function playRound(playerChoice,computerChoice){
    if(playerChoice != 'ROCK' && playerChoice != 'PAPER' && playerChoice !=  'SCISSORS' ){
        prompt('Choic Invalide ! Vous devez chosir entre Rock, Paper et Scissors' )
        return{isWrongChoice: true}
    } else if (
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") || // 🧑🏾‍🦱🏆
        (playerChoice === "PAPER" && computerChoice === "ROCK") || // 🧑🏾‍🦱🏆
        (playerChoice === "SCISSORS" && computerChoice === "PAPER") // 🧑🏾‍🦱🏆
    ){
        alert(`Tu gagne ! car ${playerChoice} bat ${computerChoice} `) // 🧑🏾‍🦱🏆
        return {isPlayerWon: true, isComputerWon: false}
    } else if (
        (playerChoice === "ROCK" && computerChoice === "PAPER") ||// 💻 🏆
        (playerChoice === "PAPER" && computerChoice === "SCISSORS") ||// 💻 🏆
        (playerChoice === "SCISSORS" && computerChoice === "ROCK") // 💻 🏆
    ){
        alert(`Tu perds car ${computerChoice} bat ${playerChoice}`) // 💻 🏆
        return {isPlayerWon: false, isComputerWon: true}
    } else if(playerChoice === computerChoice){// 💻 🧑🏾‍🦱
        alert("Égalité")// 💻 🧑🏾‍🦱
        return {isTie:true}; // 💻 🧑🏾‍🦱
    }
} 
    const playerChoice = prompt("Rock ? Paper ? Scissors ?").toUpperCase(); // ".toUpperCase" pour gérer la casse
    const computerChoice = getComputerChoice(); // Appel de ma fonction "getComputerChoice"
        alert(`l'ordinateur a choisi ${computerChoice}`);
    console.log(playRound(playerChoice,computerChoice));

        function game(){
            let playerScore = 0;
            let computerScore = 0;
            for (let i = 0; i < 5; i++) {
                alert("Tour : " + i);
                const playerChoice = prompt("Rock ? Paper ? Scissors ?").toUpperCase(); //🔂 nouvel appel à chaque itération🔂 
                const computerChoice = getComputerChoice(); //🔂 nouvel appel à chaque itération🔂 
                alert(`l'ordinateur a choisi ${computerChoice}`);
                let roundResult = playRound(playerChoice,computerChoice);
                if (roundResult.isPlayerWon){ //🧑🏾‍🦱🏆 si le Tour est gagné par le joueur
                console.log("Tu as gagné !");
                playerScore++ // incrémentation(+1)
            } else if (!roundResult.isPlayerWon){ //💻 🏆si le Tour n'est pas gagné par le joueur (donc par le PC)
                console.log("Tu as perdu !")
                computerScore++ // incrémentation(+1)
            } else if(roundResult.isTie) {
                console.log("Égalité !");
                computerScore++;
                playerScore++;
                //  incrémenter player && computer
            } else if(roundResult.isWrongChoice){
                i--; // décrémenter i pour que l'itération ne soit pas comptée
            }
        } 
        // Condition ALERT
        if(playerScore > computerScore){
            alert("Tu as gagné la partie !!")
        } else if (computerScore > playerScore){
            alert("Tu as perdu la partie :/")
    } else{
        alert("Match nul !")
    }
} game();