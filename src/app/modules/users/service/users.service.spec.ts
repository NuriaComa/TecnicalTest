import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostCardModule } from '../../../shared/modules/card/post-card/post-card.module';
import { CommentsCardModule } from '../../../shared/modules/card/comments-card/comments-card.module';
import { UserCardModule } from '../../../shared/modules/card/user-card/user-card.module';

describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      UserCardModule,
    ]
  }));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});
