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

// we can implement type or interface
class Person implements PersonProps, Test, PersonType {
  name = "";
  test = "";
  testField: string = ""; // we can have more field and methods than in interface, but fields from interface should be anyway
  getName() {}
}
