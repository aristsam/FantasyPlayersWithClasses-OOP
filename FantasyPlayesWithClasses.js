class Player {
	constructor(name,type,race){
		this.name=name;
		this.type=type;
		this.race=race;
	}
	greeting(){
		console.log(`My name is ${this.name}.`);
	}
	
}

class Orc extends Player {
	constructor(name,type,race){
		super(name,type,race);
	}
	whatIsYourRace(){
		console.log(`Dont be afraid! i am a green and friendly ${this.race}`);
	}
	greeting(){
		console.log(`Hi my name is  ${this.name} and i am ${this.type}`);
	}
}

class DarkElf extends Player {
	constructor(name,type,race){
		super(name,type,race);
	}
	whatIsYourRace(){
		console.log(`I am ${this.race}.I only attack in the night`);
	}
	greeting(){
		console.log(`Hi my name is  ${this.name} and i am ${this.type}`);
	}
}

class Dwarf extends Player {
	constructor(name,type,race){
		super(name,type,race);
	}
	whatIsYourRace(){
		console.log(`Hey ${this.name} is in da house.Definetly, i am ${this.race}.Dont let my height fool you, i can be deadly!`);
	}
	greeting(){
		console.log(`Hi my name is  ${this.name} and i am ${this.type}`);
	}
}


const orc1=new Orc("Aris","tyrant","orc");
const orc2=new Orc("Kelly","destoryer","orc");

const darkElf1=new DarkElf("Simon","wizard","darkElf");
const darkElf2=new DarkElf("Mary","fighter","darkElf");

const dwarf1=new Dwarf("Nick","scavenger","dwarf");
const dwarf2=new Dwarf("Jack","artisan","dwarf");

const pratt=new Player("Pratt");

orc1.greeting();
orc1.whatIsYourRace();

orc2.greeting();
orc2.whatIsYourRace();

darkElf1.greeting();
darkElf1.whatIsYourRace();

darkElf2.greeting();
darkElf2.whatIsYourRace();


dwarf1.greeting();
dwarf1.whatIsYourRace();

dwarf2.greeting();
dwarf2.whatIsYourRace();

pratt.greeting();

// // pratt = new Player("Pratt");
// pratt.greeting(); // 'My name is Pratt.'
// This feature - when a method has the same name but a different implementation in different classes - is called <<Polymorphism>>.
// When a method in a subclass replaces the superclass's implementation, we say that the subclass overrides the version in the superclass.


