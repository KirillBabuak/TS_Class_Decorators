function FirstClassDecorator() {
    console.log('7')
    return function (constructor: Function) {
        console.log('10')
    }
}

function SecondClassDecorator() {
    console.log('8')
    return function (constructor: Function) {
        console.log('9')
    }
}

function FieldClassDecorator() {
    console.log('1')
    return function (target: any, fieldName: string) {
        console.log('2')
    }
}

function MethodClassDecorator() {
    console.log('3')
    return function (target: any, name: string, descriptor: PropertyDescriptor) {
        console.log('6')
    }
}

function ParameterClassDecorator() {
    console.log('4')
    return function (target: any, name: string, propertyPosition: number){
        console.log('5')
    }
}

@FirstClassDecorator()
@SecondClassDecorator()
class Order {
    @FieldClassDecorator()
    title = 'test'

    @MethodClassDecorator()
    simpleMethod(@ParameterClassDecorator() data: unknown){}
}

const instance = new Order();
