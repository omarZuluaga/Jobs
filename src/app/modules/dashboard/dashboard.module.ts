import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '@Smarts/dashboard/dashboard.component';
import { NavbarComponent } from '@Dummies/navbar/navbar.component';
import { FooterComponent } from '@Dummies/footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
