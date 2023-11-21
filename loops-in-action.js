//Sum Numbers
const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum(){
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;
    
    for (i = 0; i <= enteredNumber; i++){
        sumUpToNumber = sumUpToNumber + i;
    }
    const outputResultElement = document.getElementById('calculated-sum');
    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
};

calculateSumButtonElement.addEventListener('click', calculateSum);

//Highlight Links

const heighlightLinksButtonElement = document.querySelector('#highlight-links button');

function heighLightLinks(){
    const anchorElements = document.querySelectorAll('#highlight-links a');
    for (const anchorElement of anchorElements){
        anchorElement.classList.add('highlight')
    }
};

heighlightLinksButtonElement.addEventListener('click', heighLightLinks);

//Display User Data

const dummyData = {
    userFirstName: 'Tashrif',
    userLastName: 'Sun',
    age: 22
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displaydata(){
    const outputDataElement = document.getElementById('output-user-data');

    outputDataElement.innerHTML = '';

    for (const key in dummyData){
        const newUserDataElement = document.createElement('li');
        const outputText = key.toUpperCase() + ':' + dummyData[key];
        newUserDataElement.textContent = outputText;
        outputDataElement.append(newUserDataElement);
    }
        
};

displayUserDataButtonElement.addEventListener('click', displaydata)

//statistics / Roll the Dice

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function driveNumberOfDiceRolls(){
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTheTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTheTargetNumber){
        const rolledNumber = rollDice();
        numberOfRolls++;

        const newRollsListElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollsListElement.textContent = outputText;
        diceRollsListElement.append(newRollsListElement); 
        hasRolledTheTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number'); // Corrected the typo here

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', driveNumberOfDiceRolls);
