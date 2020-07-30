import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PostI, PostsI } from '../models/posts.interface';
import { CommentI, CommentsI } from '../models/comments.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _postsInfo: BehaviorSubject<PostI[]>;
  private _postsCommentsInfo: BehaviorSubject<CommentI[]>;
  readonly postsInfoObs: Observable<PostI[]>;
  readonly postsCommentsInfoObs: Observable<CommentI[]>;

  constructor(
    private _httpClient: HttpClient,
  ) {
    this._postsInfo = new BehaviorSubject<PostI[]>(null);
    this._postsCommentsInfo = new BehaviorSubject<CommentI[]>(null);
    this.postsInfoObs = this._postsInfo.asObservable();
    this.postsCommentsInfoObs = this._postsCommentsInfo.asObservable();
  }


  // GET POSTS

  fetchPostsInfo(): void {
    this._httpClient.get(
      'https://dummyapi.io/data/api/post'
    ).subscribe(
      (responseData: PostsI) => {
        this.getPostsData (  responseData.data || []);
      },
      (error: HttpErrorResponse) => {
        console.log('Error fetchPostsInfo request', error);
      }
    );
  }

  getPostsData(info: PostI[]): void {
    this._postsInfo.next(info);
  }

  // GET COMMENTS

  getPostsComments(id: string): void  {
    this._httpClient.get(
      'https://dummyapi.io/data/api/post/' + id + '/comment'
    ).subscribe(
      (responseData: CommentsI) => {
        this.getPostsCommentsData(responseData.data || []);
      },
      (error: HttpErrorResponse) => {
        console.log('Error fetchCommentsInfo request', error);
      }
    );
  }

  getPostsCommentsData(info: CommentI[]) {
    this._postsCommentsInfo.next(info);
  }
}
