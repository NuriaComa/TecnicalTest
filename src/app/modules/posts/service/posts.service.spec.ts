import { TestBed } from '@angular/core/testing';
import { PostsService } from './posts.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommentsCardModule } from '../../../shared/modules/card/comments-card/comments-card.module';
import { PostI, PostsI } from '../models/posts.interface';
import { CommentI, CommentsI } from '../models/comments.interface';

const mockPostsResponse: PostsI = {
  data: [
    {
      id: '02sQzyrIxMzRUapxCNR7',
      image: 'https://img.dummyapi.io/photo-1570341224661-39af39637b08.jpg',
      likes: 1,
      link: null,
      owner: {
        id: 'mHfQtRIKdbZiSGNcC1TO',
        email: 'kent.brewer@example.com',
        firstName: 'Kent',
        lastName: 'Brewer',
        picture: 'https://randomuser.me/api/portraits/men/52.jpg',
        title: 'mr',
      },
      publishDate: '2020-01-11T03:13:48.811Z',
      tags: ['human', 'person', 'india'],
      text: 'When the dog looks at you'
    }
  ],
  limit: 0,
  offset: 0,
  page: 0
};
const mockCommentsResponse: CommentsI = {
  data: [
    {
      id: 'lkqxrv2KrocHmedOIO7p',
      message: 'Breathtaking shot',
      owner: {
        id: 'mHfQtRIKdbZiSGNcC1TO',
        email: 'kent.brewer@example.com',
        firstName: 'Kent',
        lastName: 'Brewer',
        picture: 'https://randomuser.me/api/portraits/men/52.jpg',
        title: 'mr',
      },
    publishDate: '2020-05-12T15:47:36.594Z'
    }
  ],
  limit: 0,
  offset: 0,
  page: 0
};


describe('PostsService', () => {
  let httpClient: HttpClient;
  let postService: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        CommentsCardModule
      ]
    });
    httpClient = TestBed.get(HttpClient);
    postService = TestBed.get(PostsService);
  });

  it('should be created', () => {
    const service: PostsService = TestBed.get(PostsService);
    expect(service).toBeTruthy();
  });

  describe('Posts', () => {
    let observable: Observable<PostI[]>;

    it('Success server response', (done) => {
      spyOn(httpClient, 'get').and.returnValue(of(mockPostsResponse));
      observable = postService.postsInfoObs
        .pipe(
          debounce(() => timer(500))
        );
      observable
        .subscribe((response: PostI[]) => {
          expect(response[0].likes).toEqual(1);
          done();
        });
      postService.fetchPostsInfo();
    });

    it('error server response', () => {
      const httpError = new HttpErrorResponse({});
      spyOn(httpClient, 'get').and.returnValue(throwError(httpError));
      spyOn(console, 'log');
      postService.fetchPostsInfo();

      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('Comments', () => {
    let observable: Observable<CommentI[]>;

    it('Success server response', (done) => {
      spyOn(httpClient, 'get').and.returnValue(of(mockCommentsResponse));
      observable = postService.postsCommentsInfoObs
        .pipe(
          debounce(() => timer(500))
        );
      observable
        .subscribe((response: CommentI[]) => {
          expect(response[0].message).toEqual('Breathtaking shot');
          done();
        });
      postService.getPostsComments('lkqxrv2KrocHmedOIO7p');
    });

    it('error server response', () => {
      const httpError = new HttpErrorResponse({});
      spyOn(httpClient, 'get').and.returnValue(throwError(httpError));
      spyOn(console, 'log');
      postService.getPostsComments('lkqxrv2KrocHmedOIO7p');

      expect(console.log).toHaveBeenCalled();
    });
  });
});
