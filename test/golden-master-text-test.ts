import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';


describe('Gilded Rose', function () {

    it('should decrease sellIn and quality', function() {

        const gildedRose = new GildedRose([ new Item('item1', 0, 1)]);
        let items = gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        
        expect(items[0].name).to.equal('item1');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0); 
       
    });

});
