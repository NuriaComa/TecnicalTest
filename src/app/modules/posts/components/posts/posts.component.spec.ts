import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { PostCardModule } from '../../../../shared/modules/card/post-card/post-card.module';
import { CommentsCardModule } from '../../../../shared/modules/card/comments-card/comments-card.module';
import { PostsRoutingModule } from '../../posts-routing.module';
import { CommentsComponent } from '../comments/comments.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent, CommentsComponent ],
      imports: [
        PostCardModule,
        CommentsCardModule,
        PostsRoutingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
