import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Equipamento } from '../types/types';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EquipamentosService {
  private readonly API = `${environment.apiUrl}/equipamentos`;
  constructor(private http: HttpClient) {}

  listar(): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.API).pipe(catchError(() => of([])));
  }

  listarPorCliente(clienteId: number): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(`${this.API}?clienteId=${clienteId}`).pipe(catchError(() => of([])));
  }

  buscarPorId(id: number | string): Observable<Equipamento> {
    return this.http.get<Equipamento>(`${this.API}/${id}`).pipe(catchError(() => of({} as Equipamento)));
  }

  incluir(item: Equipamento): Observable<Equipamento> {
    return this.http.post<Equipamento>(this.API, item).pipe(catchError(() => of({} as Equipamento)));
  }

  editar(item: Equipamento): Observable<Equipamento> {
    return this.http.put<Equipamento>(`${this.API}/${item.id}`, item).pipe(catchError(() => of({} as Equipamento)));
  }

  excluir(id: number | string): Observable<Equipamento> {
    return this.http.delete<Equipamento>(`${this.API}/${id}`).pipe(catchError(() => of({} as Equipamento)));
  }
}
