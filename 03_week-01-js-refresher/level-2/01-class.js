class Animal {
	constructor(name, legCount, speaks) {
		this.name = name;
		this.legCount = legCount;
		this.speaks = speaks;
	}

	static myType() {
		console.log("Animal");
	}

	speak() {
		console.log(`${this.name} says ${this.speaks}`);
	}

	describe() {
		return `${this.name} has ${this.legCount} legs and says ${this.speaks}`;
	}
}

Animal.myType(); // when you want to call a method directly on class, make it static

const dog = new Animal("Bruno", 4, "bhow");
dog.speak(); // method called after instantiating Animal class object

const cat = new Animal("Chungus", 4, "meow");
cat.speak();
console.log(cat.describe());
