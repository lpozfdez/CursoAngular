import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'src/environments/envoronments';
import { User, AuthStatus, LoginResponse } from '../interfaces/index';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject( HttpClient );

  constructor(  ) { }

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  login( email:string, password: string ): Observable<boolean>{

    this.http.get(`${this.baseUrl}/auth/login`).subscribe();

    return of(true);
  }

}
