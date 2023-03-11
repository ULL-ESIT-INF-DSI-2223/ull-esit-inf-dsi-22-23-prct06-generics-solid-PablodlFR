export class Films {
  private duration: number;
  private year: number;
  private name: string;
  constructor(year: number, name: string, duration: number){
    this.year = year;
    this.name = name;
    this.duration = duration;
  }
  getYear(): number {
    return this.year;
  }
  getName(): string {
    return this.name;
  }
  getDuration(): number {
    return this.duration;
  }
}