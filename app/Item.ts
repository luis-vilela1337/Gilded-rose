import { VerifyItem } from "./providers/Verify";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name?: string, sellIn?: number, quality?: number) {
    this.name = name!;
    this.sellIn = sellIn!;
    this.quality = quality!;
  }

  execute(): void {
    if (VerifyItem.verifyQuality(this.quality)) {
      if (VerifyItem.verifySellIn(this.sellIn)) {
        this.sellIn--;
        this.quality--;
      } else {
        this.sellIn--;
        this.quality -= 2;
      }
    }
  }
}
