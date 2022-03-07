import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  membersUrl = 'https://enrolled-members.herokuapp.com/api/v1/member';

  getMembers(): Observable<any> {
    return this.http.get(this.membersUrl);
  }





}
