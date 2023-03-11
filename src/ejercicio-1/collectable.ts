/**
 * Collectable interface to implements collections of items(array).
 */
export interface Collectable<T> {
  addItem(item: T): boolean;
  getItem(index: number): T;
  removeItem(index:number): T;
  getNumberOfItems(): number;
}