import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserI } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _usersInfo: BehaviorSubject<UserI>;
  readonly usersInfoObs: Observable<UserI>;

  constructor(
    private _httpClient: HttpClient,
    ) {
    this._usersInfo = new BehaviorSubject<UserI>(null);
    this.usersInfoObs = this._usersInfo.asObservable();
  }


  // GET USERS

  public fetchUsersInfo(): void {
    this._httpClient.get(
      'https://dummyapi.io/data/api/user'
    ).subscribe(
      (responseData) => {
        this.getUsersData(responseData);
      },
    (error: HttpErrorResponse) => {
      console.log('Error fetchUsersInfo request', error);
      }
    );
  }

  getUsersData(info) {
    this._usersInfo.next(info.data);
  }
}
