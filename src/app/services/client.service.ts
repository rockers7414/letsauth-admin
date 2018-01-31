import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Collection, Result } from '../objects/response';
import { Client } from '../objects/client';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Collection>(environment.apiService + '/v1/clients')
    .map(resp => {
      return resp.data as Client[];
    });
  }

  createClient(name: string, redirectUri: string, type: string): Observable<Client> {
    const data = {
      name: name,
      redirectUri: redirectUri,
      type: type
    };
    return this.http.put<Result>(environment.apiService + '/v1/clients', data)
    .map(resp => {
      return resp.data as Client;
    });
  }

}
