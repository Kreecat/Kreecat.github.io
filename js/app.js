console.log('im working')



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

	this.attack = function(){
		if (str <= 10){
			attack = attrStats(1, 5)
			return attack
		} else if (str <= 20){
			attack = attrStats(2, 6)
			return attack
		} else if (str <= 30){
			attack = attrStats(4, 8)
			return attack
		} else {

		}
	};
	
	this.heal = function(){
		if (wis <= 10){
			heal = attrStats(1, 3)
			return heal
			mana -= 2
			hitPoints += heal
		} else if (wis <= 20){
			heal = attrStats(1, 5)
			return heal
			mana -= 2
			hitPoints += heal
		} else if (wis <= 30){
			heal = attack(2, 7)
			return heal
			mana -= 2
			hitPoints += heal
		} else{

		}
	};

	this.spAttack = function(){
		if (int <= 10){
			spAttack = attrStats(2, 4)
			return spAttack
			mana -= 4
		} else if (int <= 20){
			spAttack = attrStats(3, 8)
			return spAttack
			mana -= 4
		} else if (int <= 30){
			spAttack = attrStats(5, 11)
			return spAttack
			mana -= 4
		} else {

		}
	};

	this.classSP  = function(){
		//need to figure out functionality of barrier later
	}
}

































































