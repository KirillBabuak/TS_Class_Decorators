class StaticClassExample {
  static firstName: string = "";

  constructor(name: string) {
    // StaticClassExample.firstName = name;  this will not work
  }

  static simpleFunction() {
    return Math.random();
  }
}

const staticClassInstance = new StaticClassExample("test");

// staticClassInstance.simpleFunction()  - it will not work
StaticClassExample.simpleFunction();

