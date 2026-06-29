import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OrdemServico } from '../types/types';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class OrdensService {
  private readonly API = `${environment.apiUrl}/ordens`;
  constructor(private http: HttpClient) {}

  listar(): Observable<OrdemServico[]> {
    return this.http.get<OrdemServico[]>(this.API).pipe(catchError(() => of([])));
  }

  listarPorCliente(clienteId: number): Observable<OrdemServico[]> {
    return this.http.get<OrdemServico[]>(`${this.API}?clienteId=${clienteId}`).pipe(catchError(() => of([])));
  }

  buscarPorId(id: number | string): Observable<OrdemServico> {
    return this.http.get<OrdemServico>(`${this.API}/${id}`).pipe(catchError(() => of({} as OrdemServico)));
  }

  incluir(ordem: OrdemServico): Observable<OrdemServico> {
    return this.http.post<OrdemServico>(this.API, ordem).pipe(catchError(() => of({} as OrdemServico)));
  }

  editar(ordem: OrdemServico): Observable<OrdemServico> {
    return this.http.put<OrdemServico>(`${this.API}/${ordem.id}`, ordem).pipe(catchError(() => of({} as OrdemServico)));
  }

  excluir(id: number | string): Observable<OrdemServico> {
    return this.http.delete<OrdemServico>(`${this.API}/${id}`).pipe(catchError(() => of({} as OrdemServico)));
  }
}
