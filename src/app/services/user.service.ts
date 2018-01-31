import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Collection, Result } from '../objects/response';
import { User } from '../objects/user';

@Injectable()
export class UserService {

	constructor(private http: HttpClient) { }

	getUsers(): Observable<User[]> {
    return this.http.get<Collection>(environment.apiService + '/v1/users')
    .map(resp => {
			return resp.data as User[];
		});
	}

  createUser(email: string, password: string): Observable<User> {
    const data = {
      email: email,
      password: password
    };
    return this.http.put<Result>(environment.apiService + '/v1/users', data)
		.map(resp => {
			return resp.data as User;
		});
	}

}

