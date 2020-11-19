import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/smarts/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) //cargando un módulo con lazy loading
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
