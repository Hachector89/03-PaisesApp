import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Pais } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v2';

  get getHttpParams () {
    return new HttpParams().set( 'fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient ) { }

  buscarPais ( pais: string ): Observable<Pais[]> {

    const url = `${ this.apiURL }/name/${ pais }`;
    return this.http.get<Pais[]>( url, { params : this.getHttpParams }  );

  }

  buscarPaisPorId ( code: string ): Observable<Pais[]> {

    const url = `${ this.apiURL }/alpha/${ code }`;
    return this.http.get<Pais[]>( url );

  }

  buscarRegion ( region: string ): Observable<Pais[]> {

    const url = `${ this.apiURL }/regionalbloc/${ region }`;
    return this.http.get<Pais[]>( url, { params : this.getHttpParams } )


  }

}
