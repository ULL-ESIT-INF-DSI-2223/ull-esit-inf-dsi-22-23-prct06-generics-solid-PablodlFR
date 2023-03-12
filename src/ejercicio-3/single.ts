import { Song } from "./song";

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