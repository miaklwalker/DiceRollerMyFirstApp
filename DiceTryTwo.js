let numOfRolls_div = document.getElementById("numOfRolls");
let numOfDice_div = document.getElementById("numOfDice");
let output_div = document.getElementById("display");
let outputSummed_div = document.getElementById("displaySummed").innerhtml;
let numRoll = numOfRolls_div;
let numDice = numOfDice_div;
let output  = output_div;
let summed  = outputSummed_div;
let slider  = document.getElementById("slider");
let slider1 = document.getElementById("slider1");
slider.value  = numOfRolls_div.value;
slider1.value = numOfDice_div.value;
 slider.oninput = function () { 
     numOfRolls_div.value = this.value;
 };
 slider1.oninput = function () { 
     numOfDice_div.value = this.value;
 }

let diceBag;
let outArr;
class die {
    constructor(sides, rolls) {
        this.sides = sides;
        this.rolls = rolls;
    }
    rollDice() {
        diceBag = [];
        for (var i = 0; i < this.rolls; i++) {
            diceBag.push(Math.floor(Math.random() * this.sides + 1));
        }
        const sumRoll = diceBag.reduce((a, b) => a + b);
        console.log(`The total sum of your rolls is ${sumRoll} Your Dice Were ${diceBag}`)
        outArr = [diceBag, sumRoll]
        return outArr;
    }
}

function diceGame() {
    const dice = new die(slider1.value, slider.value)
    dice.rollDice()
    document.getElementById("display").value = outArr[0];
    document.getElementById("displaySummed").value = outArr[1];
}