import { Disc } from "./disc";
import { Single } from "./single";

/**
 * Discography.
 */
export class Discography<T extends Disc | Single> {
  constructor(private discography: T[]){
  }
}