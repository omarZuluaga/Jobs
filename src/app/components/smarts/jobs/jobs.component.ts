import { Component, OnInit } from '@angular/core';
import { JobsService } from '@services/jobs.service';
import { Job } from '@Utils/types/job.type';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  public jobs: Job[];

  public selectedJob: Job;

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    this.jobsService.getJobs().subscribe(jobs => this.jobs = jobs);
  }

  setOver(job: Job) {
    this.selectedJob = job;
  }
}
