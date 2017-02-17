console.log('im working')

//naming input
var nameMe = prompt('give me a name');


//summon the hero
var summonHero = new TheHero( nameMe, statNumbers(), statNumbers(), statNumbers(), statNumbers(), statNumbers());

//round counter variable to decide turns and function to add rounds
var round = 0;
function addRound(){
	round += 1;
}

function playerRound(){
	addRound();
	statusCheck();
	gameOver();
}

function statusCheck(){
	changeHealth();
	changeMana();
}
function changeHealth(){
 	this.hitPoints -= damageDealt();
 	this.hitPoints += healingRecieved();
}
function changeMana(){
	if (heal){
		this.mana -= 2
	} else if (spAttack){
		this.mana -= 4
	} else{

	}
}

function damageDealt(damage){
	damage = damage
}

function healingRecieved(health){
	health = health
}

function gameOver(){
	if(this.hitPoints === 0){
		alert('Game Over');
		//disable buttons
		//add restart button
	}
}

//this is the random char stat sheet
//maybe on buttons we do the mana drops and such, need to figure out min/max values for characters (so they cant go higher than starting hp/go below starting mana values)
function TheHero (name, hitPoints, mana, str, wis, int, cp){
	this.name = name || '';
	this.hitPoints = hitPoints || '';
	this.mana = mana || '';
	this.str = str || '';
	this.wis = wis || '';
	this.int = int || '';
	this.cp = 10 || '';

	var damage;
	var health;

	this.attack = function(){
		if (str <= 10){
			attack = attrStats(1, 5)
			damage = attack
			playerRound();
		} else if (str <= 20){
			attack = attrStats(2, 6)
			damage = attack
			playerRound();
		} else if (str <= 30){
			attack = attrStats(4, 8)
			damage = attack
			playerRound();
		} else {

		}
	};
	
	this.heal = function(){
		if (wis <= 10){
			heal = attrStats(1, 3)
			health = heal
			playerRound();
			// mana -= 2
			// hitPoints += heal
		} else if (wis <= 20){
			heal = attrStats(1, 5)
			health = heal
			playerRound();
			// mana -= 2
			// hitPoints += heal
		} else if (wis <= 30){
			heal = attack(2, 7)
			health = heal
			playerRound();
			// mana -= 2
			// hitPoints += heal
		} else{

		}
	};

	this.spAttack = function(){
		if (int <= 10){
			spAttack = attrStats(2, 4)
			damage = spAttack
			playerRound();
			// mana -= 4
		} else if (int <= 20){
			spAttack = attrStats(3, 8)
			damage = spAttack
			playerRound();
			// mana -= 4
		} else if (int <= 30){
			spAttack = attrStats(5, 11)
			damage = spAttack
			playerRound();
			// mana -= 4
		} else {

		}
	};

	this.classSP  = function(){
		//need to figure out functionality of barrier later
	}
}

//functions being used in the constructors
function statNumbers(min, max) {
  min = Math.ceil(5);
  max = Math.floor(30);
  return Math.floor(Math.random() * (max - min)) + min;
}
function attrStats(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}




//creating the boss
var theBoss = {
	name: "Kreecat",
	hitPoints: 50,
	currentForm: "Normal",


	attack: function(){
		//attacks player for either 1-2 damage
		//if enraged deals 2-5 damage
	},

	special: function(){
		//wait for 1 turn, attack with special attack, deals 5-8 points of damage
	},
	minion: function(){
		//summon minion, minion is used for devour, minion must be timed out for 3 turns, only comes out during enrage, boss can still attack for those turns
	},

	consume: function(){
		//consumes the minion for full heal, only does this at start of enrage
	},


	rage: function(){
		if (hitPoints <= 15){
			currentForm = "Enraged"
		}
	}














}































































