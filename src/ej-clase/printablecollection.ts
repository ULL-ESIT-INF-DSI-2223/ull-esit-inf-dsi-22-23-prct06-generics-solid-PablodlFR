import { Printable } from "../ej-clase/printable";
import { Collectable } from "./collectable";

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