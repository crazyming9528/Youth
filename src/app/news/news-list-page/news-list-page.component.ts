import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {News, NewsType, Res} from '../news-interface';

@Component({
  selector: 'app-news-list-page',
  templateUrl: './news-list-page.component.html',
  styleUrls: ['./news-list-page.component.scss']
})
export class NewsListPageComponent implements OnInit {

   newsTypeList: NewsType[];
   newsList: News[];
   topList: News[];
   pageInfo_total: number;
   pageInfo_currentPage: number;
   pageInfo_pageSize: number;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.initPage();
    this.getNewsType();
    this.getNews();
  }

  initPage(currentPage = 2, pageSize = 10) {
    this.pageInfo_currentPage = currentPage;
    this.pageInfo_pageSize = pageSize;
  }


  getNewsType() {
    const  ob = this.newsService.getNewsType();
    ob.subscribe((res: Res) => {
      if (res) {
        const {code, map: {pageInfo: { list}} } = res;
        this.newsTypeList = list;
        console.log(list);
      }

    });
  }
  getNews() {
      const  ob = this.newsService.getAllNews(this.pageInfo_currentPage, this.pageInfo_pageSize)
      ob.subscribe((res: Res) => {
        if (res) {
          const {code, map: {pageInfo: { list, pageSize, total, pageNum}} } = res;
          this.newsList = list;
          console.log(total);
          this.pageInfo_currentPage = pageNum;
          this.pageInfo_total = total;
          console.log(list);

        }

      });
    }
    getNewsByType(tid) {
      const  ob = this.newsService.getNewsByType(tid);
      ob.subscribe((res: Res) => {
        if (res) {
          const {code, map: {pageInfo: { list}} } = res;
          this.newsList = list;
          console.log(list);
        }

      });
      console.log('ok');
    }

  pageChanged (e) {
    setTimeout(() => {
      this.getNews();
    }, 0);
  }

}
