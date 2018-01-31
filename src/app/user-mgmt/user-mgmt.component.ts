import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

import { User } from '../objects/user';

@Component({
  selector: 'app-user-mgmt',
  templateUrl: './user-mgmt.component.html',
  styleUrls: ['./user-mgmt.component.scss']
})
export class UserMgmtComponent implements OnInit {

  view = 'user-list';

  users: User[];

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.getUsers().subscribe(users => this.users = users);
  }

  onUserCreated(user: User) {
    this.users.push(user);
    this.view = 'user-list';
  }

}

