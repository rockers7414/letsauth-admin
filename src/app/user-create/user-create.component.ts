import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

import { User } from '../objects/user';

import { EMAIL_PATTERN } from '../shared/validation';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  @Output() userCreated: EventEmitter<User> = new EventEmitter();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userSvc: UserService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userSvc.createUser(this.form.value.email, this.form.value.password).subscribe(user => {
      this.userCreated.emit(user);
    });
  }

}

