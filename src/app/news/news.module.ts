import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NewsService} from './news.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class NewsModule { }
