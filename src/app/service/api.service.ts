import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Usuarios } from '../interfaces/usuarios';
import { environment } from '../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: '*/*',
    }),
  };

  constructor(
    private http: HttpClient,
  ) {}

  getUsuarios(): Observable<Usuarios> {
    const url = `${environment.api}/users`;
    return this.http.get<Usuarios>(url, this.httOptions).pipe(
      tap((newProduct: Usuarios) =>
        console.log(`get products w/ id=${newProduct.id}`)
      ));
  }
}
