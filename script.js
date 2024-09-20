let input = document.getElementById('input');
let btn = document.getElementById("btn");
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random()*100)+1;
console.log(answer);
let numGuess = 0;

btn.addEventListener("click",()=>{
    guessNum();
})
function guessNum(){
    if(input.value<1 || input.value>1 || isNaN(input.value)){
        wrng.innerHTML="ENTER NUMBER BETWEEN 1 TO 100";
    }else{
        numGuess++;
        guesses.innerHTML="No. of guess: "+numGuess;
    }
    if(input.value>answer){
        wrng.innerHTML="you guessed too HIGH!";
        input.value="";
    }else if(input.value<answer){
        wrng.innerHTML="you guessed too LOW!";
        input.value="";
    }else{
        wrng.innerHTML="congratulation you guessed it correct!"
        setTimeout(() => {
            resetGame();
        }, 5000);
    }
}
function resetGame(){
    numGuess=0;
    answer = Math.floor(Math.random()*100)+1;
    input.value="";
    guesses.innerHTML="No. of guess: 0";
}