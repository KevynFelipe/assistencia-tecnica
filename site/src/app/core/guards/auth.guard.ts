import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) return true;
  return router.parseUrl('/login');
};

export const clienteGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn() && auth.isCliente()) return true;
  if (auth.isLoggedIn()) return router.parseUrl('/area-tecnico');
  return router.parseUrl('/login');
};

export const funcionarioGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn() && auth.isFuncionario()) return true;
  if (auth.isLoggedIn()) return router.parseUrl('/minha-conta');
  return router.parseUrl('/login');
};
