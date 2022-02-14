import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http: HttpClient) { }


  cdsUrl = 'https://cd-new-db.herokuapp.com/cds';

  getCds(): Observable<any> {
    return this.http.get(this.cdsUrl);
  }



}


