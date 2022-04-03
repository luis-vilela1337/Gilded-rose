import { GildedRose } from "@/gilded-rose";
import { Item } from "@/Item";
import { products } from "@/Utils/item-types";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const fooItem = { name: "foo", sellIn: 10, quality: 10 };

    const gildedRose = new GildedRose([
      new Item(fooItem.name, fooItem.sellIn, fooItem.quality),
    ]);
    const response = gildedRose.updateQuality();
    const expectResponse = { name: "foo", sellIn: 9, quality: 9 };

    expect(response[0].name).toBe(expectResponse.name);
    expect(response[0].quality).toBe(expectResponse.quality);
    expect(response[0].sellIn).toBe(expectResponse.sellIn);
    expect(response[0]).toEqual(expectResponse);
  });

  it("Should decrease 'quality' twice because of sellIn is zero ", () => {
    const fooItem = { name: "foo", sellIn: 0, quality: 10 };

    const itemRequest = new Item(fooItem.name, fooItem.sellIn, fooItem.quality);

    const gildedRose = new GildedRose([itemRequest]);
    const response = gildedRose.updateQuality();
    const expectResponse = { name: "foo", sellIn: -1, quality: 8 };

    expect(response[0].name).toBe(expectResponse.name);
    expect(response[0].quality).toBe(expectResponse.quality);
    expect(response[0].sellIn).toBe(expectResponse.sellIn);
    expect(response[0]).toEqual(expectResponse);
  });

  it("Should improve 'quality' because it is a Aged Brie ", () => {
    const agedBrieItem = { name: "Aged Brie", sellIn: 10, quality: 10 };

    const itemRequest = new Item(
      agedBrieItem.name,
      agedBrieItem.sellIn,
      agedBrieItem.quality
    );

    const gildedRose = new GildedRose([itemRequest]);
    const response = gildedRose.updateQuality();
    const expectResponse = {
      name: products.agedBrie.name,
      sellIn: 9,
      quality: 11,
    };

    expect(response[0].name).toBe(expectResponse.name);
    expect(response[0].quality).toBe(expectResponse.quality);
    expect(response[0].sellIn).toBe(expectResponse.sellIn);
    expect(response[0]).toEqual(expectResponse);
  });

  it("Should improve 'quality' twice because it is a Backstage Passes ", () => {
    const backstagePassesItem = {
      name: products.backstagePasses.name,
      sellIn: 10,
      quality: 10,
    };

    const itemRequest = new Item(
      backstagePassesItem.name,
      backstagePassesItem.sellIn,
      backstagePassesItem.quality
    );

    const gildedRose = new GildedRose([itemRequest]);
    const response = gildedRose.updateQuality();
    const expectResponse = {
      name: products.backstagePasses.name,
      sellIn: 9,
      quality: 12,
    };

    expect(response[0].name).toBe(expectResponse.name);
    expect(response[0].quality).toBe(expectResponse.quality);
    expect(response[0].sellIn).toBe(expectResponse.sellIn);
    expect(response[0]).toEqual(expectResponse);
  });

  it("Should improve 'quality' thrice because it is a Backstage Passes ", () => {
    const backstagePassesItem = {
      name: products.backstagePasses.name,
      sellIn: 4,
      quality: 10,
    };

    const itemRequest = new Item(
      backstagePassesItem.name,
      backstagePassesItem.sellIn,
      backstagePassesItem.quality
    );

    const gildedRose = new GildedRose([itemRequest]);
    const response = gildedRose.updateQuality();
    const expectResponse = {
      name: products.backstagePasses.name,
      sellIn: 3,
      quality: 13,
    };

    expect(response[0].name).toBe(expectResponse.name);
    expect(response[0].quality).toBe(expectResponse.quality);
    expect(response[0].sellIn).toBe(expectResponse.sellIn);
    expect(response[0]).toEqual(expectResponse);
  });

  it("Should decrease 'quality' to zero because sellIn is zero ", () => {
    const backstagePassesItem = {
      name: products.backstagePasses.name,
      sellIn: 0,
      quality: 10,
    };

    const itemRequest = new Item(
      backstagePassesItem.name,
      backstagePassesItem.sellIn,
      backstagePassesItem.quality
    );

    const gildedRose = new GildedRose([itemRequest]);
    const response = gildedRose.updateQuality();
    const expectResponse = {
      name: products.backstagePasses.name,
      sellIn: 0,
      quality: 0,
    };

    expect(response[0].name).toBe(expectResponse.name);
    expect(response[0].quality).toBe(expectResponse.quality);
    expect(response[0].sellIn).toBe(expectResponse.sellIn);
    expect(response[0]).toEqual(expectResponse);
  });

  it("Should decrease 'quality' twice because it is a Conjured item ", () => {
    const conjuredItem = {
      name: products.conjureds.name,
      sellIn: 10,
      quality: 10,
    };

    const itemRequest = new Item(
      conjuredItem.name,
      conjuredItem.sellIn,
      conjuredItem.quality
    );

    const gildedRose = new GildedRose([itemRequest]);
    const response = gildedRose.updateQuality();
    const expectResponse = {
      name: products.conjureds.name,
      sellIn: 9,
      quality: 8,
    };

    expect(response[0].name).toBe(expectResponse.name);
    expect(response[0].quality).toBe(expectResponse.quality);
    expect(response[0].sellIn).toBe(expectResponse.sellIn);
    expect(response[0]).toEqual(expectResponse);
  });

  it("Should do nothing because Sulfuras is a legendery item ", () => {
    const conjuredItem = {
      name: products.sulfuras.name,
      sellIn: 10,
      quality: 80,
    };

    const itemRequest = new Item(
      conjuredItem.name,
      conjuredItem.sellIn,
      conjuredItem.quality
    );

    const gildedRose = new GildedRose([itemRequest]);
    const response = gildedRose.updateQuality();
    const expectResponse = {
      name: products.sulfuras.name,
      sellIn: 9,
      quality: 80,
    };

    expect(response[0].name).toBe(expectResponse.name);
    expect(response[0].quality).toBe(expectResponse.quality);
    expect(response[0].sellIn).toBe(expectResponse.sellIn);
    expect(response[0]).toEqual(expectResponse);
  });
});
