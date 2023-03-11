import { BasicStreamableCollection } from "./basicstreamablecollection";
import { Films } from "./films";

/**
 * Flms collection data structure.
 */
export class FilmsCollection extends BasicStreamableCollection<Films> {
  constructor(items: Films[]){
    super(items);
  }
  /**
   * Print films collection.
   * @returns string with the data of each film in the collection.
   */
  print() {
    let str = "";
    for (let i = 0; i < this.getNumberOfItems(); i++) {
      //console.log(`"${this.items[i].getName()}", ${this.items[i].getYear()}, ${this.items[i].getDuration()} minutes.`);
      str += `${this.items[i].getName()}, ${this.items[i].getYear()}, ${this.items[i].getDuration()} minutes. `;
    }
    return str;
  }
  /**
   * Get a film array filter by duration.
   * @param num number of the duration in minutes to search.
   * @returns films array with the results.
   */
  searchByDuration(num: number): Films[] {
    return this.items.filter((item) => item.getDuration() === num);
  }  
}
