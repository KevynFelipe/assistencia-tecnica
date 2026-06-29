import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Mensagem } from '../types/types';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MensagensService {
  private readonly API = `${environment.apiUrl}/mensagens`;
  constructor(private http: HttpClient) {}

  listar(): Observable<Mensagem[]> {
    return this.http.get<Mensagem[]>(this.API).pipe(catchError(() => of([])));
  }

  listarPorOrdem(ordemId: number): Observable<Mensagem[]> {
    return this.http.get<Mensagem[]>(`${this.API}?ordemId=${ordemId}`).pipe(catchError(() => of([])));
  }

  incluir(m: Mensagem): Observable<Mensagem> {
    return this.http.post<Mensagem>(this.API, m).pipe(catchError(() => of({} as Mensagem)));
  }
}
