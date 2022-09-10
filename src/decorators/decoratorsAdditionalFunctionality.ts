function Binder(target: any, name: string, descreptor: PropertyDescriptor) {
  return {
    ...descreptor,
    value() {
      return descreptor.value.bind(this);
    }
  };
}

class Market {
  private name: string;
  location: string;

  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
  }

  @Binder
  getName() {
    return this?.name;
  }
}

const market = new Market("appStore", "Los-Angeles");

const getMarketName = market.getName;

console.log(getMarketName());
