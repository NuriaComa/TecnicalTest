import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() imageUrl = '';
  @Input() userId = '';
  @Input() userTitle = '';
  @Input() userName = '';
  @Input() userLastName = '';
  @Input() userEmail = '';
  @Input() userText = '';
  @Input() userLikes = '';
  @Input() cardClass = '';

  constructor() { }

  ngOnInit() {
  }

}
