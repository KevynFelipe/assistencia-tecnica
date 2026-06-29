import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from '../types/types';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ClientesService {
  private readonly API = `${environment.apiUrl}/clientes`;
  constructor(private http: HttpClient) {}

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API).pipe(catchError(() => of([])));
  }

  buscarPorId(id: number | string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API}/${id}`).pipe(catchError(() => of({} as Cliente)));
  }

  incluir(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API, cliente).pipe(catchError(() => of({} as Cliente)));
  }

  editar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API}/${cliente.id}`, cliente).pipe(catchError(() => of({} as Cliente)));
  }

  excluir(id: number | string): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.API}/${id}`).pipe(catchError(() => of({} as Cliente)));
  }
}
