import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private api_key:string = 'eMe22gNmcJqkcifYEkG3COaUYp7O4Kr3';
  private urlApi:string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) {
    this.loadLocalStorage();
    console.log('ok');
  }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();

    if( this._tagsHistory.includes(tag) ){
      this._tagsHistory = this.tagsHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  //Guardamos el historial en el localStorage del navegador, solo para nuestro host
  private saveLocalStorage(): void {
    localStorage.setItem('historial', JSON.stringify( this._tagsHistory ));
  }


  private loadLocalStorage(): void {
    if( !localStorage.getItem('historial')) return;

    this._tagsHistory = JSON.parse( localStorage.getItem('historial') ! );

    if ( this._tagsHistory.length === 0 ) return;
    this.searchTag( this._tagsHistory[0] );
  }



  searchTag( tag:string ): void{
    if( tag.length ===0 ) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.api_key)
    .set('limit', '10')
    .set('q', tag);

    this.http.get<SearchResponse>(`${ this.urlApi }/search`, { params})
    .subscribe( resp => {

      this.gifsList = resp.data;

    });


  }

}
