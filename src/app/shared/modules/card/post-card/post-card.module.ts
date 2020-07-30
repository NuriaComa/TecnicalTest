import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PostCardComponent
  ]
})
export class PostCardModule { }
