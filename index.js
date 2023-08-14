import inquirer from 'inquirer';
const numberGenerated = Math.floor(Math.random() * 10);
console.log(numberGenerated);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: 'userGuess',
        message: "enter your guess no"
    }
]);
console.log(answer.userGuess);
const { userGuess } = answer;
if (userGuess === numberGenerated) {
    console.log('good');
}
else {
    console.log('bad');
}
