import { Component, OnInit, HostListener } from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    habilitar: boolean;
    constructor() { }

    ngOnInit() {
    }
  /**@HostListener('window:resize') onResize() {
    // guard against resize before view is rendered
    this.isMobileMenu();
  } */
      isMobileMenu() {
        if ($(window).width() > 991) {
            this.habilitar = false;
        }
        this.habilitar = true;
    }
}
