'use strict';

let secretNumber= Math.trunc(Math.random()*10+1);

console.log(secretNumber);

let score=5;
let scoreElement = document.querySelector(".score").textContent= score;

document.querySelector(".check").addEventListener('click',function(){
//clicking on the button is our event so we are
//adding the event listener function to this

    const guessNumber = Number(document.querySelector(".guess").value)
    
    if(score<1){
        document.querySelector(".message").textContent="You Lost";
        document.querySelector(".score").textContent=score;
    }
    //if not
    else{
    console.log(guessNumber);
if (!guessNumber) {
    document.querySelector(".message").textContent="No Number!";
   // console.log(document.querySelector(".message").textContent="No Number!")
}
else if(guessNumber === secretNumber){
    document.querySelector(".message").textContent="Great Guess";
   // console.log(document.querySelector(".message").textContent="Great Guess")
//    if(highscore<score){
   let highscore= score;
document.querySelector(".highscore").textContent=highscore;
//}

}
else if(guessNumber < secretNumber){
    document.querySelector(".message").textContent="Number is small";
    //console.log(document.querySelector(".message").textContent="Number is small")
    score--;
    document.querySelector(".score").textContent=score;
}
else{
    document.querySelector(".message").textContent="Number is greater";
    //console.log(document.querySelector(".message").textContent="Number is greater")
    score--;
    document.querySelector(".score").textContent=score;
}}

}
)

document.querySelector(".btn").addEventListener('click',function(){
    score=5;
    document.querySelector(".score").textContent=score;
    document.querySelector(".message").textContent="Enter a Number and Click on [check]";
    document.querySelector(".guess").value=" ";
    secretNumber= Math.trunc(Math.random()*10+1);
    console.log(secretNumber);
})