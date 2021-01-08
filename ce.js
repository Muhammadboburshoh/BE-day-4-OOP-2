class Animal {
  name = "Toby"

  constructor (name) {
    this.name = name
  }

  say() {
    return "my name is " + this.name
  }
}

class Cat extends Animal {
  
  constructor(name) {
    super(name)
  }

  say() {
    console.log("Meaw " +super.say());
  }
}

class Dog extends Animal {

  constructor(name) {
    super(name)
  }

  say() {
    console.log("woff " +super.say());
  }
}

const dog = new Dog("toby")
const cat = new Cat("tomy")
dog.say()
cat.say()
