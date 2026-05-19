import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="landing">

      <!-- Hero -->
      <section class="hero">
        <div class="hero-bg"></div>
        <div class="hero-content">
          <div class="hero-badge">Especialistas em Reparos</div>
          <h1>Assistência Técnica</h1>
          <p class="hero-sub">Seu dispositivo funcionando como novo. Rapidez e qualidade em cada reparo.</p>
          <p class="hero-desc">Smartphones, notebooks, desktops, tablets e muito mais. Orçamento sem compromisso.</p>
          <div class="hero-actions">
            <a class="btn-primary-lg" href="https://wa.me/5511999999999" target="_blank">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Solicitar Orçamento
            </a>
            <a class="btn-secondary-lg" routerLink="/funcionarios">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Área do Técnico
            </a>
          </div>
        </div>
      </section>

      <!-- Stats -->
      <section class="stats">
        <div class="section-inner">
          <div class="stats-grid">
            <div class="stat-item"><span class="stat-num">+500</span><span class="stat-label">Aparelhos Consertados</span></div>
            <div class="stat-item"><span class="stat-num">Garantia</span><span class="stat-label">De até 3 meses</span></div>
            <div class="stat-item"><span class="stat-num">Orçamento</span><span class="stat-label">Sem compromisso</span></div>
            <div class="stat-item"><span class="stat-num">Rápido</span><span class="stat-label">Até 48h</span></div>
          </div>
        </div>
      </section>

      <!-- Services -->
      <section class="section">
        <div class="section-inner">
          <div class="section-header">
            <h2>Nossos Serviços</h2>
            <p>Soluções completas para seus equipamentos eletrônicos</p>
          </div>
          <div class="services-grid">
            <div class="service-card">
              <div class="card-img" style="background: linear-gradient(135deg, #1a1a2e, #16213e);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <h3>Smartphones & Tablets</h3>
              <p>Troca de tela, bateria, conector de carga, reparo em placa, câmera e muito mais.</p>
              <span class="service-price">A partir de R$ 79</span>
            </div>
            <div class="service-card">
              <div class="card-img" style="background: linear-gradient(135deg, #1a1a2e, #16213e);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>
              </div>
              <h3>Notebooks</h3>
              <p>Limpeza preventiva, troca de pasta térmica, reparo em carcaça, tela e teclado.</p>
              <span class="service-price">A partir de R$ 149</span>
            </div>
            <div class="service-card">
              <div class="card-img" style="background: linear-gradient(135deg, #1a1a2e, #16213e);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3>Desktops & PCs</h3>
              <p>Montagem, upgrade, instalação de SSD, formatação, limpeza e otimização.</p>
              <span class="service-price">A partir de R$ 99</span>
            </div>
            <div class="service-card">
              <div class="card-img" style="background: linear-gradient(135deg, #1a1a2e, #16213e);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M2 12h20"/><path d="M12 2v20"/></svg>
              </div>
              <h3>Consoles</h3>
              <p>Reparo de PlayStation, Xbox e Nintendo Switch. Limpeza e manutenção de controles.</p>
              <span class="service-price">A partir de R$ 129</span>
            </div>
            <div class="service-card">
              <div class="card-img" style="background: linear-gradient(135deg, #1a1a2e, #16213e);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3>TVs & Monitores</h3>
              <p>Reparo de fonte, troca de tela, problemas de imagem e conexões.</p>
              <span class="service-price">A partir de R$ 119</span>
            </div>
            <div class="service-card">
              <div class="card-img" style="background: linear-gradient(135deg, #1a1a2e, #16213e);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <h3>Outros Equipamentos</h3>
              <p>Impressoras, roteadores, fontes, periféricos e equipamentos de áudio.</p>
              <span class="service-price">Sob consulta</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Price Table -->
      <section class="section price-section">
        <div class="section-inner">
          <div class="section-header">
            <h2>Tabela de Preços</h2>
            <p>Principais serviços com valores referenciais</p>
          </div>
          <div class="price-table-wrap">
            <table class="price-table">
              <thead>
                <tr><th>Serviço</th><th>Descrição</th><th>Valor</th></tr>
              </thead>
              <tbody>
                <tr><td>Troca de tela (smartphone)</td><td>Tela original e substituição</td><td class="price-val">R$ 179</td></tr>
                <tr><td>Troca de bateria</td><td>Bateria original + mão de obra</td><td class="price-val">R$ 129</td></tr>
                <tr><td>Limpeza preventiva (notebook)</td><td>Limpeza interna + troca pasta térmica</td><td class="price-val">R$ 149</td></tr>
                <tr><td>Instalação de SSD</td><td>SSD 240GB + instalação + sistema</td><td class="price-val">R$ 289</td></tr>
                <tr><td>Formatação / reinstalação</td><td>Backup + formatação + drivers</td><td class="price-val">R$ 99</td></tr>
                <tr><td>Reparo de conector de carga</td><td>Solda e substituição do conector</td><td class="price-val">R$ 89</td></tr>
                <tr><td>Troca de tela (notebook)</td><td>Tela compatível + instalação</td><td class="price-val">R$ 249</td></tr>
                <tr><td>Diagnóstico completo</td><td>Análise detalhada do equipamento</td><td class="price-val">Grátis</td></tr>
              </tbody>
            </table>
          </div>
          <p class="price-note">* Valores podem variar conforme modelo e disponibilidade de peças. Orçamento oficial mediante avaliação.</p>
        </div>
      </section>

      <!-- How it works -->
      <section class="section how-section">
        <div class="section-inner">
          <div class="section-header">
            <h2>Como Funciona</h2>
            <p>Processo simples e transparente em 3 etapas</p>
          </div>
          <div class="how-grid">
            <div class="how-step">
              <div class="how-num">1</div>
              <div class="how-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <h3>Diagnóstico</h3>
              <p>Você nos conta o problema ou traz o aparelho. Fazemos uma análise completa e identificamos a causa.</p>
            </div>
            <div class="how-step">
              <div class="how-num">2</div>
              <div class="how-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <h3>Orçamento</h3>
              <p>Apresentamos o diagnóstico, explicamos o reparo necessário e informamos o valor. Sem surpresas.</p>
            </div>
            <div class="how-step">
              <div class="how-num">3</div>
              <div class="how-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3>Reparo</h3>
              <p>Autorizou? Executamos o serviço com peças de qualidade e devolvemos seu aparelho funcionando.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why -->
      <section class="section why-section">
        <div class="section-inner">
          <div class="section-header">
            <h2>Por que nos escolher?</h2>
          </div>
          <div class="why-grid">
            <div class="why-card">
              <div class="why-icon" style="background: rgba(59,130,246,.1);">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Garantia</h3>
              <p>Todo serviço tem garantia de até 3 meses. Sua tranquilidade é nossa prioridade.</p>
            </div>
            <div class="why-card">
              <div class="why-icon" style="background: rgba(59,130,246,.1);">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><path d="M12 2a4 4 0 0 0-4 4v2a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/><path d="M5 11v3a7 7 0 0 0 14 0v-3"/></svg>
              </div>
              <h3>Peças Originais</h3>
              <p>Trabalhamos com peças certificadas e compatíveis para garantir o melhor resultado.</p>
            </div>
            <div class="why-card">
              <div class="why-icon" style="background: rgba(59,130,246,.1);">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3>Rapidez</h3>
              <p>Diagnóstico rápido e reparo ágil. A maioria dos serviços fica pronto em até 48h.</p>
            </div>
            <div class="why-card">
              <div class="why-icon" style="background: rgba(59,130,246,.1);">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><path d="M9 12l2 2 4-4"/><path d="M5 7v14h14V7"/><path d="M3 7h18"/></svg>
              </div>
              <h3>Orçamento Grátis</h3>
              <p>Diagnóstico sem compromisso. Você só paga se autorizar o serviço.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta">
        <div class="section-inner">
          <div class="cta-card">
            <h2>Está com um aparelho com defeito?</h2>
            <p>Solicite seu orçamento agora mesmo. Respondemos em poucos minutos.</p>
            <a class="btn-cta-whatsapp" href="https://wa.me/5511999999999" target="_blank">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Fale Conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="section-inner">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="footer-logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                <span>Assistência <span class="accent">Técnica</span></span>
              </div>
              <p class="footer-desc">Assistência técnica especializada em reparos de eletrônicos. Qualidade e confiança desde 2024.</p>
              <div class="footer-social">
                <a href="https://wa.me/5511999999999" target="_blank" aria-label="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4>Serviços</h4>
              <a href="#">Smartphones & Tablets</a>
              <a href="#">Notebooks</a>
              <a href="#">Desktops & PCs</a>
              <a href="#">Consoles</a>
              <a href="#">TVs & Monitores</a>
            </div>
            <div>
              <h4>Links</h4>
              <a routerLink="/funcionarios">Funcionários</a>
              <a routerLink="/clientes">Clientes</a>
              <a routerLink="/funcionarios/cadastrar">Cadastrar Funcionário</a>
              <a routerLink="/clientes/cadastrar">Cadastrar Cliente</a>
            </div>
            <div>
              <h4>Contato</h4>
              <span class="footer-contact">(11) 99999-9999</span>
              <span class="footer-contact">contato@assistenciatecnica.com.br</span>
              <span class="footer-hours-title">Horário</span>
              <span>Seg a Sex: 09h — 18h</span>
              <span>Sáb: 09h — 13h</span>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2026 Assistência Técnica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  `,
  styles: [`
    .landing { width: 100%; }

    .hero {
      position: relative; overflow: hidden;
      padding: 100px 24px 80px; text-align: center;
    }
    .hero-bg {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 50% 0%, rgba(59,130,246,.08) 0%, transparent 70%);
      pointer-events: none;
    }
    .hero-content { position: relative; max-width: 680px; margin: 0 auto; }
    .hero-badge {
      display: inline-block; padding: 6px 16px; margin-bottom: 20px;
      background: rgba(59,130,246,.1); color: var(--primary);
      font-size: .8rem; font-weight: 600; border-radius: 20px;
      letter-spacing: .03em;
    }
    h1 { font-size: 2.5rem; font-weight: 800; color: var(--text); margin-bottom: 12px; letter-spacing: -.02em; }
    .hero-sub { font-size: 1.15rem; color: var(--text-muted); margin-bottom: 8px; }
    .hero-desc { font-size: .95rem; color: var(--text-muted); opacity: .8; margin-bottom: 36px; }
    .hero-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
    .btn-primary-lg, .btn-secondary-lg {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 14px 28px; font-size: .95rem; font-weight: 600;
      border-radius: 10px; text-decoration: none; transition: all .15s;
    }
    .btn-primary-lg { background: #25D366; color: #fff; }
    .btn-primary-lg:hover { background: #1da851; color: #fff; transform: translateY(-1px); }
    .btn-secondary-lg { background: var(--surface); border: 1px solid var(--border); color: var(--text); }
    .btn-secondary-lg:hover { border-color: var(--primary); color: var(--primary); transform: translateY(-1px); }

    .stats { padding: 32px 24px; background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; text-align: center; }
    .stat-item { display: flex; flex-direction: column; gap: 4px; }
    .stat-num { font-size: 1.3rem; font-weight: 800; color: var(--primary); }
    .stat-label { font-size: .8rem; color: var(--text-muted); }
    @media (max-width: 500px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }

    .section { padding: 80px 24px; }
    .section:nth-child(even) { background: var(--surface); }
    .section-inner { max-width: 1120px; margin: 0 auto; }
    .section-header { text-align: center; margin-bottom: 48px; }
    .section-header h2 { font-size: 1.75rem; font-weight: 800; color: var(--text); margin-bottom: 10px; }
    .section-header p { color: var(--text-muted); font-size: 1rem; }

    .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
    .service-card { padding: 0; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; transition: all .15s; }
    .service-card:hover { border-color: var(--primary); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.3); }
    .card-img { height: 100px; display: flex; align-items: center; justify-content: center; }
    .service-card h3 { font-size: 1.05rem; font-weight: 700; color: var(--text); padding: 16px 20px 8px; }
    .service-card p { font-size: .85rem; color: var(--text-muted); line-height: 1.5; padding: 0 20px; }
    .service-price { display: block; padding: 12px 20px 18px; font-size: .9rem; font-weight: 700; color: var(--primary); }

    .price-section { background: var(--surface); }
    .price-table-wrap { overflow-x: auto; max-width: 700px; margin: 0 auto; }
    .price-table { width: 100%; border-collapse: collapse; font-size: .88rem; }
    .price-table thead tr { background: rgba(59,130,246,.1); }
    .price-table th { color: var(--text); font-weight: 700; font-size: .78rem; text-transform: uppercase; letter-spacing: .04em; padding: 14px 16px; text-align: left; }
    .price-table td { padding: 12px 16px; color: var(--text); border-bottom: 1px solid var(--border); }
    .price-table tbody tr:hover { background: var(--surface-hover); }
    .price-table tbody tr:last-child td { border-bottom: none; }
    .price-val { font-weight: 700; color: var(--primary); white-space: nowrap; text-align: right; }
    .price-note { text-align: center; color: var(--text-muted); font-size: .8rem; margin-top: 20px; }

    .how-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
    .how-step { text-align: center; padding: 32px 20px; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; position: relative; }
    .how-num { width: 36px; height: 36px; margin: 0 auto 16px; background: var(--primary); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: .9rem; font-weight: 700; }
    .how-icon { margin-bottom: 12px; }
    .how-step h3 { font-size: 1.05rem; font-weight: 700; color: var(--text); margin-bottom: 8px; }
    .how-step p { font-size: .85rem; color: var(--text-muted); line-height: 1.5; }

    .why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
    .why-card { text-align: center; padding: 28px 20px; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; }
    .why-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; }
    .why-card h3 { font-size: 1rem; font-weight: 700; color: var(--text); margin-bottom: 6px; }
    .why-card p { font-size: .84rem; color: var(--text-muted); line-height: 1.5; }

    .cta { padding: 40px 24px 80px; }
    .cta-card { text-align: center; padding: 56px 32px; background: linear-gradient(135deg, rgba(37,211,102,.06), rgba(37,211,102,.02)); border: 1px solid rgba(37,211,102,.2); border-radius: 16px; }
    .cta-card h2 { font-size: 1.5rem; font-weight: 800; color: var(--text); margin-bottom: 10px; }
    .cta-card p { color: var(--text-muted); font-size: .95rem; margin-bottom: 28px; }
    .btn-cta-whatsapp { display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px; background: #25D366; color: #fff; font-size: .95rem; font-weight: 600; border-radius: 10px; text-decoration: none; transition: background .15s; }
    .btn-cta-whatsapp:hover { background: #1da851; color: #fff; }

    .footer { padding: 48px 24px 32px; background: var(--surface); border-top: 1px solid var(--border); }
    .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 32px; margin-bottom: 32px; }
    .footer-logo { display: flex; align-items: center; gap: 8px; font-size: 1rem; font-weight: 700; color: var(--text); margin-bottom: 12px; }
    .footer-logo .accent { color: var(--primary); }
    .footer-desc { font-size: .85rem; color: var(--text-muted); line-height: 1.5; max-width: 260px; }
    .footer-social { display: flex; gap: 8px; margin-top: 16px; }
    .footer-social a { width: 36px; height: 36px; border-radius: 8px; background: var(--bg); display: flex; align-items: center; justify-content: center; color: var(--text-muted); transition: all .15s; }
    .footer-social a:hover { background: var(--primary); color: #fff; }
    .footer h4 { font-size: .82rem; font-weight: 700; color: var(--text); margin-bottom: 14px; text-transform: uppercase; letter-spacing: .05em; }
    .footer a, .footer span { display: block; font-size: .85rem; color: var(--text-muted); padding: 3px 0; text-decoration: none; }
    .footer a:hover { color: var(--primary); }
    .footer-contact { font-weight: 600; color: var(--text); }
    .footer-hours-title { font-weight: 600; color: var(--text); margin-top: 12px; }
    .footer-bottom { border-top: 1px solid var(--border); padding-top: 20px; text-align: center; font-size: .82rem; color: var(--text-muted); }
  `]
})
export class HomeComponent {}
