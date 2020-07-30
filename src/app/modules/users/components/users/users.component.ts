import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../../service/users.service';
import { UserI } from '../../models/user.interface';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: UserI;
  private usersInfo$: Subscription;

  constructor(
    private _usersService: UsersService,
    ) { }

  ngOnInit() {
    this._initUsers();
  }

  _initUsers() {
    this._usersService.fetchUsersInfo();
    this.updateUsersInfo();
  }

  updateUsersInfo() {
    this.usersInfo$ = this._usersService
      .usersInfoObs
      .subscribe(
        (usersInfo: UserI) => {
          console.log('usersInfo', usersInfo);
          this.users = usersInfo;
        }
      );
  }
}
