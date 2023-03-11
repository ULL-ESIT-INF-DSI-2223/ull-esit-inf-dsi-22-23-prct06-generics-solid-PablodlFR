export class Documentary {
  private gender: string;
  private year: number;
  private name: string;
  constructor(year: number, name: string, gender: string){
    this.year = year;
    this.name = name;
    this.gender = gender;
  }
  getYear(): number {
    return this.year;
  }
  getName(): string {
    return this.name;
  }
  getGender(): string {
    return this.gender;
  }
}