import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AccessTokenResult } from './objects/response';

@Injectable()
export class AuthService {

	constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    this.logout();

    const scopes = [
      'read:clients',
      'create:clients',
      'update:clients',
      'read:users',
      'create:users',
      'update:users'
    ];
    const options = {
      headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(environment.clientId + ':' + environment.clientSecret) })
    };
    const body = {
      email: email,
      password: password,
      grant_type: 'password',
      scopes: scopes.join(' ')
    };
    return this.http.post<AccessTokenResult>(environment.apiService + '/v1/oauth/access_token', body, options)
    .map(resp => {
      if (resp) {
        localStorage.setItem('email', email);
        localStorage.setItem('access_token', resp.access_token);
        localStorage.setItem('scopes', resp.scopes);
        return true;
      }
      return false;
		});
	}

	logout() {
		localStorage.removeItem('email');
    localStorage.removeItem('access_token');
    localStorage.removeItem('scopes');
	}

	get isLoggedIn() {
		return localStorage.getItem('access_token') !== null;
  }

  get isAdmin() {
    const scopes = localStorage.getItem('scopes') || '';
    return scopes.includes('clients') || scopes.includes('users');
  }

}
