import { Item } from "../app/Item";
import { GildedRose } from "../app/gilded-rose";
import { AgedBrieItem } from "@/AgedBrieItem";
import { SulfurasItem } from "@/SulfurasItem";
import { BackstageItem } from "@/BackstageItem";
import { ConjuredItem } from "@/ConjuredItem";

const items = [
  new Item("+5 Dexterity Vest", 10, 20), // Randon itens
  new AgedBrieItem(2, 0), //
  new Item("Elixir of the Mongoose", 5, 7), // Randon itens
  new SulfurasItem(0), //
  new SulfurasItem(-1),
  new BackstageItem(15, 20),
  new BackstageItem(10, 49),
  new BackstageItem(5, 49),
  new ConjuredItem(3, 6),
];

const gildedRose = new GildedRose();

let days: number = 2;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

for (let i = 0; i < days; i++) {
  console.log(`-------- day ${i}  --------`);
  items.forEach((element) => {
    console.log(element);
  });
  console.log();
  gildedRose.updateQuality(items);
}
