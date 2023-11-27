class Key {
    constructor(private signature: number) { 
        this.signature = Math.random();
    }
    
    getSignature():number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) { this.key = key;}
    getKey(): Key {
        return this.key;
}
}
    
abstract class House {
    protected door:boolean= false;
    protected key: Key;
    private tenants: Person[] = [];

    constructor(key: Key) { this.key = key; }

    comeIn(key: Key, door:boolean) {
        const tenant = new Person(key);
        if (this.door) {
            this.tenants.push(tenant);
            console.log('Welcome to the home!');
        }
        else {
            console.log("Sorry, can't let you in. Please provide the correct key.");
            
        }
    return
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



// const house = new MyHouse(key);
// const person = new Person(key);
// console.log(person);


// house.openDoor(person.getKey());

// house.comeIn(person);


// export {};