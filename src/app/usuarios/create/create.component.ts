import { Component } from '@angular/core';

interface Usuario {
  tipoDocumento: string
  numeroDocumento: string
  nombres: string
  apellidos: string
  correo: string
  telefono: string
  clave: string
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  usuarios: Usuario[] = [] //arreglo de tipo usuario

  crearUsuario: Usuario = {
    tipoDocumento: '',
    numeroDocumento: '',
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    clave: ''
  }

  agregar(){

    console.log(this.crearUsuario)
    this.usuarios.push(this.crearUsuario)
    this.crearUsuario = {
      tipoDocumento: '',
      numeroDocumento: '',
      nombres: '',
      apellidos: '',
      correo: '',
      telefono: '',
      clave: ''
    }
  }
}
