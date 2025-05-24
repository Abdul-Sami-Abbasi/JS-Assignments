// Hide complexity using simple interfaces:

class Car {
  #engineStatus = false;

  start() {
    this.#engineStatus = true;
    console.log("Car started");
  }

  stop() {
    this.#engineStatus = false;
    console.log("Car stopped");
  }
}

const myCar = new Car();
myCar.start(); // Car started
// myCar.#engineStatus; ❌ Error: private field
