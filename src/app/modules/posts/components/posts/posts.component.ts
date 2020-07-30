import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostI, PostsI } from '../../models/posts.interface';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: PostI[];
  private postsInfo$: Subscription;

  constructor(
    private _postsService: PostsService,
  ) { }

  ngOnInit() {
    this._initPosts();
  }

  _initPosts() {
    this._postsService.fetchPostsInfo();
    this.updatePostsInfo();
  }

  updatePostsInfo() {
    this.postsInfo$ = this._postsService
      .postsInfoObs
      .subscribe(
        (postsInfo: PostI[]) => {
          console.log('postsInfo', postsInfo);
          this.posts = postsInfo;
        }
      );
  }
}
