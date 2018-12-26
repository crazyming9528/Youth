import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news/news.service';
import {Res} from '../news/news-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  newsList = [];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();

  }

getNews() {
   const  ob = this.newsService.getAllNews();
   ob.subscribe((res: Res) => {
     if (res) {
       const {code, map } = res;
       this.newsList = map.pageInfo.list;
       console.log(code);
     }

   });
}

}
