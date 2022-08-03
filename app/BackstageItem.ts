import { Item } from "./Item";
import { VerifyItem } from "./providers/Verify";

export class BackstageItem extends Item {
  constructor(sellIn?: number, quality?: number) {
    super("Backstage passes to a TAFKAL80ETC concert", sellIn, quality);
  }

  execute(): void {
    if (VerifyItem.verifyQuality(this.quality)) {
      if (this.sellIn <= 50 && this.sellIn > 10) {
        this.quality += 1;
        this.sellIn--;
        return;
      }
      if (this.sellIn <= 10 && this.sellIn > 5) {
        this.quality += 2;
        this.sellIn--;
        return;
      }
      if (this.sellIn <= 5 && this.sellIn > 0) {
        this.quality += 3;
        this.sellIn--;
        return;
      }

      this.quality = 0;
      return;
    }
  }
}
