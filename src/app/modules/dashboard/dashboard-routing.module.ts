import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '@Smarts/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'jobs', 
    pathMatch: 'full'
  },
  {
    path: '', 
    component: DashboardComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('@Modules/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'jobs',
        loadChildren: () => import('@Modules/jobs/jobs.module').then(m => m.JobsModule)
      }
    ]
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
