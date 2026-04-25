import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BandaService, Banda } from '../../services/banda.service';

@Component({
  selector: 'app-crud-bandas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud-bandas.html',
  styleUrls: ['./crud-bandas.css']
})
export class CrudBandasComponent implements OnInit {

  bandas: Banda[] = [];
  nuevaBanda: Banda = { id: 0, nombre: '', genero: '', pais: '' };
  modoEdicion: boolean = false;
  mostrarFormulario: boolean = false;

  constructor(private bandaService: BandaService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar() {
    this.bandaService.getAll().subscribe({
      next: (data) => { this.bandas = data; },
      error: () => {
        // Si el backend no está listo, carga datos de prueba
        this.bandas = [
          { id: 1, nombre: 'BTS', genero: 'K-pop', pais: 'Corea del Sur' },
          { id: 2, nombre: 'BLACKPINK', genero: 'K-pop', pais: 'Corea del Sur' },
          { id: 3, nombre: 'Stray Kids', genero: 'K-pop', pais: 'Corea del Sur' }
        ];
      }
    });
  }

  agregar() {
    if (!this.nuevaBanda.nombre || !this.nuevaBanda.genero || !this.nuevaBanda.pais) {
      alert('⚠️ Completa todos los campos');
      return;
    }
    this.bandaService.create(this.nuevaBanda).subscribe({
      next: () => { this.cargar(); this.limpiar(); },
      error: () => {
        // Si no hay backend agrega en memoria
        this.nuevaBanda.id = this.bandas.length + 1;
        this.bandas.push({ ...this.nuevaBanda });
        this.limpiar();
      }
    });
  }

  editar(banda: Banda) {
    this.nuevaBanda = { ...banda };
    this.modoEdicion = true;
    this.mostrarFormulario = true;
  }

  guardarEdicion() {
    this.bandaService.update(this.nuevaBanda.id, this.nuevaBanda).subscribe({
      next: () => { this.cargar(); this.limpiar(); },
      error: () => {
        const i = this.bandas.findIndex(b => b.id === this.nuevaBanda.id);
        if (i !== -1) this.bandas[i] = { ...this.nuevaBanda };
        this.limpiar();
      }
    });
  }

  eliminar(id: number) {
    if (confirm('¿Eliminar esta banda?')) {
      this.bandaService.delete(id).subscribe({
        next: () => { this.cargar(); },
        error: () => {
          this.bandas = this.bandas.filter(b => b.id !== id);
        }
      });
    }
  }

  limpiar() {
    this.nuevaBanda = { id: 0, nombre: '', genero: '', pais: '' };
    this.modoEdicion = false;
    this.mostrarFormulario = false;
  }
}