import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Res} from '../news-interface';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  newsId: string;
  from: string;
  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService) {

    activatedRoute.queryParams.subscribe(queryParams => {
      this.newsId = queryParams.nid;
      this.from = queryParams.from;
    });
  }

  ngOnInit() {
    this.getNewsById(this.newsId);
  }
getNewsById(id) {
  const  ob = this.newsService.getNewsContent(id);
  ob.subscribe((res: Res) => {
    if (res) {
      console.log(res);
      // const {code, map: {pageInfo: { list}} } = res;
      // this.newsList = list;
      // console.log(list);
    }

  });
  console.log('ok');

}

}
