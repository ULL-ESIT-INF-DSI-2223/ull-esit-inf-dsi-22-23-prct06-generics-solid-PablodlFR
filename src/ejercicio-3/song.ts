/**
 * Song.
 * @param name Song's name string.
 * @param duration Number of song's duration.
 * @param gender Song's gender gender.
 * @param single Boolean, true if is a single, false if not.
 * @param reproductions Song's reproductions number.
 */
export class Song {
  name: string;
  duration: number;
  gender: string;
  single: boolean;
  reproductions: number;
  constructor(name, duration, gender, single, reproductions) {
    this.name = name;
    this.duration = duration;
    this. gender = gender;
    this.single = single;
    this.reproductions = reproductions;
  }
}