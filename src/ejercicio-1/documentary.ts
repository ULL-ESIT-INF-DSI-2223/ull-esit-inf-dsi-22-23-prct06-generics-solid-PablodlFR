/**
 * Documentary data structure.
 */
export class Documentary {
  private gender: string;
  private year: number;
  private name: string;
  /**
   * Documentary's data structure
   * @param year Documentary release year.
   * @param name Documentary's name.
   * @param gender Documentary's gender.
   */
  constructor(year: number, name: string, gender: string){
    this.year = year;
    this.name = name;
    this.gender = gender;
  }
  /**
   * Get the Documentary release year.
   * @returns the release year in a number.
   */
  getYear(): number {
    return this.year;
  }
  /**
   * Get the Documentary's name.
   * @returns the documentary's name in a string.
   */
  getName(): string {
    return this.name;
  }
  /**
   * Get the Documentary's gender.
   * @returns the documentary's gender in a string.
   */
  getGender(): string {
    return this.gender;
  }
}