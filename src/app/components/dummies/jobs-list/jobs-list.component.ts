import { Component, Input, OnInit } from '@angular/core';
import { Job } from '@Utils/types/job.type';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  @Input() jobs: Job[] = []; //recibimos información del componente padre
  @Input() selectedJob: Job;

  constructor() { }

  ngOnInit(): void {
  }

}
