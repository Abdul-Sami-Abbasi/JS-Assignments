//Wrap data + methods inside objects:

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const u1 = new User("Ali", 25);
u1.greet(); // Hi, I'm Ali
