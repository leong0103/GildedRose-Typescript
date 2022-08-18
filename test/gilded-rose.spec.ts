import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('fixme');
    });

    it.only('experiment to see what the expected output is', function(){
        const gildedRose = new GildedRose([ new Item('foo', 0, 0), new Item('item2', 0, 0)]);
        const item1 = gildedRose.updateQuality();
        
        console.log(item3);

        expect(item3[0].name).to.equal('foo');
        expect(item3[0].sellIn).to.equal(-3);
    });
});
