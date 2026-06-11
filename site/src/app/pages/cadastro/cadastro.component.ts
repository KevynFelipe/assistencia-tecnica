import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ClientesService } from '../../core/services/clientes.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="cadastro-page">
      <div class="cadastro-bg"></div>
      <div class="cadastro-container">
        <div class="cadastro-card">
          <div class="cadastro-header">
            <a routerLink="/" class="cadastro-logo">Prime <span class="accent">Assistência</span></a>
            <p class="cadastro-sub">Crie sua conta para acompanhar ordens de serviço</p>
          </div>

          @if (sucesso) {
            <div class="cadastro-sucesso">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <h3>Conta criada com sucesso!</h3>
              <p>Você já pode fazer login.</p>
              <a routerLink="/login" class="btn-cadastro">Ir para Login</a>
            </div>
          } @else {
            @if (erro) {
              <div class="cadastro-erro">{{ erro }}</div>
            }

            <form (ngSubmit)="cadastrar()" class="cadastro-form">
              <div class="form-grid">
                <div class="field">
                  <label>Nome completo</label>
                  <input [(ngModel)]="form.nome" name="nome" placeholder="Seu nome" required/>
                </div>
                <div class="field">
                  <label>E-mail</label>
                  <input [(ngModel)]="form.email" name="email" type="email" placeholder="seu@email.com" required/>
                </div>
                <div class="field">
                  <label>Telefone</label>
                  <input [(ngModel)]="form.telefone" name="telefone" placeholder="(11) 99999-9999"/>
                </div>
                <div class="field">
                  <label>CPF/CNPJ</label>
                  <input [(ngModel)]="form.cpfCnpj" name="cpfCnpj" placeholder="123.456.789-00"/>
                </div>
                <div class="field">
                  <label>Endereço</label>
                  <input [(ngModel)]="form.endereco" name="endereco" placeholder="Rua, número, bairro"/>
                </div>
                <div class="field">
                  <label>Tipo</label>
                  <select [(ngModel)]="form.tipo" name="tipo">
                    <option value="PF">Pessoa Física</option>
                    <option value="PJ">Pessoa Jurídica</option>
                  </select>
                </div>
                <div class="field">
                  <label>Senha</label>
                  <input [(ngModel)]="form.senha" name="senha" type="password" placeholder="Mínimo 4 caracteres" required/>
                </div>
                <div class="field">
                  <label>Confirmar senha</label>
                  <input [(ngModel)]="confirmarSenha" name="confirmarSenha" type="password" placeholder="Repita a senha" required/>
                </div>
              </div>
              <button type="submit" class="btn-cadastro" [disabled]="loading">
                {{ loading ? 'Cadastrando...' : 'Criar Conta' }}
              </button>
            </form>

            <div class="cadastro-footer">
              Já tem conta? <a routerLink="/login">Faça login</a>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cadastro-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--bg); position: relative; overflow: hidden; }
    .cadastro-bg { position: fixed; inset: 0; background: radial-gradient(ellipse at 20% 50%, rgba(6,182,212,.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(14,116,144,.08) 0%, transparent 50%); pointer-events: none; }
    .cadastro-container { position: relative; z-index: 1; width: 100%; max-width: 560px; padding: 24px; }
    .cadastro-card { background: rgba(17,24,39,.9); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,.06); border-radius: 20px; padding: 36px 32px; box-shadow: 0 24px 80px rgba(0,0,0,.5); }
    .cadastro-header { text-align: center; margin-bottom: 28px; }
    .cadastro-logo { font-size: 1.3rem; font-weight: 800; color: var(--text); text-decoration: none; }
    .cadastro-logo .accent { color: var(--primary); }
    .cadastro-sub { font-size: .84rem; color: var(--text-muted); margin-top: 8px; }
    .cadastro-erro { display: flex; align-items: center; gap: 10px; padding: 12px 16px; margin-bottom: 20px; background: rgba(239,68,68,.1); border: 1px solid rgba(239,68,68,.2); border-radius: 10px; color: #f87171; font-size: .85rem; }
    .cadastro-sucesso { text-align: center; padding: 24px 0; display: flex; flex-direction: column; align-items: center; gap: 12px; }
    .cadastro-sucesso h3 { font-size: 1.2rem; color: var(--text); }
    .cadastro-sucesso p { color: var(--text-muted); }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    @media (max-width: 500px) { .form-grid { grid-template-columns: 1fr; } }
    .field { display: flex; flex-direction: column; gap: 6px; }
    .field label { font-size: .78rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: .06em; }
    .field input, .field select { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 8px; padding: 11px 14px; color: var(--text); font-size: .9rem; outline: none; transition: all .2s; }
    .field input:focus, .field select:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(6,182,212,.1); background: rgba(6,182,212,.04); }
    .field input::placeholder { color: var(--text-muted); opacity: .5; }
    .btn-cadastro { display: inline-flex; align-items: center; justify-content: center; width: 100%; padding: 14px 24px; margin-top: 20px; background: linear-gradient(135deg, var(--primary), #0e7490); color: #fff; border: none; border-radius: 10px; font-size: 1rem; font-weight: 600; cursor: pointer; text-decoration: none; transition: all .25s; box-shadow: 0 4px 20px rgba(6,182,212,.25); }
    .btn-cadastro:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(6,182,212,.35); }
    .btn-cadastro:disabled { opacity: .6; cursor: not-allowed; transform: none; }
    .cadastro-footer { text-align: center; margin-top: 20px; font-size: .85rem; color: var(--text-muted); }
    .cadastro-footer a { color: var(--primary); text-decoration: none; font-weight: 600; }
  `]
})
export class CadastroComponent {
  form = { nome: '', email: '', telefone: '', cpfCnpj: '', endereco: '', tipo: 'PF', senha: '' };
  confirmarSenha = '';
  erro = '';
  sucesso = false;
  loading = false;

  constructor(private clientesService: ClientesService, private router: Router) {}

  cadastrar() {
    this.erro = '';
    if (!this.form.nome || !this.form.email || !this.form.senha) {
      this.erro = 'Preencha nome, e-mail e senha.';
      return;
    }
    if (this.form.senha.length < 4) {
      this.erro = 'Senha deve ter no mínimo 4 caracteres.';
      return;
    }
    if (this.form.senha !== this.confirmarSenha) {
      this.erro = 'Senhas não conferem.';
      return;
    }
    this.loading = true;
    this.clientesService.incluir({ ...this.form as any, ativo: true }).subscribe({
      next: () => { this.sucesso = true; this.loading = false; },
      error: () => { this.erro = 'Erro ao cadastrar. Verifique o servidor.'; this.loading = false; }
    });
  }
}
