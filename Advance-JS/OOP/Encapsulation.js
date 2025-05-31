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



// --------------------------example---------------------------------
function Counter(){
  
  let count = 0; // private property
  
  this.increment = function(){
    count++;
  };

  this.decrement = function(){
    count--;
  };

  this.getCount = function(){
    return count;
  };
}

const user1 = new Counter();
user1.increment(); // 1
user1.increment(); // 2
user1.decrement(); // 1
console.log(user1.getCount());  // 1
console.log(user1.count);  // undefined
