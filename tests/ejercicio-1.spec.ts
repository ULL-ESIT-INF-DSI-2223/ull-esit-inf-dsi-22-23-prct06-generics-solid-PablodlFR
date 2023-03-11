import "mocha";
import { expect } from "chai";
import { Documentary } from "../src/ejercicio-1/documentary";
import { Films } from "../src/ejercicio-1/films";
import { Series } from "../src/ejercicio-1/series";
import { SeriesCollection } from "../src/ejercicio-1/seriescollection";
import { FilmsCollection } from "../src/ejercicio-1/filmscollection";
import { DocumentaryCollection } from "../src/ejercicio-1/documentarycollection";

const streamSeriesCollection = new SeriesCollection([
  new Series(1996, "Detective Conan", 32),
  new Series(2009, "Castle", 8)
]);

const streamFilmsCollection = new FilmsCollection([
  new Films(1957, "Senderos de Gloria", 86),
  new Films(1927, "Octubre", 115),
  new Films(2008, "La ola", 108)
]);

const streamDocumentaryCollection = new DocumentaryCollection([
  new Documentary(2003, "Rumores de guerra", "Militar"),
  new Documentary(1935, "El triunfo de la voluntad", "Militar"),
  new Documentary(1943, "El 7 de diciembre", "Militar"),
  new Documentary(2017, "Cantábrico", "Naturaleza")
]);

const militarStreamDocumentaryCollection = streamDocumentaryCollection.searchByGender("Militar");

describe("print() function tests", () => {
  it("streamSeriesCollection.print() returns 'Detective Conan, 1996, 32 seasons. Castle, 2009, 8 seasons. '", () => {
    expect(streamSeriesCollection.print()).to.be.eql("Detective Conan, 1996, 32 seasons. Castle, 2009, 8 seasons. ");
  });
  it("streamFilmsCollection.print() returns 'Senderos de Gloria, 1957, 86 minutes. Octubre, 1927, 115 minutes. La ola, 2008, 108 minutes. '", () => {
    expect(streamFilmsCollection.print()).to.be.eql("Senderos de Gloria, 1957, 86 minutes. Octubre, 1927, 115 minutes. La ola, 2008, 108 minutes. ");
  });
  it("streamDocumentaryCollection.print() returns 'Rumores de guerra, 2003, Gender: Militar. El triunfo de la voluntad, 1935, Gender: Militar. El 7 de diciembre, 1943, Gender: Militar. Cantábrico, 2017, Gender: Naturaleza. '", () => {
    expect(streamDocumentaryCollection.print()).to.be.eql("Rumores de guerra, 2003, Gender: Militar. El triunfo de la voluntad, 1935, Gender: Militar. El 7 de diciembre, 1943, Gender: Militar. Cantábrico, 2017, Gender: Naturaleza. ");
  });
});

describe("getNumberOfItems() function test from basicsstreamableCollection", () => {
  it("streamSeriesCollection.getNumberOfItems() return 2", () => {
    expect(streamSeriesCollection.getNumberOfItems()).to.be.eql(2);
  });
  it("streamFilmsCollection.getNumberOfItems() return 3", () => {
    expect(streamFilmsCollection.getNumberOfItems()).to.be.eql(3);
  });
  it("streamDocumentaryCollection.getNumberOfItems() return 4", () => {
    expect(streamDocumentaryCollection.getNumberOfItems()).to.be.eql(4);
  });
});

const detectiveConan = ([new Series(1996, "Detective Conan", 32)]);
const cantabrico = ([new Documentary(2017, "Cantábrico", "Naturaleza")]);
const octubre = ([new Films(1927, "Octubre", 115)]);

describe("searchByName() function test", () => {
  it("streamSeriesCollection.searchByName('Detective Conan') return detectiveConan", () => {
    expect(streamSeriesCollection.searchByName("Detective Conan")).to.be.eql(detectiveConan);
  });
  it("streamDocumentaryCollection.searchByName('Cantábrico') return cantabrico", () => {
    expect(streamDocumentaryCollection.searchByName("Cantábrico")).to.be.eql(cantabrico);
  });
});

describe("searchByYear() function test", () => {
  it("streamSeriesCollection.searchByYear(1926) return detectiveConan", () => {
    expect(streamSeriesCollection.searchByYear(1996)).to.be.eql(detectiveConan);
  });
  it("streamDocumentaryCollection.searchByYear(1927) return octubre", () => {
    expect(streamFilmsCollection.searchByYear(1927)).to.be.eql(octubre);
  });
});

describe("searchBySeasons() function test from streamSeriesCollection", () => {
  it("streamSeriesCollection.searchBySeasons(32) return detectiveConan", () => {
    expect(streamSeriesCollection.searchBySeasons(32)).to.be.eql(detectiveConan);
  });
});

describe("searchByDuration() function test from streamFilmsCollection", () => {
  it("streamFilmsCollection.searchByDuration(115) return octubre", () => {
    expect(streamFilmsCollection.searchByDuration(115)).to.be.eql(octubre);
  });
});

describe("searchByGender() function test from streamDocumentaryCollection", () => {
  it("streamDocumentaryCollection.searchByGender('Militar') return detectiveConan", () => {
    expect(streamDocumentaryCollection.searchByGender("Militar")).to.be.eql(militarStreamDocumentaryCollection);
  });
});

const dc = streamSeriesCollection.getItem(0);
const oc = streamFilmsCollection.getItem(1);

describe("getItem() function test", () => {
  it("streamSeriesCollection.getItem(0) return detectiveConan", () => {
    expect(streamSeriesCollection.getItem(0)).to.be.eql(dc);
  });
  it("streamDocumentaryCollection.getItem(1) return octubre", () => {
    expect(streamFilmsCollection.getItem(1)).to.be.eql(oc);
  });
});

const film1 = new Films(1982, "film1", 130);
const serie1 = new Series(1964, "serie1", 7);

describe("addItem() function test", () => {
  it("streamSeriesCollection.addItem(film1) return true", () => {
    expect(streamSeriesCollection.addItem(serie1)).to.be.eql(true);
  });
  it("streamDocumentaryCollection.addItem(serie1) return true", () => {
    expect(streamFilmsCollection.addItem(film1)).to.be.eql(true);
  });
});

describe("removeItem() function test", () => {
  it("streamSeriesCollection.removeItem(0) return dc", () => {
    expect(streamSeriesCollection.removeItem(0)).to.be.eql(dc);
  });
  it("streamDocumentaryCollection.removedItem(1) return oc", () => {
    expect(streamFilmsCollection.removeItem(1)).to.be.eql(oc);
  });
});