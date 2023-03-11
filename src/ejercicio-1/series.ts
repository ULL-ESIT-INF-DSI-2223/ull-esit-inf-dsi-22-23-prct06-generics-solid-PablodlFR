/**
 * Series data structure.
 */
export class Series {
  private seasons: number;
  private year: number;
  private name: string;
  /**
   * Series' constructor
   * @param year when the serie starts.
   * @param name of the serie.
   * @param seasons number of seasons that compose the serie.
   */
  constructor(year: number, name: string, seasons: number){    
    this.year = year;
    this.name = name;
    this.seasons = seasons;
  }
  /**
   * Get the series' year.
   * @returns year in a number.
   */
  getYear(): number {
    return this.year;
  }
  /**
   * Get the series' name.
   * @returns series' name in a string.
   */
  getName(): string {
    return this.name;
  }  
  /**
   * Get the number of seasons.
   * @returns number of seasons.
   */
  getSeasons(): number {
    return this.seasons;
  }  
}