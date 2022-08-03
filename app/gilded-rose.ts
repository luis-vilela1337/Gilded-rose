import { Item } from "./Item";

export class GildedRose {
  updateQuality(items: Item[]): Array<Item> {
    items.forEach((value) => {
      value.execute();
    });

    return items;
  }
}
