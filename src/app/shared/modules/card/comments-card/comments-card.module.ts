import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsCardComponent } from './comments-card/comments-card.component';

@NgModule({
  declarations: [CommentsCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommentsCardComponent
  ]
})
export class CommentsCardModule { }
