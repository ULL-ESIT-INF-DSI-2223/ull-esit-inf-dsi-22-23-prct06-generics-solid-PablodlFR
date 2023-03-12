import "mocha";
import { Song } from "../src/ejercicio-3/song"
import { Discography } from "../src/ejercicio-3/discography"
import { Disc } from "../src/ejercicio-3/disc";
import { Single } from "../src/ejercicio-3/single";
import { Artist } from "../src/ejercicio-3/artist";

const MusicLibrary: Artist[] = [];

const llueve = new Song("Llueve", 240, "Pop-rock", false, 3900000);
const somos = new Song("Somos", 226, "Rock", false, 1500000);
const autofotos = new Song("Autofotos", 209, "Pop-rock", false, 18000000);

const volvamosEmpezar = new Disc("Volvamos a Empezar", 2010, [llueve, autofotos]);
const singleSomos = new Single("Somos", 2009, [somos]);

const melendiDisc = new Discography([volvamosEmpezar, singleSomos]);

const melendi = new Artist("Melendi", 5400000, [melendiDisc]);

MusicLibrary.push(melendi);