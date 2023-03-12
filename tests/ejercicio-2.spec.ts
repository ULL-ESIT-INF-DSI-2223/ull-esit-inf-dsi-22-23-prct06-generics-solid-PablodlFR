import "mocha";
import { expect } from "chai";
import { List } from "../src/ejercicio-2/list";

const test = new List(["a", "b", "c"]);
const test2 = new List(["d", "e", "f"]);
const test3 = new List(["g", "h", "i"]);
const test4 = new List([1, 2, 3, 4, 5]);
const test5 = new List([6, 7, 8]);
const test6 = new List([1, 2, 3]);
const test7 = new List([4, 5, 6]);
const test8 = new List(["a", "b"]);
const test9 = new List(["c", "d"]);
const test10 = new List(["e", "f"]);
const test11 = new List([9, 10]);
const test12 = new List([1, 2, 3]);
const test13 = new List(["b", "c", "d"]);
const test14 = new List(["vaca", "cerdo", "pato", "caballo"]);
const test15 = new List([74, 12, 35]);

describe("length() function tests", () => {
  it("test4.length() returns 5", () => {
    expect(test4.length()).to.be.eql(5);
  });
  it("test.length() returns 3", () => {
    expect(test.length()).to.be.eql(3);
  });  
});

describe("append() function tests", () => {
  it("test2.append(test3) returns ['d', 'e', 'f', 'g', 'h', 'i']", () => {    
    expect(test2.append(test3)).to.be.eqls(new List(['d', 'e', 'f', 'g', 'h', 'i']));
  });
  it("test6.append(test7) returns [1, 2, 3, 4, 5, 6]", () => {
    expect(test6.append(test7)).to.be.eql(new List([1, 2, 3, 4, 5, 6]));
  });  
});

describe("concatenate() function tests", () => {
  it("test5.concatenate(test11) returns [6, 7, 8, 9, 10]", () => {    
    expect(test5.concatenate(test11)).to.be.eqls(new List([6, 7, 8, 9, 10]));
  });
  it("test8.concatenate(test9, test10) returns ['a', 'b', 'c', 'd', 'e', 'f']", () => {
    expect(test8.concatenate(test9, test10)).to.be.eql(new List(['a', 'b', 'c', 'd', 'e', 'f']));
  });  
});

describe("filter() function tests", () => {
  it("test8.filter() returns ['d', 'e', 'f']", () => {    
    expect(test8.filter(function(item) {
      return item > "c";
    })).to.be.eqls(new List(['d', 'e', 'f']));
  });
  it("test4.filter() returns [4, 5]", () => {
    expect(test4.filter(function(item) {
      return item > 3;
    })).to.be.eqls(new List([4, 5]));
  });
});

describe("map() function tests", () => {
  it("test13.map() returns ['bz', 'cz', 'dz']", () => {    
    expect(test13.map(function(item) {      
        return item + "z";
      
    })).to.be.eqls(new List(['bz', 'cz', 'dz']));
  });
  it("test12.map() returns [1, 4, 9]", () => {
    expect(test12.map(function(item) {
      return item * item;
    })).to.be.eqls(new List([1, 4, 9]));
  });
});

const accumulator = 0;
const accumulator2 = "";
describe("reduce() function tests", () => {
  it("test13.reduce() returns 'caballo'", () => {    
    expect(test14.reduce("", accumulator2, function(accumulator2, item) {      
        if (item.length > accumulator2.length) {
          return item;
        } else {
          return accumulator2;
        }      
    })).to.be.eqls('caballo');
  });
  it("test4.reduce() returns 15", () => {
    expect(test4.reduce(0, accumulator, function(accumulator, item) {
      return accumulator + item;
    })).to.be.eql(15);
  });
});

describe("reverse() function tests", () => {
  it("test14.reverse() returns ['caballo', 'pato', 'cerdo', 'vaca']", () => {    
    expect(test14.reverse()).to.be.eqls(new List(['caballo', 'pato', 'cerdo', 'vaca']));
  });
  it("test15.reverse() returns [35, 12, 74]", () => {
    expect(test15.reverse()).to.be.eql(new List([35, 12, 74]));
  });  
});

let str = "";

describe("forEach() function tests", () => {
  it("test14.forEach() returns true", () => {    
    expect(test14.forEach(function(item) {      
      str += item;   
      return str;  
    })).to.be.eql(true);
  });
  it("test12.forEach() returns true", () => {
    expect(test12.forEach(function(item) {
      return item * item;
    })).to.be.eqls(true);
  });
});