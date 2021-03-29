import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {PostResolveService} from './services/post-resolve.service';

const routes: Routes = [
  {path: '', resolve: {postsData: PostResolveService}, component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }

