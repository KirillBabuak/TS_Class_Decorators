function ClassFieldDecorator(target: any, fieldName: string) {
  // target:
  // - if field is static, it will function constructor, otherwise it will be class prototype
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
