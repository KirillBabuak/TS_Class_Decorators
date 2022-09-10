function AccessorDecorator(
  target: any,
  name: string,
  descreptor: PropertyDescriptor
) {}

function MethodDecorator(
  target: any,
  name: string,
  descreptor: PropertyDescriptor
) {}

function ParameterDecorator(
  target: any,
  name: string,
  propertyPosition: number
) {}

class Product {
  private _name: string;
  private _tax: number;

  constructor(name: string, tax: number) {
    this._name = name;
    this._tax = tax;
  }

  @AccessorDecorator
  get name() {
    return this._name;
  }

  @MethodDecorator
  getPriceWithTax(@ParameterDecorator price: number) {
    return price * (1 + this._tax / 100);
  }
}

// !!! все виды декораторов срабатывают не в рантайме, а в помент определения класса

// если мы используем декоратор класса, то в декораторе мы можем вернуть новый инстанс класса
// для параметра функции и параметра класса быссмысленно что-то возвращать, это будет проигнорировано
