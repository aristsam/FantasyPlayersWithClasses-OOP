class Player {
	constructor(name,type,race){
		this.name=name;
		this.type=type;
		this.race=race;
	}
	greeting(){
		console.log(`Hi my name is  ${this.name} and i am ${this.type}`);
	}
}

class Orc extends Player {
	constructor(name,type,race){
		super(name,type,race);
	}
	whatIsYourRace(){
		console.log(`Dont be afraid! i am a green and friendly ${this.race}`);
	}
}

class DarkElf extends Player {
	constructor(name,type,race){
		super(name,type,race);
	}
	whatIsYourRace(){
		console.log(`I am ${this.race}.I only attack in the night`);
	}
}

class Dwarf extends Player {
	constructor(name,type,race){
		super(name,type,race);
	}
	whatIsYourRace(){
		console.log(`Hey ${this.name} is in da house.Definetly, i am ${this.race}.Dont let my height fool you, i can be deadly!`);
	}
}


const orc1=new Orc("Aris","tyrant","orc");
const orc2=new Orc("Kelly","destoryer","orc");

const darkElf1=new DarkElf("Simon","wizard","darkElf");
const darkElf2=new DarkElf("Mary","fighter","darkElf");

const dwarf1=new Dwarf("Nick","scavenger","dwarf");
const dwarf2=new Dwarf("Jack","artisan","dwarf");

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