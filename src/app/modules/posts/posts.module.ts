import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostCardModule } from '../../shared/modules/card/post-card/post-card.module';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsCardModule } from '../../shared/modules/card/comments-card/comments-card.module';

@NgModule({
  declarations: [PostsComponent, CommentsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    PostCardModule,
    CommentsCardModule
  ]
})
export class PostsModule { }
