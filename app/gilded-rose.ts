import { Item } from "./Item";
import { products } from "./Utils/item-types";

export class GildedRose {
  items: Array<Item>;
  private methodCaller: Item = new Item();
  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Array<Item> {
    for (let i = 0; i < this.items.length; i++) {
      if (products.agedBrie.name === this.items[i].name) {
        this.methodCaller.agedBrieMethod(this.items[i]);
      } else if (products.sulfuras.name === this.items[i].name) {
        this.methodCaller.sulfurasMethod(this.items[i]);
      } else if (products.backstagePasses.name === this.items[i].name) {
        this.methodCaller.backstageMethod(this.items[i]);
      } else if (products.conjureds.name === this.items[i].name) {
        this.methodCaller.conjuredMethod(this.items[i]);
      } else {
        this.methodCaller.genericMethod(this.items[i]);
      }
    }
    return this.items;
  }
}
