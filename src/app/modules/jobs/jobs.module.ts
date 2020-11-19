import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from '@Smarts/jobs/jobs.component';
import { JobsListComponent } from '@Dummies/jobs-list/jobs-list.component';
import { JobsMapComponent } from '@Dummies/jobs-map/jobs-map.component';


@NgModule({
  declarations: [
    JobsComponent,
    JobsListComponent,
    JobsMapComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }
