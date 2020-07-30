import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'users-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() imageUrl = '';
  @Input() userId = '';
  @Input() userTitle = '';
  @Input() userName = '';
  @Input() userLastName = '';
  @Input() userEmail = '';
  @Input() profileLink = '';
  @Input() postLink = '';
  @Input() cardClass = '';

  constructor() { }

  ngOnInit() {
  }

}
