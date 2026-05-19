import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="home">
      <div class="hero">
        <div class="hero-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <h1>Assistência Técnica</h1>
        <p class="subtitle">Sistema de gerenciamento de funcionários e clientes</p>
        <div class="hero-actions">
          <a class="btn-hero" routerLink="/funcionarios">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Funcionários
          </a>
          <a class="btn-hero" routerLink="/clientes">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Clientes
          </a>
        </div>
      </div>

      <div class="cards">
        <div class="card" routerLink="/funcionarios">
          <div class="card-icon" style="background: rgba(59,130,246,.1);">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3>Funcionários</h3>
          <p>Gerencie o cadastro de funcionários: liste, cadastre, altere e consulte.</p>
          <span class="card-link">Acessar →</span>
        </div>
        <div class="card" routerLink="/clientes">
          <div class="card-icon" style="background: rgba(59,130,246,.1);">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h3>Clientes</h3>
          <p>Gerencie o cadastro de clientes: liste, cadastre, altere e consulte.</p>
          <span class="card-link">Acessar →</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home { padding: 0; }
    .hero { text-align: center; padding: 80px 24px 60px; }
    .hero-icon { margin-bottom: 20px; }
    h1 { font-size: 2rem; font-weight: 800; color: var(--text); margin-bottom: 10px; }
    .subtitle { color: var(--text-muted); font-size: 1.05rem; margin-bottom: 36px; }
    .hero-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
    .btn-hero { display: inline-flex; align-items: center; gap: 8px; padding: 12px 28px; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; color: var(--text); font-size: .95rem; font-weight: 600; text-decoration: none; transition: all .15s; }
    .btn-hero:hover { border-color: var(--primary); background: rgba(59,130,246,.08); color: var(--primary); }
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; max-width: 800px; margin: 0 auto; padding: 0 24px 60px; }
    .card { padding: 28px; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; cursor: pointer; transition: all .15s; }
    .card:hover { border-color: var(--primary); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.3); }
    .card-icon { width: 52px; height: 52px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
    .card h3 { color: var(--text); font-size: 1.05rem; font-weight: 700; margin-bottom: 8px; }
    .card p { color: var(--text-muted); font-size: .85rem; line-height: 1.5; margin-bottom: 16px; }
    .card-link { color: var(--primary); font-size: .85rem; font-weight: 600; }
  `]
})
export class HomeComponent {}
