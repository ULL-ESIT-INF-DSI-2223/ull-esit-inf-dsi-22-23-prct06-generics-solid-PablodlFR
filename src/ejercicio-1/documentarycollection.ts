import { BasicStreamableCollection } from "./basicstreamablecollection";
import { Documentary } from "./documentary";

/**
 * Documentary collection data structure.
 */
export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
  constructor(items: Documentary[]){
    super(items);
  }
/**
 * Print documentary collection.
 * @returns String with the data of each documentary in the collection.
 */
  print() {
    let str = "";
    for (let i = 0; i < this.getNumberOfItems(); i++) {
      //console.log(`"${this.items[i].getName()}", ${this.items[i].getYear()}, Gender: ${this.items[i].getGender()}`);
      str += `${this.items[i].getName()}, ${this.items[i].getYear()}, Gender: ${this.items[i].getGender()}. `
    }
    return str;
  }
/**
 * Get a documentary array filter by gender.
 * @param str string of the gender to search.
 * @returns documentary array with the results.
 */
  searchByGender(str: string): Documentary[] {
    return this.items.filter((item) => item.getGender() === str);
  }  
}