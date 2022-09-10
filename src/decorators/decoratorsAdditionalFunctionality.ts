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

class Market {
  name= 'test name';

  @Binder
  showName() {
   console.log('market name: ', this?.name);
  }
}

const market = new Market();

const button = document.querySelector('button')!;
button.addEventListener('click', market.showName)

// console.log(Object.getOwnPropertyDescriptor(market, 'showName')) // check descriptor