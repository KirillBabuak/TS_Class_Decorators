class Department {
  name: string;
  private lastReportDate: string = "";
  private employers: string[] = ['manager']; // access to this filed only in this class. If this class was extended, child will not access to the field.
  protected responsibilities: string[] = []; // // access to this filed only in this class and child. If this class was extended, child will have access to the field.
  private readonly createdDate: string; // we can initialize this field just in constructor. After initialize we can not change this field

  constructor(name: string) {
    this.name = name;
    this.createdDate = new Date().toISOString();
  }

  get mostReportDate() {
    return this.lastReportDate; // getter return just string, can't return object
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

class ItDepartment extends Department {
  private countSubDepartments: number;

  constructor(countSubDepartments: number) {
    super("it");
    this.countSubDepartments = countSubDepartments;
    this.responsibilities = ["development,", "testing", "production"];
    // this.employers  // will error, because parent has privet type, not protected
  }
}

// short class initialization
class AccountingDepartment {
  // it's like writing above the class:
  // name: string,
  // private countVacations: number under
  constructor(public name: string, private countVacations: number) {}
}

const account = new AccountingDepartment("test", 9);
