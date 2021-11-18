import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Capital } from '../interfaces/capital.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private apiURL: string = 'https://restcountries.com/v2';

  get getHttpParams () {
    return new HttpParams().set( 'fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient ) { }

  buscarCapital ( capital: string ): Observable<Capital[]> {

    const url = `${ this.apiURL }/capital/${ capital }`;

    return this.http.get<Capital[]>( url, { params : this.getHttpParams } );

  }

}
