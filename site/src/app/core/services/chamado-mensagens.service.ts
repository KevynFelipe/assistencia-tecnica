import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChamadoMensagem } from '../types/types';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ChamadoMensagensService {
  private readonly API = `${environment.apiUrl}/chamado-mensagens`;
  constructor(private http: HttpClient) {}

  listarTodas(): Observable<ChamadoMensagem[]> {
    return this.http.get<ChamadoMensagem[]>(this.API);
  }

  listarPorChamado(chamadoId: number): Observable<ChamadoMensagem[]> {
    return this.http.get<ChamadoMensagem[]>(`${this.API}?chamadoId=${chamadoId}`);
  }

  incluir(m: ChamadoMensagem): Observable<ChamadoMensagem> {
    return this.http.post<ChamadoMensagem>(this.API, m);
  }
}
