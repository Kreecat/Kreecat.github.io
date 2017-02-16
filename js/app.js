console.log('im working')



//functions being used in the constructors
function statNumbers(min, max) {
  min = Math.ceil(5);
  max = Math.floor(30);
  return Math.floor(Math.random() * (max - min)) + min;
}

//naming input
var nameMe = prompt('give me a name');
function TheHero (name, hitPoints, mana, str, wis){
	this.name = name || '';
	this.hitPoints = hitPoints || '';
	this.mana = mana || '';
	this.str = str || '';
	this.wis = wis || '';
}

var newHero = new TheHero( nameMe, statNumbers(), statNumbers(), statNumbers(), statNumbers());