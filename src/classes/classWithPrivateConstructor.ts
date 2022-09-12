class Singleton {
  name = '';
  location = '';
  private static instance: Singleton

  // private constructor we can call just inside this class
  private constructor(name: string, location: string) {
    // @ts-ignore
    Singleton.instance = { name, location }
    this.name = name;
    this.location = location;
  };

  static getInstance() {
    if (!this.instance) {
      // this.instance = { name: "test", location: "test" }; // both variant is the same
      this.instance = new Singleton("test", "test");
    }

    return this.instance;
  }

  showMessage() {
    console.log('Singleton_message: ', this.name) // - will show '', like initial value, in don't set value (like I did it in the constructor)
  }
}

const instance1 = Singleton.getInstance();
instance1.showMessage();
const instance2 = Singleton.getInstance();
instance2.showMessage();
