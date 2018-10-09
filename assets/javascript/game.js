//variables
var randomNumber
var crystal1
var crystal2
var crystal3
var crystal4
var counter = 0
var playerScore




//generate random number between 19-120
randomNumber = Math.floor(Math.random()* 102) + 19;
$("#random-number").prepend(randomNumber)

//generate random number for each crystal between 1-12
crystal1 =  Math.floor(Math.random()* 12) + 1,
console.log (crystal1),
crystal2 =  Math.floor(Math.random()* 12) + 1,
console.log(crystal2),
crystal3 =  Math.floor(Math.random()* 12) + 1,
console.log(crystal3),
crystal4 =  Math.floor(Math.random()* 12) + 1,
console.log(crystal4),

    //onclick crystals to add number to player's points
$(".crystal-1").on("click" , function(){
    counter += crystal1;
   $("#counter-total").append(counter);
})

$(".crystal-2").on("click" , function(){
    counter += crystal2;
   $("#counter-total").append(counter);
})

$(".crystal-3").on("click" , function(){
    counter += crystal3;
   $("#counter-total").append(counter);
})

$(".crystal-4").on("click" , function(){
    counter += crystal4;
   $("#counter-total").append(counter);
})
  //hide values until crystals are clicked

//win  IF player's score matches random chosen number
       

//lose IF player goes over chosen number 

//score is kept of the number of wins and loses

//restart game when player wins or loses

    //crystals have new hidden values
    

    //new random number generated

    //score counter sets back to 0
