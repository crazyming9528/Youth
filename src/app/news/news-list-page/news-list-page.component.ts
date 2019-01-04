import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {News, NewsType, Res} from '../news-interface';

@Component({
  selector: 'app-news-list-page',
  templateUrl: './news-list-page.component.html',
  styleUrls: ['./news-list-page.component.scss']
})
export class NewsListPageComponent implements OnInit {

  totalItems = 64;
  currentPage = 4;
   newsTypeList: NewsType[];
   newsList: News[];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNewsType();
    this.getNews();
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
      const  ob = this.newsService.getAllNews()
      ob.subscribe((res: Res) => {
        if (res) {
          const {code, map: {pageInfo: { list}} } = res;
          this.newsList = list;
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
      console.log("ok");
    }

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

}
