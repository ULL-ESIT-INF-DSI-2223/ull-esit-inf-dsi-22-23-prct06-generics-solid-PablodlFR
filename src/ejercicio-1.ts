interface Streamable<T> {
  // year: number;
  // name: string;
  addItem(newItem: T): void;
  getItem(index: number): T;
  getNumberOfItems(): number;
}

abstract class BasicStreamableCollection<T> implements Streamable<T> {
  // year: number;
  // name: string;
  constructor(protected items: T[]) {   
    // this.year = year;
    // this.name = name;   
  }

  addItem(newItem: T){
    this.items.push(newItem);
  }
  getItem(index: number): T{
    return this.items[index];
  }
  getNumberOfItems() {
    return this.items.length;
  }
  print() {
    this.items.forEach(element => console.log(element));
  }
}

class Series {
  seasons: number;
  year: number;
  name: string;
  constructor(year: number, name: string){    
    this.year = year;
    this.name = name;
  }
}

class Films {
  duration: number;
  year: number;
  name: string;
  constructor(year: number, name: string){
    this.year = year;
    this.name = name;
  }
}

class SeriesCollection extends BasicStreamableCollection<Series> {
  constructor(items: Series[]){
    super(items);
  }
}

class FilmsCollection extends BasicStreamableCollection<Films> {

  constructor(items: Films[]){
    super(items);
  }
}

const streamSeriesCollection = new SeriesCollection([
  new Series(1923, "prueba"),
  new Series(1921, "prueba2")
]);

const streamFilmsCollection = new FilmsCollection([
  new Films(2001, "prueba"),
  new Films(2002, "prueba2")
])

//console.log();
streamSeriesCollection.print()
streamFilmsCollection.print();
