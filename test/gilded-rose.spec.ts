import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should increase Aged Brie Quality after sellIn date passes when sellIn<0', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', -5, 0)]);
        const items = gildedRose.updateQuality();
        // console.log(items);
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(-6);
        expect(items[0].quality).to.equal(2); // if sellIn date <0
    });

    it('should increase Aged Brie Quality after sellIn date passes when sellIn>0', function() {
        const gildedRose = new GildedRose([new Item('Aged Brie', 2, 0)]);
        const items = gildedRose.updateQuality();
        //console.log(items);
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(1); //if sellIn date >0
    });

    it('should increase Aged Brie Quality after sellIn date passes when sellIn=0', function() {
        const gildedRose = new GildedRose([new Item('Aged Brie', 1, 0) ]);
        const items = gildedRose.updateQuality();
        //console.log(items);
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(1); //if sellIn date =0
    });

    it('Backstage passes to a TAFKAL80ETC concert Quality increases by 1 when there are more than 10 days', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)]);
        const items = gildedRose.updateQuality();
        // console.log(items);
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(10);
        expect(items[0].quality).to.equal(11); 
    });

    it('Backstage passes to a TAFKAL80ETC concert Quality increases by 2 when there are 10 days or less', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 9, 10)]);
        const items = gildedRose.updateQuality();
        // console.log(items);
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(8);
        expect(items[0].quality).to.equal(12); 
    });

    it('Backstage passes to a TAFKAL80ETC concert Quality increases by 3 when there are 5 days or less', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)]);
        const items = gildedRose.updateQuality();
        // console.log(items);
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(13); 
    });

    it('Backstage passes to a TAFKAL80ETC concert Quality drop to 0 after concert', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]);
        const items = gildedRose.updateQuality();
        // console.log(items);
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0); 
    });

    it('Sulfuras, Hand of Ragnaros never sold or decrease in Quality', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 10, 90)]);
        const items = gildedRose.updateQuality();
        // console.log(items);
        
        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[0].sellIn).to.equal(10);
        expect(items[0].quality).to.equal(90); 
    });

    // it('for all items, Quality is never negative', function() {
    //     const gildedRose = new GildedRose([ new Item('Conjured', 0, -1),]);
    //     const items = gildedRose.updateQuality();
    //     console.log(items);
        
    // //     expect(items[0].name).to.equal('Sulfuras');
    // //     expect(items[0].sellIn).to.equal(10);
    // //     expect(items[0].quality).to.equal(90); 
    // // });
    

    // 1. Aged Brie    Selling < 0, Quality + 2, always keep increase
    // 2. Sulfuras, Hand of Ragnaros       always same quality value
    // 3. Backstage passes to a TAFKAL80ETC concert      Q add 2, Selling <= 10    Q add 3, Selling <= 5
    // 
    // Item have to add in the program
    // 4. Conjured    Selling - 1,   Quality - 2
});

