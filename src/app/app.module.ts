import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MaterialModule } from './material/material.module';
import { UsuarioService } from './usuarios/usuario.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './usuarios/form/form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: '/tifon', pathMatch: 'full'},
  {path: 'tifon', component: DashboardComponent},
  {path: 'atlas', component: UsuariosComponent},
  {path: 'atlas/crearusuario', component: FormComponent},
  {path: 'atlas/crearusuario/:id', component: FormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuAdminComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    UsuariosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
