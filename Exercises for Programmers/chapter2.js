// Chapter 2: Input, Processing, and Output

// Exercise 4: Mad Lib

function madLibs() {

  
    let inputNoun = window.prompt("Write a noun:", "example: cat");
    let inputVerb = window.prompt("Write a verb:", "example: fall");
    let inputAdverb = window.prompt("Write an adverb:", "example: safely");
    let inputAdj = window.prompt("Write an adjective:", "example: fat");
    // Constraint: Use string interpolation/substitution if language has it   
    // Constraint: use a single output statement for this program 
    let output = `How did your ${inputAdj} ${inputNoun} ${inputVerb} so ${inputAdverb}? That's crazy!`
    return output;
}
madLibs();

/* at some point make this functionality work, add a button that adds new mad lib to the page like in FSO
function addMadLib() {
    let button = document.querySelector("button");
    button.onclick = function() {
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = `${madLibs()}`
    }
    */
