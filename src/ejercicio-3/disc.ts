import { Song } from "./song";

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