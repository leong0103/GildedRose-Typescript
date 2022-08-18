import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should increase Aged Brie Quality after sellIn date passes', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', -5, 0),new Item('Aged Brie', 2, 0),new Item('Aged Brie', 1, 0) ]);
        const items = gildedRose.updateQuality();
        //console.log(items);
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(-6);
        expect(items[0].quality).to.equal(2); // if sellIn date <0

        expect(items[1].name).to.equal('Aged Brie');
        expect(items[1].sellIn).to.equal(1);
        expect(items[1].quality).to.equal(1); //if sellIn date >0

        expect(items[2].name).to.equal('Aged Brie');
        expect(items[2].sellIn).to.equal(0);
        expect(items[2].quality).to.equal(1); //if sellIn date =0
    });

    it.only('experiment to see what the expected output is', function(){
        const gildedRose = new GildedRose([ new Item('foo', 0, 0), new Item('item2', 0, 0)]);
        const item1 = gildedRose.updateQuality();
        
        console.log(item3);

        expect(item3[0].name).to.equal('foo');
        expect(item3[0].sellIn).to.equal(-3);
    });
});
