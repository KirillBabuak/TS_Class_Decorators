function ClassDecoratorExample1(data: unknown){
  return function (constructor: Function){
    /*
    * Some functionality:
    * 1. We can add logger
    * 2. We can return another class which will extend provided class
    * */
  }
}

function ClassDecoratorExample2(constructor: Function){
  // some functionality
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

// 1. all types of decorators do not work at runtime, but at the moment the class is defined
// 2. if we use a class decorator, then in the decorator we can return a new class instance
// 3. For function parameter and class parameter it doesn't make sense to return something, because it will be ignored