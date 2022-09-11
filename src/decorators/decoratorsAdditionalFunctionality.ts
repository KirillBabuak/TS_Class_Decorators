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
      return descriptor.value.bind(this) // this belong to object, which defined and not be overwritten
    },
  }
}

function Required(target: any, propertyName: string){

}

function PositiveNumber(target: any, propertyName: string){

}

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

const market = new Market();

const button = document.querySelector('button')!;
button.addEventListener('click', market.showName)

// @ts-ignore
console.log('decorator class', market.getSubname())

// console.log(Object.getOwnPropertyDescriptor(market, 'showName')) // check descriptor