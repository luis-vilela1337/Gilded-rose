import { verify } from "crypto";
import { products } from "./Utils/item-types";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name?: string, sellIn?: number, quality?: number) {
    this.name = name!;
    this.sellIn = sellIn!;
    this.quality = quality!;
  }

  agedBrieMethod(items: Item): void {
    if (this.verifyQuality(items.quality)) {
      items.quality++;
      items.sellIn--;
    }
  }

  sulfurasMethod(item: Item): void {
    if (item.sellIn) {
      item.sellIn--;
    }
  }

  backstageMethod(item: Item): void {
    if (this.verifyQuality(item.quality)) {
      if (item.sellIn <= 10 && item.sellIn > 5) {
        item.quality += 2;
        item.sellIn--;
      } else if (item.sellIn <= 5 && item.sellIn > 0) {
        item.quality += 3;
        item.sellIn--;
      }
    } else {
      item.quality = 0;
    }
  }
  conjuredMethod(item: Item): void {
    if (this.verifyQuality(item.quality)) {
      item.sellIn--;
      item.quality -= 2;
    }
  }

  genericMethod(item: Item): void {
    if (this.verifyQuality(item.quality)) {
      if (this.verifySellIn(item.sellIn)) {
        item.sellIn--;
        item.quality--;
      } else {
        item.sellIn--;
        item.quality -= 2;
      }
    }
  }
  verifySellIn(sellIn: number): boolean {
    if (sellIn > 0) {
      return true;
    }
    return false;
  }

  verifyQuality(quality: number): boolean {
    if (quality >= 0 || quality <= 50) {
      return true;
    }
    return false;
  }
}
