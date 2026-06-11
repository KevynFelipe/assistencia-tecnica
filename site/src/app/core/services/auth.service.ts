import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Funcionario, Cliente } from '../types/types';
import { environment } from '../../../environments/environment';

export type Papel = 'funcionario' | 'cliente' | 'gerente';

/** Usuário autenticado */
export interface AuthUser {
  id: number;
  nome: string;
  papel: Papel;
  cargo?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<AuthUser | null>(null);
  private loginAttempts = 0;
  private readonly MAX_ATTEMPTS = 5;
  private readonly LOCKOUT_MS = 60000;

  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    const saved = localStorage.getItem('auth_user');
    if (saved) {
      try { this.userSubject.next(JSON.parse(saved)); } catch { localStorage.removeItem('auth_user'); }
    }
  }

  /** Autentica funcionário por email + senha */
  loginFuncionario(email: string, senha: string): Observable<AuthUser | null> {
    if (this.isLocked()) {
      return new Observable(sub => sub.next(null));
    }
    return this.http.get<Funcionario[]>(`${environment.apiUrl}/funcionarios?email=${encodeURIComponent(email)}`).pipe(
      map(list => {
        const found = list.find(f => f.senha === senha);
        if (!found || !found.id) {
          this.registrarTentativa();
          return null;
        }
        this.loginAttempts = 0;
        const papel = found.cargo?.toLowerCase() === 'gerente' ? 'gerente' : 'funcionario';
        const user: AuthUser = { id: found.id, nome: found.nome, papel: papel as Papel, cargo: found.cargo };
        localStorage.setItem('auth_user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }

  /** Autentica cliente por email + senha */
  loginCliente(email: string, senha: string): Observable<AuthUser | null> {
    if (this.isLocked()) {
      return new Observable(sub => sub.next(null));
    }
    return this.http.get<Cliente[]>(`${environment.apiUrl}/clientes?email=${encodeURIComponent(email)}`).pipe(
      map(list => {
        const found = list.find(c => c.senha === senha && c.ativo);
        if (!found || !found.id) {
          this.registrarTentativa();
          return null;
        }
        this.loginAttempts = 0;
        const user: AuthUser = { id: found.id, nome: found.nome, papel: 'cliente' };
        localStorage.setItem('auth_user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }

  private isLocked(): boolean {
    return this.loginAttempts >= this.MAX_ATTEMPTS;
  }

  private registrarTentativa(): void {
    this.loginAttempts++;
    if (this.isLocked()) {
      setTimeout(() => this.loginAttempts = 0, this.LOCKOUT_MS);
    }
  }

  getAttemptsRestantes(): number {
    return Math.max(0, this.MAX_ATTEMPTS - this.loginAttempts);
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

  isGerente(): boolean {
    return this.userSubject.value?.papel === 'gerente';
  }

  isFuncionarioOuGerente(): boolean {
    const p = this.userSubject.value?.papel;
    return p === 'funcionario' || p === 'gerente';
  }
}
