import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserCardModule } from '../../../shared/modules/card/user-card/user-card.module';
import { UserI, UsersI } from '../models/user.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

const mockUsersResponse: UsersI = {
  data: [
    {
      id: 'mHfQtRIKdbZiSGNcC1TO',
      email: 'kent.brewer@example.com',
      firstName: 'Kent',
      lastName: 'Brewer',
      picture: 'https://randomuser.me/api/portraits/men/52.jpg',
      title: 'mr',
    },
  ],
  limit: 0,
  offset: 0,
  page: 0
};

describe('UsersService', () => {
  let httpClient: HttpClient;
  let userService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        UserCardModule,
      ]
    });
    httpClient = TestBed.get(HttpClient);
    userService = TestBed.get(UsersService);
  });

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  describe('Users', () => {
    let observable: Observable<UserI[]>;

    it('Success server response', (done) => {
      spyOn(httpClient, 'get').and.returnValue(of(mockUsersResponse));
      observable = userService.usersInfoObs
        .pipe(
          debounce(() => timer(500))
        );
      observable
        .subscribe((response: UserI[]) => {
          expect(response[0].firstName).toEqual('Kent');
          done();
        });
      userService.fetchUsersInfo();
    });

    it('error server response', () => {
      const httpError = new HttpErrorResponse({});
      spyOn(httpClient, 'get').and.returnValue(throwError(httpError));
      spyOn(console, 'log');
      userService.fetchUsersInfo();

      expect(console.log).toHaveBeenCalled();
    });
  });
});
