import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndpoint: string = 'http://localhost:9099/service/getusers';
  private httpHeaders = new HttpHeaders({'content-type': 'application/json'});
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlEndpoint).pipe(
      map((response) => response as Usuario[])
    );
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlEndpoint, usuario, {headers: this.httpHeaders});
  }
}
