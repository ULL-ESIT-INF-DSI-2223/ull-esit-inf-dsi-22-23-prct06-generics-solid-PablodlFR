import { Artist } from "./artist";
/**
 * An artist could be a soloist.
 */
export class Soloist extends Artist {
  constructor(name, listeners, discography){
    super(name, listeners, discography);
  }
}