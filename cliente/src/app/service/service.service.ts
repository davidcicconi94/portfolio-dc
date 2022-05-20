import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleo } from '../model/Empleo';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private baseUrl = 'http://localhost:8080/api/empleos';

  constructor(private http: HttpClient) {}

  aboutMe(): Observable<any> {
    return this.http.get('assets/data/data.json');
  }

  obtenerDatos(): Observable<Empleo[]> {
    return this.http.get<Empleo[]>(`${this.baseUrl}`);
  }

  agregarEmpleo(empleo: Empleo): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, empleo);
  }
}
