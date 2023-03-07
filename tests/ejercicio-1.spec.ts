// import "mocha";
// import { expect } from "chai";
// import { Song } from "../src/ejercicio-1";
// import { Discography } from "../src/ejercicio-1";
// import { Artist } from "../src/ejercicio-1";
// import { searchArtist } from "../src/ejercicio-1";
// import { searchDiscography } from "../src/ejercicio-1";
// import { searchSong } from "../src/ejercicio-1";

// const llueve = new Song("Llueve", 240, "Pop-rock", false, 3900000);
// const somos = new Song("Somos", 226, "Rock", false, 1500000);
// const autofotos = new Song("Autofotos", 209, "Pop-rock", false, 18000000);
// const gatosCelestes = new Song("Gatos Celestes", 255, "Pop-rock", false, 6800000);

// const libre = new Song("Libre", 251, "Pop", false, 3100000);
// const carolina = new Song("Carolina", 159, "Pop", false, 150000);
// const noelia = new Song("Noelia", 190, "Pop", false, 2300000);
// const cartasAmarillas = new Song("Cartas Amarillas", 233, "Balada", false, 4500000);

// const volvamosEmpezar = new Discography("Volvamos a Empezar", 2010, [llueve, somos]);
// const lagrimasDesordenadas = new Discography("Lágrimas Desordenadas", 2012, [autofotos, gatosCelestes]);

// const miTierra = new Discography("Mi Tierra", 1972, [libre, carolina]);
// const besoFlor = new Discography("Un Beso y una Flor", 1972, [noelia, cartasAmarillas]);

// const melendi = new Artist("Melendi", 5400000, [volvamosEmpezar, lagrimasDesordenadas]);
// const ninoBravo = new Artist("Nino Bravo", 1256000, [miTierra, besoFlor]);

// describe("songsNumber function tests", () => {
//   it("miTierra.songsNumber() returns 2", () => {
//     expect(miTierra.songsNumber()).to.be.eql(2);
//   });
//   it("volvamosEmpezar.songsNumber() returns 2", () => {
//     expect(volvamosEmpezar.songsNumber()).to.be.eql(2);
//   });
// });

// describe("discDuration function tests", () => {
//   it("miTierra.discDuration() returns 410", () => {
//     expect(miTierra.discDuration()).to.be.eql(410);
//   });
//   it("volvamosEmpezar.discDuration returns 466", () => {
//     expect(volvamosEmpezar.discDuration()).to.be.eql(466);
//   });
// });

// describe("reproductions function tests", () => {
//   it("miTierra.reproductions() returns 3250000", () => {
//     expect(miTierra.reproductions()).to.be.eql(3250000);
//   });
//   it("volvamosEmpezar.reproductions returns 5400000", () => {
//     expect(volvamosEmpezar.reproductions()).to.be.eql(5400000);
//   });
// });

// describe("searchArtist function tests", () => {
//   it("searchArtist('Melendi') returns melendi", () => {
//     expect(searchArtist("Melendi")).to.be.eql(melendi);
//   });
//   it("searchArtist('Nino Bravo') returns ninoBravo", () => {
//     expect(searchArtist("Nino Bravo")).to.be.eql(ninoBravo);
//   });
// });

// describe("searchDiscography function tests", () => {
//   it("searchDiscography('Lágrimas Desordenadas') returns lagrimasDesordenadas", () => {
//     expect(searchDiscography("Lágrimas Desordenadas")).to.be.eql(lagrimasDesordenadas);
//   });
//   it("searchDiscography('Un Beso y una Flor') returns besoFlor", () => {
//     expect(searchDiscography("Un Beso y una Flor")).to.be.eql(besoFlor);
//   });
// });

// describe("searchSong function tests", () => {
//   it("searchSong('Autofotos') returns autofotos", () => {
//     expect(searchSong("Autofotos")).to.be.eql(autofotos);
//   });
//   it("searchSong('Carolina') returns carolina", () => {
//     expect(searchSong("Carolina")).to.be.eql(carolina);
//   });
// });