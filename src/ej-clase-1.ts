/**
 * Collectable interface to implements collections of items(array).
 */
export interface Collectable<T> {
  addItem(item: T): boolean;
  getItem(index: number): T;
  removeItem(index:number): T;
  getNumberOfItems(): number;
}
/**
 * Printable interface implements one method: 
 */
export interface Printable<T> {
  print(): string;
}

/**
 * Abstract class that implements Collectable and Printable interfaces. Represents an items collections.
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable<T> {
  constructor(protected items: T[]) {
  }

  /**
   * Add item to the collection (array).
   * @param newItem Item to be added to the collection.
   */
  addItem(newItem: T){
    this.items.push(newItem);
    return true
  }

  /**
  * Get item from the collection (array).
  * @param index The index's item that will be returned.
  * @returns The selected item.
  */
  getItem(index: number): T {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    } else {
      console.log("El índice no se encuentra dentro del array.");
    }
  }

  /**
   * Remove item from the collection (array).
   * @param index The index's item that will be removes.
   * @returns The removed item.
   */
  removeItem(index: number): T {
    if (index >= 0 && index < this.items.length) {
      const removed = this.items[index];
      this.items.splice(index, 1);
      return removed;
    } else {
      console.log("El índice no se encuentra dentro del array.");
    }

  }

  /**
   * Get the numbers of items from the collection (array).
   * @returns The number of items.
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  /**
   * Print the collection (array).
   */
  abstract print(): string;
}

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

const numCollection = new NumericPrintableCollection([1, 2, 3]);
console.log(numCollection.print());

const stringCollection = new StringPrintableCollection(["pato", "gato", "rana"]);
console.log(stringCollection.print());