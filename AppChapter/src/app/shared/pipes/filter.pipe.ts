import { Pipe, PipeTransform } from '@angular/core';
import { MarvelI } from 'src/app/models/marvel.interface';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(characters: MarvelI[], page: number = 0, searchTxt: string = ''): MarvelI[] {
    // Paginator (6)
    if (!searchTxt) return characters.slice(page, page + 6);
    // Search Character (Title)
    searchTxt = searchTxt.toLowerCase();
    const filterCharacters = characters.filter(character => character.title.toLowerCase().includes(searchTxt));
    return filterCharacters.slice(page, page + 6);

  }
}