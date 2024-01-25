import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Country, Region, SmallCountry } from '../../interfaces/country.interface';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    borders: ['', Validators.required],
  });

  public countriesByRegion: SmallCountry[] = [];

  public borders: SmallCountry[] = [];

  constructor( private fb: FormBuilder, private countriesServ: CountriesService){}

  ngOnInit(): void {
    this.onRegionChange();
    this.onCountryChange();
  }

  get regions(): Region[]{
    return this.countriesServ.regions;
  }

  onRegionChange(): void{
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap( () => this.myForm.get('country')!.setValue('') ),
      switchMap( region => this.countriesServ.getCountries(region) )/**cambia de la corriente de cambios de valores de "region" al resultado de la llamada a getCountries(region) */
    ).subscribe( countries => this.countriesByRegion = countries );
  }

  onCountryChange(): void{

    this.myForm.get('country')!.valueChanges
    .pipe(
      tap( () => this.myForm.get('borders')!.setValue('') ),
      filter( (value: string) => value.length > 0 ),
      switchMap( (alphaCode) => this.countriesServ.getCountryByAlphaCode(alphaCode) ),//Esto devuelve un smallCountry
      switchMap( country => this.countriesServ.getCountryBordersByCodes(country.borders) ),
    ).subscribe( country => {
      this.borders = country;
    });

  }










}
