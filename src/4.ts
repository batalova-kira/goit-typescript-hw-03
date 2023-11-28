class Key {
    private signature: number = Math.random();

    getSignature(): number {
        console.log(this.signature);
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) { }
    getKey(): Key {
        return this.key;
}
}
    
abstract class House {
    protected door:boolean = false;
    private tenants: Person[]=[];

    constructor(protected key: Key) { 
     }

    comeIn(person: Person) {
        
        if (this.door) {
            this.tenants.push(person);
            console.log('Welcome to the home!');
        }
        else {
            console.log("Sorry, can't let you in. Please provide the correct key.");
            
        }

    }
    abstract openDoor(key: Key): void;
}
    
class MyHouse extends House {
    openDoor(key: Key): void{
  if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Door opened.');
        } else {
            console.log('Wrong key. Door remains closed.');
        }
    }
}


const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
console.log(person);
console.log(key.getSignature());

house.openDoor(person.getKey());
house.comeIn(person);

export {};