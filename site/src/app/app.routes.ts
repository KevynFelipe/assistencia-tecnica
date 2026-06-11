import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AreaTecnicoComponent } from './pages/area-tecnico/area-tecnico.component';
import { LoginComponent } from './pages/login/login.component';
import { MinhaContaComponent } from './pages/minha-conta/minha-conta.component';
import { AreaGerenteComponent } from './pages/area-gerente/area-gerente.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { authGuard, clienteGuard, funcionarioGuard, gerenteGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'area-tecnico', component: AreaTecnicoComponent, canActivate: [funcionarioGuard] },
  { path: 'area-gerente', component: AreaGerenteComponent, canActivate: [gerenteGuard] },
  { path: 'minha-conta', component: MinhaContaComponent, canActivate: [clienteGuard] },
  { path: '**', redirectTo: '' }
];
