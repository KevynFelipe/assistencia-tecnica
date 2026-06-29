import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ChamadoMensagem } from '../types/types';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ChamadoMensagensService {
  private readonly API = `${environment.apiUrl}/chamado-mensagens`;
  constructor(private http: HttpClient) {}

  listarTodas(): Observable<ChamadoMensagem[]> {
    return this.http.get<ChamadoMensagem[]>(this.API).pipe(
      catchError(() => of([]))
    );
  }

  listarPorChamado(chamadoId: number): Observable<ChamadoMensagem[]> {
    return this.http.get<ChamadoMensagem[]>(`${this.API}?chamadoId=${chamadoId}`).pipe(
      catchError(() => of([]))
    );
  }

  incluir(m: ChamadoMensagem): Observable<ChamadoMensagem> {
    return this.http.post<ChamadoMensagem>(this.API, m).pipe(
      catchError(() => of({} as ChamadoMensagem))
    );
  }
}
