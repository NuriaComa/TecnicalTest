import { TestBed } from '@angular/core/testing';
import { PostsService } from './posts.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommentsCardModule } from '../../../shared/modules/card/comments-card/comments-card.module';
import { PostI, PostsI } from '../models/posts.interface';

const mockGetResponse: PostsI = {
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

  describe('With server response', () => {
    let observable: Observable<PostI[]>;

    beforeEach(() => {
      spyOn(httpClient, 'get').and.returnValue(of(mockGetResponse));
      observable = postService.postsInfoObs
        .pipe(
          debounce(() => timer(500))
        );
    });

    it('Success server response', (done) => {
      observable
        .subscribe((response: PostI[]) => {
          expect(response[0].likes).toEqual(1);
          done();
        });
      postService.fetchPostsInfo();
    });
  });
});
