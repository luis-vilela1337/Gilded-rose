import { Item } from "./Item";
import { VerifyItem } from "./providers/Verify";

export class AgedBrieItem extends Item {
  constructor(sellIn?: number, quality?: number) {
    super("Aged Bried", sellIn, quality);
  }

  execute(): void {
    if (VerifyItem.verifyQuality(this.quality)) {
      this.quality++;
      this.sellIn--;
      return;
    }
  }
}
