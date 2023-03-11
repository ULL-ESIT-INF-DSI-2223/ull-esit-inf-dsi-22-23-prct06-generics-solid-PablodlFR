import { BasicStreamableCollection } from "./basicstreamablecollection";
import { Documentary } from "./documentary";

export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
  constructor(items: Documentary[]){
    super(items);
  }

  print() {
    let str = "";
    for (let i = 0; i < this.getNumberOfItems(); i++) {
      //console.log(`"${this.items[i].getName()}", ${this.items[i].getYear()}, Gender: ${this.items[i].getGender()}`);
      str += `${this.items[i].getName()}, ${this.items[i].getYear()}, Gender: ${this.items[i].getGender()}. `
    }
    return str;
  }

  searchByGender(str: string): Documentary[] {
    return this.items.filter((item) => item.getGender() === str);
  }  
}