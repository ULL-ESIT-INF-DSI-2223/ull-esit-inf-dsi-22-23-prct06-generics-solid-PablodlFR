import "mocha";
import { expect } from "chai";
import { NumericPrintableCollection } from "../src/ej-clase/numericprintablecollection";
import { StringPrintableCollection } from "../src/ej-clase/stringprintablecollection";

const numCollection = new NumericPrintableCollection([1, 2, 3]);
const numCollection2 = new NumericPrintableCollection([14, 201, 76]);

const strCollection = new StringPrintableCollection(["pato", "gato", "rana"]);
const strCollection2 = new StringPrintableCollection(["primero", "segundo", "tercero", "cuarto"]);

describe("print function tests from NumericPrintableCollection", () => {
  it("numCollection.print() returns '1, 2, 3'", () => {
    expect(numCollection.print()).to.be.eql("1, 2, 3");
  });
  it("numCollection.print() returns '14, 201, 76'", () => {
    expect(numCollection2.print()).to.be.eql("14, 201, 76");
  });
});

describe("print function tests from StringPrintableCollection", () => {
  it("strCollection.print() returns 'pato, gato, rana'", () => {
    expect(strCollection.print()).to.be.eql("pato, gato, rana");
  });
  it("numCollection.print() returns 'primero, segundo, tercero, cuarto'", () => {
    expect(strCollection2.print()).to.be.eql("primero, segundo, tercero, cuarto");
  });
});

describe("getNumbersOfItems function tests", () => {
  it("numCollection.getNumberOfItems() returns 3", () => {
    expect(numCollection.getNumberOfItems()).to.be.eql(3);
  });
  it("strCollection2.getNumberOfItems() returns 4", () => {
    expect(strCollection2.getNumberOfItems()).to.be.eql(4);
  });
});

describe("removeItem function tests", () => {
  it("numCollection2.removeItem(1) returns 201", () => {
    expect(numCollection2.removeItem(1)).to.be.eql(201);
  });
  it("strCollection2.removeItem(2) returns tercero", () => {
    expect(strCollection2.removeItem(2)).to.be.eql("tercero");
  });
});

describe("getItem function tests", () => {
  it("numCollection2.getItem(0) returns 14", () => {
    expect(numCollection2.getItem(0)).to.be.eql(14);
  });
  it("strollection.getItem(1) returns 'gato'", () => {
    expect(strCollection.getItem(1)).to.be.eql("gato");
  });
});

const num = 7;
const str = "gallina";
describe("addItem function tests", () => {
  it("numCollection2.addItem(num) returns true", () => {
    expect(numCollection2.addItem(num)).to.be.eql(true);
  });
  it("strCollection2.addItem(str) returns true", () => {
    expect(strCollection2.addItem(str)).to.be.eql(true);
  });
});