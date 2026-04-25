import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Banda {
  id: number;
  nombre: string;
  genero: string;
  pais: string;
}

@Injectable({
  providedIn: 'root'
})
export class BandaService {
  private apiUrl = 'http://localhost:3000/api/bandas';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Banda[]> {
    return this.http.get<Banda[]>(this.apiUrl);
  }

  create(banda: Banda): Observable<any> {
    return this.http.post(this.apiUrl, banda);
  }

  update(id: number, banda: Banda): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, banda);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}