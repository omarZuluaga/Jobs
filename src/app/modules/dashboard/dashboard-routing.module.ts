import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '@Smarts/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('@Modules/user/user.module').then(m => m.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
