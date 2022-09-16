// https://javascript.info/property-descriptors
// Descriptor is an object, which describes function behavior.

function AccessorDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {}

function MethodDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {}

function ParameterDecorator(
  target: any,
  name: string,
  propertyPosition: number
) {
}


class DecoratorByClassMethods {
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
