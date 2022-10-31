import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should increase Aged Brie Quality after sellIn date passes when sellIn<0', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', -5, 0)]);
        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(-6);
        expect(items[0].quality).to.equal(2);
    });

    it('should increase Aged Brie Quality after sellIn date passes when sellIn>0', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 2, 0)]);
        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(1);
    });

    it('should increase Aged Brie Quality after sellIn date passes when sellIn=0', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 1, 0)]);
        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(1);
    });

    it('Backstage passes to a TAFKAL80ETC concert Quality increases by 1 when there are more than 10 days', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)]);
        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(10);
        expect(items[0].quality).to.equal(11);
    });

    it('Backstage passes to a TAFKAL80ETC concert Quality increases by 2 when there are 10 days or less', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 9, 10)]);
        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(8);
        expect(items[0].quality).to.equal(12);
    });

    it('Backstage passes to a TAFKAL80ETC concert Quality increases by 3 when there are 5 days or less', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)]);
        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(13);
    });

    it('Backstage passes to a TAFKAL80ETC concert Quality drop to 0 after concert', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]);
        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });

    it('Sulfuras, Hand of Ragnaros never sold or decrease in Quality', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 90)]);
        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[0].sellIn).to.equal(10);
        expect(items[0].quality).to.equal(90);
    });

    it('all items no more than Qulity in 50', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 9, 50), new Item('Backstage passes to a TAFKAL80ETC concert', 3, 50)]);
        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(8);
        expect(items[0].quality).to.equal(50);

        expect(items[1].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[1].sellIn).to.equal(2);
        expect(items[1].quality).to.equal(50);
    });



    it('for all items, Quality is never negative', function () {
        const gildedRose = new GildedRose([new Item('Conjured', 0, 1),]);
        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Conjured');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(1);
    });

    it('Conjured degrade in Quality twice as fast as normal items', function () {
        const gildedRose = new GildedRose([new Item('Conjured', 5, 5),]);
        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Conjured');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(3);
    });

});
