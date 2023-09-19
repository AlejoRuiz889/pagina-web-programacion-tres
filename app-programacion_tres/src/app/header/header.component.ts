import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title: String= 'app-corh';
    nombre: String = 'Alejandro Ruiz'
    edad: String = "22"
}
