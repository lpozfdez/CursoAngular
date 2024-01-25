import { Region } from './../interfaces/region.type';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CacheStore } from '../interfaces/cache-store.interface';


@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  //Objeto para guardar en localStorage
  public cacheStore: CacheStore = {
    byCapital: { term:'', countries: [] },
    byCountries: { term:'', countries: [] },
    byRegion: { region:'', countries: [] }
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();//Recupera los datos de localstorage
  }


  private saveToLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }


  private loadFromLocalStorage(){
    if( !localStorage.getItem('cacheStore') ) return;

    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
  }

  //Hace la llamada y maneja el error
  private getCountriesRequest( url: string ): Observable<Country[]>{
    return this.http.get<Country[]>(url).pipe(
      catchError( () => of([]) ),
    )
  }

  searchCountryByAlphaCode( code: string): Observable<Country | null>{
    return this.http.get<Country[]> (`${this.apiUrl}/alpha/${ code }`).pipe(
      map( countries => countries.length > 0 ? countries[0] : null ),
      catchError( () => of(null) )
    );
  }

  searchCapital( term:string ):Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ term } `;
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCapital = { term , countries} ),
      tap( () => this.saveToLocalStorage() )//Guardar los datos de búsqueda en localstore
    );
  }

  searchCountry( term: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ term } `;
    return this.getCountriesRequest(url).pipe(
      tap( countries => this.cacheStore.byCountries = { term , countries} ),
      tap( () => this.saveToLocalStorage() )
    );
  }

  searchRegion( region: Region ): Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ region } `;
    return this.getCountriesRequest(url).pipe(
      tap( countries => this.cacheStore.byRegion = { region , countries} ),
      tap( () => this.saveToLocalStorage() )
    );
  }

}
