function ClassDecoratorExample1(data: any){
  return function (constructor: Function){
    // something
  }
}

function ClassDecoratorExample2(constructor: Function){
  // something
}

@ClassDecoratorExample1('test data')
@ClassDecoratorExample2
class DecoratorByClass {
  title: string;
  private _name: string;

  constructor(name: string, title: string) {
    this._name = name;
    this.title = title;
  }
}

const decoratorByClassInstance = new DecoratorByClass("first", "testTitle");

// !!! все виды декораторов срабатывают не в рантайме, а в помент определения класса
// если мы используем декоратор класса, то в декораторе мы можем вернуть новый инстанс класса
// для параметра функции и параметра класса быссмысленно что-то возвращать, это будет проигнорировано