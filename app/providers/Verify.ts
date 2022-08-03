export class VerifyItem {
  static verifySellIn(sellIn: number): boolean {
    if (sellIn > 0) {
      return true;
    }
    return false;
  }

  static verifyQuality(quality: number): boolean {
    if (quality > 0 && quality <= 50) {
      return true;
    }
    return false;
  }
}
