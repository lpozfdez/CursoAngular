import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[]=[];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesSer: CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesSer.cacheStore.byCountries.countries;
    this.initialValue = this.countriesSer.cacheStore.byCountries.term;
  }

  searchByCountry( term: string ){
    this.isLoading = true;

    this.countriesSer.searchCountry(term).subscribe( countries =>{
      this.countries = countries;
      this.isLoading = false;
    } );

  }



}
