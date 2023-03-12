# Práctica 6 - Clases e interfaces genéricas. Principios SOLID
Esta práctica se basa en la realización de dos ejercicios relacionados con las clases e interfaces en TypeScript. Además se mostrará el ejercicio realizado en la hora de prácticas (PE101).
## Ejercicios de clase
### Ejercicio 1
El ejercicio propuesto en clase consiste en la creación de varias interfaces (_Printable_ y _Collectable_) que es implementada por la clase abstracta _PrintableCollection_, la cual a su vez es heredada por las clases _NumericPrintableCollection_ y _StringPrintableCollection_. Estas clases nos permiten crear una colección (array) de un tipo genérico, concretando el tipo en las dos subclases.
\
\
Las interfaces y clases mencionadas anteriormente son las siguientes:
\
\
_Printable_:
```TypeScript
/**
 * Printable interface implements one method: 
 */
export interface Printable<T> {
  print(): string;
}
```
_Collectable_:
```TypeScript
/**
 * Collectable interface to implements collections of items(array).
 */
export interface Collectable<T> {
  addItem(item: T): boolean;
  getItem(index: number): T;
  removeItem(index:number): T;
  getNumberOfItems(): number;
}
```
_PrintableCollection_:
```TypeScript
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
```
_NumericPrintableCollection_:
```TypeScript
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
```
_StringPrintableCollection_:
```TypeScript
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
```
La clase abstracta _PrintableCollection_ implementa una colección basada en un array que implementa una serie de métodos muy útiles a la hora de gestionar una colección:
* addItem() -> Añade un objeto a la colección pasado por parámetro.
* getItem() -> Devuelve un objeto de la colección según el índice pasado por parámetro.
* removeItem() -> Elimina un objeto de la colección según el índice pasado por parámetro.
* getNumberOfItems() -> Devuelve el número de objetos que componen la colección.
\
\
Se declara el método print() como abstracto ya que es obligatorio al implementar la interfaz _Printable_ y esta es implementada en las subclases, devolviendo en forma de cadena separadas por comas todos los elementos de la colección.
\
\
Se han llevado a acabo las pruebas correspondientes para comprobar el correcto funcionamiento del programa:
```
  print function tests from NumericPrintableCollection
    ✔ numCollection.print() returns '1, 2, 3'
    ✔ numCollection.print() returns '14, 201, 76'

  print function tests from StringPrintableCollection
    ✔ strCollection.print() returns 'pato, gato, rana'
    ✔ numCollection.print() returns 'primero, segundo, tercero, cuarto'

  getNumbersOfItems function tests
    ✔ numCollection.getNumberOfItems() returns 3
    ✔ strCollection2.getNumberOfItems() returns 4

  removeItem function tests
    ✔ numCollection2.removeItem(1) returns 201
    ✔ strCollection2.removeItem(2) returns tercero

  getItem function tests
    ✔ numCollection2.getItem(0) returns 14
    ✔ strollection.getItem(1) returns 'gato'

  addItem function tests
    ✔ numCollection2.addItem(num) returns true
    ✔ strCollection2.addItem(str) returns true
```
Además en esta práctica hemos comprobado el cubrimiento del código mediante Instanbul, obteniendo los siguientes resultados:
```
File                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------------|---------|----------|---------|---------|-------------------
 ej-clase                       |   93.93 |    83.33 |     100 |   93.54 |                   
  numericprintablecollection.ts |     100 |      100 |     100 |     100 |                   
  printablecollection.ts        |   84.61 |       75 |     100 |   84.61 | 29,44             
  stringprintablecollection.ts  |     100 |      100 |     100 |     100 |                   
```
## Ejercicios guion
### Ejercicio 1 - DSIflix
Este ejercicio consiste en diseñar una estructura de datos mediantes clases e interfaces genéricas que intente emular en cierta parte una plataforma de vídeo en streaming, donde se puedan ver películas, series y documentales.
\
\
Lo primero que debemos crear es una interfaz genérica llamada _Streamable_, pero con el fin de cumplir el cuatro principio SOLID, _Interface segregation_, he decidio dividirlo en las siguientes tres interfaces:
\
\
_Streamable_:
```TypeScript
/**
 * Streamable interface implements searchs methods.
 */
export interface Streamable<T> {
  searchByYear(num: number): T[];
  searchByName(str: string): T[];
}
```
_Printable_:
```TypeScript
/**
 * Printable interface implements one method: 
 */
export interface Printable<T> {
  print(): string;
}
```
_Collectable_:
```TypeScript
/**
 * Collectable interface to implements collections of items(array).
 */
export interface Collectable<T> {
  addItem(item: T): boolean;
  getItem(index: number): T;
  removeItem(index:number): T;
  getNumberOfItems(): number;
}
```
Posteriormente creamos la clase abstracta _basicstreamblecollection_ que implementa los métodos de las interfaces, menos print() que es declarada e implementada en las subclases, siendo tres subclases, una por cada uno de los tipos de contenidos de la plataforma:
\
\
_Series_:
```TypeScript
/**
 * Series data structure.
 */
export class Series {
  private seasons: number;
  private year: number;
  private name: string;
  /**
   * Series' constructor
   * @param year when the serie starts.
   * @param name of the serie.
   * @param seasons number of seasons that compose the serie.
   */
  constructor(year: number, name: string, seasons: number){    
    this.year = year;
    this.name = name;
    this.seasons = seasons;
  }
  /**
   * Get the series' year.
   * @returns year in a number.
   */
  getYear(): number {
    return this.year;
  }
  /**
   * Get the series' name.
   * @returns series' name in a string.
   */
  getName(): string {
    return this.name;
  }  
  /**
   * Get the number of seasons.
   * @returns number of seasons.
   */
  getSeasons(): number {
    return this.seasons;
  }  
}
```
_Films_:
```TypeScript
/**
 * Films data structure.
 */
export class Films {
  private duration: number;
  private year: number;
  private name: string;
  /**
   * Films' constructor
   * @param year when the film released.
   * @param name film's name.
   * @param duration film's duration.
   */
  constructor(year: number, name: string, duration: number){
    this.year = year;
    this.name = name;
    this.duration = duration;
  }
  /**
   * Get the film's realease year.
   * @returns year in a number.
   */
  getYear(): number {
    return this.year;
  }
  /**
   * Get the film's name.
   * @returns the name in a string.
   */
  getName(): string {
    return this.name;
  }
  /**
   * Get the film's duration.
   * @returns film's duration in a number.
   */
  getDuration(): number {
    return this.duration;
  }
}
```
_Documentary_:
```TypeScript
/**
 * Documentary data structure.
 */
export class Documentary {
  private gender: string;
  private year: number;
  private name: string;
  /**
   * Documentary's data structure
   * @param year Documentary release year.
   * @param name Documentary's name.
   * @param gender Documentary's gender.
   */
  constructor(year: number, name: string, gender: string){
    this.year = year;
    this.name = name;
    this.gender = gender;
  }
  /**
   * Get the Documentary release year.
   * @returns the release year in a number.
   */
  getYear(): number {
    return this.year;
  }
  /**
   * Get the Documentary's name.
   * @returns the documentary's name in a string.
   */
  getName(): string {
    return this.name;
  }
  /**
   * Get the Documentary's gender.
   * @returns the documentary's gender in a string.
   */
  getGender(): string {
    return this.gender;
  }
}
```
A su vez se ha creado una clase con cada una de los tipos mencionados anteriormente al igual que se hizo en el ejercicio del aula con las clases _Numeric_ y _String_ _PrintableCollection_.
\
\
_SeriesCollection_:
```TypeScript
/**
 * Series collection data structure.
 */
export class SeriesCollection extends BasicStreamableCollection<Series> {
  constructor(items: Series[]){
    super(items);
  }
  /**
   * Print series collection. 
   * @returns string with the data of each serie in the collection.
   */
  print() {
    let str = "";
    for (let i = 0; i < this.getNumberOfItems(); i++) {
      //console.log(`${this.items[i].getName()}, ${this.items[i].getYear()}, ${this.items[i].getSeasons()} seasons.`);
      str += `${this.items[i].getName()}, ${this.items[i].getYear()}, ${this.items[i].getSeasons()} seasons. `;
    }
    return str;
  }
  /**
   * Get a series array filter by duration.
   * @param num number of the duration in minutes to search.
   * @returns series array with the results.
   */
  searchBySeasons(num: number): Series[] {
    return this.items.filter((item) => item.getSeasons() === num);
  }  
}
```
_FilmsCollection_:
```TypeScript
/**
 * Flms collection data structure.
 */
export class FilmsCollection extends BasicStreamableCollection<Films> {
  constructor(items: Films[]){
    super(items);
  }
  /**
   * Print films collection.
   * @returns string  with the data of each film in the collection.
   */
  print() {
    let str = "";
    for (let i = 0; i < this.getNumberOfItems(); i++) {
      //console.log(`"${this.items[i].getName()}", ${this.items[i].getYear()}, ${this.items[i].getDuration()} minutes.`);
      str += `${this.items[i].getName()}, ${this.items[i].getYear()}, ${this.items[i].getDuration()} minutes. `;
    }
    return str;
  }
  /**
   * Get a film array filter by duration.
   * @param num number of the duration in minutes to search.
   * @returns films array with the results.
   */
  searchByDuration(num: number): Films[] {
    return this.items.filter((item) => item.getDuration() === num);
  }  
}
```
_DocumentaryCollection_:
```TypeScript
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
```
Como podemos ver en las tres clases anteriores, además del método _print()_ que debemos de implementar, se ha implementado un método de búsqueda exclusivo de cada uno de los tipos de vídeos, en base a un atributo asginado a dicha clase:
* Serie -> searchBySeasons();
* Película -> searchByDuration();
* Documental -> searchByGender();
\
\
Por último vemos la clase abstracta de la cual heredan las tres anteriores, con los correspondientes métodos obligatorios de las interfaces. Para que algunos de los métodos funcione correctamente he tenido que indicar que el tipo genérico solamente puede ser una serie, película o documental, tal y como se comentó en clase con el ejemplo del método print().
\
\
_BasicStreamableCollection_:
```TypeScript
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
```
Para corroborar que todos los métodos de las clases mostradas anteriormente, así como los distintos métodos de búsqueda dentro de cada una de las colecciones se han realizado unas serie de test con _mocha_ y _chai_, siendo estas las siguientes:
```
  print() function tests
    ✔ streamSeriesCollection.print() returns 'Detective Conan, 1996, 32 seasons. Castle, 2009, 8 seasons. '
    ✔ streamFilmsCollection.print() returns 'Senderos de Gloria, 1957, 86 minutes. Octubre, 1927, 115 minutes. La ola, 2008, 108 minutes. '
    ✔ streamDocumentaryCollection.print() returns 'Rumores de guerra, 2003, Gender: Militar. El triunfo de la voluntad, 1935, Gender: Militar. El 7 de diciembre, 1943, Gender: Militar. Cantábrico, 2017, Gender: Naturaleza. '

  getNumberOfItems() function test from basicsstreamableCollection
    ✔ streamSeriesCollection.getNumberOfItems() return 2
    ✔ streamFilmsCollection.getNumberOfItems() return 3
    ✔ streamDocumentaryCollection.getNumberOfItems() return 4

  searchByName() function test
    ✔ streamSeriesCollection.searchByName('Detective Conan') return detectiveConan
    ✔ streamDocumentaryCollection.searchByName('Cantábrico') return cantabrico

  searchByYear() function test
    ✔ streamSeriesCollection.searchByYear(1926) return detectiveConan
    ✔ streamDocumentaryCollection.searchByYear(1927) return octubre

  searchBySeasons() function test from streamSeriesCollection
    ✔ streamSeriesCollection.searchBySeasons(32) return detectiveConan

  searchByDuration() function test from streamFilmsCollection
    ✔ streamFilmsCollection.searchByDuration(115) return octubre

  searchByGender() function test from streamDocumentaryCollection
    ✔ streamDocumentaryCollection.searchByGender('Militar') return detectiveConan

  getItem() function test
    ✔ streamSeriesCollection.getItem(0) return detectiveConan
    ✔ streamDocumentaryCollection.getItem(1) return octubre

  addItem() function test
    ✔ streamSeriesCollection.addItem(film1) return true
    ✔ streamDocumentaryCollection.addItem(serie1) return true

  removeItem() function test
    ✔ streamSeriesCollection.removeItem(0) return dc
    ✔ streamDocumentaryCollection.removedItem(1) return oc
```
En cuanto al encubrimiento con Instanbul el resultado es el siguiente:
```
File                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------------|---------|----------|---------|---------|-------------------
 ejercicio-1                    |    98.5 |    66.66 |     100 |    98.3 |                   
  basicstreamablecollection.ts  |   93.75 |    66.66 |     100 |   92.85 | 32                
  documentary.ts                |     100 |      100 |     100 |     100 |                   
  documentarycollection.ts      |     100 |      100 |     100 |     100 |                   
  films.ts                      |     100 |      100 |     100 |     100 |                   
  filmscollection.ts            |     100 |      100 |     100 |     100 |                   
  series.ts                     |     100 |      100 |     100 |     100 |                   
  seriescollection.ts           |     100 |      100 |     100 |     100 |                   
--------------------------------|---------|----------|---------|---------|-------------------
```
### Ejercicio 2 - Implementación de una lista y sus operaciones
Este ejercicio consiste en implementar una clase genérica que conforme una lista de elementos de cualquier tipo, así como una serie de operaciones.
\
\
Lo primero que he hecho ha sido crear una interfaz genérica con todos los métodos que nuestra clase debe implementar.
\
\
_Listable_:
```TypeScript
/**
 * Interface with the methods we need in a class that implements lists.
 */
export interface Listable<T> {
  append(list: List<T>): List<T>;
  concatenate(...list: List<T>[]): List<T>;
  filter(callback): List<T>;
  length(): number;
  map(callback): List<T>;
  reduce(initialValor, accumulator, callback);
  reverse(): List<T>;
  forEach(callback);
}
```
A continuación realicé una clase genérica que implementa dicha interfaz y desarrollé cada uno de los métodos según se describen en el guion de la práctica.
\
\
_List_:
```TypeScript
/**
 * Generic class that implements lists and some of the most importants methods accoding to the interface "Listable".
 */
export class List<T> implements Listable<T> {
  constructor(private list: T[]) {}
  /**
   * The second list elements add at the end of first list.
   * @param list1 First list.
   * @param list2 Second list.
   * @returns The first list after the addition.
   */
  append(list: List<T>) {
    for (let i = 0; i < list.length(); i++) {
      this.list[this.length()] = list.list[i];
    }
    return this;
  }
  /**
   * Combine all elements in one list.
   * @param list Variable number of lists.
   * @returns List with all elements.
   */
  concatenate(...list: List<T>[]) {
    for (let i = 0; i < list.length; i++) {
      this.append(list[i]);
    }
    return this;
  }

  /**
   * Filter a list accondig to a callback.
   * @param callback Function we use to filter the list.
   * @returns the filtered list.
   */
  filter(callback) {
    const filteredList = new List([]);
    let j = 0;
    for (let i = 0; i < this.length(); i++) {
      if (callback(this.list[i])) {
        filteredList.list[j] = this.list[i];
        j++;
      }
    }
    return filteredList;
  }

  /**
   * Get the lits's length.
   * @returns the list's length.
   */
  length() {
    let i = 0;
    let result = 1;
    while (this.list[i + 1] != undefined) {
      result++;
      i++;
    }
    return result;
  }

  /**
   * Modify the list according to a callback.
   * @param callback The function that modify each element of the list.
   * @returns The modified list.
   */
  map(callback) {
    for (let i = 0; i < this.length(); i++) {
      this.list[i] = callback(this.list[i]);
    }
    return this;
  }

  /**
   * Reduce the whole list to una valor, according to a callback.
   * @param initialValor Initial valor of the accumulator.
   * @param accumulator Accumulator where keep the elements.
   * @param callback Function that apply the accumulator.
   * @returns The accumulator valor.
   */
  reduce(initialValor, accumulator, callback) {
    accumulator = initialValor;
    for (let i = 0; i < this.length(); i++) {
      accumulator = callback(accumulator, this.list[i]);
    }
    return accumulator;
  }

  /**
   * Reverse the order of the list.
   * @returns The reversed list.
   */
  reverse() {
    const reversedList = new List([]);
    let j = 0;
    for(let i = 1; i <= this.length(); i++) {
      reversedList.list[j] = this.list[this.length()- i];
      j++;
    }
    return reversedList;
  }

  /**
   * Call a function for each list's element.
   * @param callback Function that is called.
   */
  forEach(callback) {
    for(let i = 0; i < this.length(); i++) {
      callback(this.list[i]);
    }
    return true;
  }
}
```
Como podemos observar todo se sustenta en un atributo privado de tipo del tipo genérico T que es un array, al igual que ocurría en los dos ejercicios anteriores. Una vez hemos implementado cada uno de los métodos necesarios, realizamos las pruebas con _mocha_ y _chai_, esto se ha realizado con más de un tipo de dato, para poder comprobar de forma satisfactoria la generalidad de la clase diseñada.
\
\
Las pruebas son las siguientes:
```
  length() function tests
    ✔ test4.length() returns 5
    ✔ test.length() returns 3

  append() function tests
    ✔ test2.append(test3) returns ['d', 'e', 'f', 'g', 'h', 'i']
    ✔ test6.append(test7) returns [1, 2, 3, 4, 5, 6]

  concatenate() function tests
    ✔ test5.concatenate(test11) returns [6, 7, 8, 9, 10]
    ✔ test8.concatenate(test9, test10) returns ['a', 'b', 'c', 'd', 'e', 'f']

  filter() function tests
    ✔ test8.filter() returns ['d', 'e', 'f']
    ✔ test4.filter() returns [4, 5]

  map() function tests
    ✔ test13.map() returns ['bz', 'cz', 'dz']
    ✔ test12.map() returns [1, 4, 9]

  reduce() function tests
    ✔ test13.reduce() returns 'caballo'
    ✔ test4.reduce() returns 15

  reverse() function tests
    ✔ test14.reverse() returns ['caballo', 'pato', 'cerdo', 'vaca']
    ✔ test15.reverse() returns [35, 12, 74]

  forEach() function tests
    ✔ test14.forEach() returns true
    ✔ test12.forEach() returns true
```
Al igual que en los ejercicios anteriores, también se ha llevado a cabo el encubrimiento con Istanbul:
```
--------------------------------|---------|----------|---------|---------|-------------------
File                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------------|---------|----------|---------|---------|-------------------
 ejercicio-2                    |     100 |      100 |     100 |     100 |                   
  list.ts                       |     100 |      100 |     100 |     100 |                   
--------------------------------|---------|----------|---------|---------|-------------------
```
### Ejercicio 3 - Ampliando la biblioteca musical
Este ejercicio consiste en una modificación de la biblioteca musical de la práctica anterior. En este informe nos centraremos en los cambios realizados.
\
\
Lo primero es la creación de una entidad single y discos:
\
\
_Single_:
```TypeScript
/**
 * Single type.
 */
export class Single {
  name: string;
  year: number;
  private single: Song;
  /**
   * 
   * @param name Disc's name string.
   * @param year Year when the disc was launched.
   * @param single A song.
   */
  constructor(name, year, songs) {
    this.name = name;
    this.year = year;
    this.single = songs;
  }
  get single_() {
    return this.single
  }
}
```
_Disc_:
```TypeScript 
/**
 * Disc type.
 * @param name Disc's name string.
 * @param year Year when the disc was launched.
 * @param disc Songs array which conform the disc.
 * @function disc_ Return the song's array.
 * @function discNumber Return the total number of songs.
 * @function discDuration Return the disc duration.
 * @function reproductions Return the total disc's reproductions.
 */
export class Disc {
  name: string;
  year: number;
  disc: Song[];
  constructor(name, year, songs) {
    this.name = name;
    this.year = year;
    this.disc = songs;
  }

  get disc_() {
    return this.disc;
  }

  discNumber() {
    return this.disc.length;
  }
  reproductions() {
    let sum = 0;
    for (let i = 0; i < this.discNumber(); i++) {
      sum += this.disc[i].reproductions;
    }
    return sum;
  }
  discDuration() {
    let sum = 0;
    for (let i = 0; i < this.discNumber(); i++) {
      sum += this.disc[i].duration;
    }
    return sum;
  }
}
```
Convertimos la clase _discography_ en una clase genérica:
```TypeScript
/**
 * Discography.
 */
export class Discography<T extends Disc | Single> {
  constructor(private discography: T[]){
  }
}
```
Como podemos ver ahora la discografía es un array de discos o the singles.
\
\
Para comprobar su correcto funcionamiento observamos que se puede crear correctamente todos los tipos de datos:
```TypeScript
const llueve = new Song("Llueve", 240, "Pop-rock", false, 3900000);
const somos = new Song("Somos", 226, "Rock", false, 1500000);
const autofotos = new Song("Autofotos", 209, "Pop-rock", false, 18000000);

const volvamosEmpezar = new Disc("Volvamos a Empezar", 2010, [llueve, autofotos]);
const singleSomos = new Single("Somos", 2009, [somos]);

const melendiDisc = new Discography([volvamosEmpezar, singleSomos]);

const melendi = new Artist("Melendi", 5400000, [melendiDisc]);
```
Como podemos ver en el código anterior se ha logrado, a partir de las canciones se han creado discos (varias canciones) y un single(única canción) y se ha podido crear una discografía a partir tanto de discos como de singles y finalmente un artista haciendo uno de dicha discografía.
## Conclusión
Tras la realzación de estos ejercicios hemos podido comprender la utilidad y el funcionamiento de las clases e interfaces genéricas, así como asentar los conocimientos sobre clases e interfaces de la pasada práctica, especialmente en el primero de los ejercicios.
\
\
En el segundo ejercicio también me ha ayudado a comprender el funcionamiento de métodos que utilizamos frecuentemente. Por último en esta práctica también hemos puesto a prueba los principios SOLID, principalmente destacaría el uso del cuatro principio, _Interface segregation_.
## Bibliografía
Para la realización de esta práctica se han consultado las siguientes fuentes bibliográficas:
[Guion de la práctica 6](https://ull-esit-inf-dsi-2223.github.io/prct06-generics-solid/)
[Apuntes principios SOLID](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/typescript-solid.html)
[Apuntes de clases e interfaces genéricas](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/typescript-generics.html)
[Documentacion de Array en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)