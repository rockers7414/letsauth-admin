import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClientService } from '../services/client.service';

import { Client } from '../objects/client';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  @Output() clientCreated: EventEmitter<Client> = new EventEmitter();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientSvc: ClientService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      redirectUri: [''],
      type: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.clientSvc.createClient(this.form.value.name, this.form.value.redirectUri, this.form.value.type).subscribe(client => {
      this.clientCreated.emit(client);
    });
  }

}
