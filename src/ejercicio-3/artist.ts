import { Discography } from "./discography";
import { Disc } from "./disc";
import { Single } from "./single";

/**
 * Artist.
 * @param name Artist name string.
 * @param listeners Listeners' number.
 * @param discography Discography[] array. 
 */
export class Artist {
  public name: string;
  public listeners: number;
  public discography: Discography<Disc | Single>[];
  constructor(name, listeners, discography) {
    this.name = name;
    this.listeners = listeners;
    this.discography = discography;
  }
}