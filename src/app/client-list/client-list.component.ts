import { Component, OnInit, Input } from '@angular/core';

import { Client } from '../objects/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  @Input() clients: Client[];

  constructor() { }

  ngOnInit() {
  }

}
