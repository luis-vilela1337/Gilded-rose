import { Item } from "./Item";
import { VerifyItem } from "./providers/Verify";

export class ConjuredItem extends Item {
  constructor(sellIn?: number, quality?: number) {
    super("Conjured Mana Cake", sellIn, quality);
  }
  execute(): void {
    if (!VerifyItem.verifySellIn(this.sellIn)) {
      this.quality = 0;
      return;
    }
    this.sellIn--;
    this.quality -= 2;
    return;
  }
}
