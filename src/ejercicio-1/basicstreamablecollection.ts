import { Series } from "./series";
import { Films } from "./films";
import { Documentary } from "./documentary";
import { Streamable } from "./streamable";
import { Printable } from "./printable";
import { Collectable } from "./collectable";


export abstract class BasicStreamableCollection<T extends Series | Films | Documentary> implements Streamable<T>, Collectable<T>, Printable<T> {
  constructor(protected items: T[]) {   
  }

  searchByYear(num: number): T[] {
    return this.items.filter((item) => item.getYear() === num);
  }

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

  addItem(newItem: T) {
    this.items.push(newItem);
    if (this.items[this.items.length - 1] === newItem) {
      return true;
    }
  }
  getItem(index: number): T {
    return this.items[index];
  }
  getNumberOfItems() {
    return this.items.length;
  }
  abstract print();
}