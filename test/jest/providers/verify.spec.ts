import { VerifyItem } from "@/providers/Verify";

describe("Verify class tests", () => {
  it("Should verifySellIn and retunrn true", () => {
    const response = VerifyItem.verifySellIn(10);

    expect(response).toStrictEqual(true);
  });

  it("Should verifySellIn and retunrn false", () => {
    const response = VerifyItem.verifySellIn(-10);

    expect(response).toStrictEqual(false);
  });

  it("Should verifyQuality and retunrn true", () => {
    const response = VerifyItem.verifyQuality(10);

    expect(response).toStrictEqual(true);
  });

  it("Should verifyQuality and retunrn false", () => {
    const response = VerifyItem.verifyQuality(-10);

    expect(response).toStrictEqual(false);
  });
});
