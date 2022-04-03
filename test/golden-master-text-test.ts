import { Item } from "../app/Item";
import { GildedRose } from "../app/gilded-rose";
import { products } from "../app/Utils/item-types";

const items = [
  new Item("+5 Dexterity Vest", 10, 20), // Randon itens
  new Item(products.agedBrie.name, 2, 0), //
  new Item("Elixir of the Mongoose", 5, 7), // Randon itens
  new Item(products.sulfuras.name, 0, 80), //
  new Item(products.sulfuras.name, -1, 80),
  new Item(products.backstagePasses.name, 15, 20),
  new Item(products.backstagePasses.name, 10, 49),
  new Item(products.backstagePasses.name, 5, 49),
  new Item(products.conjureds.name, 3, 6),
];

const gildedRose = new GildedRose(items);

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
  gildedRose.updateQuality();
}
