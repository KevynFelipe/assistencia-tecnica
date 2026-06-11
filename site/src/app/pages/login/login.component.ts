import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="login-page">
      <div class="login-bg"></div>
      <div class="login-container">
        <div class="login-card">
          <div class="login-header">
            <div class="login-welcome">
              <span class="welcome-tag">Bem-vindo à</span>
              <div class="login-logo">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <span>Prime <span class="accent">Assistência</span></span>
              </div>
            </div>
            <p class="login-sub">{{ papel === 'funcionario' ? 'Faça login para acessar o painel de ordens de serviço' : 'Acompanhe seus pedidos, converse conosco e abra chamados' }}</p>
          </div>

          <!-- Role Selector -->
          <div class="papel-switch">
            <button class="papel-btn" [class.active]="papel === 'funcionario'" (click)="papel = 'funcionario'">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Sou Técnico
            </button>
            <button class="papel-btn" [class.active]="papel === 'cliente'" (click)="papel = 'cliente'">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Sou Cliente
            </button>
          </div>

          @if (erro) {
            <div class="login-erro">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              {{ erro }}
            </div>
          }

          <form (ngSubmit)="entrar()" class="login-form">
            <div class="field">
              <label for="email">E-mail</label>
              <div class="field-input">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <input id="email" type="email" [(ngModel)]="email" name="email" placeholder="seu@email.com" required autocomplete="email" autofocus/>
              </div>
            </div>
            <div class="field">
              <label for="senha">Senha</label>
              <div class="field-input">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input id="senha" type="password" [(ngModel)]="senha" name="senha" placeholder="••••••••" required/>
              </div>
            </div>
            <button type="submit" class="btn-login" [disabled]="loading">
              @if (loading) {
                <span class="spinner"></span>
                Entrando...
              } @else {
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                Entrar
              }
            </button>
          </form>

          <div class="login-footer">
            <a routerLink="/">← Voltar ao site</a>
            @if (papel === 'cliente') {
              <span class="sep">·</span>
              <a routerLink="/cadastro">Cadastre-se</a>
            }
          </div>

            @if (papel === 'cliente') {
              <div class="login-info">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                Ao entrar, você poderá acompanhar o status dos seus pedidos, conversar com nossos técnicos e abrir chamados de suporte.
              </div>
            }

            @if (attemptsRestantes < 5 && attemptsRestantes > 0) {
              <div class="login-info login-info-warn">
                Tentativas restantes: {{ attemptsRestantes }}
              </div>
            }
            @if (attemptsRestantes === 0) {
              <div class="login-erro">
                Muitas tentativas. Aguarde 1 minuto.
              </div>
            }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-page {
      min-height: 100vh; display: flex; align-items: center; justify-content: center;
      position: relative; overflow: hidden;
      background: var(--bg);
    }
    .login-bg {
      position: fixed; inset: 0;
      background:
        radial-gradient(ellipse at 20% 50%, rgba(6,182,212,.1) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(14,116,144,.08) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 80%, rgba(8,145,178,.06) 0%, transparent 50%);
      pointer-events: none;
    }
    .login-container {
      position: relative; z-index: 1;
      width: 100%; max-width: 440px; padding: 24px;
    }
    .login-card {
      background: rgba(17,24,39,.9);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255,255,255,.06);
      border-radius: 20px; padding: 36px 32px;
      box-shadow: 0 24px 80px rgba(0,0,0,.5);
    }
    .login-header { text-align: center; margin-bottom: 24px; }
    .login-welcome { display: flex; flex-direction: column; align-items: center; gap: 4px; margin-bottom: 12px; }
    .welcome-tag { font-size: .78rem; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: .08em; }
    .login-logo { display: flex; align-items: center; gap: 10px; font-size: 1.3rem; font-weight: 800; color: var(--text); }
    .login-logo .accent { color: var(--primary); }
    .login-sub { font-size: .84rem; color: var(--text-muted); line-height: 1.4; }

    .papel-switch {
      display: flex; gap: 8px; margin-bottom: 24px;
      background: rgba(255,255,255,.03); border-radius: 10px; padding: 4px;
    }
    .papel-btn {
      flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
      padding: 10px; border-radius: 8px; border: none;
      background: transparent; color: var(--text-muted); font-size: .85rem; font-weight: 600;
      cursor: pointer; transition: all .2s;
    }
    .papel-btn:hover { color: var(--text); background: rgba(255,255,255,.04); }
    .papel-btn.active { background: var(--primary-light); color: var(--primary); }
    .papel-btn svg { flex-shrink: 0; }

    .login-erro {
      display: flex; align-items: center; gap: 10px;
      padding: 12px 16px; margin-bottom: 20px;
      background: rgba(239,68,68,.1); border: 1px solid rgba(239,68,68,.2);
      border-radius: 10px; color: #f87171; font-size: .85rem;
    }

    .login-form { display: flex; flex-direction: column; gap: 18px; }
    .field { display: flex; flex-direction: column; gap: 7px; }
    .field label { font-size: .8rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: .06em; }
    .field-input {
      display: flex; align-items: center; gap: 12px;
      background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
      border-radius: 10px; padding: 0 14px;
      transition: all .2s;
    }
    .field-input:focus-within { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(6,182,212,.1); background: rgba(6,182,212,.04); }
    .field-input svg { color: var(--text-muted); flex-shrink: 0; }
    .field-input input {
      flex: 1; background: transparent; border: none; outline: none;
      padding: 14px 0; color: var(--text); font-size: .95rem;
    }
    .field-input input::placeholder { color: var(--text-muted); opacity: .5; }

    .btn-login {
      display: inline-flex; align-items: center; justify-content: center; gap: 10px;
      width: 100%; padding: 15px 24px; margin-top: 4px;
      background: linear-gradient(135deg, var(--primary), #0e7490);
      color: #fff; border: none; border-radius: 10px;
      font-size: 1rem; font-weight: 600; cursor: pointer;
      transition: all .25s;       box-shadow: 0 4px 20px rgba(6,182,212,.25);
    }
    .btn-login:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(6,182,212,.35); }
    .btn-login:disabled { opacity: .6; cursor: not-allowed; transform: none; box-shadow: none; }

    .spinner {
      width: 18px; height: 18px; border: 2px solid rgba(255,255,255,.3);
      border-top-color: #fff; border-radius: 50%;
      animation: spin .6s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .login-footer { text-align: center; margin-top: 24px; }
    .login-footer a { color: var(--text-muted); font-size: .85rem; text-decoration: none; transition: color .2s; }
    .login-footer a:hover { color: var(--primary); }

    .login-info-warn { background: rgba(249,115,22,.08) !important; border-color: rgba(249,115,22,.15) !important; color: #fb923c !important; }
    .login-info-warn svg { color: #fb923c !important; }
    .login-info {
      display: flex; align-items: flex-start; gap: 8px;
      margin-top: 20px; padding: 12px 14px;
      background: rgba(6,182,212,.06); border: 1px solid rgba(6,182,212,.1);
      border-radius: 10px; font-size: .78rem; color: var(--text-muted); line-height: 1.5;
    }
    .login-info svg { flex-shrink: 0; margin-top: 2px; color: var(--primary); }
  `]
})
export class LoginComponent {
  papel: 'funcionario' | 'cliente' = 'funcionario';
  email = '';
  senha = '';
  erro = '';
  loading = false;
  attemptsRestantes = 5;

  constructor(
    public auth: AuthService,
    private router: Router
  ) {
    this.attemptsRestantes = this.auth.getAttemptsRestantes();
  }

  entrar() {
    if (!this.email || !this.senha) {
      this.erro = 'Preencha e-mail e senha.';
      return;
    }
    this.loading = true;
    this.erro = '';

    const obs = this.papel === 'funcionario'
      ? this.auth.loginFuncionario(this.email, this.senha)
      : this.auth.loginCliente(this.email, this.senha);

    obs.subscribe({
      next: user => {
        this.loading = false;
        if (user) {
          const destino = user.papel === 'gerente' ? '/area-gerente' : user.papel === 'funcionario' ? '/area-tecnico' : '/minha-conta';
          this.router.navigate([destino]);
        } else {
          this.erro = 'E-mail ou senha incorretos.';
          this.attemptsRestantes = this.auth.getAttemptsRestantes();
        }
      },
      error: () => {
        this.loading = false;
        this.erro = 'Erro ao conectar. Verifique o servidor.';
      }
    });
  }
}
