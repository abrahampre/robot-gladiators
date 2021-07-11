// generate random number
var randomNumber = function(min, max){
    var value = Math.floor(Math.random()*(max-min+1)+min);

    return value;
};


var fight = function(enemy){
  while( playerInfo.health> 0 && enemy.health>0 ){
    //ask the player if choses to fight or run
    var promptFight = window.prompt("Would you like to fight or skip the battle? Enter 'fight' to fight or 'skip' to choose.");
    
    //if player confirms "skip" confirm and then stop the loop
    if(promptFight==="skip"||promptFight==="SKIP"){
      //confirm the player wants to skip
      var confirmSkip= window.confirm("Are you soure you'd like to quit?");
      
      // if yes (true), leave fight
      if(confirmSkip){
        window.alert(playerInfo.name + " has decided to skup this fight. Goodbye!")
        //substract money
        playerInfo.money = Math.max(0, playerInfo.money-10)
        console.log("player money", playerInfo.money);
        break;
      }
    }
    
    //generate random damage value based on players attack power
    var damage = randomNumber(playerInfo.attack-3,playerInfo.attack);
    enemy.health=Math.max(0,enemy.health-damage);

    console.log (playerInfo.name+ " attacked "+ enemy.name +". "+ enemy.name + " now has " +enemy.health + " health remaining.");
            
    //Check enemys health
    if(enemy.health<=0){
      window.alert(enemy.name+" has diedl!")
      //awward player money for winning
      playerInfo.money=playerInfo.money+20;
      
      //leave while loop since enemy is dead
      break;
    } else{window.alert(enemy.name+ " still has " + enemy.health + " health left.");} 
            
    //remove players health
    var damage = randomNumber(enemy.attack -3, enemy.attack);
    playerInfo.health = Math.max (0, playerInfo.health-damage);
    
    console.log(enemy.name+" attacked "+playerInfo.name +". " +playerInfo.name+ " now has " +playerInfo.health+ " health remaining.");
        
    //Check players health
    if (playerInfo.health<=0){
      window.alert(playerInfo.name + " has died!")
      //leave  whyile loop if player is dead
      break;
      } else{
         window.alert(playerInfo.name+" still has " + playerInfo.health + " health left.");
      }
            //if player chooses to skip
  }            
};    
//function to start game
debugger;
var startGame =function(){
    //reste players stats
    playerInfo.reset(); 
  
    for(var i=0; i< enemyInfo.length; i++){
        if(playerInfo.health>0){ 
            //let the player know what round they are in 
            window.alert("Welcome to Robot Gladiators! Round "+(i+1));
         
            //Pick a new enemy to fight based on the index of the enemyNames array
            var pickedEnemyObj= enemyInfo[i];

            //reset enemy health before starting a new fight
            pickedEnemyObj.health= randomNumber(40, 60);
           
            //pass the picked enemyname variables value into the fight funciton
          
            fight(pickedEnemyObj);
            
            if(playerInfo.health>0 && i<enemyInfo.length - 1){
                var storeConfirm =window.confirm("The fight is over visit store before next round?")
                if(storeConfirm){
                    shop();
                }
            }
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
    window.alert ("The game has now ended. Lets see how you did!")
    if(playerInfo.health>0){
        window.alert("Great job,youve survived the game! you now have a score of " + playerInfo.money + ".")
    }
    else{
    window.alert("Youve lost your robot in battle");
    }

    var playAgainConfirm = window.confirm("would you like to play again?")
    
    if(playAgainConfirm){
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiator! Come back soon!");
    }
}


var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
      'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );
    // use switch case to carry out action
    switch (shopOptionPrompt) {
        case 'REFILL':
        case 'refill':
        playerInfo.refillHealth();
        break;
        case 'UPGRADE':
        case 'upgrade':
        playerInfo.upgradeAttack();
        break;
        case 'LEAVE':
        case 'leave':
        window.alert('Leaving the store.');

        // do nothing, so function will end
        break;
        default:
        window.alert('You did not pick a valid option. Try again.');

        // call shop() again to force player to pick a valid option
        shop();
        break;
    }
};




//player info
var playerInfo = {
    name: window.prompt("Whats Your Robots Name??"),
    health:100,
    attack:10,
    money:10,
    reset: function (){
        this.health=100;
        this.money=10;
        this.attack= 10;
    },
    refillHealth: function(){
        if(this.money >=7){
            window.alert("Refilling players health by 20 for 7 dollars.");
            this.health +=20;
            this.money -=7;
        }else{
            window.alert ("You dont have enough money");
        }
    },
        
    upgradeAttack: function(){
        if (this.money >= 7){
            window.alert("Upgrading players attack by 6 for 7 dollars.")
            this.attack += 6;
            this.money -= 7;
        }
        else{
            window.alert("You dont have enough money!")
        }
    }
};




 var enemyInfo = [
    {
        name:"ROBORTO",
        attack: randomNumber(10,14)
    },
    {
        name: "AMY ANDROID",
        attack:randomNumber(10,14)
    },
    {
        name: "ROBO TRUMBLE",
        attack: randomNumber(10,14)
    }
]

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo [0].name);
console.log(enemyInfo [0]['attack']);



 //start game when page loads
startGame();