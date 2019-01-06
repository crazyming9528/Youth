import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NewsService} from './news.service';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListPageComponent } from './news-list-page/news-list-page.component';
// import {NewsRoutingModule} from './news-routing.module';
import {ShareModule} from '../share/share.module';
import { PaginationModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import { ArticlePageComponent } from './article-page/article-page.component';

@NgModule({
  declarations: [NewsListComponent, NewsListPageComponent, ArticlePageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ShareModule,
    FormsModule,
    PaginationModule.forRoot()
    // NewsRoutingModule
  ],
  exports: [
    NewsListComponent, ArticlePageComponent
  ],
  providers: [NewsService]
})
export class NewsModule {
}
