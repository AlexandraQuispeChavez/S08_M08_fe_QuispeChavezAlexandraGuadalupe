import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  enviar() {
    if (!this.nombre || !this.email || !this.mensaje) {
      alert('⚠️ Por favor completa todos los campos');
      return;
    }
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Mensaje:', this.mensaje);
    alert('💜 ¡Mensaje enviado! Pronto te contactaremos, ' + this.nombre);
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }
}