import { Series } from "./series";
import { Films } from "./films";
import { Documentary } from "./documentary";
import { Streamable } from "./streamable";
import { Printable } from "./printable";
import { Collectable } from "./collectable";

/**
 * Abstract class that implements Streamable, Collectable and Printable interfaces. Represents a streaming video collection.
 */
export abstract class BasicStreamableCollection<T extends Series | Films | Documentary> implements Streamable<T>, Collectable<T>, Printable<T> {
  constructor(protected items: T[]) {   
  }
  /**
   * Get an array filter by year.
   * @param num number of the year to search.
   * @returns array of the results.
   */
  searchByYear(num: number): T[] {
    return this.items.filter((item) => item.getYear() === num);
  }
  /**
   * Get an array filter by name.
   * @param str string of the name to search.
   * @returns array of the results.
   */
  searchByName(str: string): T[] {
    return this.items.filter((item) => item.getName() === str);
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
   * Add an item to the collection.
   * @param newItem Object to include in the collection.
   * @returns true is the item was added.
   */
  addItem(newItem: T) {
    this.items.push(newItem);
    if (this.items[this.items.length - 1] === newItem) {
      return true;
    }
  }
  /**
   * Get an item according to the index.
   * @param index The index's item that will be returned.
   * @returns The selected item.
   */
  getItem(index: number): T {
    return this.items[index];
  }
  /**
   * Get the number of items in a collection.
   * @returns the number of items.
   */
  getNumberOfItems() {
    return this.items.length;
  }
  /**
   * Print the collection.
   */
  abstract print();
}