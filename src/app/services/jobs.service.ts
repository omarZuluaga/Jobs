import { Injectable } from '@angular/core';
import { Http } from '@Utils/class/http.class';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: Http) { }

  getJobs(): Observable<any> {
    return this.http.get("jobs").pipe(
      map((response: any) => response.data)
    );
  }
}
