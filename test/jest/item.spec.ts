import { Item } from "@/Item";

describe("Item class test", () => {
  it("should test execute with positive quality and sellIn", () => {
    const item = new Item("Foo", 10, 10);

    item.execute();

    const response = new Item("Foo", 9, 9);

    expect(item).toStrictEqual(response);
  });

  it("should test execute with positive quality and negative sellIn", () => {
    const item = new Item("Foo", -8, 10);

    item.execute();

    const response = new Item("Foo", -9, 8);

    expect(item).toStrictEqual(response);
  });
  it("should test execute with negative quality and negative sellIn", () => {
    const item = new Item("Foo", -8, -10);

    item.execute();

    const response = new Item("Foo", -8, -10);

    expect(item).toStrictEqual(response);
  });
});
