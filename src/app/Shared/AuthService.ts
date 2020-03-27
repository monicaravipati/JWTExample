import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(UserName: string, Password: string) {
  return this.http.post<User>("https://localhost:44354", { UserName, Password })
        // this is just the HTTP call, 
        // we still need to handle the reception of the token
        // .shareReplay();
        // .toPromise();
    }
}