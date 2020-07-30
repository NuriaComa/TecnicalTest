import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comments-card',
  templateUrl: './comments-card.component.html',
  styleUrls: ['./comments-card.component.scss']
})
export class CommentsCardComponent implements OnInit {

  @Input() userId = '';
  @Input() userName = '';
  @Input() userLastName = '';
  @Input() commentDate = '';
  @Input() commentText = '';
  @Input() cardClass = '';

  constructor() { }

  ngOnInit() {
  }

}
