function ClassFieldDecorator(target: any, fieldName: string) {
  // target:
  // - если поле не статик, то будет прототайм класса
  // - если статик, то функция конструктор
  console.log("target: ", target);
  console.log("fieldName ", fieldName);
}

class DecoratorByClassField {
  @ClassFieldDecorator
  title: string;
  @ClassFieldDecorator
  private _name: string;
  @ClassFieldDecorator
  static firstName: string;
  @ClassFieldDecorator
  protected secondName: string = '';

  constructor(name: string, title: string) {
    this._name = name;
    this.title = title;
  }
}

const decoratorByClassFieldInstance = new DecoratorByClassField("first", "testTitle");
