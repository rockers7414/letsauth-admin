import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

import { Client } from '../objects/client';

@Component({
  selector: 'app-client-mgmt',
  templateUrl: './client-mgmt.component.html',
  styleUrls: ['./client-mgmt.component.scss']
})
export class ClientMgmtComponent implements OnInit {

  view = 'client-list';

  clients: Client[];

  constructor(private clientSvc: ClientService) { }

  ngOnInit() {
    this.clientSvc.getClients().subscribe(clients => this.clients = clients);
  }

  onClientCreated(client: Client) {
    this.clients.push(client);
    this.view = 'client-list';
  }

}
