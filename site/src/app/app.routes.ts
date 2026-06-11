import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AreaTecnicoComponent } from './pages/area-tecnico/area-tecnico.component';
import { LoginComponent } from './pages/login/login.component';
import { MinhaContaComponent } from './pages/minha-conta/minha-conta.component';
import { AreaGerenteComponent } from './pages/area-gerente/area-gerente.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListagemFuncionarioComponent } from './pages/listagem/listagem-funcionario.component';
import { ListagemClienteComponent } from './pages/listagem/listagem-cliente.component';
import { CadastrarFuncionarioComponent } from './pages/cadastrar/cadastrar-funcionario.component';
import { CadastrarClienteComponent } from './pages/cadastrar/cadastrar-cliente.component';
import { AlterarFuncionarioComponent } from './pages/alterar/alterar-funcionario.component';
import { AlterarClienteComponent } from './pages/alterar/alterar-cliente.component';
import { ConsultarFuncionarioComponent } from './pages/consultar/consultar-funcionario.component';
import { ConsultarClienteComponent } from './pages/consultar/consultar-cliente.component';
import { authGuard, clienteGuard, funcionarioGuard, gerenteGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'area-tecnico', component: AreaTecnicoComponent, canActivate: [funcionarioGuard] },
  { path: 'area-gerente', component: AreaGerenteComponent, canActivate: [gerenteGuard] },
  { path: 'minha-conta', component: MinhaContaComponent, canActivate: [clienteGuard] },
  { path: 'funcionarios', component: ListagemFuncionarioComponent, canActivate: [gerenteGuard] },
  { path: 'funcionarios/cadastrar', component: CadastrarFuncionarioComponent, canActivate: [gerenteGuard] },
  { path: 'funcionarios/alterar/:id', component: AlterarFuncionarioComponent, canActivate: [gerenteGuard] },
  { path: 'funcionarios/consultar', component: ConsultarFuncionarioComponent, canActivate: [gerenteGuard] },
  { path: 'clientes', component: ListagemClienteComponent, canActivate: [funcionarioGuard] },
  { path: 'clientes/cadastrar', component: CadastrarClienteComponent, canActivate: [funcionarioGuard] },
  { path: 'clientes/alterar/:id', component: AlterarClienteComponent, canActivate: [funcionarioGuard] },
  { path: 'clientes/consultar', component: ConsultarClienteComponent, canActivate: [funcionarioGuard] },
  { path: '**', redirectTo: '' }
];
