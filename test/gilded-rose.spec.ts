import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should increase Aged Brie Quality after sellIn date passes when sellIn<0', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', -5, 0)]);
        const items = gildedRose.updateQuality();
        //console.log(items);
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

    it('should always keep quality of Sulfuras equal to 80', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
        const items = gildedRose.updateQuality();
        
        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(80); 
    });

    

})