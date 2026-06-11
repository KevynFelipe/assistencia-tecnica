import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensagem } from '../types/types';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MensagensService {
  private readonly API = `${environment.apiUrl}/mensagens`;
  constructor(private http: HttpClient) {}

  listar(): Observable<Mensagem[]> {
    return this.http.get<Mensagem[]>(this.API);
  }

  listarPorOrdem(ordemId: number): Observable<Mensagem[]> {
    return this.http.get<Mensagem[]>(`${this.API}?ordemId=${ordemId}`);
  }

  incluir(m: Mensagem): Observable<Mensagem> {
    return this.http.post<Mensagem>(this.API, m);
  }
}
