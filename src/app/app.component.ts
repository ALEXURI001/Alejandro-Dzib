import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import * as AOS from 'aos'
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'portafolio';
  
  items!: MenuItem[];

  ngOnInit(){
    AOS.init();
    window.addEventListener('load',AOS.refresh)

    this.items = [
      {
        label: 'ALEJANDRO DZIB',
        icon: 'pi pi-fw pi-user',

      }

  ];
  }

    



}
