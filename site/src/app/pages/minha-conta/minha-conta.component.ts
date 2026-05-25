import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { OrdensService } from '../../core/services/ordens.service';
import { MensagensService } from '../../core/services/mensagens.service';
import { ChamadosService } from '../../core/services/chamados.service';
import { EquipamentosService } from '../../core/services/equipamentos.service';
import { OrdemServico, Mensagem, Chamado, Equipamento } from '../../core/types/types';

@Component({
  selector: 'app-minha-conta',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="cliente-page">
      <header class="cliente-header">
        <div class="cliente-header-inner">
          <a class="cliente-logo" routerLink="/">Prime <span class="accent">Assistência</span></a>
          <div class="cliente-header-right">
            <span class="cliente-badge">Minha Conta</span>
            @if (auth.getUser(); as user) {
              <button class="cliente-logout" (click)="sair()" title="Sair">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              </button>
            }
          </div>
        </div>
      </header>

      <main class="cliente-main">
        <div class="cliente-welcome">
          <h1>Olá, {{ auth.getUser()?.nome }}!</h1>
          <p>Aqui você pode acompanhar seus pedidos, conversar com a equipe e abrir chamados.</p>
        </div>

        <!-- Abas -->
        <div class="cliente-tabs">
          <button class="cliente-tab" [class.active]="aba === 'pedidos'" (click)="aba='pedidos'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
            Meus Pedidos
          </button>
          <button class="cliente-tab" [class.active]="aba === 'chat'" (click)="aba='chat'; carregarChat()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Conversar
          </button>
          <button class="cliente-tab" [class.active]="aba === 'chamados'" (click)="aba='chamados'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Chamados
          </button>
        </div>

        <!-- Toast -->
        @if (toast.show) {
          <div class="toast" [class]="'toast-' + toast.tipo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              @if (toast.tipo === 'success') {
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              } @else {
                <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
              }
            </svg>
            <span>{{ toast.message }}</span>
          </div>
        }

        <!-- Pedidos -->
        @if (aba === 'pedidos') {
          <div class="section-card">
            <h2>Meus Pedidos</h2>
            @if (pedidos.length === 0) {
              <p class="empty-state">Nenhum pedido encontrado.</p>
            } @else {
              <div class="pedidos-grid">
                @for (p of pedidos; track p.id) {
                  <div class="pedido-card" [class]="'pedido-' + statusClass(p.status)">
                    <div class="pedido-top">
                      <span class="pedido-id">#{{ p.id }}</span>
                      <span class="pedido-status" [class]="'status-' + statusClass(p.status)">{{ p.status }}</span>
                    </div>
                    <div class="pedido-body">
                      <div class="pedido-info">
                        <strong>{{ p.aparelho }}</strong>
                        <span>{{ p.tipoAparelho }}</span>
                      </div>
                      <p class="pedido-defeito">{{ p.defeito }}</p>
                      @if (p.diagnosticos) {
                        <div class="pedido-diagnostico">
                          <strong>Diagnóstico:</strong> {{ p.diagnosticos }}
                        </div>
                      }
                    </div>
                    <div class="pedido-footer">
                      <span class="pedido-data">Entrada: {{ p.dataEntrada }}</span>
                      @if (p.valorTotal) {
                        <span class="pedido-valor">R$ {{ p.valorTotal.toFixed(2) }}</span>
                      }
                      @if (p.tempoEstimado) {
                        <span class="pedido-prazo">Prazo: {{ p.tempoEstimado }} dias</span>
                      }
                    </div>
                  </div>
                }
              </div>
            }
          </div>
        }

        <!-- Chat -->
        @if (aba === 'chat') {
          <div class="section-card">
            <h2>Conversar com a Equipe</h2>

            @if (pedidos.length === 0) {
              <p class="empty-state">Você não possui pedidos para conversar.</p>
            } @else {
              <div class="chat-select">
                <label>Pedido:</label>
                <select [(ngModel)]="chatOrdemId" (change)="carregarChat()" class="inp">
                  <option [ngValue]="0" disabled>Selecione um pedido</option>
                  @for (p of pedidos; track p.id) {
                    <option [ngValue]="p.id">#{{ p.id }} — {{ p.aparelho }}</option>
                  }
                </select>
              </div>

              @if (chatOrdemId) {
                <div class="chat-box">
                  <div class="chat-msgs" #chatBox>
                    @if (mensagens.length === 0) {
                      <p class="chat-empty">Nenhuma mensagem ainda. Envie sua dúvida!</p>
                    }
                    @for (m of mensagens; track m.id) {
                      <div class="chat-msg" [class.chat-cliente]="m.remetente === 'cliente'" [class.chat-tecnico]="m.remetente === 'tecnico'">
                        <div class="chat-msg-header">
                          <strong>{{ m.remetenteNome }}</strong>
                          <span class="chat-msg-time">{{ m.data | slice:0:16 }}</span>
                        </div>
                        <p>{{ m.texto }}</p>
                      </div>
                    }
                  </div>
                  <div class="chat-input">
                    <input [(ngModel)]="chatTexto" placeholder="Digite sua mensagem..." class="inp" (keyup.enter)="enviarMsg()"/>
                    <button class="btn-primary" [disabled]="!chatTexto.trim()" (click)="enviarMsg()">Enviar</button>
                  </div>
                </div>
              }
            }
          </div>
        }

        <!-- Chamados -->
        @if (aba === 'chamados') {
          <div class="section-card">
            <div class="chamados-header">
              <h2>Meus Chamados</h2>
              <button class="btn-primary" (click)="showChamadoForm = !showChamadoForm">
                {{ showChamadoForm ? 'Cancelar' : '+ Novo Chamado' }}
              </button>
            </div>

            @if (showChamadoForm) {
              <div class="chamado-form">
                <select [(ngModel)]="chamadoForm.equipamentoId" class="inp">
                  <option [ngValue]="0">Sem equipamento (opcional)</option>
                  @for (e of meusEquipamentos; track e.id) {
                    <option [ngValue]="e.id">{{ e.marca }} {{ e.modelo }} ({{ e.serial || e.imei || '—' }})</option>
                  }
                </select>
                <textarea [(ngModel)]="chamadoForm.descricao" placeholder="Descreva o problema em detalhes..." class="inp inp-area" rows="3"></textarea>
                <div class="form-actions">
                  <button class="btn-primary" [disabled]="!chamadoForm.descricao.trim()" (click)="abrirChamado()">Abrir Chamado</button>
                </div>
              </div>
            }

            @if (meusChamados.length === 0) {
              <p class="empty-state">Nenhum chamado aberto.</p>
            } @else {
              <div class="chamados-lista">
                @for (ch of meusChamados; track ch.id) {
                  <div class="chamado-card">
                    <div class="chamado-top">
                      <span class="chamado-id">#{{ ch.id }}</span>
                      <span class="chamado-status" [class]="chamadoStatusClass(ch.status)">{{ ch.status }}</span>
                    </div>
                    <p class="chamado-desc">{{ ch.descricao }}</p>
                    @if (ch.equipamentoNome) {
                      <span class="chamado-equip">Equipamento: {{ ch.equipamentoNome }}</span>
                    }
                    <span class="chamado-data">{{ ch.data }}</span>
                  </div>
                }
              </div>
            }
          </div>
        }
      </main>
    </div>
  `,
  styles: [`
    .cliente-page { min-height: 100vh; background: var(--bg); }

    .cliente-header {
      position: sticky; top: 0; z-index: 100;
      background: rgba(19,19,26,.9); backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }
    .cliente-header-inner {
      max-width: 980px; margin: 0 auto; padding: 0 24px;
      height: 64px; display: flex; align-items: center; justify-content: space-between;
    }
    .cliente-logo { font-size: 1.1rem; font-weight: 700; color: var(--text); text-decoration: none; }
    .cliente-logo .accent { color: var(--primary); }
    .cliente-header-right { display: flex; align-items: center; gap: 14px; }
    .cliente-badge {
      font-size: .8rem; font-weight: 600; padding: 6px 16px;
      background: rgba(59,130,246,.15); color: var(--primary);
      border-radius: 12px;
    }
    .cliente-logout {
      display: flex; align-items: center; justify-content: center;
      width: 34px; height: 34px; border-radius: 8px;
      background: transparent; border: 1px solid var(--border);
      color: var(--text-muted); cursor: pointer; transition: all .2s;
    }
    .cliente-logout:hover { background: rgba(239,68,68,.1); color: #f87171; border-color: rgba(239,68,68,.2); }

    .cliente-main { max-width: 980px; margin: 0 auto; padding: 32px 24px; }
    .cliente-welcome { margin-bottom: 28px; }
    .cliente-welcome h1 { font-size: 1.6rem; font-weight: 700; color: var(--text); margin-bottom: 6px; }
    .cliente-welcome p { color: var(--text-muted); font-size: .95rem; }

    .cliente-tabs { display: flex; gap: 0; margin-bottom: 24px; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 4px; }
    .cliente-tab {
      flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
      padding: 12px 20px; background: transparent; color: var(--text-muted);
      border: none; cursor: pointer; font-size: .85rem; font-weight: 600;
      border-radius: 8px; transition: all .2s;
    }
    .cliente-tab:hover { color: var(--text); background: var(--surface-hover); }
    .cliente-tab.active { color: #fff; background: var(--primary); }
    .cliente-tab svg { flex-shrink: 0; }

    .section-card {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 16px; padding: 28px;
    }
    .section-card h2 { font-size: 1.2rem; font-weight: 700; color: var(--text); margin-bottom: 20px; }
    .empty-state { text-align: center; padding: 40px; color: var(--text-muted); }

    .pedidos-grid { display: flex; flex-direction: column; gap: 14px; }
    .pedido-card {
      background: var(--bg); border: 1px solid var(--border);
      border-radius: 12px; padding: 20px; transition: all .2s;
    }
    .pedido-card:hover { border-color: rgba(59,130,246,.2); }
    .pedido-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
    .pedido-id { font-weight: 700; color: var(--text); font-size: .95rem; }
    .pedido-status {
      display: inline-block; padding: 4px 12px; border-radius: 20px;
      font-size: .75rem; font-weight: 600;
    }
    .status-na-fila { background: rgba(59,130,246,.12); color: #60a5fa; }
    .status-em-análise { background: rgba(234,179,8,.12); color: #fbbf24; }
    .status-orçamento-aprovado { background: rgba(168,85,247,.12); color: #c084fc; }
    .status-pronto { background: rgba(34,197,94,.12); color: #4ade80; }
    .status-entregue { background: rgba(107,114,128,.12); color: #9ca3af; }
    .pedido-body { margin-bottom: 12px; }
    .pedido-info { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px; }
    .pedido-info strong { font-size: 1rem; color: var(--text); }
    .pedido-info span { font-size: .8rem; color: var(--text-muted); }
    .pedido-defeito { font-size: .85rem; color: var(--text-muted); line-height: 1.5; }
    .pedido-diagnostico {
      margin-top: 10px; padding: 10px 14px;
      background: rgba(59,130,246,.05); border-radius: 8px;
      font-size: .83rem; color: var(--text-muted); line-height: 1.5;
    }
    .pedido-diagnostico strong { color: var(--text); }
    .pedido-footer { display: flex; gap: 20px; font-size: .8rem; color: var(--text-muted); }
    .pedido-valor { font-weight: 700; color: var(--primary); }
    .pedido-prazo { color: var(--text-muted); }

    .chat-select { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
    .chat-select label { font-weight: 600; color: var(--text-muted); font-size: .85rem; white-space: nowrap; }
    .inp {
      background: var(--bg); border: 1px solid var(--border);
      border-radius: 8px; padding: 11px 16px;
      color: var(--text); font-size: .9rem;
      outline: none; transition: all .2s; width: 100%;
    }
    .inp:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(59,130,246,.1); }
    .inp-area { resize: vertical; font-family: inherit; }
    .chat-box {
      border: 1px solid var(--border); border-radius: 12px; overflow: hidden;
    }
    .chat-msgs {
      max-height: 360px; overflow-y: auto; padding: 16px;
      display: flex; flex-direction: column; gap: 12px;
    }
    .chat-empty { text-align: center; color: var(--text-muted); font-size: .85rem; padding: 20px; }
    .chat-msg {
      max-width: 80%; padding: 12px 16px; border-radius: 12px;
      font-size: .87rem; line-height: 1.5;
    }
    .chat-cliente {
      align-self: flex-end; background: rgba(59,130,246,.12);
      border-bottom-right-radius: 4px;
    }
    .chat-tecnico {
      align-self: flex-start; background: var(--surface-hover);
      border: 1px solid var(--border); border-bottom-left-radius: 4px;
    }
    .chat-msg-header { display: flex; gap: 8px; margin-bottom: 4px; font-size: .78rem; }
    .chat-msg-header strong { color: var(--text); }
    .chat-msg-time { color: var(--text-muted); }
    .chat-msg p { color: var(--text-muted); }
    .chat-input {
      display: flex; gap: 8px; padding: 12px 16px;
      border-top: 1px solid var(--border); background: var(--bg);
    }

    .chamados-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
    .chamados-header h2 { margin-bottom: 0; }
    .chamado-form { display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; padding: 20px; background: var(--bg); border: 1px solid var(--border); border-radius: 12px; }
    .form-actions { display: flex; gap: 10px; }
    .chamados-lista { display: flex; flex-direction: column; gap: 12px; }
    .chamado-card {
      padding: 16px 20px; background: var(--bg); border: 1px solid var(--border);
      border-radius: 10px; display: flex; flex-direction: column; gap: 8px;
    }
    .chamado-top { display: flex; align-items: center; justify-content: space-between; }
    .chamado-id { font-weight: 700; font-size: .9rem; color: var(--text); }
    .chamado-status {
      display: inline-block; padding: 3px 10px; border-radius: 12px;
      font-size: .72rem; font-weight: 600;
    }
    .ch-status-aberto { background: rgba(59,130,246,.12); color: #60a5fa; }
    .ch-status-em-andamento { background: rgba(234,179,8,.12); color: #fbbf24; }
    .ch-status-resolvido { background: rgba(34,197,94,.12); color: #4ade80; }
    .ch-status-fechado { background: rgba(107,114,128,.12); color: #9ca3af; }
    .chamado-desc { font-size: .85rem; color: var(--text-muted); line-height: 1.5; }
    .chamado-equip { font-size: .8rem; color: var(--text-muted); }
    .chamado-data { font-size: .78rem; color: var(--text-muted); }

    .btn-primary {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 11px 24px; background: var(--primary); color: #fff;
      border: none; border-radius: 8px; font-size: .9rem; font-weight: 600;
      cursor: pointer; transition: all .2s; white-space: nowrap;
    }
    .btn-primary:hover { background: var(--primary-hover); transform: translateY(-1px); }
    .btn-primary:disabled { opacity: .5; cursor: not-allowed; transform: none; }

    .toast {
      position: fixed; top: 80px; right: 24px; z-index: 2000;
      display: flex; align-items: center; gap: 10px;
      padding: 14px 20px; border-radius: 10px;
      font-size: .9rem; font-weight: 500;
      box-shadow: 0 8px 30px rgba(0,0,0,.3);
      animation: slideIn .3s ease-out;
    }
    .toast-success { background: rgba(34,197,94,.12); border: 1px solid rgba(34,197,94,.2); color: #4ade80; }
    .toast-error { background: rgba(239,68,68,.12); border: 1px solid rgba(239,68,68,.2); color: #f87171; }
    @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
  `]
})
export class MinhaContaComponent implements OnInit {
  aba: 'pedidos' | 'chat' | 'chamados' = 'pedidos';

  pedidos: OrdemServico[] = [];
  messagens: Mensagem[] = [];
  meusChamados: Chamado[] = [];
  meusEquipamentos: any[] = [];

  chatOrdemId = 0;
  chatTexto = '';
  mensagens: Mensagem[] = [];

  showChamadoForm = false;
  chamadoForm = { equipamentoId: 0, descricao: '' };

  toast = { show: false, message: '', tipo: 'success' as 'success' | 'error' };

  constructor(
    public auth: AuthService,
    private ordensService: OrdensService,
    private mensagensService: MensagensService,
    private chamadosService: ChamadosService,
    private equipamentosService: EquipamentosService,
    private router: Router
  ) {}

  ngOnInit() {
    const user = this.auth.getUser();
    if (!user) { this.router.navigate(['/login']); return; }
    this.carregarDados();
  }

  private mostrarToast(message: string, tipo: 'success' | 'error' = 'success') {
    this.toast = { show: true, message, tipo };
    setTimeout(() => this.toast.show = false, 3500);
  }

  private carregarDados() {
    const userId = this.auth.getUser()?.id;
    if (!userId) return;

    this.ordensService.listarPorCliente(userId).subscribe(d => this.pedidos = d);
    this.chamadosService.listarPorCliente(userId).subscribe(d => this.meusChamados = d);
    this.equipamentosService.listarPorCliente(userId).subscribe(d => this.meusEquipamentos = d);
  }

  statusClass(s: string): string {
    return s.toLowerCase().replace(/\s+/g, '-');
  }

  chamadoStatusClass(s: string): string {
    return 'ch-status-' + s.toLowerCase().replace(/\s+/g, '-');
  }

  carregarChat() {
    if (!this.chatOrdemId) { this.mensagens = []; return; }
    this.mensagensService.listarPorOrdem(this.chatOrdemId).subscribe(d => {
      this.mensagens = d;
      setTimeout(() => {
        const el = document.querySelector('.chat-msgs');
        if (el) el.scrollTop = el.scrollHeight;
      }, 50);
    });
  }

  enviarMsg() {
    const texto = this.chatTexto.trim();
    if (!texto || !this.chatOrdemId) return;
    const user = this.auth.getUser();
    if (!user) return;

    const msg: Mensagem = {
      ordemId: this.chatOrdemId,
      remetente: 'cliente',
      remetenteNome: user.nome,
      texto,
      data: new Date().toISOString()
    };

    this.mensagensService.incluir(msg).subscribe({
      next: () => {
        this.chatTexto = '';
        this.carregarChat();
      },
      error: () => this.mostrarToast('Erro ao enviar mensagem.', 'error')
    });
  }

  abrirChamado() {
    const user = this.auth.getUser();
    if (!user || !this.chamadoForm.descricao.trim()) return;

    const equip = this.meusEquipamentos.find(e => e.id === this.chamadoForm.equipamentoId);
    const chamado: Chamado = {
      clienteId: user.id,
      clienteNome: user.nome,
      equipamentoId: this.chamadoForm.equipamentoId || undefined,
      equipamentoNome: equip ? `${equip.marca} ${equip.modelo}` : undefined,
      descricao: this.chamadoForm.descricao,
      status: 'Aberto',
      data: new Date().toISOString().split('T')[0],
      observacoes: ''
    };

    this.chamadosService.incluir(chamado).subscribe({
      next: () => {
        this.showChamadoForm = false;
        this.chamadoForm = { equipamentoId: 0, descricao: '' };
        this.mostrarToast('Chamado aberto com sucesso!');
        this.chamadosService.listarPorCliente(user.id).subscribe(d => this.meusChamados = d);
      },
      error: () => this.mostrarToast('Erro ao abrir chamado.', 'error')
    });
  }

  sair() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
