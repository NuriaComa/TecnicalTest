import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PostI, PostsI } from '../models/posts.interface';
import { CommentsI } from '../models/comments.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _postsInfo: BehaviorSubject<PostsI>;
  private _postsCommentsInfo: BehaviorSubject<CommentsI>;
  readonly postsInfoObs: Observable<PostsI>;
  readonly postsCommentsInfoObs: Observable<CommentsI>;

  constructor(
    private _httpClient: HttpClient,
  ) {
    this._postsInfo = new BehaviorSubject<PostsI>(null);
    this._postsCommentsInfo = new BehaviorSubject<CommentsI>(null);
    this.postsInfoObs = this._postsInfo.asObservable();
    this.postsCommentsInfoObs = this._postsCommentsInfo.asObservable();
  }


  // GET POSTS

  public fetchPostsInfo(): void {
    this._httpClient.get(
      'https://dummyapi.io/data/api/post'
    ).subscribe(
      (responseData: PostsI) => {
        if (responseData !== undefined) {
          console.log(responseData)
          this.getPostsData(responseData.data);
        }
      },
      (error: HttpErrorResponse) => {
        console.log('Error fetchPostsInfo request', error);
      }
    );
  }

  getPostsData(info: PostI[]) {
    this._postsInfo.next(info);
  }

  // GET COMMENTS

  getPostsComents(id: string): void  {
    this._httpClient.get(
      'https://dummyapi.io/data/api/post/' + id + '/comment'
    ).subscribe(
      (responseData) => {
        this.getPostsCommentsData(responseData);
      },
      (error: HttpErrorResponse) => {
        console.log('Error fetchCommentsInfo request', error);
      }
    );
  }

  getPostsCommentsData(info) {
    this._postsCommentsInfo.next(info.data);
  }
}