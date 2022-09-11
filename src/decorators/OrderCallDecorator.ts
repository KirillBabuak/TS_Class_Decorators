function FirstClassDecorator(){
  console.log('3')
  return function (constructor: Function){
    console.log('6')
  }
}

function SecondClassDecorator(){
  console.log('4')
  return function (constructor: Function){
    console.log('5')
  }
}

function FieldClassDecorator(){
  console.log('1')
  return function (constructor: Function){
    console.log('2')
  }
}

@FirstClassDecorator()
@SecondClassDecorator()
class Order {
  @FieldClassDecorator()
  title = 'test'
}

const instance = new Order();
