import { Documentary } from "./documentary";
import { Series } from "./series";
import { Films } from "./films";
import { SeriesCollection } from "./seriescollection";
import { FilmsCollection } from "./filmscollection";
import { DocumentaryCollection } from "./documentarycollection";

const streamSeriesCollection = new SeriesCollection([
  new Series(1923, "prueba3", 4),
  new Series(1921, "prueba2", 5)
]);

const streamFilmsCollection = new FilmsCollection([
  new Films(2001, "prueba", 123),
  new Films(2002, "prueba2", 96)
]);

const streamDocumentaryCollection = new DocumentaryCollection([
  new Documentary(1972, "nombre", "Militar"),
  new Documentary(1975, "nombre1", "Militar"),

]);

streamSeriesCollection.print()
streamFilmsCollection.print();
streamDocumentaryCollection.print();

console.log(streamDocumentaryCollection.searchByYear(1972));