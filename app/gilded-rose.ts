export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].quality > 0 && this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1
        
            } else {
                if (this.items[i].quality < 50  ) {
                    this.items[i].quality = this.items[i].quality + 1;
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].sellIn < 11) {
                        this.items[i].quality = this.items[i].quality + 1;
                           
                    }
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].sellIn < 6) {
                            this.items[i].quality = this.items[i].quality + 1;
                         
                    }
                }
            }
            
    
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                    //if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].quality > 0) {
                            this.items[i].quality = this.items[i].quality - 1
                        }
                        else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                        }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }

        return this.items;
    }
}


    // 1. Aged Brie    Selling < 0, Quality + 2, always keep increase

    // 2. Sulfuras, Hand of Ragnaros       always same quality value

    // 3. Backstage passes to a TAFKAL80ETC concert     
    //  Q add 2, Selling <= 10    Q add 3, Selling <= 5
    // 
    // Item have to add in the program
    // 4. Conjured    Selling - 1,   Quality - 2