import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import {PostFormComponent} from "./components/post-form/post-form.component";

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'create',
    component: PostFormComponent
  },
  {
    path: 'edit/:id',
    component: PostFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
