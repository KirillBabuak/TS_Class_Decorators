function ClassDecorator(){
  return function<T extends {new(...args: any[]): {}}> (originalConstructor: T){
    return class extends originalConstructor {
      subName = 'subName'
      constructor(...args: any[]) {
        super();
      }

      getSubname(){
        return this.subName
      }
    }
  }
}

// --------------------------------------
function Binder(target: any, methodName: string, descriptor: PropertyDescriptor) {
  /*
  * Чтобы избежать конфликта, запрещено одновременно указывать значение value и функции get/set.
  * Либо значение, либо функции для его чтения-записи, одно из двух.
  * Также запрещено и не имеет смысла указывать writable при наличии get/set-функций.
  * */
  return {
    configurable: descriptor.configurable,
    enumerable: descriptor.enumerable,
    get(){
      // return ()=> console.log('specific functionality') // will return this function
      return descriptor.value.bind(this) // this belongs to object, which defined and not be overwritten
    },
  }
}

// -----------------------------------------
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required']
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive']
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

// ----------------------------------

@ClassDecorator()
class Market {
  name= 'test name';
  @Required
  location: string;
  @PositiveNumber
  minProductPrice: number;

  constructor(location: string, minProductPrice: number) {
    this.location=location;
    this.minProductPrice = minProductPrice;
  }

  @Binder
  showName() {
   console.log('market name: ', this?.name);
  }

}

const market = new Market('street', 1);

const button = document.querySelector('button')!;
button.addEventListener('click', market.showName)

// @ts-ignore
console.log('decorator class', market.getSubname())

console.log(validate(market))


