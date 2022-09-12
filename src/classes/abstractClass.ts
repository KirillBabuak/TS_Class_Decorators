abstract class AbstractParent {
  abstract count: number;
  protected name: string = "test name";

  abstract setName(name: string): unknown;
}

class AbstractChild extends AbstractParent {
  count = 0;

  // props should be equal with Parent
  setName(name: string): void {
    this.name = name;
  }
}
