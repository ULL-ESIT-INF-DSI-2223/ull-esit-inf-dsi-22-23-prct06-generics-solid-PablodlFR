import { BasicStreamableCollection } from "./basicstreamablecollection";
import { Films } from "./films";

export class FilmsCollection extends BasicStreamableCollection<Films> {
  constructor(items: Films[]){
    super(items);
  }

  print() {
    let str = "";
    for (let i = 0; i < this.getNumberOfItems(); i++) {
      //console.log(`"${this.items[i].getName()}", ${this.items[i].getYear()}, ${this.items[i].getDuration()} minutes.`);
      str += `${this.items[i].getName()}, ${this.items[i].getYear()}, ${this.items[i].getDuration()} minutes. `;
    }
    return str;
  }

  searchByDuration(num: number): Films[] {
    return this.items.filter((item) => item.getDuration() === num);
  }  
}
