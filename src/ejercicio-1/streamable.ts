export interface Streamable<T> {
  // addItem(newItem: T): void;
  // getItem(index: number): T;
  // getNumberOfItems(): number;
  // getYear(): number;
  // getName(): string;
  searchByYear(num: number): T[];
  searchByName(str: string): T[];
}
