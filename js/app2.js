console.log('im working');

//round counter variable to decide turns and function to add rounds

var round = 0;
function addRound(){
	round += 1;
}


//button stuff

var pAttack = document.getElementById('attackBtn');
var pHeal = document.getElementById('healBtn');
var pSpAttack = document.getElementById('spAttackBtn');
var classSp = document.getElementById('classSPBtn');

pAttack.addEventListener('click', function(e){
	summonHero.attack();
	fight();
	console.log('working');
});

pHeal.addEventListener('click', function(e){
	summonHero.heal();
	fight();
	console.log('working');
});

pSpAttack.addEventListener('click', function(e){
	summonHero.spAttack();
	fight();
	console.log('working');
});
classSp.addEventListener('click', function(e){
	summonHero.barrier();
	fight();

})

function btnDisable(){
	pAttack.disabled = true;
	pHeal.disabled = true;
	pSpAttack.disabled = true;
}

function btnEnable(){
	pAttack.disabled = false;
	pHeal.disabled = false;
	pSpAttack.disabled = false;
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

//naming input
var nameMe = prompt('give me a name');

//summon the hero
var summonHero = new TheHero(
	nameMe, statNumbers(), statNumbers(), statNumbers(), statNumbers(), statNumbers());

//this is the random char stat sheet
function TheHero (name, hitPoints, mana, str, wis, int, cp){
	this.name = name || '';
	this.hitPoints = hitPoints || '';
	this.mana = mana || '';
	this.str = str || '';
	this.wis = wis || '';
	this.int = int || '';
	this.cp = 2 || '';
	this.maxHp = hitPoints || '';
	this.maxMana = mana || '';

	var attDamage = '';
	var spDamage = '';
	var healAmnt = '';

	//attack function
	this.attack = function(){
		if (str <= 10){
			attack = attrStats(1, 5);
			attDamage = attack;
			theBoss.hitPoints -= attDamage;
			noAlert(this.name + " attacks for " + attack);
		} else if (str <= 20){
			attack = attrStats(2, 6);
			attDamage = attack;
			theBoss.hitPoints -= attDamage;
			noAlert(this.name + " attacks for " + attack);
		} else if (str <= 30){
			attack = attrStats(4, 8);
			attDamage = attack;
			theBoss.hitPoints -= attDamage;
			noAlert(this.name + " attacks for " + attack);
		} else {

		}
	};
	//healing function
	this.heal = function(){
		if (this.mana >= 4){
			if (wis <= 10){
				heal = attrStats(1, 3);
				healAmnt = heal;
				this.hitPoints += this.hitPoints + healAmnt >= this.maxHp ? this.maxHp - this.hitPoints : healAmnt;
				this.mana -= 4;
				noAlert(this.name + " heals for " + heal);
			} else if (wis <= 20){
				heal = attrStats(1, 5);
				healAmnt = heal;
				this.hitPoints += this.hitPoints + healAmnt >= this.maxHp ? this.maxHp - this.hitPoints : healAmnt;
				this.mana  -= 4;
				noAlert(this.name + " heals for " + heal);
			} else if (wis <= 30){
				heal = attrStats(2, 7);
				healAmnt = heal;
				this.hitPoints += this.hitPoints + healAmnt >= this.maxHp ? this.maxHp - this.hitPoints : healAmnt;
				this.mana -= 4;
				noAlert(this.name + " heals for " + heal);
			} else{

			}
		}else {
			alert("Not Enough Mana!");
		}
	};
	//spAttack function
	this.spAttack = function(){
		if (this.mana >= 2){
			if (int <= 10){
				spAttack = attrStats(2, 4);
				spDamage = spAttack;
				theBoss.hitPoints -= spDamage;
				this.mana  -= 2;
				noAlert(this.name + " shakes his firestick for " + spDamage);
			} else if (int <= 20){
				spAttack = attrStats(3, 8);
				spDamage = spAttack;
				theBoss.hitPoints -= spDamage;
				this.mana  -= 2;
				noAlert(this.name + " shakes his firestick for " + spDamage);
			} else if (int <= 30){
				spAttack = attrStats(5, 11);
				spDamage = spAttack;
				theBoss.hitPoints -= spDamage;
				this.mana -= 2;
				noAlert(this.name + " shakes his firestick for " + spDamage);
			} else {

			}
		}else {
			alert("Not Enough Mana");
		}
	};
	this.barrier = function(){
		//need to figure out functionality of barrier later
		if(this.cp > 0){
			this.cp--;
			this.barrierStart = round + 1;
			this.barrierLength = 2;
			statsBar.innerHTML = nameMe + "<br>" + "Str: " + summonHero.str + "    Int: " + summonHero.int + "<br>" + "Wis: " + summonHero.wis + "    CP: " + summonHero.cp;
			noAlert(this.name + " casts Barrier!");
		}
	}
}


 

var theBoss = {
	name: "Kreecat",
	hitPoints: 50,
	maxHp: 50,
	currentForm: "Normal",
	spCounter: 0,
	healCounter: 0,


	attack: function(){
		//attacks player for either 1-2 damage
		if (this.currentForm === "Normal"){
			attack = attrStats(1, 3);
			summonHero.hitPoints -= attack;
			noAlert(this.name + " attacks for " + attack);
			//if enraged deals 2-5 damage
		} else if (this.currentForm === "Enraged"){
			attack = attrStats(2, 5);
			summonHero.hitPoints -= attack;
			noAlert(this.name + " attacks for " + attack);
		}
	},

	special: function(){
		//wait for 1 turn, attack with special attack, deals 5-8 points of damage
		if (this.spCounter % 2 === 0){
			noAlert(this.name + " looks gassy");
			this.spCounter += 1;
		} else{
			special = attrStats(5, 8);
			summonHero.hitPoints -= special;
			this.spCounter += 1;
			noAlert(this.name + " attacks for " + special);
		}
	},
	consume: function(){
		//consumes the minion for full heal, only does this during enrage
		if(this.currentForm === "enrage"){
			noAlert(this.name + " is going to EAT");
			this.healCounter += 1;
			if (this.healCounter % 3 === 0){
				consume = attrStats(5, 10);
				summonHero.hitPoints -= consume;
				this.hitPoints = 25;
				this.currentForm = "Normal";
				noAlert(this.name + " CONSUMES YOUR FLESH FOR " + consume);
			} 
		} else {
			this.attack();
		}

	},


	rage: function(){
		if (this.hitPoints <= 15){
			this.currentForm = "Enraged";
			if(this.currentForm === "Enraged"){
				bossHpBarNum.style.color = "red";
			}
		} else {
			bossHpBarNum.style.color = "white";
		}
	}, 

	bossMove : function(){
	var ability = Math.floor(Math.random() * 3 + 1); 
		if (!summonHero.barrierStart || round <= summonHero.barrierStart || round > summonHero.barrierStart + summonHero.barrierLength){
			if (ability === 1){
				this.attack();
			
			}else if (ability === 2){
				this.special();
			
			}else if (ability === 3){
				this.consume();
			}
		}else if(summonHero.barrierStart && round > summonHero.barrierStart + summonHero.barrierLength){
			summonHero.barrierStart = 0

		}
	}


};

function fight(){
	addRound();
	setTimeout(theBoss.bossMove(), 10000);
	barChanges();
	gameOver();
	theBoss.rage();
	

}

function gameOver(){
	if (summonHero.hitPoints <= 0){
		btnDisable();
		alert("Game Over, " + nameMe + " has died.");
	}else if (theBoss.hitPoints <= 0){
		btnDisable();
		alert("Game Over, " + theBoss.name + " has dead.");
	}else{

	}
}

function barChanges(){
	heroHpBarNum.innerHTML = nameMe + " health " + summonHero.hitPoints;
	heroHpBarNum.style.width = ((summonHero.hitPoints / summonHero.maxHp) * 100) + "%";
	heroManaBarNum.innerHTML = "mana " + summonHero.mana;
	heroManaBarNum.style.width = ((summonHero.mana / summonHero.maxMana) * 100) + "%";
	bossHpBarNum.innerHTML = theBoss.name + " health " + theBoss.hitPoints;
	bossHpBarNum.style.width = ((theBoss.hitPoints / theBoss.maxHp) * 100) + "%";
}


//style for bars
var heroHpBarNum = document.getElementById('fighterHpBar');
heroHpBarNum.innerHTML = nameMe + " health " + summonHero.hitPoints;

var heroManaBarNum = document.getElementById('fighterManaBar');
heroManaBarNum.innerHTML = "mana " + summonHero.mana;

var bossHpBarNum = document.getElementById('bossHpBar');
bossHpBarNum.innerHTML = theBoss.name + " health " + theBoss.hitPoints;

var statsBar = document.getElementById('statsContainer');
statsBar.innerHTML = nameMe + "<br>" + "Str: " + summonHero.str + "    Int: " + summonHero.int + "<br>" + "Wis: " + summonHero.wis + "    CP: " + summonHero.cp;

var noAlertWindow = document.getElementById('dmgTxt');
noAlertWindow.innerHTML = "Ready? FIGHT!" + "<br>";
function noAlert(string){
	noAlertWindow.innerHTML += "Round: " + round + "<br>" + (string) + "<br>";
}

window.onload = btnEnable();

