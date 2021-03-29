import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [PostComponent, PostsComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostService]
})
export class PostModule { }
