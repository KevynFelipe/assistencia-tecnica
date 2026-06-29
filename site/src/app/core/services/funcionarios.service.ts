import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Funcionario } from '../types/types';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FuncionariosService {
  private readonly API = `${environment.apiUrl}/funcionarios`;
  constructor(private http: HttpClient) {}

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.API).pipe(catchError(() => of([])));
  }

  buscarPorId(id: number | string): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.API}/${id}`).pipe(catchError(() => of({} as Funcionario)));
  }

  incluir(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.API, funcionario).pipe(catchError(() => of({} as Funcionario)));
  }

  editar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${this.API}/${funcionario.id}`, funcionario).pipe(catchError(() => of({} as Funcionario)));
  }

  excluir(id: number | string): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${this.API}/${id}`).pipe(catchError(() => of({} as Funcionario)));
  }
}
