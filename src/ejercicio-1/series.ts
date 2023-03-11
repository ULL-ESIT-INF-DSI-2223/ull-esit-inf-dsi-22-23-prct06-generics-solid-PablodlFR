export class Series {
  private seasons: number;
  private year: number;
  private name: string;
  constructor(year: number, name: string, seasons: number){    
    this.year = year;
    this.name = name;
    this.seasons = seasons;
  }
  getYear(): number {
    return this.year;
  }
  getName(): string {
    return this.name;
  }  
  getSeasons(): number {
    return this.seasons;
  }  
}