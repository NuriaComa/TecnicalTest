import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserI, UsersI } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _usersInfo: BehaviorSubject<UserI[]>;
  readonly usersInfoObs: Observable<UserI[]>;

  constructor(
    private _httpClient: HttpClient,
    ) {
    this._usersInfo = new BehaviorSubject<UserI[]>(null);
    this.usersInfoObs = this._usersInfo.asObservable();
  }


  // GET USERS

  fetchUsersInfo(): void {
    this._httpClient.get(
      'https://dummyapi.io/data/api/user'
    ).subscribe(
      (responseData: UsersI) => {
        this.getUsersData(responseData.data || []);
      },
    (error: HttpErrorResponse) => {
      console.log('Error fetchUsersInfo request', error);
      }
    );
  }

  getUsersData(info: UserI[]) {
    this._usersInfo.next(info);
  }
}
