/**
 * Films data structure.
 */
export class Films {
  private duration: number;
  private year: number;
  private name: string;
  /**
   * Films' constructor
   * @param year when the film released.
   * @param name film's name.
   * @param duration film's duration.
   */
  constructor(year: number, name: string, duration: number){
    this.year = year;
    this.name = name;
    this.duration = duration;
  }
  /**
   * Get the film's realease year.
   * @returns year in a number.
   */
  getYear(): number {
    return this.year;
  }
  /**
   * Get the film's name.
   * @returns the name in a string.
   */
  getName(): string {
    return this.name;
  }
  /**
   * Get the film's duration.
   * @returns film's duration in a number.
   */
  getDuration(): number {
    return this.duration;
  }
}