class Employer {
  static firtsName: string = "";

  constructor(name: string) {
    Employer.firtsName = name; // this will not work
  }

  static countExperiens() {
    return Math.random();
  }
}

const employer = new Employer("test");

// employer.countExperiens  // it will not work
Employer.countExperiens();

/////// Class with private constructor ///////////////////
class DocumentDB {
  count: number = 0;
  private static instance: DocumentDB;

  // private constructor we can call just inside this class
  private constructor(name: string, location: string) {
    DocumentDB.instance = { name, location };
  }

  static getInstance() {
    if (!this.instance) {
      // this.instance = { name: "test", location: "test" }; // both variant is the same
      this.instance = new DocumentDB("test", "test");
    }

    return this.instance;
  }

  increaseCount() {
    this.count = this.count + 1;
  }
}

const instance1 = DocumentDB.getInstance();
instance1.increaseCount();
const instance2 = DocumentDB.getInstance();
instance2.increaseCount();
