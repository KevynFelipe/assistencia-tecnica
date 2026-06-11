import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (show) {
      <div class="modal-overlay" (click)="cancelar.emit()">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-icon" [class]="tipo === 'danger' ? 'icon-danger' : 'icon-warn'">
            @if (tipo === 'danger') {
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
            } @else {
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            }
          </div>
          <h3 class="modal-title">{{ title }}</h3>
          <p class="modal-text">{{ text }}</p>
          <div class="modal-actions">
            <button class="btn-sec" (click)="cancelar.emit()">{{ btnCancel }}</button>
            <button class="btn-danger" [disabled]="loading" (click)="confirmar.emit()">
              @if (loading) {
                <span class="spinner-sm"></span> {{ btnLoading }}
              } @else {
                {{ btnConfirm }}
              }
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .icon-danger { color: var(--danger); }
    .icon-warn { color: #fbbf24; }
  `]
})
export class ConfirmDialogComponent {
  @Input() show = false;
  @Input() title = 'Confirmar';
  @Input() text = '';
  @Input() tipo: 'danger' | 'warn' = 'danger';
  @Input() loading = false;
  @Input() btnConfirm = 'Confirmar';
  @Input() btnCancel = 'Cancelar';
  @Input() btnLoading = 'Aguarde...';

  @Output() confirmar = new EventEmitter<void>();
  @Output() cancelar = new EventEmitter<void>();
}
