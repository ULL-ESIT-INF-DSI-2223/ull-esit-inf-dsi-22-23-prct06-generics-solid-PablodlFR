import { Artist } from "./artist";

/**
 * An artist could be a group.
 */
export class Group extends Artist {
  private numberOfMembers: number;
  constructor(name, listeners, discography){
    super(name, listeners, discography);
  }
  /**
   * Get the number of members.
   * @returns The number of members.
   */
  getNumberOfMembers() {
    return this.numberOfMembers;
  }
}