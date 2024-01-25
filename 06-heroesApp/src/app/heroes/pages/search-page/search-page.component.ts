import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  constructor( private http: HeroesService ){}

  public heroes: Hero[] = [];
  public searchInput = new FormControl('');
  public heroSelected?: Hero ;

  searchHero( ){
    const value: string = this.searchInput.value || '';
    console.log({value})
    this.http.getSuggestions( value ).subscribe(heroes => this.heroes = heroes);
  }

  onSelectedOption( event: MatAutocompleteSelectedEvent ):void{

    if(!event.option.value) {
      this.heroSelected = undefined;
      return;
    }
    const hero: Hero = event.option.value;
    this.searchInput.setValue( hero.superhero );
    this.heroSelected = hero;

  }

}
