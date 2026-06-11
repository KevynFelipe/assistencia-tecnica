import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstoqueItem } from '../types/types';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EstoqueService {
  private readonly API = `${environment.apiUrl}/estoque`;
  constructor(private http: HttpClient) {}

  listar(): Observable<EstoqueItem[]> {
    return this.http.get<EstoqueItem[]>(this.API);
  }

  buscarPorId(id: number | string): Observable<EstoqueItem> {
    return this.http.get<EstoqueItem>(`${this.API}/${id}`);
  }

  incluir(item: EstoqueItem): Observable<EstoqueItem> {
    return this.http.post<EstoqueItem>(this.API, item);
  }

  editar(item: EstoqueItem): Observable<EstoqueItem> {
    return this.http.put<EstoqueItem>(`${this.API}/${item.id}`, item);
  }

  excluir(id: number | string): Observable<EstoqueItem> {
    return this.http.delete<EstoqueItem>(`${this.API}/${id}`);
  }
}
