console.log('im working')

//round counter variable to decide turns and function to add rounds

var round = 0;
function addRound(){
	round += 1;
}


//button stuff

var pAttack = document.getElementById('attackBtn');
var pHeal = document.getElementById('healBtn');
var pSpAttack = document.getElementById('spAttackBtn');

pAttack.addEventListener('click', function(e){
	summonHero.attack();
	addRound();
	console.log('working');
})

pHeal.addEventListener('click', function(e){
	summonHero.heal();
	addRound();
	console.log('working');
})

pSpAttack.addEventListener('click', function(e){
	summonHero.spAttack();
	addRound();
	console.log('working');
})



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

//naming input
var nameMe = prompt('give me a name');

//summon the hero
var summonHero = new TheHero( nameMe, statNumbers(), statNumbers(), statNumbers(), statNumbers(), statNumbers());

//this is the random char stat sheet
function TheHero (name, hitPoints, mana, str, wis, int, cp){
	this.name = name || '';
	this.hitPoints = hitPoints || '';
	this.mana = mana || '';
	this.str = str || '';
	this.wis = wis || '';
	this.int = int || '';
	this.cp = 10 || '';

	var attDamage = '';
	var spDamage = '';
	var healAmnt = '';

	//attack function
	this.attack = function(){
		if (str <= 10){
			attack = attrStats(1, 5);
			attDamage = attack;
			bHitPoints -= attDamage;
		} else if (str <= 20){
			attack = attrStats(2, 6);
			attDamage = attack;
			bHitPoints -= attDamage;
		} else if (str <= 30){
			attack = attrStats(4, 8);
			attDamage = attack;
			bHitPoints -= attDamage;
		} else {

		}
	};
	//healing function
	this.heal = function(){
		if (wis <= 10){
			heal = attrStats(1, 3);
			healAmnt = heal;
			pHitPoints += healAmnt;
			pMana -= 4
		} else if (wis <= 20){
			heal = attrStats(1, 5);
			healAmnt = heal;
			pHitPoints += healAmnt;
			pMana -= 4
		} else if (wis <= 30){
			heal = attrStats(2, 7);
			healAmnt = heal;
			pHitPoints += healAmnt;
			pMana -= 4
		} else{

		}
	};
	//spAttack function
	this.spAttack = function(){
		if (int <= 10){
			spAttack = attrStats(2, 4);
			spDamage = spAttack;
			bHitPoints -= spDamage;
			pMana -= 2
		} else if (int <= 20){
			spAttack = attrStats(3, 8);
			spDamage = spAttack;
			bHitPoints -= spDamage;
			pMana -= 4
		} else if (int <= 30){
			spAttack = attrStats(5, 11);
			spDamage = spAttack;
			bHitPoints -= spDamage;
			pMana -= 4
		} else {

		}
	};
	//barrier function
	this.classSP  = function(){
		//need to figure out functionality of barrier later
	}
}


 

var theBoss = {
	name: "Kreecat",
	hitPoints: 50,
	currentForm: "Normal",
	spCounter: 0,


	attack: function(){
		//attacks player for either 1-2 damage
		if (this.currentForm === "Normal"){
			attack = attrStats(1, 3)
			pHitPoints -= attack
			return attack
		} else if (this.currentForm === "Enraged"){
			attack = attrStats(2, 5)
			pHitPoints -= attack
			return attack
		}
		//if enraged deals 2-5 damage
	},

	special: function(){
		//wait for 1 turn, attack with special attack, deals 5-8 points of damage
		if (this.spCounter % 2 === 0){
			alert(this.name + " looks gassy");
			this.spCounter += 1;
		} else{
			special = attrStats(5, 8)
			pHitPoints -= special;
			this.spCounter += 1;
		}
	},
	consume: function(){
		//consumes the minion for full heal, only does this at start of enrage

	},


	rage: function(){
		if (bhitPoints <= 15){
			this.currentForm = "Enraged";
		} else {

		}
	}

}

//health variable for the hero
var pHitPoints = summonHero.hitPoints;
var pMana = summonHero.mana


//health variable for the boss
var bHitPoints = theBoss.hitPoints;


//style for bars
var heroHpBarNum = document.getElementById('fighterHpBar');
heroHpBarNum.innerHTML = "health = " + pHitPoints;

var bossHpBarNum = document.getElementById('bossHpBar');
bossHpBarNum.innerHTML = "health = " + bHitPoints;























































