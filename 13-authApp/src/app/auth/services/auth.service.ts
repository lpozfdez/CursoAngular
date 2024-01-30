import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environments';
import { User, AuthStatus, LoginResponse, CheckTokenResponse } from '../interfaces/index';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject( HttpClient );

  constructor( ){
    this.checkAuthstatus().subscribe();
  }

  //Así se establece la autenticación
  private setAuthentication(user: User, token: string): boolean{
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    console.log(user, token);
    localStorage.setItem('token', token);

    return true
  }

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);
  //De esta forma nadie puede acceder
  public currentUser = computed( ()=> this._currentUser() );
  public authStatus = computed( ()=> this._authStatus() );


  login( email:string, password: string ): Observable <boolean>{

    const url:string = `${this.baseUrl}/auth/login`;
    const body = { email, password };

    return this.http.post<LoginResponse>( url, body ).pipe(
      map( ({user, token}) => this.setAuthentication(user, token)),
      catchError( err => throwError( ()=> err.error.message ))
    );


  }

  checkAuthstatus():Observable<boolean>{

    const url = `${this.baseUrl}/auth/check-token`;
    const token = localStorage.getItem('token');

    if(!token){
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<CheckTokenResponse>( url, {headers} ).pipe(
      map( ({user, token}) => this.setAuthentication(user, token)),
      catchError( ()=> {
        this._authStatus.set(AuthStatus.notAuthenticate);
        return of(false);
      })
    )

  }

  logout(){
    localStorage.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticate);
  }

}
