var playerName = window.prompt("Whats your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at once like this console
console.log(playerName,playerAttack,playerHealth,playerMoney);

var enemyName = "Roborto"
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
        //Alert players that they are starting the round
        window.alert("Welcome to Robot Gladiators!")

        //ask the player if choses to fight or run
        var promptFight = window.prompt("Would you like to fight or skip the battle? Enter 'fight' to fight or 'skip' to choose.");
        
        //If player chooses to fight, then fight
        if (promptFight==="fight" || promptFight==="FIGHT"){
        
        //Remove enemys health substracting playerAttack
        enemyHealth= enemyHealth-playerAttack;
        
        /* Log a resulting message to the console so we know that it worked*/
        console.log (playerName+ " attacked "+ enemyName +". "+ enemyName + " now has " +enemyHealth + " health remaining.");
        
        //Check enemys health
        if(enemyHealth<=0){
        window.alert(enemyName+" has diedl!")}
        else{window.alert(enemyName+ " still has " + enemyHealth + " health left.");} 
        
        /*Substract the value of 'enemyAttack' from the value of 
        'playerHealth' and use the result to update the value in
        the 'playerHealth' variable*/
        playerHealth=playerHealth-enemyAttack;

        /*Log a resulting message to the onsole so we know that it worked*/
        console.log(enemyName+" attacked "+playerName +". " +playerName+ " now has " +playerHealth+ " health remaining.");
    
        //Check players health
        if (playerHealth<=0){
            window.alert(playerName + " has died!")
        }
        else{
            window.alert(playerName+" still has " + playerHealth + " health left.");
        }
        //if player chooses to skip
    }else if(promptFight==="skip"||promptFight==="SKIP"){
        //confirm the player wants to skip
        var confirmSkip= window.confirm("Are you soure you'd like to quit?");
        // if yes (true), leave fight
        if(confirmSkip){
            window.alert(playerName + " has decided to skup this fight. Goodbye!")
            //substract money
            playerMoney = playerMoney-2;
        }
        //if no (false), ask question again by running fight() again 
        else{
            fight()
        }
     
        
    }else {
            window.alert("You need to choose avalid option. Try again!!");
    }
}

fight();d