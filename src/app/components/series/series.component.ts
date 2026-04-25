import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series.html',
  styleUrls: ['./series.css']
})
export class SeriesComponent {
  series = [
    {
      titulo: 'BTS: Behind The Scene',
      descripcion: 'Documental exclusivo del viaje de BTS desde sus inicios hasta el estadio más grande del mundo.',
      emoji: '🎤'
    },
    {
      titulo: 'BLACKPINK World Tour',
      descripcion: 'Revive cada concierto y los momentos más icónicos de la gira mundial de BLACKPINK.',
      emoji: '🌸'
    },
    {
      titulo: 'Stray Kids: SKZ-RECORD',
      descripcion: 'Una mirada íntima al proceso creativo de los Stray Kids en el estudio.',
      emoji: '🎧'
    },
    {
      titulo: 'TWICE: Feel Special',
      descripcion: 'El documental que muestra el esfuerzo y el amor de TWICE por sus fans.',
      emoji: '💜'
    },
    {
      titulo: 'ATEEZ: The Origin',
      descripcion: 'La historia de cómo ocho chicos conquistaron el mundo desde cero.',
      emoji: '🌊'
    },
    {
      titulo: 'NewJeans: Debut Diaries',
      descripcion: 'El diario íntimo del debut más comentado del K-pop en 2022.',
      emoji: '🐰'
    }
  ];

  verSerie(titulo: string) {
    alert('▶ Reproduciendo: ' + titulo);
  }
}