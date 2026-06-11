import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chamado } from '../types/types';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ChamadosService {
  private readonly API = `${environment.apiUrl}/chamados`;
  constructor(private http: HttpClient) {}

  listar(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(this.API);
  }

  listarPorCliente(clienteId: number): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${this.API}?clienteId=${clienteId}`);
  }

  incluir(c: Chamado): Observable<Chamado> {
    return this.http.post<Chamado>(this.API, c);
  }

  editar(c: Chamado): Observable<Chamado> {
    return this.http.put<Chamado>(`${this.API}/${c.id}`, c);
  }

  buscarPorId(id: number): Observable<Chamado> {
    return this.http.get<Chamado>(`${this.API}/${id}`);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
