import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndpoint: string = 'http://localhost:9099/service/usuario';
  private httpHeaders = new HttpHeaders({'content-type': 'application/json'});
  constructor(private http: HttpClient, private router: Router) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlEndpoint).pipe(
      map((response) => response as Usuario[])
    );
  }

  create(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.urlEndpoint, usuario, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Error al crear '.concat(e.error.mensaje),
          footer: '<a href>¿Por qué tengo este problema?</a>'
        });
        return throwError(e);
      })
    );
  }

  getUsuario(id): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlEndpoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/atlas']);
        console.error(e.error.mensaje);
        swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Error al buscar '.concat(e.error.mensaje),
          footer: '<a href>¿Por qué tengo este problema?</a>'
        });
        return throwError(e);
      })
    );
  }

  updateUser(usuario: Usuario): Observable<any> {
    return this.http.put<any>(`${this.urlEndpoint}/${usuario.numIdenti}`, usuario, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Error al editar '.concat(e.error.mensaje),
          footer: '<a href>¿Por qué tengo este problema?</a>'
        });
        return throwError(e);
      })
    );
  }

  deleteUser(id): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Error al Eliminar '.concat(e.error.mensaje),
          footer: '<a href>¿Por qué tengo este problema?</a>'
        });
        return throwError(e);
      })
    );
  }
}
