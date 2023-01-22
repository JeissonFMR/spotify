import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../../enviroment/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = enviroment.api
  constructor(private http: HttpClient) { }

  sendCredentials(email: string, password: string): Observable<any> {

    const body = {
      email: email,
      password: password
    }

    return this.http.post(`${this.URL}/auth/login`, body)
  }
}
