import { Component, OnInit } from '@angular/core';
import { PostsI } from '../../models/posts.interface';
import { Subscription } from 'rxjs';
import { PostsService } from '../../service/posts.service';
import { CommentsI } from '../../models/comments.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  paramId: string;
  comments: CommentsI;
  private commentsInfo$: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private _postsService: PostsService
  ) {
    this.activateRoute.params.subscribe(queryParams => {
      this.paramId = queryParams.id;
    });
  }

  ngOnInit() {
    this._initComponents();
  }

  _initComponents() {
    this._postsService.getPostsComents(this.paramId);
    this.updatePostsInfo();
  }

  updatePostsInfo() {
    this.commentsInfo$ = this._postsService
      .postsCommentsInfoObs
      .subscribe(
        (commentsInfo: CommentsI) => {
          console.log('commentsInfo', commentsInfo);
          this.comments = commentsInfo;
        }
      );
  }
}
