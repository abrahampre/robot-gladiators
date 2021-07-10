var playerName = window.prompt("Whats your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at once like this console
console.log(playerName,playerAttack,playerHealth,playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName){
  while( playerHealth> 0 && enemyHealth>0 ){
    //ask the player if choses to fight or run
    var promptFight = window.prompt("Would you like to fight or skip the battle? Enter 'fight' to fight or 'skip' to choose.");
    
    //if player confirms "skip" confirm and then stop the loop
    if(promptFight==="skip"||promptFight==="SKIP"){
      //confirm the player wants to skip
      var confirmSkip= window.confirm("Are you soure you'd like to quit?");
      
      // if yes (true), leave fight
      if(confirmSkip){
        window.alert(playerName + " has decided to skup this fight. Goodbye!")
        //substract money
        playerMoney = playerMoney-10;
        console.log("player money", playerMoney);
        break;
      }
    }
    //Remove enemys health by sustracting the amount set in playerAttack
    enemyHealth= enemyHealth-playerAttack;
    console.log (playerName+ " attacked "+ enemyName +". "+ enemyName + " now has " +enemyHealth + " health remaining.");
            
    //Check enemys health
    if(enemyHealth<=0){
      window.alert(enemyName+" has diedl!")
      //awward player money for winning
      playerMoney=playerMoney+20;
      
      //leave while loop since enemy is dead
      break;
    } else{window.alert(enemyName+ " still has " + enemyHealth + " health left.");} 
            
    /*Substract the value of 'enemyAttack' from the value of 
    'playerHealth' and use the result to update the value in
    the 'playerHealth' variable*/
    playerHealth=playerHealth-enemyAttack;
    console.log(enemyName+" attacked "+playerName +". " +playerName+ " now has " +playerHealth+ " health remaining.");
        
    //Check players health
    if (playerHealth<=0){
      window.alert(playerName + " has died!")
      //leave  whyile loop if player is dead
      break;
      } else{
         window.alert(playerName+" still has " + playerHealth + " health left.");
      }
            //if player chooses to skip
  }            
};    
//function to start game
var startGame =function(){
    //reste players stats
    playerHealth=100;
    playerAttack=10;
    playerMoney=10;
    for(var i=0; i< enemyNames.length; i++){
        if(playerHealth>0){ 
            //let the player know what round they are in 
            window.alert("Welcome to Robot Gladiators! Round "+(i+1));

            //Pick a new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            //reset enemy health before starting a new fight
            enemyHealth=50;

            //pass the picked enemyname variables value into the fight funciton
            fight(pickedEnemyName);
        }else{
        window.alert("You have lost your robot in battle!GAME OVER!!");
        break;
        }
    }
    //play again
    endGame();
};



//function ot end the entire game
 var endGame = function(){
     if(playerHealth>0){
         window.alert("Great job,youve suvived the game! you now have a score of " + playerMoney + ".")
     }
     else{
     window.alert("The game has now ended. Lets see how you did!");
     }

     var playAgainConfirm = window.confirm("would you like to play again?")
     
     if(playAgainConfirm){
         startGame();
     }
     else{
         window.alert("Thank you for playing Robot Gladiator! Come back soon!");
     }
 }

 //start game when page loads
startGame();