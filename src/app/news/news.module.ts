import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NewsService} from './news.service';
import { NewsListComponent } from './news-list/news-list.component';

@NgModule({
  declarations: [NewsListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NewsListComponent
  ],
  providers: [NewsService]
})
export class NewsModule {
}
