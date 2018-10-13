//variables
var randomNumber
var crystal1
var crystal2
var crystal3
var crystal4
var counter = 0
var wins= 1
var loses= 1

function startGame(event){

//generate random number between 19-120
randomNumber = Math.floor(Math.random()* 102) + 19;
$("#random-number").html(randomNumber)

//generate random number for each crystal between 1-12
crystal1 =  Math.floor(Math.random()* 12) + 1,
console.log (crystal1),
crystal2 =  Math.floor(Math.random()* 12) + 1,
console.log(crystal2),
crystal3 =  Math.floor(Math.random()* 12) + 1,
console.log(crystal3),
crystal4 =  Math.floor(Math.random()* 12) + 1,
console.log(crystal4),

counter = 0
wins = 1
loses = 1
}
startGame()

    //onclick crystals to add number to player's points
$(".crystal-1").on("click" , function(){
    counter += crystal1;
   $("#counter-total").html(counter);
   scoreResult()
})

$(".crystal-2").on("click" , function(){
    counter += crystal2;
   $("#counter-total").html(counter);
   scoreResult()
})

$(".crystal-3").on("click" , function(){
    counter += crystal3;
   $("#counter-total").html(counter);
   scoreResult()
})

$(".crystal-4").on("click" , function(){
    counter += crystal4;
   $("#counter-total").html(counter);
   scoreResult()
})


//win  IF player's score matches random chosen number
    //call a function then put into click event
        function scoreResult(){
       if(counter === randomNumber){
           $("#score").text("You Win!"),
           $("#winResult").html ("Wins: " + wins++);
           startGame()
        }
       
//lose IF player goes over chosen number 
      if(counter > randomNumber){
          console.log(loses)
          $("#score").text("You Lose!")
          $("#loseResult").html("Lose: " + loses++)
          startGame()
         ;}}

    
