import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Funcionario, Cliente } from '../types/types';

export type Papel = 'funcionario' | 'cliente';

export interface AuthUser {
  id: number;
  nome: string;
  papel: Papel;
  cargo?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<AuthUser | null>(null);

  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    const saved = localStorage.getItem('auth_user');
    if (saved) {
      try { this.userSubject.next(JSON.parse(saved)); } catch { localStorage.removeItem('auth_user'); }
    }
  }

  loginFuncionario(email: string, senha: string): Observable<AuthUser | null> {
    return this.http.get<Funcionario[]>(`http://localhost:3000/funcionarios?email=${encodeURIComponent(email)}`).pipe(
      map(list => {
        const found = list.find(f => f.senha === senha);
        if (!found || !found.id) return null;
        const user: AuthUser = { id: found.id, nome: found.nome, papel: 'funcionario', cargo: found.cargo };
        localStorage.setItem('auth_user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }

  loginCliente(email: string, senha: string): Observable<AuthUser | null> {
    return this.http.get<Cliente[]>(`http://localhost:3000/clientes?email=${encodeURIComponent(email)}`).pipe(
      map(list => {
        const found = list.find(c => c.senha === senha && c.ativo);
        if (!found || !found.id) return null;
        const user: AuthUser = { id: found.id, nome: found.nome, papel: 'cliente' };
        localStorage.setItem('auth_user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('auth_user');
    this.userSubject.next(null);
  }

  getUser(): AuthUser | null {
    return this.userSubject.value;
  }

  isLoggedIn(): boolean {
    return this.userSubject.value !== null;
  }

  isCliente(): boolean {
    return this.userSubject.value?.papel === 'cliente';
  }

  isFuncionario(): boolean {
    return this.userSubject.value?.papel === 'funcionario';
  }
}
