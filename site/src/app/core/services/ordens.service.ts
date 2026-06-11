import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdemServico } from '../types/types';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class OrdensService {
  private readonly API = `${environment.apiUrl}/ordens`;
  constructor(private http: HttpClient) {}

  listar(): Observable<OrdemServico[]> {
    return this.http.get<OrdemServico[]>(this.API);
  }

  listarPorCliente(clienteId: number): Observable<OrdemServico[]> {
    return this.http.get<OrdemServico[]>(`${this.API}?clienteId=${clienteId}`);
  }

  buscarPorId(id: number | string): Observable<OrdemServico> {
    return this.http.get<OrdemServico>(`${this.API}/${id}`);
  }

  incluir(ordem: OrdemServico): Observable<OrdemServico> {
    return this.http.post<OrdemServico>(this.API, ordem);
  }

  editar(ordem: OrdemServico): Observable<OrdemServico> {
    return this.http.put<OrdemServico>(`${this.API}/${ordem.id}`, ordem);
  }

  excluir(id: number | string): Observable<OrdemServico> {
    return this.http.delete<OrdemServico>(`${this.API}/${id}`);
  }
}
