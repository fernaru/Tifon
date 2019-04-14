import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  deleteUser(usuario: Usuario): void {
    swal.fire({
      title: '¿Estas seguro?',
      text: 'No podrás revertir esto!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'No, cancelar!'
    }).then((result) => {
      if (result.value) {
        this.usuarioService.deleteUser(usuario.numIdenti).subscribe(
          response => {
            this.usuarios = this.usuarios.filter(usu => usu !== usuario);
            swal.fire(
              'Elminado!',
              'El usuario ha sido eliminado.',
              'success'
            );
          }
        );
      }
    });
  }

}
