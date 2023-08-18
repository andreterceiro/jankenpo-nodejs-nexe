var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Get the user choice and process
 * 
 * @return {null}
 */
function getUserChoiceAndProcess() {
    return rl.question("Please type 'p' for 'paper', 'r' for 'rock' or 's' for 'scissors' ", function (userChoice) {
        rl.close();

        if (userChoice != 'p' && userChoice != 'r' && userChoice != 's') {
            console.log("You need to insert 'p', 'r' or 's'");   
        } else {
            let computerChoice = getComputerChoice();
        
            if ((userChoice == 'p' && computerChoice == 'r') || (userChoice == 'r' && computerChoice == 's') ||(userChoice == 's' && computerChoice == 'p')) {
                console.log("User win!");
            } else if (userChoice == computerChoice) {
                console.log("Draw!");        
            } else {
                console.log("Computer win!");
            }
        
            console.log('User selected: ' + getCompleteStringofChoice(userChoice));
            console.log('Computer selected: ' + getCompleteStringofChoice(computerChoice));    
        }
    });
}

/**
 * Return the random computer choice
 * 
 * @returns {string} A string of the computer choice ('p', 'r' or 's')
 */
function getComputerChoice() {
    let integerComputerChoice = Math.floor((Math.random() * 100) % 3);

    if (integerComputerChoice == 0) {
        return 'p';
    } else if (integerComputerChoice == 1) {
        return 'r';
    }

    return 's';
}

/**
 * Expand the first letter of the choice to the compĺete word
 * p => paper
 * r => rock
 * s => scissors
 * 
 * @param {string} choice The string of the choice ('p', 'r' or 's')
 *
 * @returns {string} Complete word of the choice, paper, rock or scissors
 */
function getCompleteStringofChoice(choice) {
    if (choice == 'p') {
        return 'Paper';
    } else if  (choice == 'r') {
        return 'Rock';
    }
    return 'Scissors';
}

getUserChoiceAndProcess();