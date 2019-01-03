import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NewsListPageComponent} from './news/news-list-page/news-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {path: 'index', component: HomeComponent},
  // {
  //   path: 'news',
  //   loadChildren: './news/news.module#NewsModule'
  // },
  {
    path: 'news',
    component: NewsListPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
