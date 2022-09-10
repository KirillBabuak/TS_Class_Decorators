function Logger(target: any, field: string) {
  // target: здесь будет прототайп класс.
  // если поле не статик, то будет прототайм класса
  // если статик, то функция конструктор ву
  console.log("target: ", target);
  console.log("field ", field);
}

class Product {
  @Logger
  title: string;
  @Logger
  private _name: string;
  @Logger
  static firstName: string;
  @Logger
  protected secondName: string;

  constructor(name: string, title: string) {
    this._name = name;
    this.title = title;
  }
}

const instance = new Product("first", "testTitle");
