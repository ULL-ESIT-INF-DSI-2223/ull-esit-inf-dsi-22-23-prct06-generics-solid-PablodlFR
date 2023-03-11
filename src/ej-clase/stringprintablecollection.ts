import { PrintableCollection } from "./printablecollection";

/**
 * String collection (array) that extends from PrintableCollection.
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  constructor(items: string[]){
    super(items);
  }

  /**
   * Print the strings collection (array).
   * @returns String with the strings separated by commas.
   */
  print(): string {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      if ( i < this.items.length - 1) {
        str += this.items[i] + ", ";   
      } else {
        str += this.items[i];   
      }         
    }
    return str;
  }
}