import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Chamado } from '../types/types';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ChamadosService {
  private readonly API = `${environment.apiUrl}/chamados`;
  constructor(private http: HttpClient) {}

  listar(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(this.API).pipe(catchError(() => of([])));
  }

  listarPorCliente(clienteId: number): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${this.API}?clienteId=${clienteId}`).pipe(catchError(() => of([])));
  }

  incluir(c: Chamado): Observable<Chamado> {
    return this.http.post<Chamado>(this.API, c).pipe(catchError(() => of({} as Chamado)));
  }

  editar(c: Chamado): Observable<Chamado> {
    return this.http.put<Chamado>(`${this.API}/${c.id}`, c).pipe(catchError(() => of({} as Chamado)));
  }

  buscarPorId(id: number): Observable<Chamado> {
    return this.http.get<Chamado>(`${this.API}/${id}`).pipe(catchError(() => of({} as Chamado)));
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`).pipe(catchError(() => of(void 0)));
  }
}
