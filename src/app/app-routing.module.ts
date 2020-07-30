import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module')
      .then(mod => mod.UsersModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./modules/posts/posts.module')
      .then(mod => mod.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
