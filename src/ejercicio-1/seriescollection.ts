import { BasicStreamableCollection } from "./basicstreamablecollection";
import { Series } from "./series";

export class SeriesCollection extends BasicStreamableCollection<Series> {
  constructor(items: Series[]){
    super(items);
  }

  print() {
    let str = "";
    for (let i = 0; i < this.getNumberOfItems(); i++) {
      //console.log(`${this.items[i].getName()}, ${this.items[i].getYear()}, ${this.items[i].getSeasons()} seasons.`);
      str += `${this.items[i].getName()}, ${this.items[i].getYear()}, ${this.items[i].getSeasons()} seasons. `;
    }
    return str;
  }

  searchBySeasons(num: number): Series[] {
    return this.items.filter((item) => item.getSeasons() === num);
  }  
}