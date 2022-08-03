import { AgedBrieItem } from "@/AgedBrieItem";

describe("AgedBreid class test", () => {
  it("should test execute with positive quality and sellIn", () => {
    const agedBried = new AgedBrieItem(10, 10);

    agedBried.execute();

    const response = new AgedBrieItem(9, 11);

    expect(agedBried).toStrictEqual(response);
  });
});
