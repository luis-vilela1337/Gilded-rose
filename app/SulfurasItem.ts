import { Item } from "./Item";
import { VerifyItem } from "./providers/Verify";

export class SulfurasItem extends Item {
  constructor(sellIn?: number) {
    super("Sulfuras, Hand of Ragnaros", sellIn, 80);
  }

  execute(): void {
    if (VerifyItem.verifySellIn(this.sellIn)) {
      this.sellIn--;
    }
  }
}
