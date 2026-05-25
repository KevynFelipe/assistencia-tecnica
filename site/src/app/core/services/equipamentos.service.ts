import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipamento } from '../types/types';

@Injectable({ providedIn: 'root' })
export class EquipamentosService {
  private readonly API = 'http://localhost:3000/equipamentos';
  constructor(private http: HttpClient) {}

  listar(): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.API);
  }

  listarPorCliente(clienteId: number): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(`${this.API}?clienteId=${clienteId}`);
  }

  buscarPorId(id: number | string): Observable<Equipamento> {
    return this.http.get<Equipamento>(`${this.API}/${id}`);
  }

  incluir(item: Equipamento): Observable<Equipamento> {
    return this.http.post<Equipamento>(this.API, item);
  }

  editar(item: Equipamento): Observable<Equipamento> {
    return this.http.put<Equipamento>(`${this.API}/${item.id}`, item);
  }

  excluir(id: number | string): Observable<Equipamento> {
    return this.http.delete<Equipamento>(`${this.API}/${id}`);
  }
}
