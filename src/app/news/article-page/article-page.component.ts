import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {News, Res} from '../news-interface';
import {NewsService} from '../news.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  newsId: string;
  from: string;
  news: News;
  showHtml: any;
  like = false;
  commentContent: string;
  constructor (
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService, private el: ElementRef,
    private renderer2: Renderer2,  private sanitizer: DomSanitizer
  ) {
    activatedRoute.queryParams.subscribe(queryParams => {
      this.newsId = queryParams.nid;
      this.from = queryParams.from;
    });
  }
  ngOnInit() {
    this.getNewsById(this.newsId);
    this.addView();
    this.getComment();
  }
getNewsById(id) {
  const  ob = this.newsService.getNewsContent(id);
  ob.subscribe((res: Res) => {
    if (res) {
      console.log(res);
      const {code, map, message} = res;
      this.news = map.news;
      this.showHtml = this.sanitizer.bypassSecurityTrustHtml(this.news.contentHtml);
    }

  });
  console.log('ok');

}
likeFn() {
    this.like = !this.like;
}

addView() {
  const  ob  = this.newsService.addView(this.newsId, `33ea7030-d38f-4d0b-8338-b2ba36f2d7ad`);
  ob.subscribe((res: Res) => {
    if (res) {
      console.log(res);
      const {code, map, message} = res;
    }

  });
}

addComment() {
    const  ob  = this.newsService.addComment(this.newsId, `33ea7030-d38f-4d0b-8338-b2ba36f2d7ad`, `33ea7030-d38f-4d0b-8338-b2ba36f2d7ad`, this.commentContent);
    ob.subscribe((res: Res) => {
      if (res) {
        console.log(res);
        const {code, map, message} = res;
      }

    });
  }

  getComment() {
    const  ob  = this.newsService.getComment(this.newsId);
    ob.subscribe((res: Res) => {
      if (res) {
        console.log(res);
        const {code, map, message} = res;
      }

    });
  }

}
