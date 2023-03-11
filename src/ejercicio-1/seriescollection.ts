import { BasicStreamableCollection } from "./basicstreamablecollection";
import { Series } from "./series";

/**
 * Series collection data structure.
 */
export class SeriesCollection extends BasicStreamableCollection<Series> {
  constructor(items: Series[]){
    super(items);
  }
  /**
   * Print series collection. 
   * @returns string with the data of each serie in the collection.
   */
  print() {
    let str = "";
    for (let i = 0; i < this.getNumberOfItems(); i++) {
      //console.log(`${this.items[i].getName()}, ${this.items[i].getYear()}, ${this.items[i].getSeasons()} seasons.`);
      str += `${this.items[i].getName()}, ${this.items[i].getYear()}, ${this.items[i].getSeasons()} seasons. `;
    }
    return str;
  }
  /**
   * Get a series array filter by duration.
   * @param num number of the duration in minutes to search.
   * @returns series array with the results.
   */
  searchBySeasons(num: number): Series[] {
    return this.items.filter((item) => item.getSeasons() === num);
  }  
}