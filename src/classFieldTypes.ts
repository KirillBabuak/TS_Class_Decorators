class Department {
  name: string;
  private lastReportDate: string = "";
  private employers: string[] = ["a"]; // access to this filed only in this class. If this class was extended, child will not access to the field.
  protected responsibiities: string[] = []; // // access to this filed only in this class and child. If this class was extended, child will have access to the field.
  private readonly createdDate: string; // we can iitialize this field just in constructor. After initialize we can not change this field

  constructor(name: string) {
    this.name = name;
    this.createdDate = new Date().toISOString();
  }

  get mostReportDate() {
    return this.lastReportDate; // return just string, can't return object
  }

  set mostReportDate(name: string) {
    this.lastReportDate = name;
  }

  protected countEmployers() {
    return this.employers.length;
  }
}

const department = new Department("test");
department.name = "changed name";

// getter and setter
department.mostReportDate = "first employer"; // setter
department.mostReportDate; // getter. return "first employer"

class ItDepartent extends Department {
  private countSubDepartments: number;

  constructor(countSubDepartments: number) {
    super("it");
    this.countSubDepartments = countSubDepartments;
    this.responsibiities = ["development,", "testing", "production"];
    // this.employers  // will error, because parrent has privet tupe, not protected
  }
}

// short class initialization
class AccountingDepartment {
  // it's like writong above the class:
  // nama: string,
  // private countVacations: number under
  constructor(public name: string, private countVacations: number) {}
}

const account = new AccountingDepartment("test", 9);
