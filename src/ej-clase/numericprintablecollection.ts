import { PrintableCollection } from "./printablecollection";

/**
 * Numeric collection (array) that extends from PrintableCollection.
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  constructor(items: number[]){
    super(items);
  }

  /**
   * Print the numeric collection (array).
   * @returns String with the numbers separated by commas.
   */
  print(): string {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      if ( i < this.items.length - 1) {
        str += this.items[i].toString() + ", ";   
      } else {
        str += this.items[i].toString();   
      }         
    }
    return str;
  }
}
