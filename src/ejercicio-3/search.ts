import { Artist } from "./artist";

const MusicLibrary: Artist[] = [];
/**
 * Function for search an artist in the music library.
 * @param str Artist name to be searched.
 * @returns Artist found.
 */
export function searchArtist(str: string) {
  for (let i = 0; i < MusicLibrary.length; i++) {
    if (MusicLibrary[i].name === str) {
      return MusicLibrary[i];
    }    
  }
}

/**
 * Function for search a discography in the music library.
 * @param str Discography name to be searched.
 * @returns Discography found.
 */
// export function searchDiscography(str: string) {
//   for (let i = 0; i < MusicLibrary.length; i++) {
//     for (let j = 0; j < MusicLibrary[i].discography.length; j++) {
//       if (MusicLibrary[i].discography[j] === str) {
//         return MusicLibrary[i].discography[j];
//       } 
//     }
//   }
// }

/**
 * Function for search a song in the musin library.
 * @param str Song name to be searched.
 * @returns Song found.
 */
// export function searchSong(str: string) {
//   for (let i = 0; i < MusicLibrary.length; i++) {
//     for (let j = 0; j < MusicLibrary[i].discography.length; j++) {
//       for (let z = 0; z < MusicLibrary[i].discography[j].songs.length; z++) {
//         if (MusicLibrary[i].discography[j].songs[z].name === str) {
//           return MusicLibrary[i].discography[j].songs[z];
//         }
//       }           
//     }
//   }
// }