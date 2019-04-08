import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  private titulo: string = "Crear usuario";
  constructor(private usuarioService: UsuarioService,private router: Router) { }

  ngOnInit() {
  }

  public create(): void{
    console.log("clicked");
    this.usuarioService.create(this.usuario).subscribe(
      response => this.router.navigate(['/atlas'])
    )
  }
}
