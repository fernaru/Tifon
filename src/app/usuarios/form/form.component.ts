import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public titulo: string = 'Crear usuario';
  public errores: string[];
  constructor(private usuarioService: UsuarioService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarUsuario();
  }

  public cargarUsuario(): void {
      this.activateRoute.params.subscribe(params => {
        let id = params['id']
        if ( id ) {
          this.usuarioService.getUsuario(id).subscribe( (usuario) => this.usuario = usuario);
        }
      });
  }

  public create(): void {
    this.usuarioService.create(this.usuario).
    subscribe(response => {
      this.router.navigate(['/atlas']);
      swal.fire({
        title: 'Creado',
        text: response.mensaje+': '.concat(response.usuario.nombre),
        type: 'success',
        confirmButtonText: 'Aceptar'
     });
    },
    err => {
      this.errores = err.console.error.errors as string[];
      console.error('Codigo de error desde el backend', err.status);
      console.error(err.error.errors);
    }
    );
  }

  public updateUser(): void {
    this.usuarioService.updateUser(this.usuario).
    subscribe(response => {
      swal.fire({
        title: 'Creado',
        text: response.mensaje+': '.concat(response.usuario.nombre),
        type: 'success',
        confirmButtonText: 'Aceptar'
     });
    },
    err => {
      this.errores = err.console.error.errors as string[];
      console.error('Codigo de error desde el backend', err.status);
      console.error(err.error.errors);
    }
    );
  }
}
