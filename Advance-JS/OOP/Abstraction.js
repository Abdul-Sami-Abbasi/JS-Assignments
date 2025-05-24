// Same method speak() behaves differently depending on the object:

let animals = [new Animal("Thing"), new Dog("Spike")];

animals.forEach(animal => animal.speak());
