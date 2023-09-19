import { Component } from '@angular/core';
import { Cliente } from './cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {
  clientes: Cliente[]=[
    {idCliente:1, nombre:'Julian', apellido:'Quimbayo',
    email:'jaquimbayoc7@gmail.com',fechaCreado:'2023-09-18'},
    {idCliente:2, nombre:'Andres', apellido:'Castro',
    email:'andres7@gmail.com',fechaCreado:'2023-09-18'},
    {idCliente:3, nombre:'Shor', apellido:'Aguiar Collazos',
    email:'shor@gmail.com',fechaCreado:'2023-09-18'},
    {idCliente:4, nombre:'Cindy', apellido:'Vargas Duque',
    email:'cindyv@gmail.com',fechaCreado:'2023-09-18'},
    {idCliente:5, nombre:'Camilo', apellido:'Chavarro Guenis Bailador',
    email:'chavarroguenis@gmail.com',fechaCreado:'2023-09-18'}
    ];
  }