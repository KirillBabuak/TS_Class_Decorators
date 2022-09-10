abstract class Parent {
  abstract count: number;
  protected name: string = "test name";

  abstract setName(name: string);
}

class Child extends Parent {
  count = 0;

  // props shoul be equal with Parent
  setName(name: string) {
    this.name = name;
  }
}

interface PersonProps {
  name: string;
  getName: () => void;
}

type PersonType = {
  name: string;
  getName: () => void;
};

interface Test {
  test?: string;
}
// we can omplement type or interfate
class Person implements PersonProps, Test, PersonType {
  name = "";
  test = "";
  testField: string = ""; // we can have more field and methods than in interface, but fields from interface should be anyway
  getName() {}
}
